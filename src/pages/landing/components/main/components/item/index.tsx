import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

const Item: React.FC = () => {
  return (
    <li className={styles.item}>
      <div className={styles.header}>
        <div className={styles.value}>
          <span>1</span>
          <span>133</span>
        </div>
        <div className={styles.names}>
          <span>Уровень выплат</span>
          <span>Активных партнёров</span>
        </div>
      </div>
      <ul className={styles.userList}>
        <li className={styles.userItem}>
          <div className={styles.img} >
            <Image 
                src="/assets/images/ellipse.jpg" 
              width={25} 
              height={25} 
              alt="Tables and lemon"
            />
          </div>
          <span>kris_anfalova</span>
        </li>
        <li className={styles.userItem}>
          <div className={styles.img} >
            <Image 
                src="/assets/images/ellipse.jpg" 
              width={25} 
              height={25} 
              alt="Tables and lemon"
            />
          </div>
          <span>kris_anfalova</span>
        </li>
        <li className={styles.userItem}>
          <div className={styles.img} >
            <Image 
                src="/assets/images/ellipse.jpg" 
              width={25} 
              height={25} 
              alt="Tables and lemon"
            />
          </div>
          <span>kris_anfalova</span>
        </li>
        <li className={styles.userItem}>
          <div className={styles.img} >
            <Image 
                src="/assets/images/ellipse.jpg" 
              width={25} 
              height={25} 
              alt="Tables and lemon"
            />
          </div>
          <span>kris_anfalova</span>
        </li>
      </ul>
    </li>
  )
}

export default Item