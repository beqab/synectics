import React from "react";
import ServiceBlockContainer from "../common/ServiceBlockContainer";

const EngineeringBlock = ({
  title,
  description,
  weCanHelpWithList,
  technologyList,
}) => {
  return (
    <ServiceBlockContainer subTitle="Services" className="engineeringBlock">
      <h2>{title}</h2>
      <div className="d-flex engineeringBlock_content  ">
        <div className="engineeringBlock_description">
          {description()}
          <h3>We can help you with</h3>
          <ul className="list-unstyle">
            {weCanHelpWithList.map((el, i) => {
              return (
                <li key={i}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#2F80ED" />
                  </svg>

                  <span>{el}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="engineeringBlock_technologyList_wrapper">
          <h4>Technologies</h4>
          <div className="engineeringBlock_technologyList">
            {technologyList.map((el, i) => {
              return (
                <div key={i}>
                  <img src={"/imgs" + el.technologyImg} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ServiceBlockContainer>
  );
};

export default EngineeringBlock;
