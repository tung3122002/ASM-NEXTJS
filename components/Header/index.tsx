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



                        <li className={style.mega}><a className="p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="#">NỮ</a>
                            <nav className={style.megamenu}>
                                <div className="row ">
                                    <li className="col"><a className="dropdown-item" href="#"><b>Hàng nữ mới về</b></a>
                                        <p><b>Discover Charming</b></p>
                                        <p><b>Vibrant Vacay</b></p>
                                        <p><b>Mơ Nhuộm Nắng</b></p>
                                        <p><b>Elevated Simplicity</b></p>
                                        <p><b>Spring Love</b></p>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="#">ÁO</a>
                                        <p>Áo thun</p>
                                        <p>Áo sơ mi</p>
                                        <p>Áo peplum</p>
                                        <p>Áo kiểu</p>
                                        <p>Áo len</p>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="#">ÁO</a>
                                        <p>Áo thun</p>
                                        <p>Áo sơ mi</p>
                                        <p>Áo peplum</p>
                                        <p>Áo kiểu</p>
                                        <p>Áo len</p>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="#">ÁO</a>
                                        <p>Áo thun</p>
                                        <p>Áo sơ mi</p>
                                        <p>Áo peplum</p>
                                        <p>Áo kiểu</p>
                                        <p>Áo len</p>
                                    </li>
                                    <li className="col"><a className="dropdown-item" href="#">ÁO</a>
                                        <p>Áo thun</p>
                                        <p>Áo sơ mi</p>
                                        <p>Áo peplum</p>
                                        <p>Áo kiểu</p>
                                        <p>Áo len</p>
                                    </li>
                                </div>

                            </nav>
                        </li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">NAM</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">TRẺ EM</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">BỘ SƯ TẬP</a></li>
                        <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">LIFESTYLE</a></li>
                        <li className={style.hovermenu}><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">VỀ CHÚNG TÔI</a>
                            <nav className={style.dropdown}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </nav></li>
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
                        <Link href='signin'><i className="fa-solid fa-cart-shopping pr-3" /></Link>
                        <Link href='signup'><i className="fa-solid fa-user pr-3" /></Link>
                        
                        <i className="fa-solid fa-headphones pr-3" />
                        
                    </div>



                </div>

            </nav>
            <div className="row pt-3 pb-2">
                <div className="h-12 leading-[3rem] col text-center text-white bg-[#D73831]">FREE SHIPPING ĐƠN HÀNG NGUYÊN GIÁ</div>
                <div className="h-12 leading-[3rem] col text-center text-white bg-[#DC633A]">BẢO HÀNH TRỌN ĐỜI</div>
                <div className="h-12 leading-[3rem] col text-center text-white bg-[#AC2F33]">CHÍNH SÁCH THẺ THÀNH VIÊN</div>
            </div>
        </div>

    )
}

export default Header