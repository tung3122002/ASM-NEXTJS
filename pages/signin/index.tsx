import React from 'react'
import Footer from '../../components/Footer'
import style from './signin.module.css'

type Props = {}

const Signin = (props: Props) => {
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
                    <h1 className='text-center : text-2xl'> ĐĂNG KÝ</h1>
                    <div className="col : ">
                        <div className=' :'>
                            <h4>Thông tin khách hàng</h4>
                            <br />
                        </div>
                        <form className='row pt-2'>
                            <div className='col'>
                                <div className="mb-3" >
                                    <label htmlFor="exampleInputEmail1" className="form-label">Họ:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '11px' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '11px' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Ngày sinh:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '11px' }} />
                                </div>
                               
                                <div className="mb-3">
                                    <label htmlFor="disabledSelect" className="form-label">Tỉnh/TP:*</label>
                                    <select id="disabledSelect" className="form-select" style={{ padding: '11px' }}>
                                        <option>Hà Nội</option>

                                    </select>
                                </div>

                            </div>
                            <div className='col'>
                                <div className="mb-3" >
                                    <label htmlFor="exampleInputEmail1" className="form-label">Tên:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '11px' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Điện thoại:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '11px' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="disabledSelect" className="form-label">Giới tính:*</label>
                                    <select id="disabledSelect" className="form-select" style={{ padding: '11px' }}>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="disabledSelect" className="form-label">Quận/Huyện:*</label>
                                    <select id="disabledSelect" className="form-select" style={{ padding: '11px' }}>
                                        <option>Quận/Huyện</option>

                                    </select>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Địa chỉ:*</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                            </div>
                        </form>

                    </div>
                    <div className="col ">
                        <h4>Thông tin mật khẩu</h4>
                        <br />
                        <form style={{ marginTop: '10px' }}>
                            <div className=''>
                                <div className="mb-3" >
                                    <label htmlFor="exampleInputEmail1" className="form-label">Mật khẩu:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '10px' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nhập lại mật khẩu:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '10px' }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Mời nhập các ký tự trong hình vào ô sau:*</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ padding: '10px' }} />
                                </div>
                                <div style={{ border: '1px solid #000', width: '100px', marginTop: '20px' }}>
                                    <img src="https://ivymoda.com/ajax/captcha" alt="" />
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Đồng ý với các điều khoản của IVY
                                        </label>
                                    </div>
                                    <div className="form-check" >
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                        Đăng ký nhận bản tin
                                        </label>
                                    </div>
                                </div>


                            </div>
                        </form>
                        <button type="submit" className={style.loginbtns}  >
                            ĐĂNG KÝ
                        </button>
                    </div>

                </div>
            </div>




            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Signin