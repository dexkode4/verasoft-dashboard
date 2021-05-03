import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {MdArrowUpward, MdArrowDownward} from 'react-icons/md';
import { IAppState, ITable } from '../../utils/interfaces'
import { compareValues, truncateString } from '../../utils/helpers'
import Button from '../Button'

import styles from './table.module.scss'
import Spinner from '../Spinner'

function Table({ schema, header, orders }: ITable) {
  const [sortOrder, setSortOrder] = useState('')
  const [sortType, setSortType] = useState('')

  const [rowData, setRowData] = useState([])

  const handleSort = (data: string) => {
    let orderType = {
      asc: 'asc',
      desc: 'desc',
    }

    let order: string
    if (data !== sortType) {
      setSortType(data)
      setSortOrder(orderType.desc)
    } else {
      if (sortOrder === orderType.asc) {
        order = orderType.desc
      } else {
        order = orderType.asc
      }
      setSortOrder(order)
      setSortType(data)
    }
  }

  useEffect(() => {
    setRowData(orders?.selectedDataForTable[`${orders?.subValue}`])
  }, [orders?.subValue, orders?.selectedDataForTable])

  useEffect(() => {
    let sorted = rowData?.sort(compareValues(sortType, sortOrder));
  }, [sortOrder, sortType, rowData])

  const _handleRenderRow = (rowData: any) => {
    return (
      <tr key={Math.random()}>
        {schema.map(({ accessor, render }, index) => {
          if (render) {
            return <td key={`${accessor}-${index}`}>{render(rowData)}</td>
          }
          return (
            <td key={`${accessor}-${index}`}>
              {truncateString(rowData[accessor || '']) || ''}
            </td>
          )
        })}
        <td>
          <div className={styles.lastCell}>
            <div>&nbsp;</div>
            <Button size="sm" title="RESEND" />
          </div>
        </td>
      </tr>
    )
  }

  return (
    <>
      {header && header}
      <div className={styles.tableWrapper}>
        <table className={styles.tableContent}>
          <thead className={styles.tableContent_header}>
            <tr>
              { rowData && schema?.map(({ name, sortValue }, index) => {
                return (
                  <th key={index} onClick={() => handleSort(sortValue)}>
                    {name}
                    {sortOrder === 'asc' ? <MdArrowDownward/> : <MdArrowUpward/>}
                  </th>
                )
              })}
              <th></th>
            </tr>
          </thead>
          {orders?.loading ? (
            <div className={styles.tableLoader}>
              <Spinner type="DOT_FLASH" />
            </div>
          ) : rowData ? (
            <tbody>
              {rowData?.map((row: any) => {
                return _handleRenderRow(row)
              })}
            </tbody>
          ) : (
            <div className={styles.emptyTable}>No item</div>
          )}
        </table>
      </div>
    </>
  )
}

const mapStateToProp = ({ orders }: IAppState) => ({
  orders,
})
export default connect(mapStateToProp, null)(Table)
