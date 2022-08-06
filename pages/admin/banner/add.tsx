import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import LayoutAdmin from '../../../components/Layout/admin';
import { Product } from '../../../models/product';
import { useNavigate } from 'react-router-dom'
import { useRouter } from "next/router";
import useProducts from '../../../hooks/use-product';
import axios from 'axios';
import { TypeCategory } from '../../../models/category';
import useBanner from '../../../hooks/use-banner';

type Props = {
  onAdd: (product: Product) => void;
  categorys: TypeCategory[]
}
type Frominputs = {
  name: string,

  img: string,

}

const AddBanner = (props: Props) => {
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
      router.push("/admin/banner");
      mutate(createbanner(dataInput))

    })

  }

  const { data, error, createbanner, mutate } = useBanner();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <>
      <Link href="/admin/banner">
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Danh Sách Banner
        </button>
      </Link>
      <div> <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Tên Sản Phẩm</label>
          <input type="text" className="form-control" id="exampleInputEmail1" {...register('name', { required: "Vui lòng nhập tên Banner" })} />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">IMG</label>
          <label htmlFor="exampleInputEmail1">Image</label>
          <input type="file" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
        </div>

        <div className="form-group">
        </div>

        <button type="submit" className="btn btn-primary" >Add Product</button>
      </form></div>
    </>
  )
}
AddBanner.Layout = LayoutAdmin;
export default AddBanner