import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import LayoutAdmin from '../../../components/Layout/admin';

type ProductProps = {
  product: any;
}

const ProductDetail = ({product}: ProductProps) => {
  if(!product) return null;
  return (
   
    <>
     <div>{product.name}</div>
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