import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { EngineeringData } from "./engineering/engineeringData";

interface IProp {
  serviceList: typeof EngineeringData;
  center?: boolean;
}

const ServiceMenu: React.FC<IProp> = ({ serviceList, center }) => {
  const router = useRouter();

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

  return (
    <div
      className={classNames("ServiceMenu", {
        center: center,
      })}
    >
      <ul className="list-inline">
        {serviceList.map((el, i) => {
          return (
            <li>
              <Link href={router.pathname + "/?page=" + el.href} scroll={false}>
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
  );
};

export default ServiceMenu;
