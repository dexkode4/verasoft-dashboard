import React from 'react'
import styles from './spinner.module.scss'

type SpinnerProp = {
  type: string
}

function Spinner({ type }: SpinnerProp) {
  const selectLoaderType = (value: string) => {
    switch (type) {
      case 'SPINNER':
        return <div className={styles.spinner}></div>
      case 'DOT_FLASH':
        return <div className={styles.dotFlashing}></div>
      default:
        return <div className={styles.spinner}></div>
    }
  }

  return <>{selectLoaderType(type)}</>
}

export default Spinner
