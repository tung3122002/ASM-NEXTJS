import Link from 'next/link';
import React from 'react'
import LayoutAdmin from '../../../components/Layout/admin';

type Props = {}

const AddProduct = (props: Props) => {
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
    <div>add</div>
    </>
  )
}
AddProduct.Layout = LayoutAdmin;
export default AddProduct