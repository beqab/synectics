import React, { useContext, useRef } from "react";
import StepsContainer from "../common/stepsContainer";
import { PriceCalculatorContext } from "../priceContainerContext";

function TextArea({
  title,
  description,
  stepKey,
}: {
  title: string;
  description: string;
  stepKey: string;
}) {
  const { values, setValues } = useContext(PriceCalculatorContext);

  const value = values[stepKey] ? values[stepKey] : { text: "", files: [] };
  const fileRef = useRef(null);

  return (
    <StepsContainer title={title} description={description}>
      <div className="stepTextarea">
        <span
          onClick={() => {
            fileRef?.current?.click();
          }}
        >
          <svg
            className="pointer"
            width="112"
            height="24"
            viewBox="0 0 112 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.632 7.27V13.472C28.632 14.2093 28.8233 14.7647 29.206 15.138C29.598 15.5113 30.1393 15.698 30.83 15.698C31.53 15.698 32.0713 15.5113 32.454 15.138C32.846 14.7647 33.042 14.2093 33.042 13.472V7.27H34.638V13.444C34.638 14.2373 34.4653 14.9093 34.12 15.46C33.7747 16.0107 33.3127 16.4213 32.734 16.692C32.1553 16.9627 31.516 17.098 30.816 17.098C30.116 17.098 29.4767 16.9627 28.898 16.692C28.3287 16.4213 27.876 16.0107 27.54 15.46C27.204 14.9093 27.036 14.2373 27.036 13.444V7.27H28.632ZM38.312 10.42C38.5827 10.0653 38.9513 9.76667 39.418 9.524C39.8847 9.28133 40.412 9.16 41 9.16C41.672 9.16 42.2833 9.328 42.834 9.664C43.394 9.99067 43.8327 10.4527 44.15 11.05C44.4673 11.6473 44.626 12.3333 44.626 13.108C44.626 13.8827 44.4673 14.578 44.15 15.194C43.8327 15.8007 43.394 16.2767 42.834 16.622C42.2833 16.958 41.672 17.126 41 17.126C40.412 17.126 39.8893 17.0093 39.432 16.776C38.9747 16.5333 38.6013 16.2347 38.312 15.88V20.668H36.716V9.286H38.312V10.42ZM43.002 13.108C43.002 12.576 42.89 12.1187 42.666 11.736C42.4513 11.344 42.162 11.05 41.798 10.854C41.4433 10.6487 41.0607 10.546 40.65 10.546C40.2487 10.546 39.866 10.6487 39.502 10.854C39.1473 11.0593 38.858 11.358 38.634 11.75C38.4193 12.142 38.312 12.604 38.312 13.136C38.312 13.668 38.4193 14.1347 38.634 14.536C38.858 14.928 39.1473 15.2267 39.502 15.432C39.866 15.6373 40.2487 15.74 40.65 15.74C41.0607 15.74 41.4433 15.6373 41.798 15.432C42.162 15.2173 42.4513 14.9093 42.666 14.508C42.89 14.1067 43.002 13.64 43.002 13.108ZM47.8003 6.64V17H46.2043V6.64H47.8003ZM53.2417 17.126C52.5137 17.126 51.8557 16.9627 51.2677 16.636C50.6797 16.3 50.2177 15.8333 49.8817 15.236C49.5457 14.6293 49.3777 13.9293 49.3777 13.136C49.3777 12.352 49.5504 11.6567 49.8957 11.05C50.241 10.4433 50.7124 9.97667 51.3097 9.65C51.907 9.32333 52.5744 9.16 53.3117 9.16C54.049 9.16 54.7164 9.32333 55.3137 9.65C55.911 9.97667 56.3824 10.4433 56.7277 11.05C57.073 11.6567 57.2457 12.352 57.2457 13.136C57.2457 13.92 57.0684 14.6153 56.7137 15.222C56.359 15.8287 55.8737 16.3 55.2577 16.636C54.651 16.9627 53.979 17.126 53.2417 17.126ZM53.2417 15.74C53.6524 15.74 54.035 15.642 54.3897 15.446C54.7537 15.25 55.0477 14.956 55.2717 14.564C55.4957 14.172 55.6077 13.696 55.6077 13.136C55.6077 12.576 55.5004 12.1047 55.2857 11.722C55.071 11.33 54.7864 11.036 54.4317 10.84C54.077 10.644 53.6944 10.546 53.2837 10.546C52.873 10.546 52.4904 10.644 52.1357 10.84C51.7904 11.036 51.515 11.33 51.3097 11.722C51.1044 12.1047 51.0017 12.576 51.0017 13.136C51.0017 13.9667 51.2117 14.6107 51.6317 15.068C52.061 15.516 52.5977 15.74 53.2417 15.74ZM58.2914 13.108C58.2914 12.3333 58.4501 11.6473 58.7674 11.05C59.0941 10.4527 59.5328 9.99067 60.0834 9.664C60.6434 9.328 61.2594 9.16 61.9314 9.16C62.5381 9.16 63.0654 9.28133 63.5134 9.524C63.9708 9.75733 64.3348 10.0513 64.6054 10.406V9.286H66.2154V17H64.6054V15.852C64.3348 16.216 63.9661 16.5193 63.4994 16.762C63.0328 17.0047 62.5008 17.126 61.9034 17.126C61.2408 17.126 60.6341 16.958 60.0834 16.622C59.5328 16.2767 59.0941 15.8007 58.7674 15.194C58.4501 14.578 58.2914 13.8827 58.2914 13.108ZM64.6054 13.136C64.6054 12.604 64.4934 12.142 64.2694 11.75C64.0548 11.358 63.7701 11.0593 63.4154 10.854C63.0608 10.6487 62.6781 10.546 62.2674 10.546C61.8568 10.546 61.4741 10.6487 61.1194 10.854C60.7648 11.05 60.4754 11.344 60.2514 11.736C60.0368 12.1187 59.9294 12.576 59.9294 13.108C59.9294 13.64 60.0368 14.1067 60.2514 14.508C60.4754 14.9093 60.7648 15.2173 61.1194 15.432C61.4834 15.6373 61.8661 15.74 62.2674 15.74C62.6781 15.74 63.0608 15.6373 63.4154 15.432C63.7701 15.2267 64.0548 14.928 64.2694 14.536C64.4934 14.1347 64.6054 13.668 64.6054 13.136ZM67.7797 13.108C67.7797 12.3333 67.9384 11.6473 68.2557 11.05C68.5824 10.4527 69.0211 9.99067 69.5717 9.664C70.1317 9.328 70.7524 9.16 71.4337 9.16C71.9377 9.16 72.4324 9.272 72.9177 9.496C73.4124 9.71067 73.8044 10 74.0937 10.364V6.64H75.7037V17H74.0937V15.838C73.8324 16.2113 73.4684 16.5193 73.0017 16.762C72.5444 17.0047 72.0171 17.126 71.4197 17.126C70.7477 17.126 70.1317 16.958 69.5717 16.622C69.0211 16.2767 68.5824 15.8007 68.2557 15.194C67.9384 14.578 67.7797 13.8827 67.7797 13.108ZM74.0937 13.136C74.0937 12.604 73.9817 12.142 73.7577 11.75C73.5431 11.358 73.2584 11.0593 72.9037 10.854C72.5491 10.6487 72.1664 10.546 71.7557 10.546C71.3451 10.546 70.9624 10.6487 70.6077 10.854C70.2531 11.05 69.9637 11.344 69.7397 11.736C69.5251 12.1187 69.4177 12.576 69.4177 13.108C69.4177 13.64 69.5251 14.1067 69.7397 14.508C69.9637 14.9093 70.2531 15.2173 70.6077 15.432C70.9717 15.6373 71.3544 15.74 71.7557 15.74C72.1664 15.74 72.5491 15.6373 72.9037 15.432C73.2584 15.2267 73.5431 14.928 73.7577 14.536C73.9817 14.1347 74.0937 13.668 74.0937 13.136ZM87.1627 7.27V8.572H83.0327V11.442H86.2527V12.744H83.0327V17H81.4367V7.27H87.1627ZM89.4538 8.264C89.1645 8.264 88.9218 8.166 88.7258 7.97C88.5298 7.774 88.4318 7.53133 88.4318 7.242C88.4318 6.95267 88.5298 6.71 88.7258 6.514C88.9218 6.318 89.1645 6.22 89.4538 6.22C89.7338 6.22 89.9718 6.318 90.1678 6.514C90.3638 6.71 90.4618 6.95267 90.4618 7.242C90.4618 7.53133 90.3638 7.774 90.1678 7.97C89.9718 8.166 89.7338 8.264 89.4538 8.264ZM90.2378 9.286V17H88.6418V9.286H90.2378ZM93.9292 6.64V17H92.3332V6.64H93.9292ZM103.095 12.954C103.095 13.2433 103.076 13.5047 103.039 13.738H97.1446C97.1913 14.354 97.4199 14.8487 97.8306 15.222C98.2413 15.5953 98.7453 15.782 99.3426 15.782C100.201 15.782 100.808 15.4227 101.163 14.704H102.885C102.651 15.4133 102.227 15.9967 101.611 16.454C101.004 16.902 100.248 17.126 99.3426 17.126C98.6053 17.126 97.9426 16.9627 97.3546 16.636C96.7759 16.3 96.3186 15.8333 95.9826 15.236C95.6559 14.6293 95.4926 13.9293 95.4926 13.136C95.4926 12.3427 95.6513 11.6473 95.9686 11.05C96.2953 10.4433 96.7479 9.97667 97.3266 9.65C97.9146 9.32333 98.5866 9.16 99.3426 9.16C100.071 9.16 100.719 9.31867 101.289 9.636C101.858 9.95333 102.301 10.4013 102.619 10.98C102.936 11.5493 103.095 12.2073 103.095 12.954ZM101.429 12.45C101.419 11.862 101.209 11.3907 100.799 11.036C100.388 10.6813 99.8793 10.504 99.2726 10.504C98.7219 10.504 98.2506 10.6813 97.8586 11.036C97.4666 11.3813 97.2333 11.8527 97.1586 12.45H101.429ZM107.465 17.126C106.859 17.126 106.313 17.0187 105.827 16.804C105.351 16.58 104.973 16.2813 104.693 15.908C104.413 15.5253 104.264 15.1007 104.245 14.634H105.897C105.925 14.9607 106.079 15.236 106.359 15.46C106.649 15.6747 107.008 15.782 107.437 15.782C107.885 15.782 108.231 15.698 108.473 15.53C108.725 15.3527 108.851 15.1287 108.851 14.858C108.851 14.5687 108.711 14.354 108.431 14.214C108.161 14.074 107.727 13.92 107.129 13.752C106.551 13.5933 106.079 13.4393 105.715 13.29C105.351 13.1407 105.034 12.912 104.763 12.604C104.502 12.296 104.371 11.89 104.371 11.386C104.371 10.9753 104.493 10.602 104.735 10.266C104.978 9.92067 105.323 9.65 105.771 9.454C106.229 9.258 106.751 9.16 107.339 9.16C108.217 9.16 108.921 9.384 109.453 9.832C109.995 10.2707 110.284 10.8727 110.321 11.638H108.725C108.697 11.2927 108.557 11.0173 108.305 10.812C108.053 10.6067 107.713 10.504 107.283 10.504C106.863 10.504 106.541 10.5833 106.317 10.742C106.093 10.9007 105.981 11.1107 105.981 11.372C105.981 11.5773 106.056 11.75 106.205 11.89C106.355 12.03 106.537 12.142 106.751 12.226C106.966 12.3007 107.283 12.3987 107.703 12.52C108.263 12.6693 108.721 12.8233 109.075 12.982C109.439 13.1313 109.752 13.3553 110.013 13.654C110.275 13.9527 110.41 14.3493 110.419 14.844C110.419 15.2827 110.298 15.6747 110.055 16.02C109.813 16.3653 109.467 16.636 109.019 16.832C108.581 17.028 108.063 17.126 107.465 17.126Z"
              fill="#182939"
            />
            <path
              d="M10.5913 11.4082C10.5121 11.3323 10.4186 11.2728 10.3163 11.2332C10.1135 11.1498 9.88589 11.1498 9.68301 11.2332C9.58071 11.2728 9.48726 11.3323 9.40801 11.4082L7.74134 13.0748C7.58442 13.2318 7.49626 13.4446 7.49626 13.6665C7.49626 13.8884 7.58442 14.1013 7.74134 14.2582C7.89826 14.4151 8.11109 14.5032 8.33301 14.5032C8.55493 14.5032 8.76775 14.4151 8.92467 14.2582L9.16634 14.0082V16.1665C9.16634 16.3875 9.25414 16.5995 9.41042 16.7558C9.5667 16.912 9.77866 16.9998 9.99967 16.9998C10.2207 16.9998 10.4326 16.912 10.5889 16.7558C10.7452 16.5995 10.833 16.3875 10.833 16.1665V14.0082L11.0747 14.2582C11.1521 14.3363 11.2443 14.3983 11.3459 14.4406C11.4474 14.4829 11.5563 14.5047 11.6663 14.5047C11.7764 14.5047 11.8853 14.4829 11.9868 14.4406C12.0884 14.3983 12.1805 14.3363 12.258 14.2582C12.3361 14.1807 12.3981 14.0885 12.4404 13.987C12.4827 13.8854 12.5045 13.7765 12.5045 13.6665C12.5045 13.5565 12.4827 13.4476 12.4404 13.346C12.3981 13.2445 12.3361 13.1523 12.258 13.0748L10.5913 11.4082ZM16.6663 9.44984C16.6577 9.37328 16.6409 9.29786 16.6163 9.22484V9.14984C16.5763 9.06415 16.5228 8.98539 16.458 8.9165L11.458 3.9165C11.3891 3.85168 11.3104 3.79824 11.2247 3.75817H11.1413C11.0603 3.71484 10.9732 3.68394 10.883 3.6665H5.83301C5.16997 3.6665 4.53408 3.9299 4.06524 4.39874C3.5964 4.86758 3.33301 5.50346 3.33301 6.1665V17.8332C3.33301 18.4962 3.5964 19.1321 4.06524 19.6009C4.53408 20.0698 5.16997 20.3332 5.83301 20.3332H14.1663C14.8294 20.3332 15.4653 20.0698 15.9341 19.6009C16.4029 19.1321 16.6663 18.4962 16.6663 17.8332V9.49984C16.6663 9.49984 16.6663 9.49984 16.6663 9.44984ZM11.6663 6.50817L13.8247 8.6665H12.4997C12.2787 8.6665 12.0667 8.57871 11.9104 8.42243C11.7541 8.26615 11.6663 8.05418 11.6663 7.83317V6.50817ZM14.9997 17.8332C14.9997 18.0542 14.9119 18.2661 14.7556 18.4224C14.5993 18.5787 14.3874 18.6665 14.1663 18.6665H5.83301C5.61199 18.6665 5.40003 18.5787 5.24375 18.4224C5.08747 18.2661 4.99967 18.0542 4.99967 17.8332V6.1665C4.99967 5.94549 5.08747 5.73353 5.24375 5.57725C5.40003 5.42097 5.61199 5.33317 5.83301 5.33317H9.99967V7.83317C9.99967 8.49621 10.2631 9.1321 10.7319 9.60094C11.2007 10.0698 11.8366 10.3332 12.4997 10.3332H14.9997V17.8332Z"
              fill="#2F80ED"
            />
          </svg>

          <input
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
                setValues({
                  ...values,
                  [stepKey]: {
                    ...value,
                    files: [
                      ...value.files,
                      { name: e.target.files[0].name, fileString },
                    ],
                  },
                });
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
            ref={fileRef}
            type="file"
          />
        </span>
        <textarea
          value={value.text}
          onChange={(e) => {
            setValues({
              ...values,
              [stepKey]: {
                ...value,
                text: e.target.value,
              },
            });
          }}
          placeholder="About your Project"
        ></textarea>
      </div>
      <div className="stepUploadedFiles">
        {value?.files.map((el) => {
          return (
            <span>
              {el.name}
              <svg
                onClick={() => {
                  setValues({
                    ...values,
                    [stepKey]: {
                      ...value,
                      files: [
                        ...value.files.filter((item) => item.name !== el.name),
                      ],
                    },
                  });
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
      {/* <button
        onClick={() => {
          console.log(value, "valueeee");
        }}
        className="btn"
      >
        click
      </button> */}
    </StepsContainer>
  );
}

export default TextArea;
