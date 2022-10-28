import React from "react";
import ServiceMenu from "./serviceMenu";
import { EngineeringData } from "./engineering/engineeringData";

interface IProps {
  data?: typeof EngineeringData;
  menuCenter?: boolean;
  pageTitle?: string;
}

const ServiceSectionWrapper: React.FC<IProps> = ({
  children,
  data,
  menuCenter,
  pageTitle,
}) => {
  return (
    <section className="serviceSection roundBottom roundBottom-top">
      <div className="container">
        <ServiceMenu
          pageTitle={pageTitle}
          center={menuCenter}
          serviceList={data}
        />
      </div>
      {children}
    </section>
  );
};

export default ServiceSectionWrapper;
