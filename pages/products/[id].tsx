import Head from 'next/head'
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
type Props = {}

const ProductDetail = (props: Props) => {
    return (

        <div className="container">

            <Head>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy='no-referrer' />
            </Head>
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
            <hr />
            <div className="flex">
                <div className="">
                    <div className="img w-[534px] border">
                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/22/f057aaf179c95ed11511327de763ef76.JPG" alt="" />

                    </div>


                </div>
                <div className="img-con ml-2 ">
                    <img className='w-24 h-36 mt-3' src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/22/f057aaf179c95ed11511327de763ef76.JPG" alt="" />
                    <img className='w-24 h-36 mt-3' src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/22/f057aaf179c95ed11511327de763ef76.JPG" alt="" />
                    <img className='w-24 h-36 mt-3' src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/22/f057aaf179c95ed11511327de763ef76.JPG" alt="" />
                    <img className='w-24 h-36 mt-3' src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/22/f057aaf179c95ed11511327de763ef76.JPG" alt="" />
                    <img className='w-24 h-36 mt-3' src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/07/22/f057aaf179c95ed11511327de763ef76.JPG" alt="" />

                </div>
                <div className="ml-9">
                    <div className="box-text uppercase font-semibold	text-3xl	">
                        <p>SET ÁO VÀ CHÂN VÁY HỌA TIẾT KẺ</p>

                    </div>
                    <div className="msp flex text-[16px] text-[#6c6d70]">
                        <div>SKU: 16M7728</div>
                        <div className="star ml-40">
                            <i className="fa-solid fa-star text-amber-300 p-1"></i>
                            <i className="fa-solid fa-star text-amber-300 p-1"></i>
                            <i className="fa-solid fa-star text-amber-300 p-1"></i>
                            <i className="fa-solid fa-star text-amber-300 p-1"></i>
                            <i className="fa-solid fa-star text-amber-300 p-1"></i>
                        </div>
                        <p>(0 đánh giá)</p>
                    </div>

                    <div className="price">
                        <b className="font-semibold	 text-2xl">1.751.200đ</b><del className=' ml-2 text-base text-[#a8a9ad]'>2.189.000đ</del><sup>60%</sup>
                    </div>
                    <div className="color pt-3">
                        <b className='font-semibold text-xl'>Màu sắc: Kẻ Nude</b>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm">
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    XS
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="s" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    S
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="m" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    M
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="l" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    L
                                </div>
                            </label>
                            <label>
                                <input className="sr-only peer" name="size" type="radio" value="xl" />
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                    XL
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Số Lượng</label> <input type="number" name="" id="" />
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium mt-5">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Buy now
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                Add to bag
                            </button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>

                    </div>
                    <div className="">
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                Đầm xòe chất liệu vải tuysi cao cấp là một trong những chất liệu vải được đầu tư công phu nhất đem đến cho nàng những trải nghiệm về một chất liệu vải hoàn hảo hơn mong đợi. s
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                Đầm xòe chất liệu vải tuysi cao cấp là một trong những chất liệu vải được đầu tư công phu nhất đem đến cho nàng những trải nghiệm về một chất liệu vải hoàn hảo hơn mong đợi.
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled>
                                Đầm xòe chất liệu vải tuysi cao cấp là một trong những chất liệu vải được đầu tư công phu nhất đem đến cho nàng những trải nghiệm về một chất liệu vải hoàn hảo hơn mong đợi.
                            </Tab>
                        </Tabs>
                    </div>
                    <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                    </p>
                </div>

            </div>
            <div className="">
                <p className='uppercase font-semibold	text-3xl text-center mt-4'>KHÁCH HÀNG ĐÁNH GIÁ</p>
                <div className="row">
                    <div className=" col-3 rounded-tl-[32px] rounded-br-[32px] w-40 h-fit border">
                        <div className="px-[24px] py-[32px] flex">
                            <div className="">
                                <p><span className="text-7xl  text-lime-400 font-black">5</span> </p>
                            </div>
                            <div className="star mt-2">
                                <i className="fa-solid fa-star text-amber-300 "></i>
                                <i className="fa-solid fa-star text-amber-300 "></i>
                                <i className="fa-solid fa-star text-amber-300 "></i>
                                <i className="fa-solid fa-star text-amber-300 "></i>
                                <i className="fa-solid fa-star text-amber-300 "></i>
                            </div>
                            <p className="star mt-2 ml-2">(0 đánh giá)</p>

                        </div>
                        <div className="flex">
                        <div className="star text-center ">
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                        </div>
                        <div className=" border-t-[5px] border-[#E7E8E9]] w-36 mt-2 ml-2"></div>
                        <div className=" ml-2">0</div>
                        </div>
                        <div className="flex">
                        <div className="star text-center ">
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                        </div>
                        <div className=" border-t-[5px] border-[#E7E8E9]] w-36 mt-2 ml-2"></div>
                        <div className=" ml-2">0</div>
                        </div>
                        <div className="flex">
                        <div className="star text-center ">
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                        </div>
                        <div className=" border-t-[5px] border-[#E7E8E9]] w-36 mt-2 ml-2"></div>
                        <div className=" ml-2">0</div>
                        </div>
                        <div className="flex">
                        <div className="star text-center ">
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                        </div>
                        <div className=" border-t-[5px] border-[#E7E8E9]] w-36 mt-2 ml-2"></div>
                        <div className=" ml-2">0</div>
                        </div>
                        <div className="flex">
                        <div className="star text-center ">
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                            <i className="fa-solid fa-star text-amber-300 "></i>
                        </div>
                        <div className=" border-t-[5px] border-[#E7E8E9]] w-36 mt-2 ml-2"></div>
                        <div className=" ml-2">0</div>
                        </div>
                        
                    </div>
                    <div className=" col my-auto">
                        <div className='text-center'>
                           <img className="mx-auto" src="https://ivymoda.com/assets/images/image-star-smile.png" alt="" />
                        </div>
                        <div className="text-center">
                            <p>Sản phẩm chưa có đánh giá. Hãy là người đầu tiên đánh giá sản phẩm này !</p>
                        </div>
                        <div className="text-center ">
                            <button className='border rounded-tl-[32px] rounded-br-[32px] w-48 h-14'>ĐÁNH GIÁ SẢN PHẨM</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProductDetail