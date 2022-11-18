import React, { useContext, useEffect, useRef, useState } from "react";
import StepsNavigation from "../common/stepsNavigation";
import StepsContainer from "../common/stepsContainer";
import { useSelector } from "react-redux";
import { PriceCalculatorContext } from "../priceContainerContext";
import { TechnologiesObject } from "../../home/technologies";
// import { TechnologiesObject } from "../../";

interface IProps {
  title: string;
  description: string;
  options: any;
  stepKey: string;
  withOtherBlock: boolean;
  dependingChoice?: boolean;
}

function Choice({
  title,
  description,
  options,
  stepKey,
  withOtherBlock,
  dependingChoice,
}) {
  const { setValues, values } = useContext(PriceCalculatorContext);
  const [extraValue, setExtraValue] = useState("");
  const [showOtherBlock, setShowOtherBlock] = useState(false);
  console.log(stepKey, "key");

  const [normalizedOptions, setNormalizedOptions] = useState([]);

  //   TechnologiesObject;

  const inputRef = useRef(null);

  let value = values[stepKey] ? values[stepKey] : [];

  useEffect(() => {
    let Ots = TechnologiesObject.filter((el) =>
      values.service.includes(el.categoryName)
    )
      .map((el) => el.TechnologiesList)

      .flat()
      .map((el) => el.title)
      .filter(function (item, pos, a) {
        return a.indexOf(item) == pos;
      });

    setNormalizedOptions(Ots);
    console.log(Ots, "Ots");
  }, [value.service]);
  //
  //   return <div>ddd</div>;
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
          {normalizedOptions.map((el, i) => {
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
              .filter((el) => !normalizedOptions.includes(el))
              .map((el) => {
                return (
                  <span>
                    {el}

                    <svg
                      className="pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setValues({
                          ...values,
                          [stepKey]: value.filter((item) => item !== el),
                        });
                      }}
                      width="16"
                      height="16"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_518_3515)">
                        <path
                          d="M11.0827 3.739L10.2602 2.9165L6.99935 6.17734L3.73852 2.9165L2.91602 3.739L6.17685 6.99984L2.91602 10.2607L3.73852 11.0832L6.99935 7.82234L10.2602 11.0832L11.0827 10.2607L7.82185 6.99984L11.0827 3.739Z"
                          fill="#687A9E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_518_3515">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
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
              placeholder="..."
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
