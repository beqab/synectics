import Link from "next/link";
import React from "react";
import FooterMobile from "./footerMobile";

const Footer = () => {
  return (
    <footer>
      <FooterMobile />
      <div className="container footer">
        <div className="row d-none d-md-flex">
          <div className="col-md-3">
            <img className="footer_logo" src="/imgs/Group 1052 (1).svg" />
            <div>
              <span>info@synetics.com</span>
            </div>
            <div>
              <span>+995 555 54 88 99</span>
            </div>
            <div>
              <span>
                BARNOVI STREET #60 <br />
                TBILISI, GEORGIA
              </span>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 19.8883C16.3113 19.1645 20 15.013 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.013 3.68874 19.1645 8.5 19.8883V13H7C6.17157 13 5.5 12.3284 5.5 11.5C5.5 10.6716 6.17157 10 7 10H8.5V8C8.5 6.067 10.067 4.5 12 4.5H12.5C13.3284 4.5 14 5.17157 14 6C14 6.82843 13.3284 7.5 12.5 7.5H12C11.7239 7.5 11.5 7.72386 11.5 8V10H13C13.8284 10 14.5 10.6716 14.5 11.5C14.5 12.3284 13.8284 13 13 13H11.5V19.8883Z"
                  fill="white"
                />
              </svg>
              <svg
                width="20"
                className="mx-4"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0C4.47715 0 0 4.47715 0 10C0 11.8896 0.52505 13.6594 1.43756 15.1683L0.54581 18.2002C0.32023 18.9672 1.03284 19.6798 1.79975 19.4542L4.83171 18.5624C6.34058 19.475 8.1104 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM7.73821 12.2627C9.7607 14.2852 11.692 14.5518 12.3739 14.5769C13.4111 14.6151 14.421 13.823 14.8147 12.9042C14.9112 12.6792 14.8871 12.4085 14.7255 12.2014C14.1782 11.5005 13.4373 10.9983 12.7134 10.4984C12.4006 10.282 11.9705 10.349 11.7401 10.6555L11.1394 11.5706C11.0727 11.6721 10.9402 11.707 10.8348 11.6467C10.4283 11.4143 9.8356 11.018 9.4092 10.5916C8.9833 10.1657 8.6111 9.5998 8.4022 9.2195C8.3473 9.1195 8.3777 8.996 8.4692 8.928L9.3927 8.2422C9.6681 8.0038 9.7165 7.59887 9.5138 7.30228C9.065 6.64569 8.5422 5.8112 7.7855 5.25926C7.57883 5.1085 7.3174 5.09158 7.10155 5.18408C6.1817 5.5783 5.38574 6.58789 5.42398 7.62695C5.44908 8.3089 5.71572 10.2402 7.73821 12.2627Z"
                  fill="white"
                />
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3C0 1.34315 1.34315 0 3 0H15ZM5 7C4.44772 7 4 7.4477 4 8V13C4 13.5523 4.44772 14 5 14C5.55228 14 6 13.5523 6 13V8C6 7.4477 5.55228 7 5 7ZM8 6C7.4477 6 7 6.44772 7 7V13C7 13.5523 7.4477 14 8 14C8.5523 14 9 13.5523 9 13V9.3398C9.3049 8.9955 9.8207 8.5921 10.3933 8.3472C10.7261 8.2048 11.2268 8.1479 11.5751 8.2574C11.7274 8.3053 11.8143 8.3726 11.868 8.4451C11.9201 8.5157 12 8.6707 12 9V13C12 13.5522 12.4477 14 13 14C13.5523 14 14 13.5522 14 13V9C14 8.3292 13.8298 7.7342 13.4758 7.2556C13.1232 6.77907 12.6476 6.4981 12.1749 6.34949C11.2732 6.06594 10.2739 6.22295 9.6067 6.50837C9.395 6.59892 9.1863 6.70435 8.9841 6.82128C8.8998 6.35427 8.4913 6 8 6ZM5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_menuTitle">Services</div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Cloud & Infrastructure</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Software Engineering</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>IT Consulting</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Diigital Transformation</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Cooperation Models</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>IT Outsourcing</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_menuTitle">Technologies</div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Web Development</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Mobile Development</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>ERP Solutions</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>CRM Solutions</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>BigData & Data Analytics</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a>
                  <span>Blockchain</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_menuTitle">Our Approach</div>
            <div>
              <Link href={"/"}>
                <a className="uppercase">
                  <span>About Us</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a className="uppercase">
                  <span>Cost Calculator</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <a className="uppercase">
                  <span>Contact Us</span>
                </a>
              </Link>
            </div>

            <div>
              <svg
                width="195"
                height="42"
                viewBox="0 0 195 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="195" height="42" rx="21" fill="#1C55E9" />
                <path
                  d="M27.4999 9.00021C24.3173 9.00021 21.2652 10.2644 19.0146 12.5149C16.7642 14.7653 15.5 17.8177 15.5 21.0001C15.5 24.1825 16.7642 27.2348 19.0146 29.4854C21.2651 31.7358 24.3175 33 27.4999 33C30.6823 33 33.7346 31.7358 35.9851 29.4854C38.2356 27.2349 39.4998 24.1825 39.4998 21.0001C39.4998 18.8937 38.9453 16.8243 37.8922 14.9999C36.839 13.1758 35.324 11.6608 33.4999 10.6076C31.6756 9.55445 29.6062 9 27.4997 9L27.4999 9.00021ZM27.4999 30.6003C24.9538 30.6003 22.5119 29.5888 20.7118 27.7884C18.9114 25.9882 17.8999 23.5463 17.8999 21.0003C17.8999 18.4543 18.9114 16.0123 20.7118 14.2122C22.512 12.4118 24.9539 11.4003 27.4999 11.4003C30.0459 11.4003 32.4879 12.4118 34.288 14.2122C36.0884 16.0124 37.0999 18.4543 37.0999 21.0003C37.0999 22.6854 36.6563 24.341 35.8136 25.8003C34.971 27.2598 33.7593 28.4715 32.2998 29.3141C30.8405 30.1569 29.1849 30.6004 27.4998 30.6004L27.4999 30.6003Z"
                  fill="white"
                />
                <path
                  d="M26.2399 18.6838H28.64C28.9582 18.6838 29.2634 18.8103 29.4884 19.0353C29.7136 19.2603 29.8399 19.5656 29.8399 19.8839H32.24C32.24 18.9291 31.8607 18.0134 31.1855 17.3382C30.5103 16.6632 29.5946 16.2839 28.64 16.2839V13.8838H26.2399V16.2839C25.2851 16.2839 24.3694 16.6632 23.6944 17.3382C23.0192 18.0134 22.6399 18.9291 22.6399 19.8839V22.284V22.2838C22.6399 23.2386 23.0192 24.1543 23.6944 24.8295C24.3694 25.5045 25.2851 25.8838 26.2399 25.8838V28.2839H28.64V25.8838C29.5946 25.8838 30.5103 25.5045 31.1855 24.8295C31.8607 24.1543 32.24 23.2386 32.24 22.2838H29.8399C29.8399 22.6022 29.7136 22.9073 29.4884 23.1323C29.2634 23.3574 28.9582 23.4839 28.64 23.4839H26.2399C25.9217 23.4839 25.6163 23.3574 25.3913 23.1323C25.1663 22.9073 25.04 22.6022 25.04 22.2838V19.8837V19.8839C25.04 19.5657 25.1663 19.2603 25.3913 19.0353C25.6163 18.8103 25.9217 18.6838 26.2399 18.6838Z"
                  fill="white"
                />
                <path
                  d="M60.828 16.62H58.826L57.034 23.088L55.144 16.62H53.31L51.42 23.088L49.628 16.62H47.64L50.37 26H52.4L54.234 19.672L56.054 26H58.098L60.828 16.62ZM68.1203 22.374C68.0503 20.246 66.4403 18.804 64.5783 18.804C62.5763 18.804 60.9663 20.316 60.9663 22.514C60.9663 24.712 62.5763 26.21 64.5503 26.21C66.0763 26.21 67.3223 25.51 67.9383 24.054L66.2863 23.704C65.7823 24.558 65.0963 24.628 64.5503 24.628C63.6963 24.628 62.9823 24.012 62.8003 23.004H68.1203V22.374ZM64.5783 20.414C65.3203 20.414 65.9923 20.806 66.2303 21.702H62.8563C63.0803 20.834 63.8783 20.414 64.5783 20.414ZM82.1266 26L78.0666 16.62H76.2886L72.2286 26H74.2866L75.1126 23.998H79.2566L80.0686 26H82.1266ZM78.5426 22.276H75.8126L77.1846 18.93L78.5426 22.276ZM86.2883 24.516C85.1263 24.516 84.3423 23.718 84.3423 22.514C84.3423 21.324 85.1263 20.498 86.2883 20.498C87.1003 20.498 87.7583 20.904 88.0103 21.884L89.7883 21.38C89.3263 19.812 87.9123 18.804 86.2883 18.804C84.2443 18.804 82.5503 20.316 82.5503 22.514C82.5503 24.712 84.2443 26.21 86.2883 26.21C87.9543 26.21 89.3963 25.188 89.7883 23.592L88.0803 23.158C87.7583 24.124 87.1003 24.516 86.2883 24.516ZM94.5084 24.516C93.3464 24.516 92.5624 23.718 92.5624 22.514C92.5624 21.324 93.3464 20.498 94.5084 20.498C95.3204 20.498 95.9784 20.904 96.2304 21.884L98.0084 21.38C97.5464 19.812 96.1324 18.804 94.5084 18.804C92.4644 18.804 90.7704 20.316 90.7704 22.514C90.7704 24.712 92.4644 26.21 94.5084 26.21C96.1744 26.21 97.6164 25.188 98.0084 23.592L96.3004 23.158C95.9784 24.124 95.3204 24.516 94.5084 24.516ZM106.144 22.374C106.074 20.246 104.464 18.804 102.602 18.804C100.6 18.804 98.9905 20.316 98.9905 22.514C98.9905 24.712 100.6 26.21 102.574 26.21C104.1 26.21 105.346 25.51 105.962 24.054L104.31 23.704C103.806 24.558 103.12 24.628 102.574 24.628C101.72 24.628 101.006 24.012 100.824 23.004H106.144V22.374ZM102.602 20.414C103.344 20.414 104.016 20.806 104.254 21.702H100.88C101.104 20.834 101.902 20.414 102.602 20.414ZM111.847 18.804C110.895 18.804 110.125 19.084 109.537 19.574V19.014H107.689V28.38H109.537V25.454C110.125 25.93 110.895 26.21 111.847 26.21C113.625 26.21 115.277 24.712 115.277 22.514C115.277 20.316 113.625 18.804 111.847 18.804ZM111.525 24.6C110.531 24.6 109.537 23.802 109.537 22.514C109.537 21.226 110.531 20.414 111.525 20.414C112.645 20.414 113.485 21.226 113.485 22.514C113.485 23.802 112.645 24.6 111.525 24.6ZM121.361 24.152C120.997 24.348 120.521 24.488 120.199 24.488C119.583 24.488 119.177 24.124 119.177 23.284V20.526H121.459V19.014H119.177V16.9H117.329V19.014H115.831V20.526H117.329V23.424C117.329 25.342 118.421 26.21 120.073 26.21C120.661 26.21 121.165 26.084 121.893 25.692L121.361 24.152ZM131.074 24.432C129.394 24.432 128.064 23.088 128.064 21.31C128.064 19.532 129.394 18.202 131.074 18.202C132.376 18.202 133.496 18.916 133.846 20.54L135.694 20.022C135.218 17.768 133.328 16.41 131.074 16.41C128.316 16.41 126.146 18.566 126.146 21.31C126.146 24.068 128.316 26.21 131.074 26.21C133.328 26.21 135.232 24.866 135.694 22.458L133.846 22.08C133.496 23.718 132.376 24.432 131.074 24.432ZM141.724 18.916C140.59 18.916 139.778 19.476 139.218 20.288V19.014H137.37V26H139.218V23.746C139.218 21.8 140.002 20.75 141.71 20.75H142.116L142.214 18.972C142.046 18.916 141.906 18.916 141.724 18.916ZM150.568 19H148.51L146.578 23.466L144.73 19H142.672L145.57 25.776L144.45 28.38H146.508L150.568 19ZM155.985 18.804C155.033 18.804 154.263 19.084 153.675 19.574V19.014H151.827V28.38H153.675V25.454C154.263 25.93 155.033 26.21 155.985 26.21C157.763 26.21 159.415 24.712 159.415 22.514C159.415 20.316 157.763 18.804 155.985 18.804ZM155.663 24.6C154.669 24.6 153.675 23.802 153.675 22.514C153.675 21.226 154.669 20.414 155.663 20.414C156.783 20.414 157.623 21.226 157.623 22.514C157.623 23.802 156.783 24.6 155.663 24.6ZM165.5 24.152C165.136 24.348 164.66 24.488 164.338 24.488C163.722 24.488 163.316 24.124 163.316 23.284V20.526H165.598V19.014H163.316V16.9H161.468V19.014H159.97V20.526H161.468V23.424C161.468 25.342 162.56 26.21 164.212 26.21C164.8 26.21 165.304 26.084 166.032 25.692L165.5 24.152ZM170.271 18.846C168.185 18.846 166.463 20.316 166.463 22.514C166.463 24.712 168.185 26.182 170.271 26.182C172.315 26.182 174.037 24.712 174.037 22.514C174.037 20.316 172.315 18.846 170.271 18.846ZM170.271 24.6C169.263 24.6 168.255 23.816 168.255 22.514C168.255 21.212 169.263 20.428 170.271 20.428C171.237 20.428 172.245 21.212 172.245 22.514C172.245 23.816 171.237 24.6 170.271 24.6ZM177.63 16.62H175.6V17.054L175.67 22.934H177.56L177.63 17.054V16.62ZM176.608 23.914C175.964 23.914 175.502 24.418 175.502 24.992C175.502 25.594 175.964 26.056 176.608 26.056C177.252 26.056 177.714 25.594 177.714 24.992C177.714 24.418 177.252 23.914 176.608 23.914Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
