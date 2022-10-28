import React, { useEffect, useRef, useState } from "react";

import Layout from "../components/Layout";
import ServiceHeading from "../components/pages/services/serviceHeading";
import ServiceMenu from "../components/pages/services/serviceMenu";
import ServiceSectionWrapper from "../components/pages/services/serviceSectionWrapper";
import EngineeringBlock from "../components/pages/services/engineering/engineeringBlock";
import InnerPageContact from "../components/pages/home/contact/innerPageContact";
import { EngineeringData } from "../components/pages/services/engineering/engineeringData";
import { useRouter } from "next/router";
import ServiceSlider from "../components/pages/services/common/serviceSlider";

const SoftwareEngineering = () => {
  return (
    <div>
      <Layout>
        <ServiceHeading
          icon={
            <svg
              width="123"
              height="117"
              viewBox="0 0 123 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8592 20.1248C10.3212 20.1248 9.80519 19.9121 9.42474 19.5336C9.0443 19.1551 8.83057 18.6418 8.83057 18.1065V14.0701C8.83057 12.4643 9.47176 10.9242 10.6131 9.78876C11.7544 8.65328 13.3024 8.01538 14.9165 8.01538H92.0051C92.5432 8.01538 93.0592 8.22802 93.4396 8.60651C93.82 8.985 94.0338 9.49834 94.0338 10.0336C94.0338 10.5689 93.82 11.0822 93.4396 11.4607C93.0592 11.8392 92.5432 12.0518 92.0051 12.0518H14.9165C14.3785 12.0518 13.8625 12.2645 13.482 12.643C13.1016 13.0215 12.8879 13.5348 12.8879 14.0701V18.1065C12.8879 18.6418 12.6741 19.1551 12.2937 19.5336C11.9132 19.9121 11.3972 20.1248 10.8592 20.1248Z"
                fill="white"
              />
              <path
                d="M35.2032 20.044C36.3236 20.044 37.2319 19.1404 37.2319 18.0258C37.2319 16.9112 36.3236 16.0076 35.2032 16.0076C34.0828 16.0076 33.1746 16.9112 33.1746 18.0258C33.1746 19.1404 34.0828 20.044 35.2032 20.044Z"
                fill="white"
              />
              <path
                d="M27.0882 20.044C28.2086 20.044 29.1169 19.1404 29.1169 18.0258C29.1169 16.9112 28.2086 16.0076 27.0882 16.0076C25.9678 16.0076 25.0596 16.9112 25.0596 18.0258C25.0596 19.1404 25.9678 20.044 27.0882 20.044Z"
                fill="white"
              />
              <path
                d="M18.9737 20.044C20.0941 20.044 21.0024 19.1404 21.0024 18.0258C21.0024 16.9112 20.0941 16.0076 18.9737 16.0076C17.8533 16.0076 16.9451 16.9112 16.9451 18.0258C16.9451 19.1404 17.8533 20.044 18.9737 20.044Z"
                fill="white"
              />
              <path
                d="M27.0882 36.1903C28.2086 36.1903 29.1169 35.2867 29.1169 34.172C29.1169 33.0574 28.2086 32.1538 27.0882 32.1538C25.9678 32.1538 25.0596 33.0574 25.0596 34.172C25.0596 35.2867 25.9678 36.1903 27.0882 36.1903Z"
                fill="white"
              />
              <path
                d="M18.9737 36.1903C20.0941 36.1903 21.0024 35.2867 21.0024 34.172C21.0024 33.0574 20.0941 32.1538 18.9737 32.1538C17.8533 32.1538 16.9451 33.0574 16.9451 34.172C16.9451 35.2867 17.8533 36.1903 18.9737 36.1903Z"
                fill="white"
              />
              <path
                d="M10.8592 36.1903C11.9796 36.1903 12.8879 35.2867 12.8879 34.172C12.8879 33.0574 11.9796 32.1538 10.8592 32.1538C9.73882 32.1538 8.83057 33.0574 8.83057 34.172C8.83057 35.2867 9.73882 36.1903 10.8592 36.1903Z"
                fill="white"
              />
              <path
                d="M108.234 117H96.0626C95.5246 117 95.0086 116.787 94.6281 116.409C94.2477 116.03 94.0339 115.517 94.0339 114.982C94.0339 114.447 94.2477 113.933 94.6281 113.555C95.0086 113.176 95.5246 112.964 96.0626 112.964H108.234C108.772 112.964 109.288 112.751 109.669 112.372C110.049 111.994 110.263 111.481 110.263 110.945V78.6537C110.263 78.1185 110.477 77.6051 110.857 77.2266C111.238 76.8481 111.754 76.6355 112.292 76.6355C112.83 76.6355 113.346 76.8481 113.726 77.2266C114.107 77.6051 114.32 78.1185 114.32 78.6537V110.945C114.32 112.551 113.679 114.091 112.538 115.227C111.397 116.362 109.849 117 108.234 117Z"
                fill="white"
              />
              <path
                d="M43.3175 117H6.80182C5.99572 117 5.19765 116.841 4.45393 116.532C3.71021 116.222 3.03566 115.769 2.46946 115.198C1.90325 114.628 1.45667 113.95 1.15564 113.207C0.854607 112.463 0.705125 111.667 0.715873 110.865V30.1356C0.737208 28.5438 1.38781 27.0244 2.52684 25.9064C3.66587 24.7883 5.20168 24.1615 6.80182 24.1616H83.8904C84.4284 24.1616 84.9444 24.3743 85.3249 24.7527C85.7053 25.1312 85.9191 25.6446 85.9191 26.1798C85.9191 26.7151 85.7053 27.2285 85.3249 27.607C84.9444 27.9854 84.4284 28.1981 83.8904 28.1981H6.80182C6.26378 28.1981 5.74779 28.4107 5.36734 28.7892C4.9869 29.1677 4.77317 29.681 4.77317 30.2163V110.945C4.77317 111.481 4.9869 111.994 5.36734 112.373C5.74779 112.751 6.26378 112.964 6.80182 112.964H43.3175C43.8555 112.964 44.3715 113.176 44.7519 113.555C45.1324 113.933 45.3461 114.447 45.3461 114.982C45.3461 115.517 45.1324 116.031 44.7519 116.409C44.3715 116.788 43.8555 117 43.3175 117Z"
                fill="white"
              />
              <path
                d="M55.4895 117H51.4322C50.8942 117 50.3782 116.787 49.9977 116.409C49.6173 116.03 49.4036 115.517 49.4036 114.982C49.4036 114.446 49.6173 113.933 49.9977 113.554C50.3782 113.176 50.8942 112.963 51.4322 112.963H55.4895C68.3106 112.963 98.0911 107.191 98.0911 54.354V28.1978H92.0052C91.6494 28.2042 91.2988 28.1135 90.9912 27.9356C90.6836 27.7577 90.4309 27.4994 90.2605 27.1887C90.0825 26.8819 89.9887 26.5338 89.9887 26.1795C89.9887 25.8253 90.0825 25.4772 90.2605 25.1704L104.461 0.951691C104.648 0.659987 104.906 0.419874 105.211 0.253535C105.516 0.0871973 105.858 0 106.206 0C106.553 0 106.896 0.0871973 107.201 0.253535C107.505 0.419874 107.763 0.659987 107.95 0.951691L122.151 25.1704C122.329 25.4772 122.423 25.8253 122.423 26.1795C122.423 26.5338 122.329 26.8819 122.151 27.1887C121.98 27.4994 121.728 27.7577 121.42 27.9356C121.113 28.1135 120.762 28.2042 120.406 28.1978H114.32V54.4347C114.32 54.97 114.107 55.4834 113.726 55.8619C113.346 56.2403 112.83 56.453 112.292 56.453C111.754 56.453 111.238 56.2403 110.857 55.8619C110.477 55.4834 110.263 54.97 110.263 54.4347V26.1795C110.263 25.6443 110.477 25.1309 110.857 24.7524C111.238 24.374 111.754 24.1613 112.292 24.1613H116.876L106.206 5.87617L95.535 24.1613H100.12C100.658 24.1613 101.174 24.374 101.554 24.7524C101.935 25.1309 102.148 25.6443 102.148 26.1795V54.4347C102.148 110.824 69.69 117 55.4895 117Z"
                fill="white"
              />
              <path
                d="M112.292 64.4456C113.412 64.4456 114.32 63.542 114.32 62.4274C114.32 61.3128 113.412 60.4092 112.292 60.4092C111.171 60.4092 110.263 61.3128 110.263 62.4274C110.263 63.542 111.171 64.4456 112.292 64.4456Z"
                fill="white"
              />
              <path
                d="M2.74471 44.3436H87.9479C88.4859 44.3436 89.0019 44.131 89.3824 43.7525C89.7628 43.374 89.9765 42.8606 89.9765 42.3254C89.9765 41.7901 89.7628 41.2767 89.3824 40.8983C89.0019 40.5198 88.4859 40.3071 87.9479 40.3071H4.77336L0.716064 42.3254C0.716064 42.8606 0.929796 43.374 1.31024 43.7525C1.69069 44.131 2.20668 44.3436 2.74471 44.3436Z"
                fill="white"
              />
              <path
                d="M51.026 108.928H43.7229C43.2609 108.93 42.812 108.775 42.4505 108.489C42.089 108.202 41.8365 107.802 41.7348 107.353L40.5582 101.904C38.8637 101.417 37.2303 100.74 35.6895 99.886L30.983 102.913C30.5898 103.167 30.1202 103.278 29.6542 103.227C29.1882 103.175 28.7545 102.964 28.4269 102.631L23.2742 97.4237C22.9611 97.0933 22.7642 96.6708 22.7129 96.2195C22.6617 95.7683 22.759 95.3127 22.9901 94.9211L26.0331 90.1985C25.1949 88.675 24.5282 87.0641 24.045 85.3951L18.5271 84.1842C18.0728 84.09 17.6659 83.8408 17.3769 83.4795C17.0879 83.1183 16.935 82.6679 16.9448 82.2063V74.9407C16.9427 74.481 17.0984 74.0344 17.3861 73.6747C17.6739 73.3151 18.0764 73.0639 18.5271 72.9628L24.0045 71.7922C24.5118 70.1127 25.1916 68.4895 26.0331 66.9485L22.9901 62.2662C22.7557 61.8685 22.6567 61.4061 22.7079 60.9478C22.7591 60.4896 22.9577 60.0601 23.2742 59.7232L28.4269 54.5969C28.7633 54.2761 29.1987 54.0776 29.6626 54.0337C30.1265 53.9897 30.5918 54.1029 30.983 54.3547L35.6895 57.3417C37.2317 56.5007 38.8651 55.8371 40.5582 55.3638L41.7348 49.9146C41.8352 49.4622 42.0861 49.0567 42.4469 48.7637C42.8077 48.4707 43.2573 48.3073 43.7229 48.3H51.026C51.4917 48.3073 51.9413 48.4707 52.3021 48.7637C52.6629 49.0567 52.9137 49.4622 53.0141 49.9146L54.1907 55.3638C55.8839 55.8371 57.5173 56.5007 59.0595 57.3417L63.766 54.3547C64.1572 54.1029 64.6224 53.9897 65.0863 54.0337C65.5502 54.0776 65.9856 54.2761 66.3221 54.5969L71.4748 59.7232C71.7913 60.0601 71.9899 60.4896 72.0411 60.9478C72.0922 61.4061 71.9932 61.8685 71.7588 62.2662L68.7159 66.9485C69.5474 68.4893 70.2137 70.1128 70.7039 71.7922L76.2219 72.9628C76.6726 73.0639 77.0751 73.3151 77.3628 73.6747C77.6506 74.0344 77.8063 74.481 77.8042 74.9407V82.2063C77.8139 82.6679 77.6611 83.1183 77.3721 83.4795C77.0831 83.8408 76.6762 84.09 76.2219 84.1842L70.7039 85.3951C70.2208 87.0641 69.5541 88.675 68.7159 90.1985L71.7588 94.9211C71.99 95.3127 72.0872 95.7683 72.036 96.2195C71.9848 96.6708 71.7879 97.0933 71.4748 97.4237L66.3221 102.55C65.9944 102.884 65.5608 103.094 65.0948 103.146C64.6288 103.197 64.1592 103.087 63.766 102.833L59.0595 99.8052C57.5186 100.659 55.8852 101.336 54.1907 101.823L53.0141 107.273C52.9289 107.736 52.6835 108.155 52.3204 108.457C51.9574 108.76 51.4995 108.926 51.026 108.928ZM45.3458 104.891H49.4031L50.4986 99.8052C50.5908 99.4341 50.7832 99.0951 51.0549 98.8248C51.3266 98.5545 51.6673 98.3631 52.0404 98.2714C54.1619 97.7768 56.1895 96.9454 58.0452 95.8092C58.3692 95.6131 58.7411 95.5094 59.1204 95.5094C59.4996 95.5094 59.8715 95.6131 60.1955 95.8092L64.5774 98.6347L67.4581 95.8092L64.618 91.4094C64.4209 91.0871 64.3167 90.717 64.3167 90.3398C64.3167 89.9625 64.4209 89.5924 64.618 89.2701C65.7509 87.4193 66.586 85.4036 67.0929 83.2961C67.1852 82.925 67.3775 82.586 67.6492 82.3157C67.9209 82.0454 68.2617 81.854 68.6347 81.7623L73.7469 80.6724V76.636L68.6347 75.5461C68.2597 75.4586 67.9167 75.2686 67.6443 74.9976C67.3719 74.7266 67.1809 74.3854 67.0929 74.0123C66.5791 71.907 65.7445 69.8924 64.618 68.0383C64.4209 67.716 64.3167 67.3459 64.3167 66.9687C64.3167 66.5914 64.4209 66.2214 64.618 65.899L67.4581 61.5396L64.5774 58.7141L60.1955 61.4993C59.8715 61.6953 59.4996 61.799 59.1204 61.799C58.7411 61.799 58.3692 61.6953 58.0452 61.4993C56.1848 60.3722 54.1587 59.5414 52.0404 59.037C51.6611 58.9586 51.3132 58.7716 51.0393 58.4991C50.7654 58.2266 50.5774 57.8805 50.4986 57.5032L49.4031 52.4172H45.3458L44.2504 57.5032C44.1715 57.8805 43.9836 58.2266 43.7097 58.4991C43.4358 58.7716 43.0878 58.9586 42.7086 59.037C40.5902 59.5414 38.5642 60.3722 36.7038 61.4993C36.3798 61.6953 36.0078 61.799 35.6286 61.799C35.2494 61.799 34.8775 61.6953 34.5534 61.4993L30.1716 58.7141L27.2909 61.5396L30.131 65.899C30.3316 66.2275 30.4377 66.6045 30.4377 66.9889C30.4377 67.3732 30.3316 67.7502 30.131 68.0787C28.9771 69.9188 28.1405 71.938 27.656 74.0527C27.5536 74.4144 27.3571 74.7429 27.0864 75.0051C26.8158 75.2672 26.4805 75.4539 26.1143 75.5461L21.0021 76.636V80.6724L26.1143 81.7623C26.4873 81.854 26.828 82.0454 27.0998 82.3157C27.3715 82.586 27.5638 82.925 27.656 83.2961C28.1532 85.4068 28.9889 87.4239 30.131 89.2701C30.328 89.5924 30.4323 89.9625 30.4323 90.3398C30.4323 90.717 30.328 91.0871 30.131 91.4094L27.2909 95.8092L30.1716 98.6347L34.5534 95.8092C34.8836 95.6096 35.2626 95.504 35.6489 95.504C36.0353 95.504 36.4142 95.6096 36.7444 95.8092C38.5833 96.9497 40.5983 97.7816 42.7086 98.2714C43.0816 98.3631 43.4224 98.5545 43.6941 98.8248C43.9658 99.0951 44.1581 99.4341 44.2504 99.8052L45.3458 104.891ZM47.3745 92.7818C44.5659 92.7818 41.8204 91.9532 39.4851 90.4009C37.1498 88.8485 35.3297 86.6421 34.2549 84.0606C33.1801 81.4791 32.8989 78.6385 33.4468 75.8981C33.9947 73.1576 35.3472 70.6403 37.3332 68.6645C39.3192 66.6887 41.8495 65.3432 44.6041 64.7981C47.3587 64.2529 50.214 64.5327 52.8088 65.602C55.4036 66.6713 57.6214 68.4821 59.1818 70.8053C60.7422 73.1286 61.575 75.86 61.575 78.6542C61.575 79.1895 61.3613 79.7028 60.9808 80.0813C60.6004 80.4598 60.0844 80.6724 59.5464 80.6724C59.0083 80.6724 58.4923 80.4598 58.1119 80.0813C57.7315 79.7028 57.5177 79.1895 57.5177 78.6542C57.5177 76.6584 56.9228 74.7074 55.8083 73.0479C54.6937 71.3884 53.1096 70.095 51.2561 69.3312C49.4027 68.5674 47.3632 68.3676 45.3956 68.757C43.428 69.1463 41.6207 70.1074 40.2021 71.5187C38.7836 72.93 37.8175 74.728 37.4261 76.6855C37.0348 78.643 37.2356 80.672 38.0034 82.5159C38.7711 84.3598 40.0712 85.9359 41.7392 87.0447C43.4073 88.1535 45.3683 88.7454 47.3745 88.7454C48.0357 88.8069 48.7013 88.8069 49.3626 88.7454C49.6216 88.6868 49.8899 88.6815 50.151 88.7299C50.4121 88.7784 50.6605 88.8794 50.8809 89.0268C51.1013 89.1743 51.2891 89.365 51.4327 89.5873C51.5762 89.8097 51.6726 90.0588 51.7158 90.3196C51.7691 90.5793 51.7705 90.847 51.7198 91.1072C51.6692 91.3675 51.5675 91.6153 51.4205 91.8365C51.2736 92.0576 51.0843 92.2478 50.8634 92.3961C50.6426 92.5445 50.3946 92.6481 50.1334 92.7011C49.218 92.8096 48.2947 92.8366 47.3745 92.7818Z"
                fill="white"
              />
              <path
                d="M57.5179 88.9864C58.6383 88.9864 59.5466 88.0828 59.5466 86.9682C59.5466 85.8535 58.6383 84.95 57.5179 84.95C56.3975 84.95 55.4893 85.8535 55.4893 86.9682C55.4893 88.0828 56.3975 88.9864 57.5179 88.9864Z"
                fill="white"
              />
            </svg>
          }
          title="Software Engineering"
          text="Leverage our  expertise in enterprise software development, API integration, modernising legacy systems, and consolidating app portfolios"
        />
        <ServiceSectionWrapper
          pageTitle="Software Engineering"
          data={EngineeringData}
        >
          {/* <div ref={sliderRef} className="serviceSliderWrapper">
            <div className="sliderContainer">
              <div></div>
              {EngineeringData.menu.map((el, i) => {
                return <EngineeringBlock />;
              })}
              <div></div>
            </div>
          </div> */}
          <ServiceSlider data={EngineeringData} />
        </ServiceSectionWrapper>
        <InnerPageContact />
      </Layout>
    </div>
  );
};

export default SoftwareEngineering;
