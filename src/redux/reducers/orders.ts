import { IOrder, IOrderReducer, ISent } from '../../utils/interfaces'
import {
  ORDER_ASYNC_START,
  ORDER_ASYNC_FAILURE,
  ORDER_ASYNC_SUCCESS,
  CHANGE_TAB,
  SET_SUB_DATA_KEY,
  GET_SUB_DATA_START,
  GET_SUB_DATA_STOP
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
  subValue: 'sent'
}

type action = {
  type: string
  payload: IOrder
  dataType: string,
  subData: ISent[]
}

const orders = (state = initialState, { type, payload, dataType }: action) => {
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
        selectedDataForTable: payload.orders_AAA,
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
    case SET_SUB_DATA_KEY:
      return {
        ...state,
        subValue: dataType,
      }
    case GET_SUB_DATA_START:
      return {
        ...state,
        loading: true,
      }
    case GET_SUB_DATA_STOP:
      return {
        ...state,
        loading: false,
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
      return data[accessor]
    }
  }
}
