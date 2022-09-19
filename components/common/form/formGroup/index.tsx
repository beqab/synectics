import React, { Children } from "react";
import classnames from "classnames";

interface IFormGroup {
  Label?: string | JSX.Element;
  errorMessage?: string | Array<string>;
  className?: string;
  htmlFor?: string;
}

export const FormGroup: React.FC<IFormGroup> = ({
  children,
  Label,
  errorMessage,
  className,
  htmlFor,
}) => {
  return (
    <div className={classnames("form-group", { [className]: className })}>
      {children}
      {typeof Label === "string" ? (
        <label htmlFor={htmlFor} className="form-control-label">
          {Label}
        </label>
      ) : (
        Label
      )}
      <div className="invalid-feedback">
        {typeof errorMessage === "object" ? errorMessage[0] : errorMessage}
      </div>
    </div>
  );
};
