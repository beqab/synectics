import React, { useEffect, useRef, useState } from "react";

import Layout from "../components/Layout";
import ServiceHeading from "../components/pages/services/serviceHeading";
import ServiceMenu from "../components/pages/services/serviceMenu";
import ServiceSectionWrapper from "../components/pages/services/serviceSectionWrapper";
import EngineeringBlock from "../components/pages/services/engineering/engineeringBlock";
import InnerPageContact from "../components/pages/home/contact/innerPageContact";
import { ItConsultingData } from "../components/pages/services/itConsulting/itConsultingData";
import { useRouter } from "next/router";
import ServiceSlider from "../components/pages/services/common/serviceSlider";
import TechnologyImplementation from "../components/pages/services/itConsulting/technologyImplementation";
import ProcessOptimization from "../components/pages/services/itConsulting/ProcessOptimization";
import Link from "next/link";

const ItConsulting = () => {
  const TechnologyConsulting = useRef(null);
  const DeliveryManagementConsulting = useRef(null);
  const ProjectManagementConsulting = useRef(null);
  const ITProcessOptimizationConsulting = useRef(null);
  const DocumentationService = useRef(null);

  const router = useRouter();

  const executeScroll = () => {
    if (router.query.page === "TechnologyConsulting") {
      TechnologyConsulting.current.scrollIntoView();
    } else if (router.query.page === "DeliveryManagementConsulting") {
      DeliveryManagementConsulting.current.scrollIntoView();
    } else if (router.query.page === "ProjectManagementConsulting") {
      ProjectManagementConsulting.current.scrollIntoView();
    } else if (router.query.page === "ITProcessOptimizationConsulting") {
      ITProcessOptimizationConsulting.current.scrollIntoView();
    } else if (router.query.page === "DocumentationService") {
      DocumentationService.current.scrollIntoView();
    }
  };

  useEffect(() => {
    executeScroll();
  }, [router.query]);

  return (
    <div>
      <Layout>
        <ServiceHeading
          icon={
            <svg
              width="120"
              height="121"
              viewBox="0 0 120 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M103.965 39.9866C101.592 39.9866 99.2728 39.283 97.3001 37.9649C95.3274 36.6468 93.7898 34.7733 92.8819 32.5813C91.9739 30.3894 91.7364 27.9774 92.1993 25.6505C92.6621 23.3235 93.8046 21.186 95.4823 19.5084C97.1599 17.8307 99.2974 16.6882 101.624 16.2254C103.951 15.7625 106.363 16.0001 108.555 16.908C110.747 17.8159 112.621 19.3535 113.939 21.3262C115.257 23.2989 115.96 25.6182 115.96 27.9907C115.96 31.1722 114.697 34.2234 112.447 36.4731C110.197 38.7227 107.146 39.9866 103.965 39.9866ZM103.965 19.9935C102.383 19.9935 100.837 20.4625 99.5216 21.3413C98.2064 22.22 97.1814 23.469 96.5761 24.9303C95.9708 26.3916 95.8125 27.9996 96.121 29.5509C96.4296 31.1022 97.1913 32.5272 98.3097 33.6456C99.4281 34.7641 100.853 35.5257 102.404 35.8343C103.956 36.1429 105.564 35.9845 107.025 35.3792C108.486 34.7739 109.735 33.7489 110.614 32.4338C111.493 31.1186 111.962 29.5724 111.962 27.9907C111.962 25.8697 111.119 23.8356 109.62 22.3358C108.12 20.8361 106.086 19.9935 103.965 19.9935Z"
                fill="white"
              />
              <path
                d="M66.9786 119.958H66.4988C65.9853 119.834 65.5416 119.513 65.2644 119.063C64.9872 118.614 64.8991 118.073 65.0193 117.559L72.2168 86.0895C72.6378 84.3483 73.6312 82.7988 75.0378 81.6894C76.4444 80.5801 78.1828 79.9752 79.9742 79.9716H95.9686V73.9737C95.9686 73.4434 96.1793 72.9349 96.5542 72.5599C96.9292 72.185 97.4377 71.9744 97.9679 71.9744C98.4982 71.9744 99.0067 72.185 99.3817 72.5599C99.7566 72.9349 99.9673 73.4434 99.9673 73.9737V81.9709C99.9673 82.5012 99.7566 83.0097 99.3817 83.3846C99.0067 83.7596 98.4982 83.9702 97.9679 83.9702H79.9742C79.0607 83.9436 78.1658 84.2307 77.4382 84.7836C76.7107 85.3365 76.1945 86.122 75.9755 87.0092L68.778 118.398C68.6849 118.817 68.4598 119.194 68.1358 119.475C67.8118 119.756 67.4061 119.925 66.9786 119.958Z"
                fill="white"
              />
              <path
                d="M74.5762 119.959C74.3262 120.015 74.0666 120.015 73.8165 119.959C73.5723 119.862 73.35 119.718 73.1627 119.534C72.9754 119.35 72.827 119.13 72.7263 118.888C72.6256 118.645 72.5746 118.385 72.5765 118.123C72.5783 117.86 72.6328 117.601 72.7369 117.36L82.8134 93.3678C82.9634 93.0027 83.2181 92.6902 83.5454 92.4696C83.8727 92.249 84.258 92.1302 84.6528 92.1282H105.965C107.292 92.1284 108.605 91.8646 109.828 91.3523C111.052 90.8399 112.161 90.0893 113.091 89.144C114.022 88.1987 114.755 87.0778 115.247 85.8464C115.74 84.615 115.983 83.2979 115.962 81.9718V53.9814C115.962 52.3907 115.33 50.8651 114.205 49.7402C113.08 48.6154 111.555 47.9835 109.964 47.9835C107.927 47.9911 105.918 48.4675 104.095 49.3759C102.271 50.2842 100.681 51.6001 99.4476 53.2217L87.9716 63.4981C87.6082 63.819 87.1367 63.9904 86.6521 63.978H73.9764C73.4462 63.978 72.9377 64.1886 72.5627 64.5635C72.1878 64.9385 71.9771 65.447 71.9771 65.9773C71.9771 66.5075 72.1878 67.0161 72.5627 67.391C72.9377 67.7659 73.4462 67.9766 73.9764 67.9766H87.9716C88.455 67.9814 88.9238 67.811 89.2912 67.4967C89.6924 67.1736 90.2028 67.0178 90.7161 67.0618C91.2294 67.1058 91.7059 67.3463 92.0462 67.733C92.3865 68.1197 92.5644 68.6229 92.5428 69.1376C92.5212 69.6523 92.3018 70.1388 91.9302 70.4957C90.8302 71.4465 89.4256 71.9714 87.9716 71.9752H73.9764C72.3857 71.9752 70.8601 71.3433 69.7353 70.2184C68.6104 69.0936 67.9785 67.568 67.9785 65.9773C67.9785 64.3865 68.6104 62.8609 69.7353 61.7361C70.8601 60.6113 72.3857 59.9793 73.9764 59.9793H85.7324L96.5686 50.5026C98.1517 48.4613 100.183 46.8116 102.506 45.6814C104.829 44.5512 107.381 43.9707 109.964 43.9849C112.615 43.9849 115.158 45.0381 117.033 46.9128C118.907 48.7875 119.961 51.3302 119.961 53.9814V81.9718C119.961 85.6835 118.486 89.2432 115.861 91.8678C113.237 94.4924 109.677 95.9669 105.965 95.9669H85.9723L76.4156 118.719C76.275 119.091 76.0226 119.409 75.6931 119.631C75.3637 119.853 74.9734 119.968 74.5762 119.959Z"
                fill="white"
              />
              <path
                d="M87.9716 71.9745H73.9764C72.3857 71.9745 70.8601 71.3425 69.7353 70.2177C68.6104 69.0929 67.9785 67.5673 67.9785 65.9765C67.9785 64.3858 68.6104 62.8602 69.7353 61.7353C70.8601 60.6105 72.3857 59.9786 73.9764 59.9786H86.4521C86.9824 59.9786 87.4909 60.1892 87.8659 60.5642C88.2408 60.9391 88.4514 61.4477 88.4514 61.9779C88.4514 62.5082 88.2408 63.0167 87.8659 63.3916C87.4909 63.7666 86.9824 63.9772 86.4521 63.9772H73.9764C73.4462 63.9772 72.9377 64.1879 72.5627 64.5628C72.1878 64.9377 71.9771 65.4463 71.9771 65.9765C71.9771 66.5068 72.1878 67.0153 72.5627 67.3903C72.9377 67.7652 73.4462 67.9758 73.9764 67.9758H87.9716C88.455 67.9807 88.9238 67.8102 89.2911 67.496L104.806 56.3399C105.241 56.0323 105.78 55.9101 106.305 56.0001C106.83 56.0901 107.297 56.3849 107.605 56.8197C107.912 57.2545 108.035 57.7937 107.945 58.3186C107.855 58.8435 107.56 59.3112 107.125 59.6187L91.9702 70.6149C90.8518 71.5478 89.4269 72.0323 87.9716 71.9745Z"
                fill="white"
              />
              <path
                d="M15.9959 39.9866C13.6233 39.9866 11.304 39.283 9.33132 37.9649C7.35861 36.6468 5.82107 34.7733 4.91314 32.5813C4.0052 30.3894 3.76764 27.9774 4.2305 25.6505C4.69337 23.3235 5.83586 21.186 7.51351 19.5084C9.19116 17.8307 11.3286 16.6882 13.6556 16.2254C15.9826 15.7625 18.3945 16.0001 20.5865 16.908C22.7784 17.8159 24.6519 19.3535 25.9701 21.3262C27.2882 23.2989 27.9917 25.6182 27.9917 27.9907C27.9917 31.1722 26.7279 34.2234 24.4782 36.4731C22.2286 38.7227 19.1774 39.9866 15.9959 39.9866ZM15.9959 19.9935C14.4142 19.9935 12.868 20.4625 11.5528 21.3413C10.2377 22.22 9.21267 23.469 8.60738 24.9303C8.00209 26.3916 7.84371 27.9996 8.15229 29.5509C8.46086 31.1022 9.22253 32.5272 10.341 33.6456C11.4594 34.7641 12.8844 35.5257 14.4357 35.8343C15.987 36.1429 17.595 35.9845 19.0563 35.3792C20.5176 34.7739 21.7666 33.7489 22.6453 32.4338C23.5241 31.1186 23.9931 29.5724 23.9931 27.9907C23.9931 25.8697 23.1505 23.8356 21.6508 22.3358C20.151 20.8361 18.1169 19.9935 15.9959 19.9935Z"
                fill="white"
              />
              <path
                d="M52.9788 119.958C52.5304 119.951 52.0972 119.793 51.7491 119.51C51.401 119.228 51.1581 118.836 51.0595 118.398L43.9819 86.9692C43.7553 86.0894 43.2358 85.313 42.509 84.7679C41.7822 84.2228 40.8914 83.9415 39.9833 83.9702H21.9895C21.4593 83.9702 20.9508 83.7596 20.5758 83.3846C20.2009 83.0097 19.9902 82.5012 19.9902 81.9709V73.9737C19.9902 73.4434 20.2009 72.9349 20.5758 72.5599C20.9508 72.185 21.4593 71.9744 21.9895 71.9744C22.5198 71.9744 23.0283 72.185 23.4033 72.5599C23.7782 72.9349 23.9889 73.4434 23.9889 73.9737V79.9716H39.9833C41.764 79.9708 43.494 80.5642 44.8992 81.658C46.3044 82.7517 47.3044 84.2831 47.7406 86.0095L54.9382 117.519C55.0584 118.033 54.9703 118.574 54.6931 119.023C54.4159 119.473 53.9721 119.794 53.4587 119.918L52.9788 119.958Z"
                fill="white"
              />
              <path
                d="M45.3843 119.958C44.9871 119.968 44.5969 119.853 44.2675 119.631C43.938 119.409 43.6856 119.09 43.545 118.719L33.9883 95.9667H13.9952C10.2834 95.9667 6.72369 94.4922 4.09909 91.8676C1.47449 89.243 0 85.6832 0 81.9715L0 53.9812C0 51.3299 1.0532 48.7873 2.92792 46.9125C4.80264 45.0378 7.3453 43.9846 9.99655 43.9846C12.6451 43.9907 15.2565 44.6071 17.6282 45.786C19.9999 46.9649 22.068 48.6746 23.6718 50.7823L34.2282 59.9791H45.9841C47.5749 59.9791 49.1005 60.611 50.2253 61.7358C51.3501 62.8607 51.982 64.3863 51.982 65.977C51.982 67.5678 51.3501 69.0934 50.2253 70.2182C49.1005 71.343 47.5749 71.9749 45.9841 71.9749H31.989C30.5212 71.9808 29.1008 71.4553 27.9903 70.4955C27.6215 70.115 27.4152 69.6059 27.4152 69.0759C27.4152 68.546 27.6215 68.0369 27.9903 67.6564C28.3708 67.2876 28.8799 67.0813 29.4098 67.0813C29.9398 67.0813 30.4489 67.2876 30.8294 67.6564C31.1739 67.8796 31.5787 67.9913 31.989 67.9763H45.9841C46.5144 67.9763 47.0229 67.7657 47.3978 67.3907C47.7728 67.0158 47.9834 66.5073 47.9834 65.977C47.9834 65.4468 47.7728 64.9382 47.3978 64.5633C47.0229 64.1884 46.5144 63.9777 45.9841 63.9777H33.5084C33.0238 63.9902 32.5523 63.8187 32.1889 63.4979L20.7528 53.5013C19.5092 51.812 17.8904 50.4343 16.0239 49.4768C14.1574 48.5193 12.0942 48.008 9.99655 47.9832C8.4058 47.9832 6.8802 48.6152 5.75537 49.74C4.63054 50.8648 3.99862 52.3904 3.99862 53.9812V81.9715C3.99862 84.6227 5.05182 87.1654 6.92654 89.0401C8.80126 90.9148 11.3439 91.968 13.9952 91.968H35.3078C35.7025 91.97 36.0878 92.0888 36.4151 92.3094C36.7425 92.53 36.9972 92.8425 37.1472 93.2076L47.2237 117.199C47.3277 117.44 47.3823 117.7 47.3841 117.962C47.3859 118.225 47.335 118.485 47.2343 118.728C47.1336 118.97 46.9852 119.19 46.7979 119.374C46.6106 119.558 46.3883 119.702 46.1441 119.798C45.9063 119.909 45.6465 119.964 45.3843 119.958Z"
                fill="white"
              />
              <path
                d="M45.9862 71.9744H31.9911C30.5233 71.9803 29.103 71.4548 27.9925 70.495L12.7977 59.6187C12.5824 59.4664 12.3992 59.2732 12.2586 59.0502C12.118 58.8271 12.0226 58.5785 11.9781 58.3186C11.9335 58.0587 11.9406 57.7925 11.9989 57.5353C12.0572 57.2782 12.1656 57.035 12.3179 56.8197C12.4702 56.6044 12.6633 56.4212 12.8864 56.2806C13.1095 56.1399 13.3581 56.0446 13.618 56.0001C13.8779 55.9555 14.1441 55.9626 14.4013 56.0209C14.6584 56.0792 14.9016 56.1876 15.1169 56.3398L30.4716 67.376C30.8845 67.7602 31.4271 67.9744 31.9911 67.9758H45.9862C46.5165 67.9758 47.025 67.7652 47.4 67.3902C47.7749 67.0153 47.9856 66.5068 47.9856 65.9765C47.9856 65.4463 47.7749 64.9377 47.4 64.5628C47.025 64.1878 46.5165 63.9772 45.9862 63.9772H33.5106C32.9803 63.9772 32.4718 63.7666 32.0968 63.3916C31.7219 63.0167 31.5112 62.5081 31.5112 61.9779C31.5112 61.4476 31.7219 60.9391 32.0968 60.5642C32.4718 60.1892 32.9803 59.9786 33.5106 59.9786H45.9862C47.577 59.9786 49.1026 60.6105 50.2274 61.7353C51.3522 62.8602 51.9842 64.3858 51.9842 65.9765C51.9842 67.5673 51.3522 69.0929 50.2274 70.2177C49.1026 71.3425 47.577 71.9744 45.9862 71.9744Z"
                fill="white"
              />
              <path
                d="M81.9731 67.9746H37.9883V71.9732H81.9731V67.9746Z"
                fill="white"
              />
              <path
                d="M59.9802 47.9824C56.228 48.0175 52.5199 47.1721 49.1538 45.514C45.7877 43.8559 42.8574 41.4313 40.5984 38.4351C38.3394 35.439 36.8147 31.9547 36.1468 28.2623C35.4789 24.5698 35.6864 20.7722 36.7526 17.1745C37.8188 13.5768 39.714 10.2794 42.286 7.54717C44.858 4.81493 48.0349 2.72405 51.5617 1.44254C55.0884 0.161028 58.8666 -0.275388 62.5926 0.168355C66.3186 0.612098 69.8886 1.92363 73.0157 3.99757C73.2363 4.14197 73.4262 4.3284 73.5747 4.54621C73.7232 4.76403 73.8273 5.00895 73.8812 5.26701C73.935 5.52507 73.9375 5.7912 73.8885 6.05022C73.8395 6.30924 73.7399 6.55607 73.5955 6.77661C73.4511 6.99715 73.2647 7.1871 73.0469 7.33559C72.8291 7.48409 72.5841 7.58823 72.3261 7.64207C72.068 7.69591 71.8019 7.69839 71.5429 7.64938C71.2838 7.60036 71.037 7.50081 70.8165 7.35641C68.2106 5.61939 65.2332 4.51881 62.1241 4.14337C59.0149 3.76792 55.8611 4.12811 52.9167 5.1949C49.9723 6.2617 47.3197 8.00526 45.1726 10.2851C43.0255 12.5649 41.444 15.3173 40.5555 18.3203C39.6671 21.3233 39.4965 24.4931 40.0576 27.5741C40.6186 30.6552 41.8956 33.5613 43.7857 36.0584C45.6757 38.5555 48.1259 40.5736 50.9389 41.9502C53.7518 43.3268 56.8488 44.0234 59.9802 43.9838C65.2827 43.9838 70.368 41.8773 74.1175 38.1279C77.8669 34.3785 79.9733 29.2932 79.9733 23.9907C79.9595 22.9454 79.8659 21.9028 79.6934 20.8717C79.6238 20.3483 79.7599 19.8183 80.0732 19.3932C80.3864 18.9681 80.8523 18.6811 81.3728 18.5925C81.6328 18.5528 81.8981 18.5647 82.1534 18.6277C82.4088 18.6906 82.6492 18.8033 82.8609 18.9593C83.0726 19.1153 83.2515 19.3116 83.3872 19.5368C83.523 19.7621 83.613 20.0119 83.652 20.2719C83.8595 21.5008 83.9664 22.7445 83.9719 23.9907C83.9719 30.3537 81.4442 36.456 76.9449 40.9554C72.4456 45.4547 66.3432 47.9824 59.9802 47.9824Z"
                fill="white"
              />
              <path
                d="M59.9816 31.9879C59.7194 31.9911 59.4594 31.9393 59.2184 31.836C58.9774 31.7327 58.7606 31.5802 58.5821 31.3881L48.5856 21.3915C48.2144 21.0203 48.0059 20.5169 48.0059 19.992C48.0059 19.4671 48.2144 18.9637 48.5856 18.5925C48.9567 18.2213 49.4602 18.0128 49.9851 18.0128C50.51 18.0128 51.0134 18.2213 51.3846 18.5925L59.9816 27.1495L82.5738 4.59732C82.7533 4.40606 82.9701 4.25363 83.2108 4.14942C83.4515 4.04522 83.711 3.99146 83.9733 3.99146C84.2356 3.99146 84.4951 4.04522 84.7359 4.14942C84.9766 4.25363 85.1934 4.40606 85.3729 4.59732C85.5641 4.77682 85.7165 4.99361 85.8207 5.23432C85.925 5.47503 85.9787 5.73454 85.9787 5.99684C85.9787 6.25913 85.925 6.51864 85.8207 6.75935C85.7165 7.00006 85.5641 7.21686 85.3729 7.39635L61.3811 31.3881C61.2026 31.5802 60.9859 31.7327 60.7448 31.836C60.5038 31.9393 60.2438 31.9911 59.9816 31.9879Z"
                fill="white"
              />
            </svg>
          }
          title="IT Consulting"
          text="Synectics technology consulting services help business to advance in the modern digital transformation environment"
        />
        <div className="roundBottom roundBottom-top pt-5">
          <div className="">
            <div className="container serviceContent cooperation pt-md-5  ">
              <div
                ref={TechnologyConsulting}
                style={{ position: "relative", top: "-100px" }}
              />
              <div id="ttt" className="row pt-0">
                <div className="col-md-9">
                  <div className=" pr-90">
                    <h2 className="serviceContent_title">
                      Technology Consulting
                    </h2>
                    <p>
                      We’ll look under the hood of your existing solution or
                      system and advise you on how to put the assessment
                      discoveries into practical steps that will improve your
                      system. We’ll examine if architecture decisions truly
                      support the quality requirements, conform to industry
                      standards and best practices, and are in tune with tech
                      trends. This way you will acquire a substantive working
                      plan of where and how we can enhance product
                      functionality, efficiency and operational costs.
                    </p>
                    <p>
                      Our technology consulting services help business to
                      advance in the modern digital transformation environment.
                      Evaluate your opportunities and apply the right technology
                      with outcomes in mind. We can shape your company into a
                      strategy-powered business delivering innovation and
                      digital excellence.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 text-center text-md-left">
                  <img src="/imgs/Group 1000001946.svg" />
                </div>
              </div>
              <div
                ref={ProjectManagementConsulting}
                style={{ position: "relative", top: "-70px" }}
              />
              <div className="row flex-column-reverse flex-row ">
                <div className="col-md-3 text-center text-md-left my-3 my-md-0 ">
                  <img src="/imgs/Delivery Management.svg" />
                </div>
                <div className="col-md-9">
                  <div className="pl-90">
                    <h2>Project Management Consulting</h2>
                    <p>
                      Completing projects on time and on budget while ensuring
                      quality and compliance with design and statutory rules,
                      using the help of specialized consulting and management
                      professionals allow your company executives to focus on
                      central issues and grow their business.
                      <br />
                      Our consulting and project management services enable you
                      to ensure sustainable success by providing a clear
                      result-oriented focus. We provide complete advisory aiming
                      to optimize all project phases, placing emphasis on
                      efficiency throughout.
                    </p>
                  </div>
                </div>
              </div>
              <div
                ref={DeliveryManagementConsulting}
                style={{ position: "relative", top: "-70px" }}
              />
              <div className="row">
                <div className="col-md-9">
                  <div className="pr-90">
                    <h2>Delivery Management Consulting</h2>
                    <p>
                      Defining the project delivery model prior to the selection
                      of primary consultants is critical to the success of any
                      project. We have been recognized for our work in the
                      development of project delivery models, from small local
                      projects to highly complicated multimillion-dollar
                      national projects with multiple stakeholders. Each project
                      has its own unique requirements and funding sources. We
                      investigate alternative delivery models for each project
                      and recommend a delivery system that correctly fits and
                      guarantees a highly successful project.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 text-center text-md-left">
                  <img src="/imgs/Group 1000001948.svg" />
                </div>
              </div>
              <div
                ref={ITProcessOptimizationConsulting}
                style={{ position: "relative", top: "-70px" }}
              />
              <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-3 text-center text-md-left ">
                  <img src="/imgs/Group 1000001943.svg" />
                </div>
                <div className="col-md-9">
                  <div className="pl-90">
                    <h2>IT Process Optimization Consulting</h2>
                    <p>
                      We start with a current-state analysis of your
                      organizational structures, information architecture, data
                      structures, business processes, and technologies to
                      identify your competitively differentiating requirements
                      and a baseline for change. Then, we will benchmark your
                      existing position against your peers and industry best
                      practices to build a persuasive business case for change
                      and ROI.
                    </p>
                    <p>
                      IT Process Management (ITPM) is a systematic approach to
                      capture, design, execute, document, measure, monitor and
                      control both automated and non-automated processes in
                      order to sustainably achieve the goals aligned with the
                      corporate strategy. Thus, a higher process quality, faster
                      process times and a higher data consistency should be
                      achieved.
                    </p>
                  </div>
                </div>
              </div>
              <div
                ref={DocumentationService}
                style={{ position: "relative", top: "-70px" }}
              />
              <div className="row">
                <div className="col-md-9">
                  <div className="pr-90">
                    <h2>Documentation Service</h2>
                    <p>
                      According to statistics, documenting problems decrease the
                      productivity of an organization by 21.3%. An average
                      employee spends 50% of his time just looking for the
                      information stored physically or electronically.
                      <br />
                      We offer a complete technical document development and
                      maintenance service that helps accomplish the content
                      goals for your processes, products, and services.
                      <br />
                      Document Services provides a broad range of services
                      related to document management, creation, maintenance, and
                      conversion, and integrating with third parties such as
                      Confluence, Microsoft SharePoint or SAP
                    </p>
                  </div>
                </div>
                <div className="col-md-3 text-center text-md-left">
                  <img src="/imgs/Group 1000001942.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="priceEstiamateSection">
            <div className="container">
              <div className="row">
                <h3>Estimate the Price </h3>
                <p>
                  An estimated price is a forecast that is related to the price
                  of project. The primary reason of price estimation is to give
                  businesses some numbers which can be used to determine future
                  costs.
                </p>
                <div className="text-center">
                  <Link href="">
                    <a className="btn btn-primary">Price Estimation</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="roundBottom roundBottom-top  pt-5">
            <InnerPageContact />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ItConsulting;
