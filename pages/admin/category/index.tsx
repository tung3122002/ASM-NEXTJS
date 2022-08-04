import React from 'react'

import Table from 'react-bootstrap/Table';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import LayoutAdmin from '../../../components/Layout/admin';
import useSWR from "swr";

import useProducts from '../../../hooks/use-product';
import useCategory from '../../../hooks/use-category';


const Products = () => {
  
  const { data, error, create , mutate,onhandleRemove} = useCategory();


    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed to load</div>
  return (
    <div>
           <Link href="/admin/category/add">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Thêm sản phẩm
          </button>
        </Link>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Tên Sản Phẩm</th>
     
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   
        {data.map((item) => (
      
         <tr key={item._id}>
          <td>1</td>
          <td>{item.name}</td>
        
          <td  key={item.id}><Link href={`product/${item._id}`}>Sửa</Link></td>
          <button onClick={() => mutate(onhandleRemove(item._id))} className="btn btn-danger">Remove</button>
         
          </tr>
      
    ))}
       
       </tbody>
     </Table>
     
     </div>
     
  )
  
}

Products.Layout = LayoutAdmin;

export default Products