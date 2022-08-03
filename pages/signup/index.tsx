import Head from 'next/head'
import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import Product from '../products'

import style from './signup.module.css'

type Props = {}

const Signup = (props: Props) => {
    return (
        <div className='container '>
     <Head>
        <title>LOGO</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy='no-referrer' />
      </Head>
            <div className=' relative mt-10 ' >

             
                
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

                        <a href="signin">
                            <button type="submit" className={style.loginbtns}  >
                                ĐĂNG KÝ
                            </button>
                        </a>
                    </div>

                </div>
            </div>
          
         

            
        </div>

    )
}

export default Signup