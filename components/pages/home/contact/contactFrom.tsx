import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormGroup, Button, Input } from "../../../common/form";
import classnames from "classnames";
// import { ProfileService } from "../../../services/profile/profile.http";
import { ToastContainer, toast } from "react-toastify";
// import CountryList, {getList, findFlag} from "country-list-with-dial-code-and-flag";
import flags, {
  getList,
  findFlagByDialCode,
} from "country-list-with-dial-code-and-flag";
import countryListMap, { getCountryListMap } from "country-flags-dial-code";
import classNames from "classnames";
import { ProfileService } from "../../../../services/profile/profile.http";

interface IContactForm {
  name: string;
  last_name: string;
  text: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
}

interface IErrorMsg {
  email?: string | Array<string>;
  phoneNumber?: string | Array<string>;
  countryCode?: string | Array<string>;
  name?: string | Array<string>;
  text?: string | Array<string>;
  last_name?: string | Array<string>;
  message?: string | Array<string>;
}

function Contact() {
  const [load, setLoad] = useState(false);
  const [openCountryOptions, setOpenCountryOptions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filesArray, setFilesArray] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IContactForm>();

  // const;

  const submit = handleSubmit((data) => {
    console.log({ ...data, files: filesArray }, " dddddd");
    ProfileService.contact({ ...data, files: filesArray })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "errr");
      });
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

  const getCountryOptions = () => {
    let countries = getCountryListMap();

    let list = [];

    for (var key in countries) {
      if (
        countries[key]?.country?.toLowerCase().includes(searchValue) ||
        countries[key]?.dialCode?.toLowerCase().includes(searchValue)
      ) {
        list.push(
          <div
            key={key}
            onClick={() => {
              setSelectedCountry(key);
              setOpenCountryOptions(false);
            }}
            className="dropDown_item"
          >
            <div dangerouslySetInnerHTML={{ __html: countries[key].flag }}>
              {/* {} */}
            </div>
            <span>{countries[key].dialCode}</span>
          </div>
        );
      }
    }

    return list;
  };

  const selectRef = useRef(null);

  const fileInputRef = useRef(null);
  useEffect(() => {
    console.log(getCountryListMap(), "CountryListCountryList");
    const closeOptions = () => setOpenCountryOptions(false);
    console.log(findFlagByDialCode("+972"));
    window.addEventListener("click", closeOptions);
    return () => window.removeEventListener("click", closeOptions);
  }, []);

  return (
    <form onSubmit={submit} className="contactSection_from">
      <ToastContainer />

      <FormGroup
        className={classnames("", {
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
        className={classnames("", {
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
        {/* <div className="selectWrapper">
          <FormGroup
            // Label={"Country Code"}
            className={classnames({
              labelTop: !!watch("countryCode"),
            })}
          >
            <select
              id="countryCode"
              {...register("countryCode", {
                required: "surnameError",
              })}
              ref={selectRef}
              onChange={(e) => {
                setValue("countryCode", e.target.value, { shouldTouch: true });
              }}
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
        </div> */}
        <div className="PhoneNumberContainer">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="phoneCodeSelect"
          >
            <div
              onClick={() => {
                setOpenCountryOptions(true);
              }}
              className="PhoneNumberContainer_selected d-flex align-items-center"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: getCountryListMap()[selectedCountry].flag,
                }}
              ></span>
              {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" /> */}
              <span> {getCountryListMap()[selectedCountry]["dialCode"]}</span>
              <svg
                style={{ width: "12px" }}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
                  fill="#525F6A"
                />
              </svg>
            </div>
            <div
              className={classNames("dropDown", {
                isOpen: openCountryOptions,
              })}
            >
              <div className="searchInput">
                <input
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                  placeholder="search"
                />
              </div>
              <div className="options">{getCountryOptions()}</div>
            </div>
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
      </div>
      <div className="fileUpload">
        <div className="textAreaWithFile_container">
          {/* <span>Tell us about your Project </span> */}
          <FormGroup
            errorMessage={errors?.text ? errors.text.message : ""}
            className={classnames("w-100 mb-0", {
              labelTop: !!watch("phoneNumber"),
            })}
          >
            <textarea
              {...register("message", {
                required: "message",
              })}
              placeholder="Tell us about your project"
            ></textarea>
          </FormGroup>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            fileInputRef.current.click();
          }}
          className="btn w-100 uploadBtn"
        >
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.09232 8.40829C8.01306 8.33243 7.91961 8.27295 7.81732 8.23329C7.61443 8.14994 7.38687 8.14994 7.18398 8.23329C7.08169 8.27295 6.98824 8.33243 6.90898 8.40829L5.24232 10.075C5.0854 10.2319 4.99724 10.4447 4.99724 10.6666C4.99724 10.8885 5.0854 11.1014 5.24232 11.2583C5.39924 11.4152 5.61207 11.5034 5.83398 11.5034C6.0559 11.5034 6.26873 11.4152 6.42565 11.2583L6.66732 11.0083V13.1666C6.66732 13.3876 6.75512 13.5996 6.9114 13.7559C7.06768 13.9122 7.27964 14 7.50065 14C7.72166 14 7.93363 13.9122 8.08991 13.7559C8.24619 13.5996 8.33398 13.3876 8.33398 13.1666V11.0083L8.57565 11.2583C8.65312 11.3364 8.74529 11.3984 8.84684 11.4407C8.94839 11.483 9.05731 11.5048 9.16732 11.5048C9.27733 11.5048 9.38625 11.483 9.4878 11.4407C9.58935 11.3984 9.68151 11.3364 9.75898 11.2583C9.83709 11.1808 9.89909 11.0887 9.94139 10.9871C9.9837 10.8856 10.0055 10.7766 10.0055 10.6666C10.0055 10.5566 9.9837 10.4477 9.94139 10.3461C9.89909 10.2446 9.83709 10.1524 9.75898 10.075L8.09232 8.40829ZM14.1673 6.44996C14.1586 6.3734 14.1419 6.29799 14.1173 6.22496V6.14996C14.0773 6.06428 14.0238 5.98551 13.959 5.91663L8.95898 0.916626C8.8901 0.851806 8.81133 0.79836 8.72565 0.758293H8.64232C8.56129 0.714962 8.4742 0.684061 8.38398 0.666626H3.33398C2.67094 0.666626 2.03506 0.930018 1.56622 1.39886C1.09738 1.8677 0.833984 2.50358 0.833984 3.16663V14.8333C0.833984 15.4963 1.09738 16.1322 1.56622 16.6011C2.03506 17.0699 2.67094 17.3333 3.33398 17.3333H11.6673C12.3304 17.3333 12.9662 17.0699 13.4351 16.6011C13.9039 16.1322 14.1673 15.4963 14.1673 14.8333V6.49996C14.1673 6.49996 14.1673 6.49996 14.1673 6.44996ZM9.16732 3.50829L11.3257 5.66663H10.0007C9.77964 5.66663 9.56768 5.57883 9.4114 5.42255C9.25512 5.26627 9.16732 5.05431 9.16732 4.83329V3.50829ZM12.5007 14.8333C12.5007 15.0543 12.4129 15.2663 12.2566 15.4225C12.1003 15.5788 11.8883 15.6666 11.6673 15.6666H3.33398C3.11297 15.6666 2.90101 15.5788 2.74473 15.4225C2.58845 15.2663 2.50065 15.0543 2.50065 14.8333V3.16663C2.50065 2.94561 2.58845 2.73365 2.74473 2.57737C2.90101 2.42109 3.11297 2.33329 3.33398 2.33329H7.50065V4.83329C7.50065 5.49633 7.76404 6.13222 8.23288 6.60106C8.70172 7.0699 9.33761 7.33329 10.0007 7.33329H12.5007V14.8333Z"
              fill="#2F80ED"
            />
          </svg>
          Upload Files
          <input
            ref={fileInputRef}
            onChange={(e) => {
              console.log(e.target.files, "e.target.files");
              // setImage(URL.createObjectURL(e.target.files[0]));

              const toBase64 = (file) =>
                new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => resolve(reader.result);
                  reader.onerror = (error) => reject(error);
                });

              async function Main() {
                const file = e.target.files[0];
                let fileString = await toBase64(file);
                setFilesArray([
                  ...filesArray,
                  { name: e.target.files[0].name, fileString },
                ]);
                // ProfileService.uploadImage({
                //   base64: fileString,
                // })
                //   .then((res) => {
                //     let newUSer = {
                //       ...user,
                //       profile_image: res.data.profileImage,
                //     };
                //     dispatch(setCurrentUser({ user: newUSer }));
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //   });
              }

              Main();
            }}
            className="d-none"
            type={"file"}
          />
          {/* Upload Files */}
        </div>
      </div>
      {filesArray.length ? (
        <div className="stepUploadedFiles">
          {filesArray.map((el, p) => {
            return (
              <span className="coloBlack">
                {el.name}
                <svg
                  key={p}
                  onClick={() => {
                    setFilesArray(
                      filesArray.filter((item) => item.name !== el.name)
                    );
                  }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0019 0.917016L9.83806 0.917004C7.8233 0.916784 6.63083 0.916653 5.63884 1.22943C3.53848 1.89167 1.89325 3.53689 1.23101 5.63725C0.91824 6.62924 0.91837 7.82171 0.918591 9.83647L0.918602 10.0003L0.918591 10.1642C0.91837 12.179 0.91824 13.3715 1.23101 14.3634C1.89325 16.4638 3.53848 18.109 5.63884 18.7713C6.63083 19.084 7.82329 19.0839 9.83804 19.0837L10.0019 19.0837L10.1658 19.0837C12.1806 19.0839 13.373 19.084 14.365 18.7713C16.4654 18.109 18.1106 16.4638 18.7729 14.3634C19.0856 13.3715 19.0855 12.179 19.0853 10.1642L19.0853 10.0003L19.0853 9.83646C19.0855 7.8217 19.0856 6.62924 18.7729 5.63725C18.1106 3.53689 16.4654 1.89167 14.365 1.22943C13.373 0.916653 12.1806 0.916784 10.1658 0.917004L10.0019 0.917016ZM6.0899 2.66C6.8328 2.42577 7.77404 2.41702 10.0019 2.41702C12.2298 2.41702 13.1711 2.42577 13.914 2.66C15.5476 3.17508 16.8272 4.4547 17.3423 6.08831C17.5765 6.83121 17.5853 7.77246 17.5853 10.0003C17.5853 12.2282 17.5765 13.1695 17.3423 13.9124C16.8272 15.546 15.5476 16.8256 13.914 17.3407C13.1711 17.5749 12.2298 17.5837 10.0019 17.5837C7.77404 17.5837 6.8328 17.5749 6.0899 17.3407C4.45629 16.8256 3.17666 15.546 2.66159 13.9124C2.42735 13.1695 2.4186 12.2282 2.4186 10.0003C2.4186 7.77246 2.42735 6.83121 2.66159 6.08831C3.17666 4.4547 4.45629 3.17508 6.0899 2.66ZM7.19893 6.13668C6.90604 5.84379 6.43117 5.84379 6.13827 6.13668C5.84538 6.42958 5.84538 6.90445 6.13827 7.19734L8.94128 10.0003L6.13827 12.8034C5.84538 13.0962 5.84538 13.5711 6.13827 13.864C6.43117 14.1569 6.90604 14.1569 7.19893 13.864L10.0019 11.061L12.8049 13.864C13.0978 14.1569 13.5727 14.1569 13.8656 13.864C14.1585 13.5711 14.1585 13.0962 13.8656 12.8034L11.0626 10.0003L13.8656 7.19734C14.1585 6.90445 14.1585 6.42958 13.8656 6.13668C13.5727 5.84379 13.0978 5.84379 12.8049 6.13668L10.0019 8.93969L7.19893 6.13668Z"
                    fill="#F02E51"
                  />
                </svg>
              </span>
            );
          })}
        </div>
      ) : null}
      <div className="contact_btn_wrapper">
        <Button
          loading={load}
          className="btn btn-primary btn-primary-fill w-100 mt-3 py-2"
        >
          Send
        </Button>
      </div>
    </form>
  );
}

export default Contact;
