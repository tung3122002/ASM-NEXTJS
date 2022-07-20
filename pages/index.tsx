import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
         <FontAwesomeIcon icon={faFaceRelieved} />
      <Header/>
      <Footer/>
    </div>
  )
}

export default Home
