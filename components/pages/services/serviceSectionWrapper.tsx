import React from "react";
import ServiceMenu from "./serviceMenu";
import { EngineeringData } from "./engineering/engineeringData";

interface IProps {
  data?: typeof EngineeringData;
  menuCenter?: boolean;
}

const ServiceSectionWrapper: React.FC<IProps> = ({
  children,
  data,
  menuCenter,
}) => {
  return (
    <section className="serviceSection">
      <div className="container">
        <ServiceMenu center={menuCenter} serviceList={data} />
      </div>
      {children}
    </section>
  );
};

export default ServiceSectionWrapper;
