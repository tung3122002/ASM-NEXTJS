import Link from 'next/link';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { LayoutProps } from '../../models/layout'
// import AdminLayout from '../AdminLayout'


const LayoutColos = ({ children }: LayoutProps) => {
  return (
    <div className="container flex">
      
      <div className="conten mt-3 ml-10">
          {children}
        </div>

    </div>
  )
}

export default LayoutColos