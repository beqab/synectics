import React from "react";
import ServiceMenu from "./serviceMenu";

const ServiceSectionWrapper: React.FC = ({ children }) => {
  return (
    <section className="serviceSection">
      <div className="container">
        <ServiceMenu />
        {children}
      </div>
    </section>
  );
};

export default ServiceSectionWrapper;
