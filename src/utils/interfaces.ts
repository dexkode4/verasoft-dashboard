import React from 'react'
export interface IUserSummary {
  id: number | string
  first_name: string
  last_name: string
  photo_url: string | null
  gender: string
  birth_date: string
  home_phone: string
  mobile_phone: string
  work_phone: string
  email: string
  activity?: {
    sms: number
    email: number
    orders: number
  }
  carrier_status?: {
    since: string
    status: string
  }
}

export interface IReduxStore {
  userSummary: {
    loading: Boolean
    user: IUserSummary
  }
}

export interface IActivityCard {
  activityType: string
  activityValue: number | string | Date
  style?: any
}

export interface ICarrierStatusCard {
  date: Date
  status: string
  title: string
}

export interface ITab {
  title: string
  value: string
  handleActive: (data: string) => void
  active: string
}

export interface ITable {
  schema: ITableSchema[],
  data?: any,
  onViewRowDetail?: (data: Record<any, any>) => any,
  header?: React.ReactNode,
  orders?: IOrderReducer
}

export type ITableSchema = {
  name: string
  accessor?: string
  render?: (data: any) => React.ReactNode
}

export interface IResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export interface IAppState {
  userSummary: {
    loading: boolean
    data: IUserSummary
  }
  modal: {
    modalOpen: boolean
  }
  orders: {
    loading: boolean
    data: IOrder
    selectedDataForTable: Record<any, any>[]
    subValue: string
  }
}

export interface IUserReducer {
  loading: boolean
  data: IUserSummary
}

export interface IOrder {
  orders_A: []
  orders_AA: []
  orders_AAA: {
    sent: []
  }
  orders_B: []
  orders_C: []
}
export interface IOrderReducer {
  loading: boolean
  data: IOrder
  selectedDataForTable: any
  subValue: string
}

export interface ISent {
  id: number
  order_id: number
  sent_dt: string
  sent_tm: string
  subject: {
    title: string
    email: string
  }
  type: string
}
