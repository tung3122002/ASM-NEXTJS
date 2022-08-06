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
import useCategory from '../../../hooks/use-category';


type Frominputs = {
  name: string
 
}

const AddProduct = (props: Frominputs) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Frominputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Frominputs> = dataInput => {
    // console.log(dataInput.img[0])
  

   
      router.push("/admin/category");
      mutate(create(dataInput))

   

  }

  const { data, error, create, mutate } = useCategory();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <>
      <Link href="/admin/category">
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Danh Sách Category
        </button>
      </Link>
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Tên Sản Phẩm</label>
          <input type="text" className="form-control" id="exampleInputEmail1" {...register('name')} />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        
        <div className="form-group">
        </div>

        <button type="submit" className="btn btn-primary" >Add Category</button>
      </form></div>
    </>
  )
}
AddProduct.Layout = LayoutAdmin;
export default AddProduct