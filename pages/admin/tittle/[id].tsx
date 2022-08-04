import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { listtittle, readtittle } from '../../../api-client/tittle';
import LayoutAdmin from '../../../components/Layout/admin';
import useTittle from '../../../hooks/use-tittle';
import { Tittle  } from '../../../models/tittle';

type ProductProps = {
  product: any;
  onUpdate: (product: Tittle) => void
}


type FormInputs = {
  name: string,
  price: number,
  img: string,
}
const ProductDetail = (props: ProductProps) => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readtittle(props.product._id);
      reset(data)

    }
    getProduct();
  }, [id]);

  
  const onSubmit: SubmitHandler<FormInputs> = data => {
    // console.log(data);
    router.push("/admin/tittle");
    mutate(onhandleUpdate(data))
  }

  const { data, error, create, mutate, onhandleUpdate } = useTittle();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if (!props) return null;
  return (

    <>
      <div>{props.product.names}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Tên Sản Phẩm</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('name')} />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
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


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('context', context);
  context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
  const product = await (await fetch(`http://localhost:8000/api/gallerys/${context.params?.id}`)).json();
  return {
    props: { product }
  }
}


ProductDetail.Layout = LayoutAdmin;
export default ProductDetail