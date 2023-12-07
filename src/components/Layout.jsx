import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = ({setPage,page}) => {
  return (
    <>
        <Header setPage={setPage} page={page}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout