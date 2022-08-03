
import Link from 'next/link';
import React from 'react'
import Table from 'react-bootstrap/Table';

import LayoutAdmin from '../../../components/Layout/admin';
import useTittle from '../../../hooks/use-tittle';



const Tittle = () => {
  const { data, error, createtittle, mutate, removetittle } = useTittle();

  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <div>
      <Link href="/admin/tittle/add">
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

          {data.map((item) => (

            <tr key={item._id}>
              <td>1</td>
              <td>{item.name}</td>

              <td><img className="w-20" src={item.img} alt="" /></td>
              <td>Otto</td>
              <td key={item.id}>
                <button>
                  <Link href={`tittle/${item._id}`}>Sửa</Link>
                </button>

              </td>
              <button onClick={() => mutate(removetittle(item._id))} className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Remove</button>

            </tr>

          ))}

        </tbody>
      </Table>

    </div>
  )
}
Tittle.Layout = LayoutAdmin;

export default Tittle