import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
   <div>
    <Header/>
  <Footer/>
   </div>
  )
}

export default Home
