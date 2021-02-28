import React from 'react'
import { BlogCards } from './BlogCards'
import { BlogContainer } from './BlogContainer'
import { Navbar } from './Navbar'

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <BlogContainer>
        <BlogCards />
      </BlogContainer>
    </>
  )
}

export default Layout
