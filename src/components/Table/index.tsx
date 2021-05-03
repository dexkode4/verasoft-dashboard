import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { IAppState, ITable } from '../../utils/interfaces'
import { truncateString } from '../../utils/helpers'
import Button from '../Button'

import styles from './table.module.scss'


function Table({ schema, data, onViewRowDetail, header, orders }: ITable) {
  const _handleViewRowDetail = (rowData: any) => {
    return onViewRowDetail ? onViewRowDetail(rowData) : null
  }


  const _handleRenderRow = (rowData: any) => {
    return (
      <tr
        key={Math.random()}
        onClick={() => {
          _handleViewRowDetail(rowData)
        }}
      >
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
              {schema?.map(({ name }, index) => {
                return <th key={index}>{name}</th>
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row: any) => {
              return _handleRenderRow(row)
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

const mapStateToProp = ({ orders }: IAppState) => ({
  orders,
})
export default connect(mapStateToProp, null)(Table)
