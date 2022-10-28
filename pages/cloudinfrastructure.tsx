import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import ServiceHeading from "../components/pages/services/serviceHeading";
import ServiceMenu from "../components/pages/services/serviceMenu";
import ServiceSectionWrapper from "../components/pages/services/serviceSectionWrapper";
import EngineeringBlock from "../components/pages/services/engineering/engineeringBlock";
import InnerPageContact from "../components/pages/home/contact/innerPageContact";
import Devops from "../components/pages/services/cloudInfrastructure/devops";
import { InfrastructureData } from "../components/pages/services/cloudInfrastructure/infrstructureData";
import { useRouter } from "next/router";
import Link from "next/link";
import ServiceSlider from "../components/pages/services/common/serviceSlider";

const arr = [1, 2, 3, 4, 5, 6, 7];

const CloudInfrastructure = () => {
  return (
    <div>
      <Layout>
        <ServiceHeading
          icon={
            <svg
              width="129"
              height="120"
              viewBox="0 0 129 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M111.187 86.3567C107.887 86.3564 104.658 85.404 101.887 83.6138L101.373 83.3138C100.896 83.0064 100.56 82.5225 100.44 81.9681C100.319 81.4138 100.424 80.8343 100.73 80.3567C100.878 80.1161 101.073 79.908 101.304 79.7447C101.534 79.5813 101.795 79.4662 102.072 79.4062C102.348 79.3462 102.633 79.3425 102.911 79.3953C103.188 79.4482 103.452 79.5565 103.687 79.7139L104.201 80.0139C106.283 81.3585 108.709 82.0728 111.187 82.071C112.917 82.1019 114.637 81.7917 116.248 81.158C117.859 80.5244 119.329 79.5796 120.574 78.3778C121.82 77.1759 122.817 75.7405 123.508 74.1535C124.199 72.5664 124.57 70.8588 124.601 69.1282C124.632 67.3976 124.322 65.6778 123.688 64.0671C123.054 62.4564 122.11 60.9862 120.908 59.7406C119.706 58.495 118.271 57.4983 116.683 56.8074C115.096 56.1165 113.389 55.745 111.658 55.714H109.987C109.647 55.7042 109.314 55.6136 109.016 55.4497C108.718 55.2857 108.463 55.0531 108.273 54.7712C108.081 54.4841 107.961 54.155 107.924 53.8117C107.886 53.4685 107.933 53.1213 108.058 52.7998L108.658 51.2569C110.011 47.8506 110.507 44.1645 110.105 40.5217C109.702 36.8789 108.412 33.3904 106.348 30.3619C104.283 27.3334 101.508 24.8572 98.2648 23.1504C95.0215 21.4435 91.4091 20.558 87.7441 20.5714C84.2453 20.5713 80.7955 21.3934 77.6728 22.9714L76.5585 23.5714C76.2902 23.7062 75.997 23.7843 75.6972 23.8009C75.3974 23.8174 75.0974 23.772 74.8159 23.6674C74.5344 23.5629 74.2775 23.4014 74.0612 23.1932C73.8448 22.985 73.6737 22.7344 73.5585 22.4571L73.0871 21.4285C71.1017 16.3657 67.6337 12.0203 63.1373 8.96149C58.6408 5.90268 53.3255 4.27297 47.8872 4.28579C45.1701 4.27232 42.467 4.67705 39.873 5.48578C39.3556 5.68174 38.7818 5.66563 38.2763 5.44094C37.7707 5.21625 37.3743 4.80113 37.173 4.28579C37.0593 4.00568 37.0061 3.70469 37.017 3.40258C37.0279 3.10047 37.1026 2.80408 37.2361 2.53288C37.3697 2.26168 37.5592 2.02182 37.792 1.82905C38.0249 1.63627 38.2959 1.49496 38.5873 1.41438C41.5972 0.472397 44.7333 -0.0045235 47.8872 0.000100585C53.9997 -0.0153853 59.9832 1.75759 65.1005 5.1006C70.2178 8.44361 74.2454 13.2106 76.687 18.8143C81.4357 16.6476 86.7146 15.918 91.873 16.7153C97.0313 17.5126 101.844 19.802 105.716 23.3013C109.589 26.8006 112.354 31.3567 113.668 36.408C114.983 41.4593 114.791 46.7849 113.115 51.7283C117.568 52.1688 121.678 54.3117 124.589 57.7099C127.5 61.108 128.986 65.4989 128.737 69.9662C128.488 74.4335 126.524 78.6323 123.254 81.6862C119.984 84.7401 115.661 86.4133 111.187 86.3567Z"
                fill="white"
              />
              <path
                d="M22.0875 86.3549C16.5474 86.359 11.2084 84.2794 7.13064 80.5292C3.05286 76.7789 0.534578 71.6323 0.0758383 66.1112C-0.382901 60.5902 1.25146 55.0985 4.65438 50.7267C8.05731 46.3549 12.9799 43.4227 18.4447 42.5124C16.6402 37.7122 16.0366 32.5436 16.6864 27.4568C17.3363 22.37 19.2199 17.5192 22.1732 13.3268C22.5029 12.8551 23.0064 12.5337 23.573 12.4332C24.1396 12.3328 24.7229 12.4615 25.1947 12.7911C25.6664 13.1208 25.9878 13.6243 26.0883 14.1909C26.1887 14.7575 26.06 15.3408 25.7304 15.8125C23.0662 19.5826 21.4082 23.97 20.9133 28.5598C20.4183 33.1495 21.1027 37.7896 22.9018 42.0409L23.5018 43.4552C23.6296 43.7664 23.6839 44.103 23.6603 44.4386C23.6368 44.7743 23.536 45.0999 23.366 45.3902C23.1959 45.6806 22.9612 45.9277 22.6799 46.1124C22.3987 46.2971 22.0787 46.4144 21.7447 46.4552H20.2018C15.7185 46.9949 11.6083 49.2197 8.70503 52.6784C5.80176 56.1371 4.32279 60.5706 4.56814 65.0797C4.81349 69.5887 6.76479 73.8356 10.0262 76.9588C13.2876 80.082 17.615 81.8478 22.1304 81.8978C23.2234 81.9062 24.3145 81.8057 25.3875 81.5978C25.9442 81.4976 26.5179 81.6216 26.9836 81.9428C27.4492 82.2639 27.769 82.7561 27.8732 83.3121C27.9292 83.5852 27.9302 83.8668 27.8762 84.1404C27.8221 84.4139 27.7142 84.674 27.5586 84.9053C27.403 85.1367 27.2029 85.3348 26.97 85.488C26.737 85.6413 26.4759 85.7466 26.2018 85.7978C24.8516 86.1162 23.4738 86.3028 22.0875 86.3549Z"
                fill="white"
              />
              <path
                d="M65.5442 120C55.9443 120 46.3015 119.186 40.3015 113.357C38.1802 111.064 36.553 108.358 35.5209 105.409C34.4888 102.46 34.0737 99.3308 34.3016 96.2147V72.8577H27.873C27.4918 72.863 27.1161 72.7665 26.7846 72.5782C26.4532 72.3899 26.1779 72.1165 25.9873 71.7863C25.8073 71.4579 25.7129 71.0894 25.7129 70.7149C25.7129 70.3404 25.8073 69.9719 25.9873 69.6435L38.8444 48.215C39.0419 47.9053 39.3143 47.6504 39.6364 47.4738C39.9585 47.2972 40.3199 47.2046 40.6872 47.2046C41.0546 47.2046 41.416 47.2972 41.7381 47.4738C42.0602 47.6504 42.3326 47.9053 42.5301 48.215L55.3871 69.6435C55.5823 69.9726 55.6876 70.3472 55.6925 70.7298C55.6975 71.1125 55.6019 71.4897 55.4153 71.8237C55.2287 72.1578 54.9577 72.4371 54.6294 72.6336C54.3011 72.8301 53.9269 72.9369 53.5443 72.9435H44.9729C44.6859 72.9379 44.4028 72.8758 44.1397 72.7608C43.8766 72.6458 43.6388 72.48 43.4398 72.2731C43.2408 72.0661 43.0846 71.822 42.98 71.5546C42.8753 71.2873 42.8244 71.0019 42.8301 70.7149C42.8298 70.4374 42.8858 70.1627 42.9945 69.9073C43.1032 69.652 43.2624 69.4213 43.4626 69.2291C43.6628 69.0369 43.8998 68.8872 44.1594 68.7891C44.4189 68.6909 44.6957 68.6462 44.9729 68.6578H49.7729L40.7301 53.3579L31.6444 68.5721H36.4444C36.7217 68.5605 36.9984 68.6051 37.258 68.7033C37.5176 68.8015 37.7546 68.9512 37.9548 69.1434C38.155 69.3356 38.3142 69.5663 38.4229 69.8216C38.5316 70.077 38.5875 70.3517 38.5873 70.6292V96.3433C38.3749 98.8642 38.6839 101.402 39.495 103.798C40.306 106.194 41.6018 108.398 43.3015 110.272C49.4729 116.315 61.1728 116.015 72.487 115.715C74.8013 115.715 72.8299 115.715 75.0156 115.715C75.5839 115.715 76.129 115.94 76.5308 116.342C76.9327 116.744 77.1584 117.289 77.1584 117.857C77.1584 118.426 76.9327 118.971 76.5308 119.373C76.129 119.775 75.5839 120 75.0156 120H65.5442Z"
                fill="white"
              />
              <path
                d="M87.8725 119.999C87.5027 120.001 87.1386 119.908 86.8157 119.727C86.4927 119.547 86.222 119.286 86.0296 118.97L73.1726 97.542C72.9925 97.2059 72.8983 96.8305 72.8983 96.4492C72.8983 96.0678 72.9925 95.6924 73.1726 95.3563C73.3658 95.038 73.6357 94.7731 73.9576 94.586C74.2795 94.3988 74.6432 94.2953 75.0154 94.2849H83.5868C84.1551 94.2849 84.7002 94.5107 85.102 94.9125C85.5039 95.3144 85.7297 95.8594 85.7297 96.4277C85.7297 96.996 85.5039 97.5411 85.102 97.943C84.7002 98.3448 84.1551 98.5706 83.5868 98.5706H78.7868L87.8725 113.699L96.9582 98.5706H92.1582C91.5899 98.5706 91.0448 98.3448 90.643 97.943C90.2411 97.5411 90.0153 96.996 90.0153 96.4277V70.7136C90.2446 68.2843 89.9833 65.8336 89.2471 63.5072C88.5109 61.1808 87.3147 59.026 85.7297 57.1708C79.9011 51.428 69.0155 51.428 58.5584 51.428H53.5013C53.2198 51.417 52.9433 51.3506 52.6875 51.2326C52.4317 51.1146 52.2017 50.9473 52.0107 50.7403C51.8196 50.5333 51.6712 50.2907 51.574 50.0263C51.4768 49.7619 51.4327 49.4809 51.4442 49.1995C51.4874 48.6386 51.7412 48.1149 52.1545 47.7333C52.5679 47.3518 53.1102 47.1407 53.6727 47.1423C56.6298 47.1423 55.4299 47.1423 58.5584 47.1423C69.9583 47.1423 81.6583 47.1423 88.5582 54.128C90.5841 56.3626 92.1372 58.9839 93.1241 61.8341C94.111 64.6843 94.5113 67.7047 94.301 70.7136V94.2849H100.73C101.109 94.2881 101.482 94.3882 101.812 94.5757C102.142 94.7632 102.418 95.0319 102.615 95.3563C102.795 95.6924 102.89 96.0678 102.89 96.4492C102.89 96.8305 102.795 97.2059 102.615 97.542L89.7582 118.97C89.5622 119.293 89.2846 119.557 88.9535 119.738C88.6224 119.919 88.2495 120.009 87.8725 119.999Z"
                fill="white"
              />
              <path
                d="M45.0159 94.2835C44.4476 94.2835 43.9025 94.0577 43.5007 93.6558C43.0988 93.254 42.873 92.7089 42.873 92.1406V70.7122C42.873 70.1439 43.0988 69.5988 43.5007 69.197C43.9025 68.7951 44.4476 68.5693 45.0159 68.5693C45.5842 68.5693 46.1292 68.7951 46.5311 69.197C46.933 69.5988 47.1587 70.1439 47.1587 70.7122V92.1406C47.1587 92.7089 46.933 93.254 46.5311 93.6558C46.1292 94.0577 45.5842 94.2835 45.0159 94.2835Z"
                fill="white"
              />
              <path
                d="M83.5872 98.5718C83.0189 98.5718 82.4738 98.346 82.072 97.9442C81.6701 97.5423 81.4443 96.9973 81.4443 96.4289V75.0005C81.4443 74.4322 81.6701 73.8871 82.072 73.4853C82.4738 73.0834 83.0189 72.8577 83.5872 72.8577C84.1555 72.8577 84.7005 73.0834 85.1024 73.4853C85.5043 73.8871 85.73 74.4322 85.73 75.0005V96.4289C85.73 96.9973 85.5043 97.5423 85.1024 97.9442C84.7005 98.346 84.1555 98.5718 83.5872 98.5718Z"
                fill="white"
              />
              <path
                d="M45.0159 102.855C46.1993 102.855 47.1587 101.896 47.1587 100.712C47.1587 99.5287 46.1993 98.5693 45.0159 98.5693C43.8324 98.5693 42.873 99.5287 42.873 100.712C42.873 101.896 43.8324 102.855 45.0159 102.855Z"
                fill="white"
              />
              <path
                d="M83.5872 68.5704C84.7706 68.5704 85.73 67.611 85.73 66.4275C85.73 65.2441 84.7706 64.2847 83.5872 64.2847C82.4037 64.2847 81.4443 65.2441 81.4443 66.4275C81.4443 67.611 82.4037 68.5704 83.5872 68.5704Z"
                fill="white"
              />
              <path
                d="M32.1585 8.57035C33.3419 8.57035 34.3013 7.61097 34.3013 6.42751C34.3013 5.24405 33.3419 4.28467 32.1585 4.28467C30.975 4.28467 30.0156 5.24405 30.0156 6.42751C30.0156 7.61097 30.975 8.57035 32.1585 8.57035Z"
                fill="white"
              />
            </svg>
          }
          title="Cloud & Infrastructure"
          text="We help transform your software delivery process to achieve higher efficiency, accelerate product release cycle time, and improve quality of software builds with early identification of emerging issues. "
        />
        <ServiceSectionWrapper
          pageTitle="Cloud & Infrastructure"
          data={InfrastructureData}
        >
          {/* <ServiceMenu menuArray={InfrastructureData.menu} /> */}
          <ServiceSlider data={InfrastructureData} />
        </ServiceSectionWrapper>
        <InnerPageContact />
      </Layout>
    </div>
  );
};

export default CloudInfrastructure;
