import React from 'react'
import styles from './spinner.module.scss'

type SpinnerProp = {
  type?: string
}

function Spinner({ type }: SpinnerProp) {
  return (
    
      <div className={styles.spinner}></div>
  )
}

export default Spinner
