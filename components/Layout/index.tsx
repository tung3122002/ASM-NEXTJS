import Head from 'next/head'
import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Header from '../Header'


const Layouta = ({children}: LayoutProps) => {
  return (
    <div className='container '>
           <Head>
        <title>LOGO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy='no-referrer' />
      </Head>  
        <Header />
        {children}
        <Footer/>
    </div>
  )
}
export default Layouta