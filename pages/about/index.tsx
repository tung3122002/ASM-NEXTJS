import React from 'react'
import style from './about.module.css'
type Props = {}

const about = (props: Props) => {
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
            <div className={style.k}>
                <div className="">
                    <img className='mx-auto' src="https://ivymoda.com/assets/files/news/2022/03/08/7bc2bec5c024a6410589664cb63c6f35.png" alt="" />
                </div>
                <div className="leading-8 border-2 border-black-300 p-3">
                    <h3>DANH TIẾNG CÔNG TY</h3>
                    <span className=''>IVY moda có lịch sử phát triển kéo dài 15 năm. Ra đời năm 2005, khởi đầu là một thương hiệu thời trang công sở chỉ dành cho nữ giới, đến nay IVY moda đã hoàn thiện hệ sinh thái thời trang của mình bằng việc ra mắt các dòng sản phẩm dành cho cả nam giới và trẻ em với những tuyên ngôn thời trang khác biệt. Thương hiệu từng bước chuyển mình mạnh mẽ và khẳng định vị thế dẫn đầu về thời trang xu hướng trên thị trường Việt Nam

                        IVY moda cũng là doanh nghiệp thời trang đại chúng duy nhất duy trì tổ chức 2 fashion show lớn 1 năm trong suốt 7 năm trở lại đây. Mạnh tay đầu tư chi phí khủng và chất xám để chiêu đãi giới mộ điệu cũng như khách hàng thân thiết những bữa đại tiệc cao cấp, sống động, ngập tràn không khí thời trang; được giới chuyên môn đánh giá cao và được khách hàng yêu mến.</span>
                </div>
            </div>
            <div className={style.k}>
                <div className="">
                    <img className='mx-auto' src="https://ivymoda.com/assets/files/news/2022/03/08/3c12d14e39d0475b7a30226be002f6c2.png" alt="" />
                </div>
                <div className="leading-8 border-2 border-black-300 p-3">
                    <h3>Văn hóa doanh nghiệp</h3>
                    <span className=''>IVY moda là mảnh đất hội tụ của những con người cùng chung niềm đam mê với giấc mơ thời trang Việt. IVY không xây dựng văn hóa từ lý thuyết nhưng luôn thể hiện qua từng hành động. Chúng tôi tự hào là một tập thể chính trực, dám nói những gì mình nghĩ và làm những gì mình nói, kiên trì và bền bỉ đi theo giấc mơ của mình.

Muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng nhau, 15 năm phát triển là minh chứng rõ nhất cho văn hóa bền trí, trung thành, sáng tạo. Như hình ảnh cánh buồm căng gió trên logo của IVY, chúng tôi không ngừng khát khao chinh phục, vượt sóng ra khơi bất kể gian nan để khám phá đại dương vô tận. </span>
                </div>
            </div>
            <div className={style.k}>
                <div className="">
                    <img className='mx-auto' src="https://ivymoda.com/assets/files/news/2022/03/08/20fe7b43f668796f4a76a135614186f4.png" alt="" />
                </div>
                <div className="leading-8 border-2 border-black-300 p-3">
                    <h3>CƠ HỘI PHÁT TRIỂN</h3>
                    <span className=''>IVY moda không vẽ ra lộ trình phát triển cụ thể cho từng cá nhân khi tham gia vào doanh nghiệp, nhưng cơ hội phát triển ở IVY luôn đến rất bất ngờ như một món quà khi bạn không ngờ tới.
Câu chuyện luân chuyển nhân sự từ cửa hàng lên văn phòng, từ cấp nhân viên lên cấp quản lý, hay trao cơ hội thử sức với một công việc hoàn toàn mới là việc đã quá quen thuộc ở IVY moda. Chúng tôi thoải mái xây dựng môi trường cạnh tranh cho các thành viên công ty; không ngại trao quyền, bất kể bạn còn trẻ, non kinh nghiệm hay thiếu hụt bằng cấp.
Chúng tôi trân trọng sự cố gắng trong công việc và đóng góp cho sự phát triển của công ty, vì vậy mọi thành tựu của bạn luôn được ghi nhận và tưởng thưởng xứng đáng bằng thu nhập và vị trí. Là cái nôi nuôi dưỡng tinh thần bền trí, trung thành, nên IVY moda luôn ưu tiên phát triển nhân sự nội bộ, khai phá tối đa tiềm năng trong mỗi cá nhân, để mỗi người trong công ty không chỉ làm việc mà còn được thấy mình làm chủ công việc của chính mình.</span>
                </div>
            </div>
            <div className={style.k}>
                <div className="">
                    <img className='mx-auto' src="https://ivymoda.com/assets/files/news/2022/03/08/1f9218abeaa8e832f2a704922aa6ec84.png" alt="" />
                </div>
                <div className="leading-8 border-2 border-black-300 p-3">
                    <h3>ĐÀO TẠO CHUYÊN NGHIỆP</h3>
                    <span className=''>Là thành viên của gia đình IVY moda, bạn sẽ có đặc lợi được đào tạo kiến thức và kĩ năng bài bản. Chúng tôi thường xuyên tổ chức các buổi đào tạo hàng tuần, hàng tháng cho các cấp từ quản lý đến nhân viên; đào tạo theo khu vực và đào tạo với quy mô cả nước. Các kiến thức thời trang liên tục được cập nhật theo thị hiếu và xu hướng thế giới.

IVY moda hiểu rằng việc tạo ra một môi trường học hỏi sẽ kích thích mỗi cá nhân không ngừng phát triển bản thân để tạo ra giá trị cho tổ chức cũng như cho chính mình.</span>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default about