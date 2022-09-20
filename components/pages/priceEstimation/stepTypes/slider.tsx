import React from "react";
import StepsContainer from "../common/stepsContainer";

function Slider({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <StepsContainer title={title} description={description}>
      <div>Slider</div>
    </StepsContainer>
  );
}

export default Slider;
