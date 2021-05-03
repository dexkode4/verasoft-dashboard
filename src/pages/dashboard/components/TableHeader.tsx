import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import cx from 'classnames'
import styles from '../dashboard.module.scss'
import { IAppState, IOrder, IOrderReducer } from '../../../utils/interfaces'
import { getSubData, setSubDataKey } from '../../../redux/actionCreators'


type TableHeaderProp = {
    orders?: IOrderReducer
}

const TableHeader = ({orders}: TableHeaderProp) => {
  const [active, setActive] = useState('sent');
  const dispatch = useDispatch()

  const handleClick = (state: string) => {
    setActive(state)
    let subData = orders?.selectedDataForTable[state]
    dispatch(setSubDataKey(state))
    
  }
  return (
    <div className={styles.tableHeader}>
      <div className={styles.tableHeader_left}>
        <button
          className={cx(
            styles.tableHeader_leftBtn,
            active === 'sent' && styles.tableHeader_leftBtn__active,
          )}
          onClick={() => {
            handleClick('sent')
          }}
        >
          SENT
        </button>
        <button
          className={cx(
            styles.tableHeader_leftBtn,
            active === 'errors' && styles.tableHeader_leftBtn__active,
          )}
          onClick={() => {
            handleClick('errors')
          }}
        >
          ERRORS
        </button>
      </div>
      <div className={styles.tableHeader_right}></div>
    </div>
  )
}

const mapStateToProp = ({ orders }: IAppState) => ({
  orders,
})
export default connect(mapStateToProp, null)(TableHeader)
