import React from "react";

interface IServiceSlider {
  data: any[];
  ServiceItem: React.JSXElementConstructor<any>;
}

const ServiceSlider: React.FC<IServiceSlider> = ({ data, ServiceItem }) => {
  return (
    <div className="serviceSliderWrapper">
      <div className="sliderContainer">
        <div></div>
        {data.map((el, i) => {
          return <ServiceItem />;
        })}
        <div></div>
      </div>
    </div>
  );
};

export default ServiceSlider;
