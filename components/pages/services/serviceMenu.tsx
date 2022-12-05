import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { EngineeringData } from "./engineering/engineeringData";

interface IProp {
  serviceList: typeof EngineeringData;
  center?: boolean;
  pageTitle?: string;
}

const ServiceMenu: React.FC<IProp> = ({ serviceList, center, pageTitle }) => {
  const router = useRouter();
  const [openSelect, setOpenSelect] = useState(false);

  const pushRoute = (searchItems) => {
    router.push(
      {
        pathname: "/cloudinfrastructure",

        hash: searchItems,
      },
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    setOpenSelect(false);
  }, [router.query]);

  return (
    <>
      <div
        className={classNames(
          "ServiceMenuDropdown dropdownComponent d-none d-md-none",
          {
            isOpen: openSelect,
          }
        )}
      >
        <div
          onClick={() => {
            setOpenSelect(!openSelect);
          }}
          className="dropdownComponent_heading"
        >
          <span>{pageTitle}</span>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.86848 5.86863L1.73123 2.73137C0.874472 1.87462 0.446096 1.44624 0.417151 1.07846C0.392035 0.759341 0.52121 0.447486 0.76462 0.239594C1.04515 0 1.65096 0 2.8626 0H9.13711C10.3487 0 10.9546 0 11.2351 0.239594C11.4785 0.447486 11.6077 0.759341 11.5826 1.07846C11.5536 1.44624 11.1252 1.87462 10.2685 2.73137L7.13123 5.86863C6.73521 6.26465 6.5372 6.46265 6.30887 6.53684C6.10803 6.6021 5.89168 6.6021 5.69084 6.53684C5.46251 6.46265 5.2645 6.26465 4.86848 5.86863Z"
              fill="#050F2B"
            />
          </svg>
        </div>
        <ul className="list-inline dropdownComponent_list ">
          {serviceList.map((el, i) => {
            return (
              <li key={i}>
                <Link
                  href={router.pathname + "/?page=" + el.href}
                  scroll={false}
                >
                  <a
                    className={classNames({
                      active: router.asPath.includes(el.href),
                    })}
                  >
                    {el.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={classNames("ServiceMenu d-flex", {
          center: center,
        })}
      >
        <ul className="list-inline ">
          {serviceList.map((el, i) => {
            return (
              <li>
                <Link
                  href={router.pathname + "/?page=" + el.href}
                  scroll={false}
                >
                  <a
                    className={classNames({
                      active: router.asPath.includes(el.href),
                    })}
                  >
                    {el.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ServiceMenu;
