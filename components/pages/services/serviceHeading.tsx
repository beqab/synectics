import React from "react";

interface IProps {
  icon?: React.ReactNode;
  title?: string;
  text?: string;
}

const serviceHeading: React.FC<IProps> = ({ icon, title, text }) => {
  return (
    <div className="serviceHeading">
      <div className="content">
        {icon}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default serviceHeading;
