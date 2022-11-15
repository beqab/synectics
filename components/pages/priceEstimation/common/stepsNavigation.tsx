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
          <button
            disabled={currentStepIndex <= 0}
            onClick={() => {
              if (currentStepIndex <= 0) {
                return;
              }

              setCurrentStepIndex(currentStepIndex - 1);
            }}
            className="btn stepPrevBtn "
          >
            <span>Back</span>
          </button>
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
