import React from "react";
import StepsContainer from "../common/stepsContainer";

function ContactInfo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <StepsContainer title={title} description={description}>
      <div>
        {/* <ContactInfo>tfdg</ContactInfo> */}
        contact info
      </div>
    </StepsContainer>
  );
}

export default ContactInfo;
