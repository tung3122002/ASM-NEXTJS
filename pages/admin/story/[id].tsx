import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { liststory, readstory } from '../../../api-client/story';
import LayoutAdmin from '../../../components/Layout/admin';
import useStory from '../../../hooks/use-story';
import { Story  } from '../../../models/story';

type ProductProps = {
  product: any;
  onUpdate: (product: Story) => void
}


type FormInputs = {
  name: string,
  desc: string,
  times: number,
  img: string,

}
const ProductDetail = (props: ProductProps) => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await readstory(props.product._id);
      reset(data)

    }
    getProduct();
  }, [id]);

  
  const onSubmit: SubmitHandler<FormInputs> = data => {
    // console.log(data);
    router.push("/admin/story");
    mutate(onhandleUpdate(data))
  }

  const { data, error, create, mutate, onhandleUpdate } = useStory();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if (!props) return null;
  return (

    <>
      <div>{props.product.names}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Tiêu Đề Tin Tức *</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('name')} />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nội Dung Tin Tức *</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('desc')} />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ngày Tháng *</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('times')} />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">IMG *</label>
            <input type="text" className="form-control"  {...register('img')} />
          </div>

          <button type="submit" className="btn btn-primary" >Thêm Bài Viết</button>
        </form></div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('context', context);
  context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
  const product = await (await fetch(`http://localhost:8000/api/story/${context.params?.id}`)).json();
  return {
    props: { product }
  }
}


ProductDetail.Layout = LayoutAdmin;
export default ProductDetail