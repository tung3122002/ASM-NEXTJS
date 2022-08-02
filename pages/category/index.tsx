import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import style from './category.module.css'
import Accordion from 'react-bootstrap/Accordion';
type Props = {}

const category = (props: Props) => {
    return (
        <div>
            <Header />
            <div className={style.mid}>
                <aside className="p-5">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Size</Accordion.Header>
                            <Accordion.Body>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mức giá</Accordion.Header>
                            <Accordion.Body>
                                <input className='border-black' type="text" />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Chiết khấu</Accordion.Header>
                            <Accordion.Body>
                                <input type="checkbox" name="" id="" /> 25% <br />
                                <input className={style.input} type="checkbox" name="" id="" /> 30% <br />
                                <input type="checkbox" name="" id="" /> 50% <br />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                                <button className='bg-black w-24 text-white rounded-lg mx-24 mt-5  '>Lọc</button>
                </aside>
                <section className='mt-10'>
                    <h3>Hàng nam mới về</h3>
                    <div className ={style.main}>
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    <article className='mb-5' >
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    <article className='mb-5'> 
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    {/*  */}
                    <article className='mb-5'>
                    <div className="products">
                        <div className="">
                            <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/05/27/9ddfb4b98bb5c5a2dc6a63d2617626ba.JPG" alt="" />
                        </div>
                        <div className="">
                                <p>Áo polo nam</p>
                                <p className={style.price}>520.000</p>
                                <button className={style.click_detail} ><a className={style.a} href="product_detail">Chi tiết sản phẩm</a></button>
                        </div>
                    </div>
                    </article>
                    {/*  */}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default category