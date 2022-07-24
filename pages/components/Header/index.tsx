import React from 'react'
import Link from 'next/link';
import style from '../Header/header.module.css';
import Image from 'next/image';

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <div className="flex    leading-[50px]">
                <div className={style.menu}>
                    <ul className={style.menu}>
                        <li className='p-2.5 text-xl font-mono'>
                            <Link href=''>NỮ</Link>
                            <div className={style.megabox}>
                                <div className={style.contenmenu}>
                                    <div className="row">
                                        <header>Hàng nam mới về</header>
                                        <ul className="megalink">
                                            <li><Link href=''>Essential Sweatsuit Men</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Hàng nam mới về</header>
                                        <ul className="megalink">
                                            <li><Link href=''>Essential Sweatsuit Men</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Hàng nam mới về</header>
                                        <ul className="megalink">
                                            <li><Link href=''>Essential Sweatsuit Men</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='p-2.5 text-xl font-mono '>
                            <a href='' > NAM</a>
                            <ul className={style.dropdownmenu}>
                                <li className='p-2.5 text-xl font-mono'>
                                    <Link href=''> TRẺ EM</Link>
                                </li >
                                <li className='p-2.5 text-xl font-mono'>
                                    <Link href=''> TRẺ EM</Link>
                                </li >
                                <li className='p-2.5 text-xl font-mono'>
                                    <Link href=''> TRẺ EM</Link>
                                </li >
                            </ul>
                        </li>
                        <li className='p-2.5 text-xl font-mono'>
                            <Link href=''> TRẺ EM</Link>
                        </li >
                        <li className='p-2.5 text-xl font-mono'>
                            <Link href=''>ƯU ĐÃI THÁNG 5</Link>
                        </li>
                        <li className='p-2.5 text-xl font-mono'>
                            <Link href=''>BỘ SƯU TẬP</Link>
                        </li>
                        <li className='p-2.5 text-xl font-mono'>
                            <Link href=''>LIFESTYLE</Link>
                        </li>
                        <li className='p-2.5 text-xl font-mono'>
                            <Link href=''>VỀ CHÚNG TÔI</Link>
                        </li>
                    </ul>
                </div>
                <div className="logo items-center mx-auto w-[144px] ">
                    <img className='' src="https://pubcdn2.ivymoda.com/images/logo.png"  />
                </div>
                <div className="user mx-auto">
                    <form action='' className={style.form}>
                        <button className={style.btn}><i className="fa-solid fa-magnifying-glass" /></button>
                        <input className="seach border w-[240px] h-[40px] px-[30px] rounded-md" type="text" placeholder="TÌM KIẾM SẢN PHẨM" />
                    </form>
                </div>
            </div>
            <div className="flex  mx-auto h-12 leading-[48px] mt-3 text-sm">
                <div className="w-1/3 text[22px] font-mono text-center bg-[#d73831] text-white "><a href=''>FREE SHIPPING ĐƠN HÀNG NGUYÊN GIÁ</a></div>
                <div className="w-1/3 text[22px] font-mono text-center bg-[#9490A5] text-white"><a  href=''>BẢO HÀNH TRỌN ĐỜI</a></div>
                <div className="w-1/3  text[22px] font-mono text-center bg-[#AC2F33] text-white"><a  href=''>CHÍNH SÁCH THẺ THÀNH VIÊN</a></div>
            </div>
        </div>

    )
}

export default Header