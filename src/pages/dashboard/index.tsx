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
import TableHeader from './components/TableHeader';

type DashboardProp = {
  getUsersSummaryAsyncStart: () => void,
  userSummary:IUserReducer,
  orderAsyncStart: () => void,
  orders: IOrderReducer
}

function Dashboard({ getUsersSummaryAsyncStart, userSummary, orderAsyncStart, orders }: DashboardProp) {
  const [tableData, setTableData] = useState<any>([]);
  const handleInit = () => {
    getUsersSummaryAsyncStart()
    orderAsyncStart()
  }
  useEffect(() => {
    handleInit()
  }, [])

  useEffect(() => {
    console.log('orders?.selectedDataForTable', orders?.selectedDataForTable)
    setTableData(orders?.selectedDataForTable)
  },[orders?.subData, orders?.selectedDataForTable])
  

  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name={`${userSummary.data.first_name || ''} ${userSummary.data.last_name || ''}`} />
      <UserOverview />
      <TabsContainer />
      <Table schema={tableSchema} data={tableData} header={<TableHeader/> || null} />
    </div>
  )
}

const mapStateToProp = ({ userSummary, orders }: IAppState) => ({
  userSummary,
  orders
})

export default connect(mapStateToProp, { getUsersSummaryAsyncStart, orderAsyncStart })(Dashboard)
