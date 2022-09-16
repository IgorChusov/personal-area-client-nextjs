import React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/layout'
import Header from '@/components/header'
import Main from './components/main'
import Sidebar from '@/components/sidebar'
import styles from './styles.module.scss'


const Landing: NextPage = (props) => {

  return (
    <Layout>
      <Header />
      <main>
        <section className={styles.section}>
          <Sidebar />
          <Main />
        </section>
      </main>
    </Layout>
  )
}

export default Landing