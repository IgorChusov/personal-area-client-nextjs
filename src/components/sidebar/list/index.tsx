import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

const ListSidebar: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href={'/dashboard'}>
          <a>
            <Image 
              src="/assets/images/icons/dashboard.svg" 
              width={21} 
              height={20} 
              alt="Tables and lemon" 
            />
            <span>Дашборд</span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/activity-exchange'}>
          <a>
            <Image 
              src="/assets/images/icons/activity-exchang.svg" 
              width={18} 
              height={20} 
              alt="Tables and lemon" 
            />
            <span>Биржа активности</span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/bloggers-exchange'}>
          <a>
            <Image 
              src="/assets/images/icons/bloggers-exchange.svg" 
              width={21} 
              height={19} 
              alt="Tables and lemon" 
            />
            <span>Биржа блогеров</span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/pr'}>
          <a>
            <Image 
              src="/assets/images/icons/pr.svg" 
              width={27} 
              height={23} 
              alt="Tables and lemon" 
            />
            <span>Взаимопиар</span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/my-system'}>
          <a>
            <Image 
              src="/assets/images/icons/structure.svg" 
              width={21} 
              height={21} 
              alt="Tables and lemon" 
            />
            <span>Моя структура</span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/store'}>
          <a>
            <Image 
              src="/assets/images/icons/store.svg" 
              width={18} 
              height={20} 
              alt="Tables and lemon" 
            />
            <span>
              Магазин
            </span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/marathon'}>
          <a>
            <Image 
              src="/assets/images/icons/marathon.svg" 
              width={18} 
              height={20} 
              alt="Tables and lemon" 
            />
            <span>Марафон</span>
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href={'/landings'}>
          <a>
            <Image 
              src="/assets/images/icons/landings.svg" 
              width={21} 
              height={20} 
              alt="Tables and lemon" 
            />
            <span>Лендинги</span>  
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default ListSidebar
