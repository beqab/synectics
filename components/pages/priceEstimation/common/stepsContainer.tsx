import React from "react";
import StepsNavigation from "./stepsNavigation";

interface IProps {
  title: string;
  description: string;
}

const StepsContainer: React.FC<IProps> = ({ title, description, children }) => {
  return (
    <>
      <div className="mt-4 stepsLeftSide">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="stepBlank_container">
        <StepsNavigation>{children}</StepsNavigation>
      </div>
    </>
  );
};

export default StepsContainer;
