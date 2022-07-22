import React from 'react'
import Link from 'next/link';
import style from './header.module.css';
import Image from 'next/image';
type Props = {}

const Header = (props: Props) => {
    return (
        <div className=' relative mt-10 ' >
            <nav className="fixed top-0 left-20 right-0 flex  bg-white w-full h-14  z-10 ">
                <div>
                    <ul className='flex leading-10'>
                        

                        
                        <li className=" dropdown"data-toggle="dropdown"><a className=" no-underline text-[15px] text-[#212529]  font-semibold"  href="#">NỮ</a>
                            <ul className='dropdown-menu'>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">NAM</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">TRẺ EM</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">BỘ SƯ TẬP</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">LIFESTYLE</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">VỀ CHÚNG TÔI</a></li>
                    </ul>

                </div>
                <div className=' items-center mx-auto w-[144px]'>
                    <img src="https://pubcdn2.ivymoda.com/images/logo.png" alt="" />
                </div>
                <div className="user mx-auto flex leading-10">
                    <form action='' className='relative '>
                        <button className='absolute top-0 left-2'><i className="fa-solid fa-magnifying-glass" /></button>
                        <input className="seach border mr-10 right-4 w-[240px] h-[40px] px-[30px] rounded-md" type="text" name='' id='' placeholder="TÌM KIẾM SẢN PHẨM" />
                    </form>
                    <div className="mr-14">
                        <i className="fa-solid fa-cart-shopping pr-3" />
                        <i className="fa-solid fa-user pr-3" />
                        <i className="fa-solid fa-headphones pr-3" />
                    </div>



                </div>

            </nav>
        </div>

    )
}

export default Header