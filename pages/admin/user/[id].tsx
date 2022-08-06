import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { read } from '../../../api-client/user';
import LayoutAdmin from '../../../components/Layout/admin';
import useUser from '../../../hooks/use-user';
import { User } from '../../../models/user';

type UserProps = {
  user: any;
  onUpdate: (user: User) => void
}


type FormInputs = {
  name: string,
  lastName: string,
  email: string,
  phoneNumber: number,
  date: string,
  password: string,
  description: string,
}
const UserDetail = (props: UserProps) => {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const router = useRouter();

  useEffect(() => {
    const getuser = async () => {
      const { data } = await read(props.user._id);
      reset(data)

    }
    getuser();
  }, [id]);


  const onSubmit: SubmitHandler<FormInputs> = data => {
    // console.log(data);
    router.push("/admin/user");
    mutate(onhandleUpdate(data))
  }

  const { data, error, mutate, onhandleUpdate } = useUser();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  if (!props) return null;
  return (

    <>
    <h2>Cập Nhập Thông Tin Tài Khoản</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Họ Tài Khoản</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('lastName')} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Tên Tài Khoản</label>
            <input type="text" className="form-control" id="exampleInputEmail1" {...register('name')} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Email</label>
            <input type="email" className="form-control"  {...register('email')} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Số Điện Thoại</label>
            <input type="number" className="form-control"  {...register('phoneNumber')} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ngày Sinh</label>
            <input type="text" className="form-control"  {...register('date')} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Địa Chỉ</label>
            <input type="text" className="form-control"  {...register('description')} />
          </div>

          <button type="submit" className="btn btn-primary" >Cập Nhập Tài Khoản</button>
        </form>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('context', context);
  context.res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate")
  const user = await (await fetch(`http://localhost:8000/api/user/${context.params?.id}`)).json();
  return {
    props: { user }
  }
}


UserDetail.Layout = LayoutAdmin;
export default UserDetail