import React from 'react'
import style from './tintuc.module.css'
type Props = {}

const Tintuc = (props: Props) => {
    return (
        <div>
            <div className={style.texth4}>
                <p className={style.h4}>
                    Trang Chủ - Tin Tức
                </p>
            </div>
            <div>
                <section>
                    <h1 className='text-center : mt-4 : text-6xl'>LIFESTYLE</h1>
                    <nav>
                        <ul className={style.menu}>
                            <li className='text-center '><a href="">TIN TỨC</a></li>
                            <li className='text-center '><a href="">KIẾN THỨC</a></li>
                            <li className='text-center '><a href="">XU HƯỚNG</a></li>
                            <li className='text-center '><a href="">PHONG CÁCH</a></li>

                        </ul>
                    </nav>
                </section>
                <div>
                    <div className={style.story} >
                        <div className={style.col}>
                            <p className={style.h3} >
                                STORY
                            </p>
                            <h2 className={style.h2}>Be Bright Be Brilliant</h2>
                            <p className={style.p}>
                                Là mỹ nhân GenZ đa tài, sau khi nhận được trái ngọt từ những nỗ lực qua vai em út
                                Vân Vân trong Thương ngày nắng về, Ngọc Huyền giờ đây đã lột xác, hóa quý cô trưởng
                                thành xuất hiện trong bộ ảnh mới nhất từ IVY moda.
                            </p>
                            <p className={style.h5} >
                                02/08/2022
                            </p>
                            <div>
                                <h3 className={style.xemthem}>Xem Thêm</h3>
                            </div>
                        </div>
                        <div>
                            <img src="https://pubcdn.ivymoda.com/files/news/2022/08/02/4acb0c19a994f58d0f41bf8c2ac45334.jpg" alt="" className={style.img} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tintuc