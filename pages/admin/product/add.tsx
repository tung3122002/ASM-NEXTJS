import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import LayoutAdmin from '../../../components/Layout/admin';
import { Product } from '../../../models/product';
import { useNavigate } from 'react-router-dom'
import { useRouter } from "next/router";
import useProducts from '../../../hooks/use-product';

type Props = {
  onAdd: (product: Product) => void
}
type Frominputs = {
  name: string,
  price: number,
  img: string
}

const AddProduct = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Frominputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Frominputs> = data => {
    console.log(data);
    router.push("/admin/product");
    mutate(create(data))
  }

  const { data, error, create, mutate } = useProducts();


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
          <label htmlFor="price" className="form-label">Giá Sản Phẩm</label>
          <input type="number" className="form-control"  {...register('price')} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">IMG</label>
          <input type="text" className="form-control"  {...register('img')} />
        </div>

        <button type="submit" className="btn btn-primary" >Add Product</button>
      </form></div>
    </>
  )
}
AddProduct.Layout = LayoutAdmin;
export default AddProduct