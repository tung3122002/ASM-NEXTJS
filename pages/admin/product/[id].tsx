import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import LayoutAdmin from '../../../components/Layout/admin';

type ProductProps = {
  product: any;
}

const ProductDetail = ({product}: ProductProps) => {
  if(!product) return null;
  return (
    <div>{product.name}</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:8000/api/products`)).json();
  const paths = data.map(product => (
    { params: { id: product._id } }
  ))
  return {
    paths,
    fallback: false
  }
}
// server
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const product = await (await fetch(`http://localhost:8000/api/products/${context.params?.id}`)).json();
  return {
    props: {product},
    revalidate: 60
  }
}
ProductDetail.Layout = LayoutAdmin;
export default ProductDetail