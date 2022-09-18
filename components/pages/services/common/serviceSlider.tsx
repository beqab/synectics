import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

// import

interface IServiceData {
  href: string;
  title: string;
  description: () => void;
  renderBlock: (data: IServiceData) => React.ReactNode;
  weCanHelpWithList: string[];
  technologyList: { technologyName: string; technologyImg: string }[];
}
interface IServiceSlider {
  data: IServiceData[];
  ServiceItem?: (data: IServiceData) => React.ReactNode;
}

const ServiceSlider: React.FC<IServiceSlider> = ({ data, ServiceItem }) => {
  let [windowWidth, setWindowWidth] = useState<any>(1400);
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
    }
    let onScroll = (e) => {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", onScroll);

    return () => window.removeEventListener("resize", onScroll);
  }, []);

  useEffect(() => {
    let sectionIndex = data.map((el, i) => {
      if (el.href === router.query.page) {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft =
            i * (windowWidth - (windowWidth - 1190 - (windowWidth - 1190) / 4));
          return i;
        }
      }
    });
    // window.scrollTo(0, 0);
    // if (sliderRef.current) {
    //   if (router.query.pages === "devops") {
    //     sliderRef.current.scrollLeft = 0;
    //   }
    //   if (router.query.pages === "databasemanagement") {
    //     sliderRef.current.scrollLeft = 500;
    //   } else {
    //     sliderRef.current.scrollLeft = 1500;
    //   }
    // }
  }, [router.query]);

  return (
    <div ref={sliderRef} className="serviceSliderWrapper">
      <div className="sliderContainer">
        <div></div>
        {data.map((el, i) => {
          return el.renderBlock(el);
        })}

        <div></div>
      </div>
    </div>
  );
};

export default ServiceSlider;
