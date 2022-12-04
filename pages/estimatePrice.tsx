import React, { useContext } from "react";
import Layout from "../components/Layout";
import PriceCalculator from "../components/pages/priceEstimation/priceCalculator";
import { PriceCalculatorContext } from "../components/pages/priceEstimation/priceContainerContext";

const EstimatePrice = () => {
  //   const { currentStep, setCurrentStep } = useContext(PriceCalculatorContext);

  return (
    <Layout>
      <section className="estimatePricePage">
        <div className=" container">
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <PriceCalculator />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EstimatePrice;
