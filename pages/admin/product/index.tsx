import React from 'react'

import Table from 'react-bootstrap/Table';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import LayoutAdmin from '../../../components/Layout/admin';

type ProductsProps = {
  products: any[]
}
const Products = ({products}: ProductsProps) => {
  console.log('Product component', products)
  if(!products) return null;
  return (
    <div>
           <Link href="/admin/product/add">
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
        <th>Price</th>
        <th>Color</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
        {products.map(item => (
      
         <tr key={item.id}>
          <td>1</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td  key={item.id}><Link href={`product/${item.id}`}>{item.name}</Link></td>
          </tr>
      
    ))}
       
       </tbody>
     </Table>
     </div>
  )
  
}
export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
  console.log('getStaticProps');
  const response = await fetch(`http://localhost:8000/api/products`);
  const data = await response.json();

  return {
    props: {
      products: data.map(item => ({id: item._id, name: item.name}))
    }
  }
}
Products.Layout = LayoutAdmin;

export default Products