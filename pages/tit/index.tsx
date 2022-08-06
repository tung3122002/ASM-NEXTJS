/* eslint-disable react/jsx-key */
import React from 'react'

import useTittle from '../../hooks/use-tittle'
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import LayoutColos from '../../components/Layout/colos';

const Title = () => {
  const { data, error, createtittle, mutate, removetittle } = useTittle();
  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <div className="no-underline">
      <p className=" mt-3 text-center tracking-{2px} uppercase font-semibold text-3xl font-['Montserrat']">GALLERY</p>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center border-none"
      >
        <Tab eventKey="home" className='' title={undefined}>

         
            

              <div className="row">
                {data.map((items) => (
                  
                    <div className="col-2 box relative  ">
                      <div className="overflow-hidden">
                       
                        <div className="box-img overflow-hidden  w-full h-full">
                          <img className='transition ease-in-out   hover:scale-110 duration-300' src={items.img} alt="" />
                        </div>
                        
                      </div>

                    </div>
                ))}

              </div>
          
            
          
        </Tab>
       
      </Tabs>
      

   
      
    </div>
  )
}
Title.Layout = LayoutColos
export default Title