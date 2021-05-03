import React, { useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { GrClose } from 'react-icons/gr'
import { closeModal } from '../../redux/actionCreators/modal'
import { IAppState } from '../../utils/interfaces'
import Portal from '../Portal'
import styles from './modal.module.scss'
import Spinner from '../Spinner'

type ModalProp = {
  modal?: {
    modalOpen: boolean
  }
}

function Modal({ modal }: ModalProp) {
  const dispatch = useDispatch()

  let body = document.body;
  useEffect(() => {
    if(modal?.modalOpen){
      body.style.overflow = "hidden";
    }
    else{
      body.style.overflow = "auto";
    }
  },[modal?.modalOpen])

  return modal?.modalOpen ? (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div>&nbsp;</div>
          <div
            onClick={() => dispatch(closeModal())}
            className={styles.modal_close}
          >
            <GrClose />
          </div>
        </div>

       <div className={styles.modal_body}>
           <Spinner type="SPINNER"/>
           <h1>Processing</h1>
       </div>
      </div>
    </Portal>
  ) : null
}

const mapStateToProp = ({ modal }: IAppState) => ({
  modal,
})
export default connect(mapStateToProp, null)(Modal)
