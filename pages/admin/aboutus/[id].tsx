import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { read } from '../../../api-client/aboutUs';

import LayoutAdmin from '../../../components/Layout/admin';
import useAboutUs from '../../../hooks/use-aboutUs';
import useProducts from '../../../hooks/use-product';
import { Product } from '../../../models/product';

type ProductProps = {
  product: any;
  onUpdate: (product: Product) => void
}


type FormInputs = {
    name: string,

    img: string,
    description: string
}
const ProductDetail = (props: ProductProps) => {
  const { id } = useParams();
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
  const router = useRouter();
  
  useEffect(() => {
    const getProduct = async () => {
        const { data } = await read(props.product._id);
      reset(data)
      
    }
    getProduct();
}, [id]);
  const onSubmit: SubmitHandler<FormInputs> = data => {
    // console.log(data);
    router.push("/admin/aboutus");
    mutate(onhandleUpdate(data))
  }

  const { data, error, create, mutate ,onhandleUpdate} = useAboutUs();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if(!props) return null;
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
        <input type="text" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
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


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('context', context);
  context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
  const product = await (await fetch(`http://localhost:8000/api/aboutus/${context.params?.id}`)).json();
  return {
    props: { product }
  }
}

	
ProductDetail.Layout = LayoutAdmin;
export default ProductDetail