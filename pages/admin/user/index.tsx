import React from 'react'

import Table from 'react-bootstrap/Table';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import LayoutAdmin from '../../../components/Layout/admin';
import useSWR from "swr";
import useUser from '../../../hooks/use-user';
const Products = () => {
  const { data, error, mutate, onhandleRemove } = useUser();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Họ Tên Tài Khoản</th>
            <th>Email</th>
            <th>Ngày Sinh</th>
            <th>Số Điện Thoại</th>
            <th>Địa Chỉ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {data.map((item) => (

            <tr key={item._id}>
              <td>1</td>
              <td>{item.lastName} {item.name}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.description}</td>
              <td key={item.id}>
                <Link href={`user/${item._id}`}>Sửa</Link>
              
              </td>
              <button onClick={() => mutate(onhandleRemove(item._id))} className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Remove</button>

            </tr>

          ))}

        </tbody>
      </Table>

    </div>

  )

}

Products.Layout = LayoutAdmin;

export default Products