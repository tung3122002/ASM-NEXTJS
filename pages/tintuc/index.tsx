import Link from 'next/link'
import React from 'react'
import useStory from '../../hooks/use-story'
import Title from '../tit'
import style from './tintuc.module.css'
type Props = {}

const Tintuc = (props: Props) => {
    const { data, error, create, mutate, onhandleRemove } = useStory();


    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>
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
                <div className='mt-7'>
                    <br />
                    {data.map((items) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className={style.story} >
                            <div className={style.col}>
                                <p className={style.h3} >
                                    STORY
                                </p>
                                <h2 className={style.h2}>{items.name}</h2>
                                <p className={style.p}>
                                    {items.desc}
                                </p>
                                <p className={style.h5} >
                                    {items.times}
                                </p>
                                <div>
                                    <h3 className={style.xemthem}>Xem Thêm</h3>
                                </div>
                            </div>
                            <div>
                                <img src={items.img} alt="" className={style.img} />
                            </div>
                            <div style={{marginTop: '100px'}}>

                            </div>

                        </div>
                        
                    ))}
                      <br />
                </div>
                <br />
            </div>
            <div>
                <Title />
            </div>
        </div>
    )
}

export default Tintuc