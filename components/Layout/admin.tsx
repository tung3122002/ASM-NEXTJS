import Link from 'next/link';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { LayoutProps } from '../../models/layout'
// import AdminLayout from '../AdminLayout'


const LayoutAdmin = ({ children }: LayoutProps) => {
  return (
    <div className="container flex">
      <nav className="dashboard__sidebar fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0 -translate-x-full">
        <Link href="/">
          <span className="flex items-center p-4 text-white font-bold text-3xl cursor-pointer">IVY moda</span>
        </Link>
        <nav className="text-sm font-medium text-gray-500" aria-label="Main Navigation">
          <Link href="">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <svg
                className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentcolor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414.0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Dashboard</span>
            </span>
          </Link>
          <Link href="/admin/product">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                icon
              </div>
              <span>Products</span>
            </span>
          </Link>
          <Link href="/admin/category">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                icon
              </div>
              <span>Category</span>
            </span>
          </Link>
          <Link href="/admin/tittle">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                icon
              </div>
              <span>Tittle</span>
            </span>
          </Link>
          <Link href="/admin/banner">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                icon
              </div>
              <span>Banner</span>
            </span>
          </Link>
          <Link href="/admin/story">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                icon
              </div>
              <span>Tin Tức</span>
            </span>
          </Link>
          <Link href="/admin/user">
            <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                icon
              </div>
              <span>User</span>
            </span>
          </Link>





        </nav>
      </nav>
      <aside className="ml-28">
        <div className="w-[1280px] h-14 bg-gray-200 border">

        </div>
        <div className="conten mt-3 ml-10">
          {children}
        </div>
      </aside>

    </div>
  )
}

export default LayoutAdmin