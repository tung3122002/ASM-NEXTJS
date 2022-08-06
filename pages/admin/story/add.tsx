import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import LayoutAdmin from '../../../components/Layout/admin';
import { Story } from '../../../models/story';
import { useNavigate } from 'react-router-dom'
import { useRouter } from "next/router";
import useStory from '../../../hooks/use-story';
import axios from 'axios';
import { TypeCategory } from '../../../models/category';

type Props = {
  onAdd: (product: Story) => void;
  categorys: TypeCategory[]
}
type Frominputs = {
  name: string,
  desc: string,
  times: number,
  img: string
}

const AddProduct = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Frominputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Frominputs> = dataInput => {
    // console.log(dataInput.img[0])
    const file = dataInput.img[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "y6g4x0t8")

    axios({
      url: "https://api.cloudinary.com/v1_1/tr-n-t-ng/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-endcoded",
      }, data: formData,
    }).then((res) => {
      dataInput.img = res.data.url
      console.log(dataInput.img)
      router.push("/admin/story");
      mutate(create(dataInput))

    })

  }

  const { data, error, create, mutate } = useStory();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <>
      <Link href="/admin/story">
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Danh Sách Tin Tức
        </button>
      </Link>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Tiêu Đề Tin Tức *</label>
            <input
              type="text"
              {...register("name", { required: "Vui lòng nhập tên story" })}
              id="form__add-user-fullname"
              className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Nhập tên đầy đủ"
            />
            <div className="text-sm mt-0.5 text-red-500">{errors.name?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nội Dung Tin Tức *</label>
            <input type="text" className="form-control" id="exampleInputEmail1"    {...register("desc", { required: "Vui lòng nhập" })} />
            <div className="text-sm mt-0.5 text-red-500">{errors.desc?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ngày Tháng *</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('times', { required: "Vui lòng nhập" })} />
            <div className="text-sm mt-0.5 text-red-500">{errors.times?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">IMG *</label>
            <label htmlFor="exampleInputEmail1">Image</label>
            <input type="file" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1"></label>
            {/* <select id="" {...register('category', { required: true })}>
            {props.categorys.map((item) => {
              return <option value={item._id}>{item.name}</option>
            })}
          </select> */}
          </div>
          <div className="form-group">
          </div>

          <button type="submit" className="btn btn-primary" >Thêm Tin Tức</button>
        </form>
      </div>
    </>
  )
}
AddProduct.Layout = LayoutAdmin;
export default AddProduct