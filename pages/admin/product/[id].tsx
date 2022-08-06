import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { list, read } from '../../../api-client/product';
import LayoutAdmin from '../../../components/Layout/admin';
import useProducts from '../../../hooks/use-product';
import { Product } from '../../../models/product';

type ProductProps = {
  product: any;
  onUpdate: (product: Product) => void
}


type FormInputs = {
  name: string,
  price: string,
  img: string,
}
const ProductDetail = (props: ProductProps) => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
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
    router.push("/admin/product");
    mutate(onhandleUpdate(data))
  }

  const { data, error, create, mutate, onhandleUpdate } = useProducts();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if (!props) return null;
  return (

    <>
      <div>{props.product.name}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Tên Sản Phẩm</label>
          <input type="text" className="form-control" id="exampleInputEmail1" {...register('name', { required: "Vui lòng nhập tên sản phẩm" })} />
          <div className="text-sm mt-0.5 text-red-500">{errors.name?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Giá Sản Phẩm</label>
          <input type="text" className="form-control"   {...register("price", { required: "Vui lòng nhập giá" })} />
          <div className="text-sm mt-0.5 text-red-500">{errors.price?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">IMG</label>
          <label htmlFor="exampleInputEmail1">Image</label>
          <input type="text" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Name category</label>
          {/* <select id="" {...register('category', { required: true })}>
            {props.categorys.map((item) => {
              return <option value={item._id}>{item.name}</option>
            })}
          </select> */}
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
  const product = await (await fetch(`http://localhost:8000/api/products/${context.params?.id}`)).json();
  return {
    props: { product }
  }
}


ProductDetail.Layout = LayoutAdmin;
export default ProductDetail