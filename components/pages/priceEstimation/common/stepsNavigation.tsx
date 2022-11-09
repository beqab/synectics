import React, { useContext } from "react";
import { PriceCalculatorContext } from "../priceContainerContext";

const StepsNavigation: React.FC = ({ children }) => {
  const { currentStepIndex, setCurrentStepIndex, values } = useContext(
    PriceCalculatorContext
  );
  return (
    <div>
      <div className="stepsIndicator">
        Step <span>{currentStepIndex + 1}</span>/4
      </div>
      {children}
      <div className="d-flex  justify-content-between mt-5 stepsController ">
        <div>
          {currentStepIndex > 0 ? (
            <button
              onClick={() => {
                setCurrentStepIndex(currentStepIndex - 1);
              }}
              className="btn stepPrevBtn "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5304 4.46967C10.8232 4.76256 10.8232 5.23744 10.5304 5.53033L6.53035 9.53033C6.23746 9.82322 5.76259 9.82322 5.46969 9.53033C5.1768 9.23744 5.1768 8.76256 5.46969 8.46967L9.46969 4.46967C9.76259 4.17678 10.2375 4.17678 10.5304 4.46967ZM2.30711 11.7129C2.4232 11.4327 2.69668 11.2499 3.00002 11.2499H21C21.4142 11.2499 21.75 11.5857 21.75 11.9999C21.75 12.4141 21.4142 12.7499 21 12.7499H4.81068L10.5304 18.4696C10.8232 18.7625 10.8232 19.2374 10.5304 19.5303C10.2375 19.8232 9.76259 19.8232 9.46969 19.5303L2.46969 12.5303C2.25519 12.3158 2.19103 11.9932 2.30711 11.7129Z"
                  fill="white"
                />
              </svg>
              <span>Back</span>
            </button>
          ) : null}
        </div>
        <div>
          {currentStepIndex < 5 ? (
            <button
              onClick={() => {
                setCurrentStepIndex(currentStepIndex + 1);
              }}
              className="btn btn-primary btn-primary-fill stepNextBtn"
            >
              Next
            </button>
          ) : null}
          {currentStepIndex === 5 ? (
            <button
              onClick={() => {
                console.log(values, "valuesvalues");
                setCurrentStepIndex(currentStepIndex + 1);
              }}
              className="btn btn-primary btn-primary-fill stepNextBtn"
            >
              Submit
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StepsNavigation;
