import React, { useContext, useState } from "react";
import { FormGroup, Input } from "../../../common/form";
import StepsContainer from "../common/stepsContainer";
import { PriceCalculatorContext } from "../priceContainerContext";
import classNames from "classnames";

function ContactInfo({
  title,
  description,
  stepKey,
}: {
  title: string;
  description: string;
  stepKey: string;
}) {
  const { values, setValues } = useContext(PriceCalculatorContext);

  const value = values[stepKey]
    ? values[stepKey]
    : { firstName: "", lastName: "", Email: "" };

  return (
    <StepsContainer title={title} description={description}>
      <div className="">
        <div className="ContactInfo_form">
          <div className="d-flex justify-content-between">
            <FormGroup
              htmlFor="firstName"
              className={classNames("mr-3", {
                labelTop: value.firstName,
              })}
              Label={"firstName"}
            >
              <Input
                value={value.firstName}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [stepKey]: { ...value, firstName: e.target.value },
                  });
                }}
                id="firstName"
              />
            </FormGroup>
            <FormGroup
              htmlFor="lastName"
              className={classNames("mr-3", {
                labelTop: value.lastName,
              })}
              Label={"lastName"}
            >
              <Input
                value={value.lastName}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [stepKey]: { ...value, lastName: e.target.value },
                  });
                }}
                id="lastName"
              />
            </FormGroup>
          </div>
          <FormGroup
            htmlFor="Email"
            className={classNames("mr-3", {
              labelTop: value.Email,
            })}
            Label={"Email"}
          >
            <Input
              value={value.Email}
              onChange={(e) => {
                setValues({
                  ...values,
                  [stepKey]: { ...value, Email: e.target.value },
                });
              }}
              type="email"
              id="Email"
            />
          </FormGroup>
          <div className="d-flex justify-content-between">
            <FormGroup
              htmlFor="countryCode"
              className={classNames("selectWrapper", {
                labelTop: value.countryCode,
              })}
              Label={"Country Code"}
            >
              <select
                onChange={(e) => {
                  setValues({
                    ...values,
                    [stepKey]: { ...value, countryCode: e.target.value },
                  });
                }}
                id="countryCode"
                value={value.countryCode}
              >
                <option className="d-none" value={""}></option>

                <option value={"+995"}>+995</option>
                <option value={"+994"}>+994</option>
                <option value={"+993"}>+993</option>
              </select>
              <div className="selectLine"></div>
            </FormGroup>
            <FormGroup
              className={classNames("w-50", {
                labelTop: value.phoneNumber,
              })}
              htmlFor="phoneNumber"
              Label={"Phone Number"}
            >
              <Input
                value={value.phoneNumber}
                onChange={(e) => {
                  setValues({
                    ...values,
                    [stepKey]: { ...value, phoneNumber: e.target.value },
                  });
                }}
                type="number"
                id="phoneNumber"
              />
            </FormGroup>
          </div>
          <FormGroup
            htmlFor="CompanyName"
            className={classNames("mr-3", {
              labelTop: value.CompanyName,
            })}
            Label={"Company Name"}
          >
            <Input
              value={value.CompanyName}
              onChange={(e) => {
                setValues({
                  ...values,
                  [stepKey]: { ...value, CompanyName: e.target.value },
                });
              }}
              id="CompanyName"
            />
          </FormGroup>
        </div>
      </div>
    </StepsContainer>
  );
}

export default ContactInfo;
