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
      <div className="d-flex  ">
        <div className="engineeringBlock_description">
          <h2>{title}</h2>
          <p>
            We at Synectics, have a very well-coordinated and dynamic delivery
            team who can perfectly harmonize the advanced, scalable solutions to
            make your business stand apart from the crowd. Starting from
            building the digital establishment for your business to
            incorporating the best engineering productivity tools and practices
            into your software platform - we do it all with the utmost
            efficiency.
          </p>
          <h3>We can help you with</h3>
          <ul>
            <li>Analysis and Consulting</li>
            <li>UI/UX</li>
            <li>Custom Web Solution Development</li>
            <li>MVP Development</li>
            <li>SaaS Application Development</li>
            <li>Cloud Native Applications Development</li>
          </ul>
        </div>
        <div className="engineeringBlock_technologyList_wrapper">
          <h4>Technologies</h4>
          <div className="engineeringBlock_technologyList">
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
            <div>
              <img src="/imgs/php.svg" />
            </div>
          </div>
        </div>
      </div>
    </ServiceBlockContainer>
  );
};

export default EngineeringBlock;
