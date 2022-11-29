import React, { useContext } from "react";
import Slider from "./stepTypes/slider";
import { PriceCalculatorContext } from "./priceContainerContext";
import Choice from "./stepTypes/choice";
import DependingChoice from "./stepTypes/dependingChoice";
import FirstStep from "./stepTypes/firstStep";
import TextArea from "./stepTypes/textarea";
import ContactInfo from "./stepTypes/contactInfo";
import CompleteStep from "./stepTypes/completeStep";
import { categories } from "../home/technologies";
import { TechnologiesObject } from "../home/technologies";

export const priceCalculatorObject = [
  // {
  //   title: "What can we help you with?",
  //   description: "Please select at least one option.",
  //   type: "fistStep",
  //   key: null,
  // },
  {
    title: "What can we help you with?",
    description: "Please select at least one option.",
    type: "choice",
    key: "service",
    withOtherBlock: false,
    options: categories,
  },
  {
    title: "Any specific technologies you’re looking for?",
    description: "Please select at least one option.",
    type: "dependingChoice",
    key: "technologies",
    withOtherBlock: true,
    dependingChoice: true,
    options: TechnologiesObject,
  },
  {
    title: "What is your project's expected duration?",
    description: "Please choose expected duration.",
    type: "slider",
    key: "expectedDuration",
  },
  // {
  //   title: "Tell us more about your Project",
  //   description:
  //     "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  //   type: "textarea",
  //   key: "aboutProject",
  // },
  {
    title: "Leave us your contact Info",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    type: "aboutInfo",
    key: "contactInfo",
  },
  {
    title: "Leave us your contact Info",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    type: "completePage",
    key: "contactInfo",
  },
];

const PriceCalculator = () => {
  const { currentStepIndex, setCurrentStepIndex } = useContext(
    PriceCalculatorContext
  );
  const currentStep = priceCalculatorObject[currentStepIndex];

  switch (currentStep.type) {
    case "fistStep":
      return <FirstStep setCurrentStepIndex={setCurrentStepIndex} />;
    case "choice":
      return (
        <Choice
          options={currentStep.options}
          stepKey={currentStep.key}
          title={currentStep.title}
          description={currentStep.description}
          withOtherBlock={currentStep.withOtherBlock}
          dependingChoice={currentStep.dependingChoice}
        />
      );
    case "dependingChoice":
      return (
        <DependingChoice
          options={currentStep.options}
          stepKey={currentStep.key}
          title={currentStep.title}
          description={currentStep.description}
          withOtherBlock={currentStep.withOtherBlock}
          dependingChoice={currentStep.dependingChoice}
        />
      );
    case "slider":
      return (
        <Slider
          stepKey={currentStep.key}
          title={currentStep.title}
          description={currentStep.description}
        />
      );
    case "textarea":
      return (
        <TextArea
          title={currentStep.title}
          description={currentStep.description}
          stepKey={currentStep.key}
        />
      );
    case "aboutInfo":
      return (
        <ContactInfo
          title={currentStep.title}
          description={currentStep.description}
          stepKey={currentStep.key}
        />
      );

    case "completePage":
      return <CompleteStep />;
    default:
      return (
        <div>
          <h1>step : {currentStepIndex}</h1>
        </div>
      );
  }
};

export default PriceCalculator;
