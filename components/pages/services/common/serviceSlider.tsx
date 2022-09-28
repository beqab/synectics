import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

// import

interface IServiceData {
  href: string;
  title: string;

  renderBlock: (data: IServiceData) => React.ReactNode;
}
interface IServiceSlider {
  data: IServiceData[];
}

const ServiceSlider: React.FC<IServiceSlider> = ({ data }) => {
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
  }, [router.query]);

  return (
    <>
      <div className="d-block d-md-none">
        {data.map((el, i) => {
          if (router.asPath.includes(el.href)) {
            return el.renderBlock(el);
          }
        })}
      </div>
      <div ref={sliderRef} className="serviceSliderWrapper d-none d-md-flex">
        <div className="sliderContainer">
          <div></div>
          {data.map((el, i) => {
            return el.renderBlock(el);
          })}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
