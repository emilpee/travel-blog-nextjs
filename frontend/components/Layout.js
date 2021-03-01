import { BlogContainer } from './BlogContainer'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Navbar />
      <BlogContainer children={children} />
      <Footer />
    </>
  )
}

export default Layout
