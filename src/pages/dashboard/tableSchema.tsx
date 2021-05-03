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
    sortable: true,
    sortValue: 'sent_dt'
  },
  {
    name: 'Subject',
    render: ({subject}) => (
      <>
        <div>{truncateString(subject?.title)}</div>
        <div>{subject?.email}</div>
      </>
    ),
    sortable: true,
    sortValue: 'subject'
  },
  {
    name: 'COMMUNICATION TYPE',
    accessor: 'type',
    sortable: true,
    sortValue: 'type'
  },
  {
    name: 'ORDER #',
    accessor: 'order_id',
    sortable: true,
    sortValue: 'order_id'
  },

]
