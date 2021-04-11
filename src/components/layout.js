import * as React from "react"
import Footer from "./Footer";
import Header from "./Header"
import {GlobalStyle} from './styles/GlobalStyles';

const Layout = ({ children, background }) => {
  return (
    <>
      <GlobalStyle/>
      <Header background={background}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
