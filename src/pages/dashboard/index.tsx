import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Table from '../../components/Table'
import TabsContainer from '../../components/TabsContainer'
import UserOverview from '../../components/UserOverview'

import { IReduxStore } from '../../interfaces'
import { getUsersSummaryAsyncStart } from '../../redux/actions/users'
import { HeaderDashboard } from './components'
import styles from './dashboard.module.scss';
import { tableData } from './data'
import { tableSchema } from './tableSchema'

type DashboardProp = {
  getUsersSummaryAsyncStart: () => void
}

function Dashboard({ getUsersSummaryAsyncStart }: DashboardProp) {
  useEffect(() => {
    getUsersSummaryAsyncStart()
  }, [getUsersSummaryAsyncStart])
  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name="Joseph Smith"/>
      <UserOverview/>
      <TabsContainer/>
      <Table  schema={tableSchema} data={tableData.orders_AAA.sent}/>
    </div>
  )
}

const mapStateToProp = ({ userSummary }: IReduxStore) => ({
  userSummary,
})

export default connect(mapStateToProp, { getUsersSummaryAsyncStart })(Dashboard)
