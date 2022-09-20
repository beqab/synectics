import React, { useContext, useRef, useState } from "react";
import StepsNavigation from "../common/stepsNavigation";
import StepsContainer from "../common/stepsContainer";
import { useSelector } from "react-redux";
import { PriceCalculatorContext } from "../priceContainerContext";

interface IProps {
  title: string;
  description: string;
  options: string[];
  stepKey: string;
  withOtherBlock: boolean;
}

function Choice({ title, description, options, stepKey, withOtherBlock }) {
  const { setValues, values } = useContext(PriceCalculatorContext);
  const [extraValue, setExtraValue] = useState("");
  const [showOtherBlock, setShowOtherBlock] = useState(false);
  console.log(stepKey, "key");

  const inputRef = useRef(null);

  let value = values[stepKey] ? values[stepKey] : [];
  return (
    <>
      <StepsContainer title={title} description={description}>
        <div className="d-flex flex-wrap">
          {/* <div
            onClick={() => {
              console.log(values, "vvvvvvvvvvv");
            }}
          >
            tet
          </div> */}
          {options.map((el, i) => {
            return (
              <label
                key={i}
                onChange={() => {
                  if (value?.includes(el)) {
                    setValues({
                      ...values,
                      [stepKey]: value.filter((item) => el !== item),
                    });
                  } else {
                    setValues({ ...values, [stepKey]: [...value, el] });
                  }
                }}
                className="checkboxContainer"
              >
                <input type="checkbox" checked={value?.includes(el)} />
                <span className="label">{el}</span>

                <span className="checkmark"></span>
              </label>
            );
          })}
          {withOtherBlock ? (
            <label
              onChange={() => {
                setShowOtherBlock(!showOtherBlock);
              }}
              className="checkboxContainer"
            >
              <input type="checkbox" checked={showOtherBlock} />
              <span className="label">{"Other"}</span>

              <span className="checkmark"></span>
            </label>
          ) : null}
        </div>
        {showOtherBlock ? (
          <div
            onClick={() => {
              inputRef.current.focus();
            }}
            className="addExtraOptions_container"
          >
            {value
              .filter((el) => !options.includes(el))
              .map((el) => {
                return (
                  <span
                    className="pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setValues({
                        ...values,
                        [stepKey]: value.filter((item) => item !== el),
                      });
                    }}
                  >
                    #{el}
                  </span>
                );
              })}

            <input
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setValues({ ...values, [stepKey]: [...value, extraValue] });
                  setExtraValue("");
                }
              }}
              value={extraValue}
              type={"text"}
              onChange={(e) => {
                setExtraValue(e.target.value);
              }}
            />
          </div>
        ) : null}
      </StepsContainer>
    </>
  );
}

export default Choice;
