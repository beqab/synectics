import React from "react";
import classNames from "classnames";
interface IProps {
  className: string;
  subTitle: string;
}

const ServiceBlockContainer: React.FC<IProps> = ({
  children,
  className,
  subTitle,
}) => {
  return (
    <div
      className={classNames("ServiceBlockContainer", {
        [className]: className,
      })}
    >
      <div className="ServiceBlockContainer_subTitle">{subTitle}</div>
      {children}
    </div>
  );
};

export default ServiceBlockContainer;
