import { createContext, useState } from "react";
import { priceCalculatorObject } from "./priceCalculator";

interface IState {
  currentStepIndex: number;
  setCurrentStepIndex: (d: number) => void;
  setValues: (d: number) => void;
  values: any;
  priceCalculatorObject: typeof priceCalculatorObject;
}
export const PriceCalculatorContext = createContext<IState>({
  currentStepIndex: 0,
  values: {},
  setCurrentStepIndex: (d) => null,
  setValues: (d) => null,
  priceCalculatorObject,
});

export const PriceCalculatorProvider = ({ children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [values, setValues] = useState<any>({});

  return (
    <PriceCalculatorContext.Provider
      value={{
        currentStepIndex,
        priceCalculatorObject: priceCalculatorObject,
        values,
        setValues,
        setCurrentStepIndex: (d) => {
          setCurrentStepIndex(d);
        },
      }}
    >
      {children}
    </PriceCalculatorContext.Provider>
  );
};
