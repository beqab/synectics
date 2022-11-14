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
  let [scrl, setScrl] = useState<any>(0);
  let [peservIndex, setPeservIndex] = useState<any>(0);
  let [sliderIndex, setSliderIndex] = useState<any>(0);

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
    if (!router.query.fromScroll) {
      let sectionIndex = data.map((el, i) => {
        if (el.href === router.query.page) {
          if (sliderRef.current) {
            sliderRef.current.scrollLeft =
              i *
              (window.innerWidth -
                (window.innerWidth - 1190 - (window.innerWidth - 1190) / 4));
            return i;
          }
        }
      });
    }
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
      <div
        ref={sliderRef}
        onScroll={(e: any) => {
          // console.log(e.nativeEvent?.srcElement?.clientWidth, "eeeeeeeeee");
          // eslint-disable-next-line no-use-before-define
          let scrollPosition = e.nativeEvent?.srcElement?.scrollLeft;
          // eslint-disable-next-line no-use-before-define
          let clientWidth = e.nativeEvent?.srcElement?.clientWidth;
          // window.innerWidth;

          // setSliderIndex(Math.round(scrollPosition / clientWidth));
          if (scrollPosition > clientWidth) {
            // setSliderIndex(
            //   Math.round(
            //     (scrollPosition + (clientWidth / 4) * sliderIndex) / clientWidth
            //   )
            // );
            // if (
            //   scrollPosition / clientWidth > 1.15 &&
            //   scrollPosition / clientWidth < 1.9
            // ) {
            //   setSliderIndex(2);
            // }
            // if (
            //   scrollPosition / clientWidth > 1.9 &&
            //   scrollPosition / clientWidth < 2.6
            // ) {
            //   setSliderIndex(3);
            // }
            // if (
            //   scrollPosition / clientWidth > 2.6 &&
            //   scrollPosition / clientWidth < 3.3
            // ) {
            //   setSliderIndex(4);
            // }
            // if (
            //   scrollPosition / clientWidth > 3.3 &&
            //   scrollPosition / clientWidth < 4
            // ) {
            //   setSliderIndex(5);
            // }
            // if (
            //   scrollPosition / clientWidth > 4 &&
            //   scrollPosition / clientWidth < 5
            // ) {
            //   setSliderIndex(6);
            // }

            setSliderIndex(Math.round(scrollPosition / (clientWidth - 453)));
          } else {
            setSliderIndex(Math.round(scrollPosition / clientWidth));
          }

          console.log(scrollPosition / clientWidth);

          // if()

          // let index = 0;

          // if ( sliderIndex === 0) {
          //   setSliderIndex( Math.floor(scrollPosition / clientWidth);
          //  )
          // } else {
          //   setSliderIndex(Math.ceil(
          //     (scrollPosition + clientWidth - 1190) / clientWidth
          //   ));

          // }

          console.log(
            sliderIndex,
            scrollPosition,
            "sliderIndex"
            // scrollPosition + clientWidth / 2
          );

          // console.log(
          //   peservIndex,
          //   index,
          //   scrollPosition / clientWidth,
          //   Math.floor(scrollPosition / clientWidth),
          //   data[index].title
          // );
          if (peservIndex !== sliderIndex) {
            // setScrl(scrollPosition);
            setPeservIndex(sliderIndex);
            // setTimeout(() => {
            router.push(
              {
                pathname: router.pathname,
                query: { page: data[sliderIndex].href, fromScroll: true },
              },
              undefined,
              { scroll: false }
            );
            // }, 1000);
          }
        }}
        className="serviceSliderWrapper d-none d-md-flex"
      >
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
