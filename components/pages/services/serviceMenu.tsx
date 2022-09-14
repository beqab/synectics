import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IProp {
  menuArray: { title: string; href: string }[];
}

const ServiceMenu: React.FC<IProp> = ({ menuArray }) => {
  const router = useRouter();

  const pushRoute = (searchItems) => {
    // setLoadStatements(true);
    // const query = urlParcel(searchItems);
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
    <div className="ServiceMenu">
      <ul className="list-inline">
        {menuArray.map((el, i) => {
          return (
            <li>
              <Link href={router.pathname + "/?page=" + el.href} scroll={false}>
                <a>
                  {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  pushRoute(el.href);
                  // router.push(
                  //   {
                  //     pathname: router.pathname,
                  //     query: { page: el.href },
                  //   },
                  //   undefined,
                  //   { scroll: false }
                  // );
                }}
              > */}
                  {el.title}dd
                </a>
                {/* </button> */}
              </Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/">
            <a>Web Development</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Mobile Development</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ERP Solutions</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>CRM Solutions</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>BigData and Data Analytics</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blockchain</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Software Development Assessment</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Software Testing and QA</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default ServiceMenu;
