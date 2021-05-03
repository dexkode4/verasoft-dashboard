import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import cx from 'classnames'
import styles from '../dashboard.module.scss'
import { IAppState, IOrderReducer } from '../../../utils/interfaces'
import {
  setSubDataKey,
  startGetSubData,
  stopGetSubData,
} from '../../../redux/actionCreators'

type TableHeaderProp = {
  orders?: IOrderReducer
}

const TableHeader = ({ orders }: TableHeaderProp) => {
  const [active, setActive] = useState('sent')
  const dispatch = useDispatch()

  const handleClick = (state: string) => {
    dispatch(startGetSubData())
    setActive(state)
    dispatch(setSubDataKey(state))

    setTimeout(() => dispatch(stopGetSubData()), 2000)
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
