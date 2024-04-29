import React from 'react'
import Footer from './Footer';
import Header from "./Header";
import {Helmet} from "react-helmet";
import  { Toaster } from 'react-hot-toast';
const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
        <Helmet>
          <mta charSet="utf-8"/>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
         
         <title>{title}</title>
        </Helmet>
         <Header></Header>
        <main style={{minHeight:'70vh'}}>{children}<Toaster/></main>
        <Footer></Footer>
        </div>
  );
};
Layout.defaultProps={
  tiltle:"Ecommerce app  shop now",
  description:"mern stack project",
  keywords:"mern,react,node,mongodb",
  author:"Prince Raj",
};

export default Layout