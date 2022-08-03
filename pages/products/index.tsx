
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import Layout from '../../components/Layout'
import useProducts from '../../hooks/use-product';
import Title from '../tit';
type Props = {}

const Product = (props: Props) => {
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
                <Tab eventKey="home" title="Home" className=''>

                    <Carousel>
                        <Carousel.Item>

                            <div className="row">
                                {data.map((items) => (
                                    <Link key={items._id} href='/products/${id}'>
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
                                                    <p>1.751.200đ</p>
                                                </div>
                                            </div>

                                        </div></Link>
                                ))}
                              
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Carousel>
                        <Carousel.Item>

                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="color flex">
                                            <img className='rounded-full w-7 h-7 p-1' src="https://pubcdn2.ivymoda.com/images/color/004.png" alt="" />
                                            <img className='rounded-full w-7 h-7 p-1' src="https://pubcdn2.ivymoda.com/images/color/004.png" alt="" />
                                        </div>
                                        <div className="box-text text-[#57585A] text-[14px] font-normal">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                    <Carousel>
                        <Carousel.Item>

                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-3 box relative  ">
                                    <div className="overflow-hidden">
                                        <span className="absolute right-5 top-1 text-[16px] font-semibold text-white	 bg-[#E7973E] w-12 h-12  leading-[48px] text-center rounded-full">
                                            20%
                                        </span>
                                        <div className="box-img overflow-hidden  w-full h-full">
                                            <img className='transition ease-in-out   hover:scale-110 duration-300' src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/07/22/a21021e72c4d5b6d3a968a32ce21a991.JPG" alt="" />
                                        </div>
                                        <div className="box-text">
                                            ĐẦM THÔ DÁNG BALLOON
                                        </div>
                                        <div className="box-price">
                                            <p>1.751.200đ</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Tab>
            </Tabs>
            <p className='border mx-auto rounded-tl-[20px] rounded-br-[20px] bg-slate-900  hover:bg-slate-50 text-center w-52  px-[13px] py-[24px] no-underline '><a className='text-gray-900 text-slate-50 hover:text-gray-900 no-underline ' href=''> Xem Tất Cả</a></p>
            <div className='relative'>
                <img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/13/c9a4cac52cfff8656fbd3f6f7c408c1c.jpg" />
                <p className='inset-x-0 bottom-0 absolute border mx-auto rounded-tl-[20px]  rounded-br-[20px] bg-slate-900  hover:bg-slate-50 text-center w-52  px-[13px] py-[24px] no-underline '><a className='text-gray-900 text-slate-50 hover:text-gray-900 no-underline ' href=''> XEM NGAY BST</a></p>
            </div>

            {/* <div className='row mt-3'>
                <div className="col "><img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/15/ea4e270adf8060e384a2fd2cea9d30e6.jpg" alt="" /></div>
                <div className="col "><img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/15/ea4e270adf8060e384a2fd2cea9d30e6.jpg" alt="" /></div>
                <div className="col "><img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/15/ea4e270adf8060e384a2fd2cea9d30e6.jpg" alt="" /></div>
                <div className="col "><img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/15/ea4e270adf8060e384a2fd2cea9d30e6.jpg" alt="" /></div>
                <div className="col "><img className='' src="https://pubcdn.ivymoda.com/files/news/2022/04/15/ea4e270adf8060e384a2fd2cea9d30e6.jpg" alt="" /></div>


            </div> */}
            <Title/>
        </div>
    )
}

export default Product