import React, { useEffect, useRef, useState }  from 'react'
import styles from './styles.module.scss'

import ReactDOM from 'react-dom'

interface IModal{
  id: string
  onClose: () => void
}

const Modal: React.FC<IModal> = ({id, onClose}) => {
  const node = document.getElementById(id);
  const ref = useRef<HTMLFormElement>(null)
  const [valueName, setValueName] = useState('')
  const [valueDescription, setValueDescription] = useState('')

  if(!node) return null;
  
  return ReactDOM.createPortal((
    <form ref={ref} className={styles.form}>
      <label  htmlFor="formName">Name</label>
      <input id='formName' value={valueName} onChange={(e) => setValueName(e.target.value)}type="text" />
      <label htmlFor="formDesk">Description</label>
      <input id='formDesk' value={valueDescription} onChange={(e) => setValueDescription(e.target.value)} type="text" />
      <button>Add</button>
    </form>
  ), node);
}

export default Modal
