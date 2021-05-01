import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import UserOverview from '../../components/UserOverview'

import { IReduxStore } from '../../interfaces'
import { getUsersSummaryAsyncStart } from '../../redux/actions/users'
import { HeaderDashboard } from './components'
import styles from './dashboard.module.scss';

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
    </div>
  )
}

const mapStateToProp = ({ userSummary }: IReduxStore) => ({
  userSummary,
})

export default connect(mapStateToProp, { getUsersSummaryAsyncStart })(Dashboard)
