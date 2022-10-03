import React from "react";

const Approach = () => {
  return (
    <div className="container ourApproach_wrapper ">
      <div className="imgContainer d-none d-md-block">
        <img src="/imgs/Ñëîé 3.svg" />
      </div>
      <div className="ourApproach_heading">
        <h2>Our Approach</h2>
        <p>
          We employ best practices and development methodologies for building
          effective enterprise IT process and solutions in a structured and
          systematic way.
        </p>
      </div>
      <div className="ourApproach_steps">
        <div className="ourApproach_step ourApproach_step-step1">
          <h4>YOUR IDEA</h4>
          <p>
            We collect all the relevant information from the customer to develop
            custom solutions as per their expectation.
          </p>
        </div>
        <div className="ourApproach_step ourApproach_step-step2">
          <h4>ANALYZE </h4>
          <p>
            The system and documents are prepared as per the requirement
            specifications. This helps us define overall system architecture and
            technology stack
          </p>
        </div>
        <div className="ourApproach_step ourApproach_step-step3">
          <h4>PROJECT KICK OFF</h4>
          <p>
            Once the requirement analysis phase is completed, the next step is
            to define and document software needs
          </p>
        </div>
        <div className="ourApproach_step ourApproach_step-step4">
          <h4>DESIGN & DEVELOP</h4>
          <p>
            Developers start to build the entire system by writing code using
            the chosen programming language, techniques, and methodologies.
          </p>
        </div>
        <div className="ourApproach_step ourApproach_step-step5">
          <h4>TESTING </h4>
          <p>
            Evaluating the quality of software with the aim of finding and
            fixing defects.
          </p>
        </div>
        <div className="ourApproach_step ourApproach_step-step6">
          <h4>DELIVERY </h4>
          <p>
            The final software is released and checked for deployment issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
