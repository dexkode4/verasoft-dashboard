import { IOrder, IOrderReducer, ISent, IUserSummary } from '../../utils/interfaces'
import {
  ORDER_ASYNC_START,
  ORDER_ASYNC_FAILURE,
  ORDER_ASYNC_SUCCESS,
  CHANGE_TAB,
  GET_SUB_DATA,
  SET_SUB_DATA_KEY
} from '../types'

let initialState: IOrderReducer = {
  loading: false,
  data: {
    orders_A: [],
    orders_AA: [],
    orders_AAA: {
      sent: [],
    },
    orders_B: [],
    orders_C: [],
  },
  selectedDataForTable: [],
  subData: [],
  filter: '',
  subValue: 'sent'
}

type action = {
  type: string
  payload: IOrder
  dataType: string,
  subData: ISent[]
}

const orders = (state = initialState, { type, payload, dataType, subData }: action) => {
  switch (type) {
    case ORDER_ASYNC_START:
      return {
        ...state,
        loading: true,
      }
    case ORDER_ASYNC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        selectedDataForTable: payload.orders_AAA.sent,
        subData : payload.orders_AAA.sent,
      }
    case ORDER_ASYNC_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
      }
    case CHANGE_TAB:
      return {
        ...state,
        selectedDataForTable: filterData(state.data, dataType),
      }
    case GET_SUB_DATA:
      return {
        ...state,
        subData: subData,
      }
    case SET_SUB_DATA_KEY:
      return {
        ...state,
        subData: dataType,
      }

    default:
      return state
  }
}

export default orders

const filterData = (data: any, accessor: string) => {
  for (const property in data) {
    if (property.toString() === accessor) {
      console.log(data[accessor])
      return data[accessor].sent
    }
  }
}
