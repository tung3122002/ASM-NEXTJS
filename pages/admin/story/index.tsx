import React from 'react'

import Table from 'react-bootstrap/Table';
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import LayoutAdmin from '../../../components/Layout/admin';
import useSWR from "swr";
import useStory from '../../../hooks/use-story';
const Story = () => {
  const { data, error, create, mutate, onhandleRemove } = useStory();


  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>
  return (
    <div>
      <Link href="/admin/story/add">
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Thêm Bài Viết
        </button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu Đề</th>
            <th>Nội Dung</th>
            <th>Ngày Tháng</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {data.map((item) => (

            <tr key={item._id}>
              <td>1</td>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>{item.times}</td>
              <td><img className="w-20" src={item.img} alt="" /></td>
              <td key={item.id}>
                <Link href={`story/${item._id}`}>Sửa</Link>
              
              </td>
              <button onClick={() => mutate(onhandleRemove(item._id))} className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Remove</button>

            </tr>

          ))}

        </tbody>
      </Table>

    </div>

  )

}

Story.Layout = LayoutAdmin;

export default Story