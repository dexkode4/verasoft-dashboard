import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Table from '../../components/Table'
import TabsContainer from '../../components/TabsContainer'
import UserOverview from '../../components/UserOverview'

import { IAppState, IOrderReducer, IUserReducer } from '../../utils/interfaces'
import { getUsersSummaryAsyncStart, orderAsyncStart } from '../../redux/actionCreators'
import { HeaderDashboard } from './components'
import styles from './dashboard.module.scss'
import { tableSchema } from './tableSchema'
import TableHeader from './components/TableHeader';

type DashboardProp = {
  getUsersSummaryAsyncStart: () => void,
  userSummary:IUserReducer,
  orderAsyncStart: () => void,
  orders: IOrderReducer
}

function Dashboard({ getUsersSummaryAsyncStart, userSummary, orderAsyncStart, orders }: DashboardProp) {

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
      <Table schema={tableSchema} header={<TableHeader/> || null} />
    </div>
  )
}

const mapStateToProp = ({ userSummary, orders }: IAppState) => ({
  userSummary,
  orders
})

export default connect(mapStateToProp, { getUsersSummaryAsyncStart, orderAsyncStart })(Dashboard)
