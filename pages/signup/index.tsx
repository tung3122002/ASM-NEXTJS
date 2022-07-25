import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import style from './signup.module.css'

type Props = {}

const Signup = (props: Props) => {
    return (
        <div className='container '>

            <div className=' relative mt-10 ' >

                <nav className="fixed top-0 left-20 right-0 flex  bg-white w-full h-14  z-10 ">
                    <br />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy='no-referrer' />
                    <div>
                        <ul className='flex leading-10 : mt-2'>
                            <li className={style.mega}><a className="p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">NỮ</a>
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
                            <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold : mt-2" href="">NAM</a></li>
                            <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold : mt-2" href="">TRẺ EM</a></li>
                            <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold : mt-2" href="">BỘ SƯ TẬP</a></li>
                            <li><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold : mt-2" href="">LIFESTYLE</a></li>
                            <li className={style.hovermenu}><a className=" p-2 no-underline text-[15px] text-[#212529]  font-semibold" href="">VỀ CHÚNG TÔI</a>
                                <nav className={style.dropdown} >
                                    <li><a className="dropdown-item : mt-2" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </nav></li>
                        </ul>

                    </div>
                    <div className=' items-center mx-auto w-[144px] : mt-2'>
                        <img src="https://pubcdn2.ivymoda.com/images/logo.png" alt="" />
                    </div>
                    <div className="user mx-auto flex leading-10 : mt-2">
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
                <br />
                <div className="row pt-4  : mt-10 : border-t-2">
                    <div className="col : border-r-2">
                        <div className='text-center :'>
                            <h4>Bạn đã có tài khoản IVY</h4>
                            <br />
                            <p className='text-slate-400'>Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</p>
                        </div>
                        <form style={{ marginLeft: '10%' }}>
                            <div className="mb-3 " style={{ width: '90%', padding: '8px', fontSize: '30px' }}>

                                <input type="email" className="form-control : " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email/SĐT' style={{ padding: '13px' }} />

                            </div>
                            <div className="mb-3 :" style={{ width: '90%', padding: '8px' }}>

                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Mật Khẩu' style={{ padding: '13px' }} />
                            </div>
                            <div className="mb-3 form-check" style={{ marginLeft: '5px' }}>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Ghi nhớ mật khẩu</label>
                            </div>
                            <button type="submit" className={style.loginbtn} >
                                ĐĂNG NHẬP
                            </button>
                        </form>

                    </div>

                    <div className="col text-center">
                        <h4>Khách hàng mới của IVY moda</h4>
                        <br />
                        <p className='text-slate-400'>Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này để truy cập biểu mẫu đăng ký.

                            Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là một trải nghiệm thú vị và nhanh chóng hơn!
                        </p>

                        <a href="/signin">
                            <button type="submit" className={style.loginbtns}  >
                                ĐĂNG KÝ
                            </button>
                        </a>
                    </div>

                </div>
            </div>




            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Signup