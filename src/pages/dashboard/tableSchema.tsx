import React from 'react'
import moment from 'moment'
import { ITableSchema } from '../../utils/interfaces'
import { formatDate, formatTime, truncateString } from '../../utils/helpers'

export const tableSchema: ITableSchema[] = [
  {
    name: 'Date & Time',
    render: ({ sent_dt, sent_tm }) => (
      <>
        <div>{formatDate(sent_dt)}</div>
        <div>{formatTime(sent_tm)}</div>
      </>
    ),
  },
  {
    name: 'Subject',
    render: ({subject}) => (
      <>
        <div>{truncateString(subject?.title)}</div>
        <div>{subject?.email}</div>
      </>
    ),
  },
  {
    name: 'COMMUNICATION TYPE',
    accessor: 'type',
  },
  {
    name: 'ORDER #',
    accessor: 'order_id',
  },

]
