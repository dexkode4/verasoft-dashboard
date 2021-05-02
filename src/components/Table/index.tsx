import React, { useState } from 'react'
import { ITable } from '../../interfaces'
import { truncateString } from '../../utils/helpers'

import styles from './table.module.scss'

function Table({ schema, data, onViewRowDetail }: ITable) {
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
      </tr>
    )
  }

  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.tableContent}>
          <thead className={styles.tableContent_header}>
            <tr>
              {schema?.map(({ name }, index) => {
                return <th key={index}>{name}</th>
              })}
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

export default Table
