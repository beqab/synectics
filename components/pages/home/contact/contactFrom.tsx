import React, { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormGroup, Button, Input } from "../../../common/form";
import classnames from "classnames";
// import { ProfileService } from "../../../services/profile/profile.http";
import { ToastContainer, toast } from "react-toastify";

interface IContactForm {
  name: string;
  last_name: string;
  text: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}

interface IErrorMsg {
  email?: string | Array<string>;
  phoneNumber?: string | Array<string>;
  countryCode?: string | Array<string>;
  name?: string | Array<string>;
  text?: string | Array<string>;
  last_name?: string | Array<string>;
}

function Contact() {
  const [load, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    getValues,

    formState: { errors },
  } = useForm<IContactForm>();

  // const;

  const submit = handleSubmit((data) => {
    // console.log(errors);
    // ProfileService.contactForm({
    //   firstname: data.name,
    //   lastname: data.last_name,
    //   email: data.email,
    //   text: data.text,
    // })
    //   .then((res) => {
    //     // alert("saved");
    //     let rr = t("contacteSendSusses");
    //     debugger;
    //     toast.success(rr, {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //     reset({ name: "", last_name: "", email: "", text: "" });
    //   })
    //   .catch((err) => {
    //     // console.log("err");
    //     let rr = t("contacteSendError");
    //     toast.error(rr, {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   });
    console.log(data);
  });
  // console.log(watch("name"), "getValues");

  const selectRef = useRef(null);
  return (
    <form onSubmit={submit} className="contactSection_from">
      <ToastContainer />

      <div className="d-flex twoLineFrom">
        <FormGroup
          className={classnames("marginRight", {
            labelTop: !!watch("name"),
          })}
          Label={"First Name"}
          errorMessage={errors?.name ? errors.name.message : ""}
          htmlFor="firstName"
        >
          <Input
            id="firstName"
            className="marginRight"
            useRef={register("name")}
            type="name"
            hasError={!!errors?.name}
            // placeholder={t("name")}
            {...register("name", {
              required: "nameError",
            })}
            //   autocomplete="off"
          />
        </FormGroup>

        <FormGroup
          Label={"Last Name"}
          errorMessage={errors?.last_name ? errors.last_name.message : ""}
          htmlFor="firstName"
          className={classnames("marginRight", {
            labelTop: !!watch("last_name"),
          })}
        >
          <Input
            useRef={register("last_name")}
            //   autocomplete="off"
            id="firstName"
            type="last_name"
            hasError={!!errors?.last_name}
            // placeholder={t("surname")}
            {...register("last_name", {
              required: "is require",
            })}
          />
        </FormGroup>
      </div>
      <FormGroup
        htmlFor="Email"
        Label={"Email"}
        errorMessage={
          errors?.email?.message
            ? errors?.email?.message
            : errors?.email?.type === "pattern"
            ? "mailError2"
            : ""
        }
        className={classnames({
          labelTop: !!watch("email"),
        })}
      >
        <Input
          id="Email"
          type="text"
          name={"email"}
          //   autocomplete="off"
          //   placeholder={t("mail")}
          hasError={!!errors?.email}
          onChange={() => {
            //   clearError("email");
            //   setUnVerify(false);
          }}
          useRef={register("email")}
          {...register("email", {
            required: "mailError",
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </FormGroup>

      <div className="d-flex align-items-center phoneForm">
        <div className="selectWrapper">
          <FormGroup
            // Label={"Country Code"}
            className={classnames({
              labelTop: !!watch("countryCode"),
            })}
            htmlFor="countryCode"
          >
            <select
              id="countryCode"
              {...register("countryCode", {
                required: "surnameError",
              })}
              ref={selectRef}
              // useRef={register("countryCode")}
            >
              <option className="d-none" value={""}></option>

              <option value={995}>Geo +995</option>
              <option value={993}>Geo +993</option>
            </select>
            <label
              onClick={() => {
                selectRef.current.focus();
              }}
              className="form-control-label"
            >
              Country Code
            </label>
            <div className="selectLineBorder"></div>
          </FormGroup>
        </div>
        <FormGroup
          Label={"Phone Number"}
          htmlFor="phoneNumber"
          errorMessage={errors?.text ? errors.text.message : ""}
          className={classnames({
            labelTop: !!watch("phoneNumber"),
          })}
        >
          <Input
            useRef={register("phoneNumber")}
            //   autocomplete="off"
            id="phoneNumber"
            type="phoneNumber"
            hasError={!!errors?.phoneNumber}
            // placeholder={t("surname")}
            {...register("phoneNumber", {
              required: "surnameError",
            })}
          />
        </FormGroup>
      </div>
      <div className="fileUpload">
        <div>
          <span>Tell us about your Project </span>
          <div className="btn">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.252 2.77247C12.9128 2.75145 12.4675 2.75001 11.7801 2.75001H11.502C10.3268 2.75001 9.48306 2.75042 8.81723 2.79585C8.15813 2.84082 7.72836 2.92739 7.37555 3.07352C6.33418 3.50487 5.50681 4.33224 5.07547 5.37361C4.92933 5.72642 4.84276 6.15619 4.79779 6.81529C4.75236 7.48112 4.75195 8.3249 4.75195 9.50001V10C4.75195 10.4142 4.41617 10.75 4.00195 10.75C3.58774 10.75 3.25195 10.4142 3.25195 10V9.50001V9.47217C3.25195 8.33088 3.25195 7.43605 3.30127 6.71318C3.35145 5.97771 3.45518 5.36563 3.68965 4.79958C4.27324 3.39067 5.39261 2.2713 6.80152 1.68771C7.36757 1.45324 7.97965 1.34951 8.71512 1.29933C9.43799 1.25001 10.3328 1.25001 11.4741 1.25001H11.502H11.7801L11.8718 1.25001C12.9167 1.24989 13.5599 1.24983 14.1756 1.38635C14.8303 1.53152 15.4546 1.79011 16.0202 2.15042C16.5521 2.48926 17.0069 2.94412 17.7456 3.68301L17.8105 3.74786L18.1891 4.12654L18.2592 4.19655L18.2592 4.19657C19.0572 4.99441 19.5486 5.48565 19.9046 6.06671C20.2199 6.58118 20.4522 7.14206 20.5931 7.72877C20.7522 8.39143 20.7521 9.08624 20.752 10.2147L20.752 10.3137V14V14.0336V14.0336C20.752 15.4053 20.752 16.4807 20.6813 17.3451C20.6094 18.2252 20.4606 18.9523 20.1252 19.6105C19.574 20.6924 18.6943 21.572 17.6124 22.1233C16.9543 22.4586 16.2272 22.6075 15.347 22.6794C14.4827 22.75 13.4073 22.75 12.0356 22.75H12.0355H12.002H11.502H11.4741C10.3328 22.75 9.43799 22.75 8.71512 22.7007C7.97965 22.6505 7.36757 22.5468 6.80152 22.3123C5.39261 21.7287 4.27324 20.6094 3.68965 19.2004C3.45518 18.6344 3.35145 18.0223 3.30127 17.2868C3.25195 16.564 3.25195 15.6691 3.25195 14.5279V14.5V14C3.25195 13.5858 3.58774 13.25 4.00195 13.25C4.41617 13.25 4.75195 13.5858 4.75195 14V14.5C4.75195 15.6751 4.75236 16.5189 4.79779 17.1847C4.84276 17.8438 4.92933 18.2736 5.07547 18.6264C5.50681 19.6678 6.33418 20.4952 7.37555 20.9265C7.72836 21.0726 8.15813 21.1592 8.81723 21.2042C9.48306 21.2496 10.3268 21.25 11.502 21.25H12.002C13.4145 21.25 14.4287 21.2494 15.2249 21.1844C16.0122 21.1201 16.52 20.9964 16.9314 20.7868C17.7311 20.3793 18.3813 19.7292 18.7887 18.9295C18.9984 18.518 19.122 18.0103 19.1863 17.2229C19.2514 16.4268 19.252 15.4125 19.252 14V10.3137C19.252 9.05507 19.2471 8.54798 19.1345 8.07894C19.0304 7.64528 18.8587 7.23072 18.6257 6.85046C18.3736 6.43917 18.0185 6.0772 17.1285 5.1872L16.7498 4.80852C15.9258 3.98455 15.5908 3.65537 15.2143 3.41553C15.0654 3.32066 14.9109 3.23533 14.752 3.15993V6.00004C14.752 6.6904 15.3116 7.25004 16.002 7.25004H17.002C17.4162 7.25004 17.752 7.58583 17.752 8.00004C17.752 8.41426 17.4162 8.75004 17.002 8.75004H16.002C14.4832 8.75004 13.252 7.51883 13.252 6.00004V2.77247ZM11.4716 10.4698C11.7645 10.1769 12.2394 10.1769 12.5323 10.4698L15.0323 12.9698C15.3252 13.2627 15.3252 13.7376 15.0323 14.0305C14.7394 14.3234 14.2645 14.3234 13.9716 14.0305L12.752 12.8108V17.0001C12.752 17.4143 12.4162 17.7501 12.002 17.7501C11.5877 17.7501 11.252 17.4143 11.252 17.0001V12.8108L10.0323 14.0305C9.73939 14.3234 9.26452 14.3234 8.97162 14.0305C8.67873 13.7376 8.67873 13.2627 8.97162 12.9698L11.4716 10.4698Z"
                fill="#1C55E9"
              />
            </svg>
            Upload Files
          </div>
        </div>
      </div>
      <div className="btn_wrapper">
        <Button
          loading={load}
          className="btn btn-primary btn-primary-fill w-100 mt-3 py-2"
        >
          Message US
        </Button>
      </div>
    </form>
  );
}

export default Contact;
