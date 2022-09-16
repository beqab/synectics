import React from "react";
import ServiceMenu from "./serviceMenu";
import { EngineeringData } from "./engineering/engineeringData";

interface IProps {
  data?: typeof EngineeringData;
}

const ServiceSectionWrapper: React.FC<IProps> = ({ children, data }) => {
  return (
    <section className="serviceSection">
      <div className="container">
        <ServiceMenu serviceList={data} />
      </div>
      {children}
    </section>
  );
};

export default ServiceSectionWrapper;
