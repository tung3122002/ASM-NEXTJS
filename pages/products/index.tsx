
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import Layout from '../../components/Layout'

import Title from '../tit';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useProducts from '../../hooks/use-product';

type Props = {}

const Product = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const { data, error, create, mutate, onhandleRemove } = useProducts();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <div className="no-underline">
      <p className=" mt-3 text-center tracking-{2px} uppercase font-semibold text-3xl font-['Montserrat']">NEW ARRIVAL</p>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-center border-none"
      >
        <Tab eventKey="home" title=" IVY moda" className=''>
          <Slider {...settings}>
            <div>
              <div className="row">
                {data.map((items:any) => ( 
                <div key={items._id} className="col-3 box relative  ">
                    <form action="" >
               
                   
                      <div className="overflow-hidden">
                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                          20%
                        </span>
                        <div className="box-img overflow-hidden  w-full h-full">
                          <img className='transition ease-in-out   hover:scale-110 duration-300' src={items.img} alt="" />
                        </div>
                        <div className="box-text">
                          {items.name}
                        </div>
                        <div className="box-price">
                          <b>{items.price}đ</b>
                        </div>
                      </div>

                      <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                    
                    </form>
                    </div>
                ))}

              </div>

            </div>
            
          </Slider>

        </Tab>
        <Tab eventKey="profile" title="IVY men">
          <Slider {...settings}>
            <div>
              <div className="row">
                {data.map((items) => (
                  <Link key={items._id} href={`products/${items._id}`}>
                    <div className="col-3 box relative  ">
                      <div className="overflow-hidden">
                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                          20%
                        </span>
                        <div className="box-img overflow-hidden  w-full h-full">
                          <img className='transition ease-in-out   hover:scale-110 duration-300' src={items.img} alt="" />
                        </div>
                        <div className="box-text">
                          {items.name}
                        </div>
                        <div className="box-price">
                          <b>{items.price}đ</b>
                        </div>
                      </div>

                    </div></Link>
                ))}

              </div>

            </div>
           
          </Slider>
        </Tab>
        <Tab eventKey="contact" title=" IVY kids" >
          <Slider {...settings}>
            <div>
              <div className="row">
                {data.map((items) => (
                  <Link key={items._id} href={`products/${items._id}`}>
                    <div className="col-3 box relative  ">
                      <div className="overflow-hidden">
                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                          20%
                        </span>
                        <div className="box-img overflow-hidden  w-full h-full">
                          <img className='transition ease-in-out   hover:scale-110 duration-300' src={items.img} alt="" />
                        </div>
                        <div className="box-text">
                          {items.name}
                        </div>
                        <div className="box-price">
                          <b>{items.price}đ</b>
                        </div>
                      </div>

                    </div></Link>
                ))}

              </div>

            </div>
            <div>
              <h3>2</h3>
            </div>

          </Slider>
        </Tab>
      </Tabs>
      <p className='border mx-auto rounded-tl-[20px] rounded-br-[20px] bg-slate-900 mt-3 hover:bg-slate-50 text-center w-52  px-[13px] py-[24px] no-underline '><a className='text-gray-900 text-slate-50 hover:text-gray-900 no-underline ' href=''> Xem Tất Cả</a></p>
      <div className='relative'>
        <img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/13/c9a4cac52cfff8656fbd3f6f7c408c1c.jpg" />
        <p className='inset-x-0 bottom-0 absolute border mx-auto rounded-tl-[20px]  rounded-br-[20px] bg-slate-900  hover:bg-slate-50 text-center w-52  px-[13px] py-[24px] no-underline '><a className='text-gray-900 text-slate-50 hover:text-gray-900 no-underline ' href=''> XEM NGAY BST</a></p>
      </div>


      <Title />

    </div>
  )
}

export default Product