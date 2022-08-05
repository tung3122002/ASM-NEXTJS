import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import LayoutAdmin from '../../../components/Layout/admin';
import { aboutUs } from '../../../models/aboutUS';
import { useNavigate } from 'react-router-dom'
import { useRouter } from "next/router";
import useAboutUs from '../../../hooks/use-aboutUs';
import axios from 'axios';
import { TypeCategory } from '../../../models/category';


type Props = {
  onAdd: (product: aboutUs) => void;
  categorys: TypeCategory[]
}
type Frominputs = {
  name: string,

  img: string,
  description: string

}

const AddAboutUs = (props: Props) => {
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
      router.push("/admin/aboutus");
      mutate(create(dataInput))

    })

  }

  const { data, error, create, mutate } = useAboutUs();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <>
      <Link href="/admin/product">
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Danh Sách Sản phẩm
        </button>
      </Link>
      <div> <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Tên Sản Phẩm</label>
          <input type="text" className="form-control" id="exampleInputEmail1" {...register('name')} />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">IMG</label>
          <label htmlFor="exampleInputEmail1">Image</label>
          <input type="file" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <label htmlFor="exampleInputEmail1">Desc</label>
          <input type="text" className="form-control" {...register('description', { required: true })} placeholder="Tên sản phẩm" />
        </div>

        <div className="form-group">
        </div>

        <button type="submit" className="btn btn-primary" >Add Product</button>
      </form></div>
    </>
  )
}
AddAboutUs.Layout = LayoutAdmin;
export default AddAboutUs