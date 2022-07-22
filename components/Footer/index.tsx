import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="mt-5">
      <hr />
      <div className="footer row">
        <div className="col-3">
          <div className=" flex">
            <img className="w-[115px] h-[31px]" src="https://pubcdn2.ivymoda.com/images/logo-footer.png" alt="" />
            <img className="w-[75px] h-[24px]" src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=0cfdeac4-6e7f-4fca-941f-57a0a0962777" alt="" />
            <img className="w-[87px] h-[32px]" src="https://pubcdn2.ivymoda.com/images/img-congthuong.png" alt="" />
          </div>
          <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
         <p> <b>Địa chỉ đăng ký:</b> Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam</p>
         <p> <b>Số điện thoại:</b> 0243 205 2222 </p>
         <div className="flex">
          <img className='w-[39px] h-[30px] p-1' src="https://pubcdn2.ivymoda.com/images/ic_fb.svg" alt="" />
          <img className='w-[39px] h-[30px] p-1' src="https://pubcdn2.ivymoda.com/images/ic_gg.svg" alt="" />
          <img className='w-[39px] h-[30px] p-1' src="https://pubcdn2.ivymoda.com/images/ic_instagram.svg" alt="" />
          <img className='w-[39px] h-[30px] p-1' src="https://pubcdn2.ivymoda.com/images/ic_pinterest.svg" alt="" />
          <img className='w-[39px] h-[30px] p-1' src="https://pubcdn2.ivymoda.com/images/ic_ytb.svg" alt="" />
         
         </div>
        </div>


        <div className="col">
        <h1 className="text-xl"><b>Giới thiệu</b></h1>
        
            <p className=''>Về IVY moda</p>
            <p className=''>Tuyển dụng </p>
            <p className=''>Hệ thống cửa hàng</p>
        
        </div>
        <div className="col">
          <h1 className="text-xl"><b>Dịch vụ khách hàng</b></h1>
          
            <p className=''>Về IVY moda</p>
            <p className=''>Tuyển dụng </p>
            <p className=''>Hệ thống cửa hàng</p>
          
        </div>
        <div className="col">
          <h1 className="text-xl"><b>Liên hệ</b></h1>
          
            <p className=''>Hotline</p>
            <p className=''>Email </p>
            <p className=''>Live Chat</p>
            <p className=''>Messenger</p>
            <p className=''>Liên hệ</p>
         
        </div>
        <div className="col">
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
          <img  className="text-xl pt-1" src="https://pubcdn2.ivymoda.com/images/appstore.png" alt="" />
          <img className="text-xl pt-1" src="https://pubcdn2.ivymoda.com/images/googleplay.png" alt="" />
        </div>
      </div>
      <hr />
      <p className='text-center'>©IVYmoda All rights reserved</p>
    </div>
  )
}

export default Footer