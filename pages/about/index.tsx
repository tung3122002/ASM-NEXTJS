import React from 'react'
import useAboutUs from '../../hooks/use-aboutUs';

import style from './about.module.css'

type Props = {}

const about = (props: Props) => {
    const { data, error, create, mutate, onhandleRemove } = useAboutUs();


    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>
    return (
        <div>
            <div className={style.title}>

                <h1 className='p-5 '>ABOUT US</h1>
                <h3 className=''>Thương hiệu thời trang số 1 Việt Nam</h3>
            </div>
            <div className={style.top}>
                <div className={style.a}>
                    <div className="">
                        <img src="https://ivymoda.com/assets/files/news/2022/03/08/a983fb0d282d71984fc750d7e5f60470.png" alt="" />
                    </div>
                    <div className="">
                        <h4>IVY Moda</h4>
                        <p>Tuyên ngôn thời trang của tôi</p>
                    </div>
                </div>
                {/*  */}
                <div className={style.a}>
                    <div className="">
                        <img src="https://ivymoda.com/assets/files/news/2022/03/08/5bb88418b3295127222ee87ebde52fa5.png" alt="" />
                    </div>
                    <div className="">
                        <h4>IVY Men</h4>
                        <p>Thời trang của người dẫn đầu</p>
                    </div>
                </div>
                {/*  */}
                <div className={style.a}>
                    <div className="">
                        <img src="https://ivymoda.com/assets/files/news/2022/03/08/350c3c97243d8d5c9bc24593155a56e0.png" alt="" />
                    </div>
                    <div className="">
                        <h4>IVY Kids</h4>
                        <p>Trẻ em cũng phải mặc đẹp</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className={style.b}>
                    <div className={style.c}>
                        <h3 className={style.d}>18</h3>
                        <p className={style.e}>Năm hình thành và phát triển</p>
                    </div>
                    <div className={style.c}><h3 className={style.d}>1</h3>
                        <p className={style.e}>Nhà máy</p></div>
                    <div className={style.c}><h3 className={style.d}>42</h3>
                        <p className={style.e}>Tỉnh thành</p></div>
                    <div className={style.c}><h3 className={style.d}>84</h3>
                        <p className={style.e}>Showroom</p></div>
                </div>
                <div className={style.b}>
                    <div className="bg-gray-300"></div>
                    <div className={style.c}><h3 className={style.d}>1.8M</h3>
                        <p className={style.e}>Khách hàng</p></div>
                    <div className={style.c}><h3 className={style.d}>4000</h3>
                        <p className={style.e}>Nhân viên</p></div>
                    <div className="bg-gray-300"></div>
                </div>
            </div>
            <div className="mt-3 mb-3">
                <img className='mx-auto' src="https://ivymoda.com/assets/files/news/2022/03/08/f1d689489c9cf2a863477273549317b3.png" alt="" />
            </div>
            <div className={style.h}>
                <div className="text-center">
                    <h3 className='text-white'>Giá trị cốt lõi</h3>
                    <div className={style.f}>
                        <div className="">
                            <div className={style.g}>
                                <p className="text-white">TÔN CHỈ KHÁCH HÀNG LÀ TRUNG TÂM</p>
                            </div>
                        </div>

                        <div className={style.i}>
                            <p>Với IVY moda, Khách hàng luôn là những celebs hạng A với những đặc quyền hấp dẫn nhất.</p>
                        </div>
                    </div>
                    <div className={style.f}>
                        <div className="">
                            <div className={style.g}>
                                <p className="text-white">ĐAM MÊ LÀ DẤN THÂN THỰC HIỆN SỨ MỆNH</p>
                            </div>
                        </div>

                        <div className={style.i}>
                            <p> Luôn luôn vận động để thay đổi!Không ngừng chuyển động, thoả sức thể hiện sự sáng tạo, cái tôi trong các thiết kế thời trang Đem đến tuyên ngôn cá nhân cho giới mộ điệu và khách hàng. </p>
                        </div>
                    </div>
                    <div className={style.f}>
                        <div className="">
                            <div className={style.g}>
                                <p className="text-white">CHÍNH TRỰC VỚI BẢN THÂN VÀ TỔ CHỨC</p>
                            </div>
                        </div>
                        <div className={style.i}>
                            <p>Lời nói và Hành động luôn song hành.Thực hiện những điều đã phát ngôn công bằng và lý tính</p>
                        </div>
                    </div>
                    <div className={style.f}>
                        <div className="">
                            <div className={style.g}>
                                <p className="text-white">KIÊN TRÌ CÙNG PHƯƠNG CHÂM TIẾP TỤC TIẾN BƯỚC</p>
                            </div>
                        </div>

                        <div className={style.i}>
                            <p>Sẵn sàng đương đầu trước mọi khó khăn, thử thách để chinh phục đỉnh cao mới</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
               

                {data.map((item) => (
      
      <div key={item._id} className={style.k}>
      <div className="">
          <img className='mx-auto' src={item.img} alt="" />
      </div>
      <div className="leading-8 border-2 border-black-300 p-3">
          <h3>{item.name}</h3>
          <span className=''>{item.description}</span>
      </div>
      
  </div>
   
 ))}
            </div>

        </div>
    )
}

export default about