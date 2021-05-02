import React, { useEffect, useState } from 'react'
import cx from 'classnames';
import { connect } from 'react-redux'
import Table from '../../components/Table'
import TabsContainer from '../../components/TabsContainer'
import UserOverview from '../../components/UserOverview'

import { IReduxStore } from '../../utils/interfaces'
import { getUsersSummaryAsyncStart } from '../../redux/actions/users'
import { HeaderDashboard } from './components'
import styles from './dashboard.module.scss'
import { tableData } from './data'
import { tableSchema } from './tableSchema'

type DashboardProp = {
  getUsersSummaryAsyncStart: () => void
}

const Header = () =>{ 
  const [active, setActive]  = useState('sent')
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

function Dashboard({ getUsersSummaryAsyncStart }: DashboardProp) {
  useEffect(() => {
    getUsersSummaryAsyncStart()
  }, [getUsersSummaryAsyncStart])
  return (
    <div className={styles.dashboard}>
      <HeaderDashboard name="Joseph Smith" />
      <UserOverview />
      <TabsContainer />
      <Table schema={tableSchema} data={tableData.orders_AAA.sent} header={Header} />
    </div>
  )
}

const mapStateToProp = ({ userSummary }: IReduxStore) => ({
  userSummary,
})

export default connect(mapStateToProp, { getUsersSummaryAsyncStart })(Dashboard)
