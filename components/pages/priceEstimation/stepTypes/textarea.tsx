import React from "react";
import StepsContainer from "../common/stepsContainer";

function TextArea({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <StepsContainer title={title} description={description}>
      <div>
        <textarea>tfdg</textarea>
      </div>
    </StepsContainer>
  );
}

export default TextArea;
