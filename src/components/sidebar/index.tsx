import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import ListSidebar from './list'
import cn from 'classnames'

const Sidebar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const handleclick = () => {
    setOpen(prevState => !prevState)
  } 

  return (
    <aside className={styles.aside}>
      <button onClick={handleclick} className={styles.burger}>
        <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.96997 18H37.47" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.96997 7.5H37.47" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.96997 28.5H37.47" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={styles.full}>
        <ListSidebar />
      </div>
      {open && (
        <div ref={ref} className={cn(styles.mobile, {
        })}>
          <ListSidebar />
        </div>
      ) }
    </aside>
  )
}

export default Sidebar
