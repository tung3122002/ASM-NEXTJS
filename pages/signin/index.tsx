import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import style from './signin.module.css'

type Props = {}

const Signin = (props: Props) => {
    return (
        <div className='container '>
     <Head>
        <title>LOGO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy='no-referrer' />
      </Head>
            <div className=' relative mt-10 ' >

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




           
        </div>
    )
}

export default Signin