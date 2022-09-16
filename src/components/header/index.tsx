import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import Modal from '../modal'


const Header: React.FC = () => {
  const [viewModal, setViewModal] = useState(false)
console.log(viewModal)
  return (
    <header id='modal' className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={'/events'}>
              <a>Мероприятия</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => setViewModal(prevState => !prevState)} className={styles.btn}>Add</button>
      {viewModal && (
        <div>
        <Modal id='modal' onClose={() => setViewModal(false)}/>
      </div>
      )}
    </header>
  )
}

export default Header
