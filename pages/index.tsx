import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

import { Carousel } from 'react-bootstrap'
import Banner from '../components/Banner'
import Product from './products'
const Home: NextPage = () => {
  return (
    <div className='container '>
        <Head>
        <title>LOGO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy='no-referrer' />
      </Head>
      
     
      <Banner/>
      <Product/>
     
    </div>

  )
}

export default Home
