import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FC<{ title?: string }> = ({ children }) => {
  return (
    <div>
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
