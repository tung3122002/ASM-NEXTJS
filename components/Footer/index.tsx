import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="mt-5">
      <hr />
      <div className="footer flex">
        <div className="row w-1/4 mr-[10px] mt-5">
          <div className="flex">
            <img className="w-[114px] h-[31px] p-1" src="https://pubcdn2.ivymoda.com/images/logo-footer.png" alt="" />
            <img className="w-[114px] h-[31px] p-1" src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777" alt="" />
            <img className="w-[114px] h-[31px] p-1" src="https://pubcdn2.ivymoda.com/images/img-congthuong.png" alt="" />
          </div>
          <div className='pt-5 text-[#57585A] text-[20px]'><p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p></div>
          <div className='pt-5 text-[#57585A] text-[20px]'><b>Địa chỉ đăng ký:</b> Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam</div>
          <div className='pt-5 text-[#57585A] text-[20px]'><b>Số điện thoại:</b> 0243 205 2222</div>
        </div>


        <div className="row w-1/4 ml-10 mt-5">
        <h1 className="text-xl"><b>Giới thiệu</b></h1>
          <ul className=''>
            <li className='pt-5 text-[#57585A] text-[20px]'>Về IVY moda</li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Tuyển dụng </li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Hệ thống cửa hàng</li>
          </ul>
        </div>
        <div className="row w-1/4 mt-5">
          <h1 className="text-xl"><b>Dịch vụ khách hàng</b></h1>
          <ul className='text-ellipsis'>
            <li className='pt-5 text-[#57585A] text-[20px]'>Về IVY moda</li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Tuyển dụng </li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Hệ thống cửa hàng</li>
          </ul>
        </div>
        <div className="row w-1/4 mt-5">
          <h1 className="text-xl"><b>Liên hệ</b></h1>
          <ul className='text-ellipsis'>
            <li className='pt-5 text-[#57585A] text-[20px]'>Hotline</li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Email </li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Live Chat</li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Messenger</li>
            <li className='pt-5 text-[#57585A] text-[20px]'>Liên hệ</li>
          </ul>
        </div>
        <div className="row w-1/4 mt-5">
          <div className="w-96 rounded-br-[20%] rounded-tl-[20%] border-[10px] h-60 p-6">
            <p><b className="text-xl">Nhận thông tin các chương trình của IVY moda</b></p>
            <form id="frm_subscribe" className='flex'>
              <input id="email_subscribe" className=" border-b" type="text" name="email" placeholder="Nhập địa chỉ email" required="required" />
              <div className="btn-submit">
                <button type="submit" className=' border rounded-br-[24px] rounded-tl-[24px] px-[27px] py-[17px] text-[16px]  border-[black]"'>Đăng ký</button>
              </div>
            </form>

          </div>
          <h1 className="text-xl pt-5"><b>Download App</b></h1>
          <img  className="text-xl pt-5" src="https://pubcdn2.ivymoda.com/images/appstore.png" alt="" />
          <img className="text-xl pt-5" src="https://pubcdn2.ivymoda.com/images/googleplay.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer