import React from 'react'
import Item from './components/item'
import styles from './styles.module.scss'

const arrCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13 , 14 ]

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {arrCard.map((elem) => (
          <Item key={elem} />
        ))}
      </ul>
    </div>
  )
}

export default Main