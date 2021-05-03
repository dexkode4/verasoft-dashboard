import React, { useEffect, useState } from 'react'
import cx from 'classnames';
import { connect } from 'react-redux'
import Table from '../../components/Table'
import TabsContainer from '../../components/TabsContainer'
import UserOverview from '../../components/UserOverview'

import { IAppState, IOrderReducer, IUserReducer } from '../../utils/interfaces'
import { getUsersSummaryAsyncStart, orderAsyncStart } from '../../redux/actionCreators'
import { HeaderDashboard } from './components'
import styles from './dashboard.module.scss'
import { tableData } from './data'
import { tableSchema } from './tableSchema'

type DashboardProp = {
  getUsersSummaryAsyncStart: () => void,
  userSummary:IUserReducer,
  orderAsyncStart: () => void,
  orders: IOrderReducer
}

const TableHeader = () =>{ 
  const [active, setActive]  = useState('sent');
  return (
  <div className={styles.tableHeader}>
    <div className={styles.tableHeader_left}>
      <button className={cx(styles.tableHeader_leftBtn, active === 'sent'  && styles.tableHeader_leftBtn__active)}
      onClick={() => {
        setActive('sent')
      }}>SENT</button>
      <button className={cx(styles.tableHeader_leftBtn, active === 'errors'  && styles.tableHeader_leftBtn__active)}
       onClick={() => {
        setActive('errors')
      }}>ERRORS</button>
    </div>
    <div className={styles.tableHeader_right}></div>
  </div>
)}

function Dashboard({ getUsersSummaryAsyncStart, userSummary, orderAsyncStart }: DashboardProp) {

  const handleInit = () => {
    getUsersSummaryAsyncStart()
    orderAsyncStart()
  }
  useEffect(() => {
    handleInit()
  }, [])

  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name={`${userSummary.data.first_name || ''} ${userSummary.data.last_name || ''}`} />
      <UserOverview />
      <TabsContainer />
      <Table schema={tableSchema} data={tableData.orders_AAA.sent} header={TableHeader} />
    </div>
  )
}

const mapStateToProp = ({ userSummary, orders }: IAppState) => ({
  userSummary,
})

export default connect(mapStateToProp, { getUsersSummaryAsyncStart, orderAsyncStart })(Dashboard)
