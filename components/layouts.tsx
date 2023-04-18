import Navbar from './Navbar';
import Footer from './Footer';
import React, { PropsWithChildren } from "react";

//The main element is also rendered with the children prop spread onto it. This allows the child components of the Layout component to be rendered inside the main element.
//Layout component is intended to be used as a wrapper
// and provide the page-specific content as the children prop
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};