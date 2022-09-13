import React from "react";
import ServiceMenu from "./serviceMenu";
import { InfrastructureData } from "./cloudInfrastructure/infrstructureData";

interface IProps {
  data?: typeof InfrastructureData;
}

const ServiceSectionWrapper: React.FC<IProps> = ({ children, data }) => {
  return (
    <section className="serviceSection">
      <div className="container">
        <ServiceMenu menuArray={data.menu} />
        {children}
      </div>
    </section>
  );
};

export default ServiceSectionWrapper;
