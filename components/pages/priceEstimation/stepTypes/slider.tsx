import React, { useContext } from "react";
import StepsContainer from "../common/stepsContainer";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import TooltipSlider, { handleRender } from "../common/Test";
import { PriceCalculatorContext } from "../priceContainerContext";

const marks = {
  1: <strong className="SliderLabel">1 Month</strong>,
  6: <strong className="SliderLabel">6 Month</strong>,
  12: <strong className="SliderLabel">1 Year</strong>,
  18: <strong className="SliderLabel">1.5 Years</strong>,
  24: <strong className="SliderLabel">2 Years</strong>,

  // 100: {
  //   style: {
  //     color: "red",
  //   },
  //   label: <strong>100°C</strong>,
  // },
};

function SliderComponent({
  title,
  description,
  stepKey,
}: {
  title: string;
  description: string;
  stepKey: string;
}) {
  const { values, setValues } = useContext(PriceCalculatorContext);

  return (
    <div>
      <StepsContainer title={title} description={description}>
        <div className="stepSlider_container">
          <Slider
            min={1}
            marks={marks}
            max={24}
            step={1}
            // included={false}
            defaultValue={1}
            onChange={(e) => {
              console.log(e, "eee");
              setValues({ ...values, [stepKey]: e });
            }}
            // handleRender={(handlerProps) => (
            //   <Handle {...handlerProps}>
            //     <div> ddd </div>
            //   </Handle>
            // )}
            handleRender={handleRender}
          />
        </div>
      </StepsContainer>
      <div
        onClick={() => {
          console.log(values, "valuesvaluesvalues");
        }}
        className=""
      >
        get values
      </div>
    </div>
  );
}

export default SliderComponent;
