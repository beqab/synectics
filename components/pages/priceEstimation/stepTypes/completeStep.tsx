import React from "react";

const completeStep = ({
  setCurrentStepIndex,
}: {
  setCurrentStepIndex?: (index: number) => void;
}) => {
  return (
    <>
      <div>
        <h1>
          <b style={{ color: "#1c55e9" }}> Thanks </b> for Contacting Us. We
          will get in touch with you as soon as possible.
        </h1>
      </div>
      <div>
        <svg
          width="601"
          height="500"
          viewBox="0 0 601 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 312.793V303.207C24 302.608 23.8384 302.019 23.5315 301.5C23.2245 300.981 22.783 300.55 22.2513 300.25L13.749 295.458C13.2172 295.158 12.614 295 12 295C11.3859 295 10.7827 295.158 10.2509 295.458L1.7486 300.25C1.21694 300.55 0.775455 300.981 0.468514 301.5C0.161573 302.019 -9.95879e-06 302.608 8.25998e-10 303.207V312.793C-1.33383e-05 313.392 0.16154 313.981 0.468435 314.5C0.77533 315.019 1.21675 315.45 1.74835 315.75L10.2507 320.542C10.7824 320.842 11.3857 321 11.9997 321C12.6138 321 13.217 320.842 13.7488 320.542L22.2511 315.75C22.7828 315.45 23.2243 315.019 23.5313 314.5C23.8383 313.981 23.9999 313.393 24 312.793V312.793Z"
            fill="#345AF5"
          />
          <path
            d="M577 331.005V316.995C577 316.119 576.778 315.258 576.356 314.5C575.934 313.741 575.327 313.111 574.596 312.673L562.905 305.669C562.174 305.231 561.344 305 560.5 305C559.656 305 558.826 305.231 558.095 305.669L546.404 312.673C545.673 313.111 545.066 313.741 544.644 314.5C544.222 315.258 544 316.119 544 316.995V331.005C544 331.881 544.222 332.742 544.644 333.5C545.066 334.259 545.673 334.889 546.404 335.327L558.095 342.331C558.826 342.769 559.655 343 560.5 343C561.344 343 562.173 342.769 562.905 342.331L574.595 335.327C575.326 334.889 575.933 334.259 576.356 333.5C576.778 332.742 577 331.881 577 331.005V331.005Z"
            fill="#345AF5"
          />
          <path
            d="M500 13.0027V5.9974C500 5.55944 499.879 5.1292 499.649 4.74991C499.418 4.37062 499.087 4.05564 498.689 3.83663L492.312 0.33436C491.913 0.115318 491.461 0 491 0C490.539 0 490.087 0.115318 489.688 0.33436L483.311 3.83659C482.913 4.0556 482.582 4.37058 482.351 4.74987C482.121 5.12916 482 5.5594 482 5.99735V13.0027C482 13.4407 482.121 13.8709 482.351 14.2501C482.581 14.6294 482.913 14.9444 483.311 15.1634L489.688 18.6656C490.087 18.8847 490.539 19 491 19C491.46 19 491.913 18.8847 492.312 18.6656L498.688 15.1634C499.087 14.9444 499.418 14.6294 499.648 14.2502C499.879 13.8709 500 13.4407 500 13.0027V13.0027Z"
            fill="#B8C0E3"
          />
          <path
            d="M62 458.897V454.103C62 453.804 61.9192 453.509 61.7657 453.25C61.6122 452.99 61.3915 452.775 61.1257 452.625L56.8745 450.229C56.6086 450.079 56.307 450 56 450C55.693 450 55.3913 450.079 55.1255 450.229L50.8743 452.625C50.6085 452.775 50.3877 452.99 50.2343 453.25C50.0808 453.509 50 453.804 50 454.103V458.897C50 459.196 50.0808 459.491 50.2342 459.75C50.3877 460.01 50.6084 460.225 50.8742 460.375L55.1253 462.771C55.3912 462.921 55.6928 463 55.9999 463C56.3069 463 56.6085 462.921 56.8744 462.771L61.1255 460.375C61.3914 460.225 61.6121 460.01 61.7656 459.75C61.9191 459.491 62 459.196 62 458.897V458.897Z"
            fill="#546091"
          />
          <path
            d="M498 287.897V283.103C498 282.804 497.919 282.509 497.766 282.25C497.612 281.99 497.392 281.775 497.126 281.625L492.875 279.229C492.609 279.079 492.307 279 492 279C491.693 279 491.391 279.079 491.125 279.229L486.874 281.625C486.608 281.775 486.388 281.99 486.234 282.25C486.081 282.509 486 282.804 486 283.103V287.897C486 288.196 486.081 288.491 486.234 288.75C486.388 289.01 486.608 289.225 486.874 289.375L491.125 291.771C491.391 291.921 491.693 292 492 292C492.307 292 492.608 291.921 492.874 291.771L497.126 289.375C497.391 289.225 497.612 289.01 497.766 288.75C497.919 288.491 498 288.196 498 287.897V287.897Z"
            fill="#546091"
          />
          <path
            d="M601 116.634V110.366C601 109.974 600.892 109.589 600.688 109.25C600.483 108.911 600.189 108.629 599.834 108.433L594.166 105.299C593.811 105.103 593.409 105 593 105C592.591 105 592.188 105.103 591.834 105.299L586.166 108.433C585.811 108.629 585.517 108.911 585.312 109.25C585.108 109.589 585 109.974 585 110.366V116.634C585 117.026 585.108 117.411 585.312 117.75C585.517 118.089 585.811 118.371 586.166 118.567L591.834 121.701C592.188 121.897 592.59 122 593 122C593.409 122 593.811 121.897 594.166 121.701L599.834 118.567C600.189 118.371 600.483 118.09 600.688 117.75C600.892 117.411 601 117.026 601 116.634V116.634Z"
            fill="#546091"
          />
          <path
            d="M130 392.265V386.735C130 386.389 129.906 386.049 129.727 385.75C129.548 385.45 129.29 385.202 128.98 385.029L124.02 382.264C123.71 382.091 123.358 382 123 382C122.642 382 122.29 382.091 121.98 382.264L117.02 385.029C116.71 385.202 116.452 385.45 116.273 385.75C116.094 386.049 116 386.389 116 386.735V392.265C116 392.611 116.094 392.951 116.273 393.25C116.452 393.55 116.71 393.798 117.02 393.971L121.98 396.736C122.29 396.909 122.642 397 123 397C123.358 397 123.71 396.909 124.02 396.736L128.98 393.971C129.29 393.798 129.548 393.55 129.727 393.25C129.906 392.951 130 392.611 130 392.265V392.265Z"
            fill="#B6C1EF"
          />
          <path
            d="M587 222.653V167.349C587 164.243 586.19 161.192 584.65 158.502C583.111 155.812 580.898 153.579 578.232 152.026L530.746 124.37C528.081 122.817 525.059 122 521.982 122C518.904 122 515.882 122.817 513.217 124.37L465.764 152.026C463.099 153.578 460.887 155.812 459.348 158.501C457.81 161.191 457 164.241 457 167.347V222.656C457 225.761 457.81 228.812 459.348 231.501C460.887 234.191 463.099 236.424 465.764 237.977L513.219 265.63C515.884 267.183 518.907 268 521.984 268C525.061 268 528.084 267.183 530.749 265.63L578.235 237.974C580.9 236.421 583.113 234.188 584.651 231.499C586.19 228.809 587 225.758 587 222.653V222.653Z"
            fill="#3C529D"
          />
          <path
            d="M69 408.52V384.482C69.0002 382.997 68.6064 381.538 67.858 380.251C67.1097 378.965 66.0333 377.897 64.7371 377.154L43.7525 365.133C42.457 364.391 40.9874 364 39.4915 364C37.9956 364 36.526 364.391 35.2305 365.133L14.2604 377.154C12.9651 377.897 11.8895 378.964 11.1417 380.25C10.3938 381.536 10.0001 382.994 10 384.479V408.52C9.99982 410.005 10.3935 411.464 11.1415 412.75C11.8895 414.037 12.9654 415.105 14.261 415.847L35.2298 427.867C36.5253 428.609 37.9949 429 39.4908 429C40.9868 429 42.4564 428.609 43.7519 427.867L64.7364 415.846C66.0324 415.104 67.1087 414.036 67.8571 412.75C68.6055 411.464 68.9997 410.005 69 408.52V408.52Z"
            fill="#324D92"
          />
          <path
            d="M477 75.6009V54.3997C477 53.3821 476.734 52.3824 476.229 51.5011C475.724 50.6198 474.997 49.8879 474.122 49.3791L455.872 38.7765C454.997 38.2678 454.005 38 452.994 38C451.983 38 450.991 38.2678 450.116 38.7765L431.878 49.3791C431.003 49.8878 430.277 50.6194 429.771 51.5005C429.266 52.3816 429 53.381 429 54.3984V75.6016C429 76.6191 429.266 77.6187 429.771 78.4999C430.276 79.3811 431.003 80.1128 431.878 80.6216L450.116 91.2235C450.991 91.7322 451.983 92 452.994 92C454.005 92 454.997 91.7322 455.872 91.2235L474.12 80.6209C474.996 80.1123 475.723 79.3807 476.228 78.4994C476.734 77.6182 477 76.6186 477 75.6009V75.6009Z"
            fill="#5278FF"
          />
          <path
            d="M595 71.8474V41.1533C595 39.2564 594.513 37.3928 593.587 35.7501C592.661 34.1075 591.329 32.7436 589.725 31.7957L563.761 16.447C562.158 15.4991 560.34 15 558.489 15C556.638 15 554.82 15.4991 553.217 16.447L527.272 31.7957C525.669 32.7437 524.338 34.1075 523.412 35.7498C522.487 37.3921 522 39.2551 522 41.1514V71.8486C522 73.7449 522.487 75.6079 523.412 77.2502C524.338 78.8925 525.669 80.2563 527.272 81.2043L553.217 96.5529C554.82 97.5009 556.638 98 558.489 98C560.34 98 562.158 97.5009 563.761 96.5529L589.725 81.2043C591.329 80.2565 592.661 78.8927 593.587 77.2501C594.513 75.6076 595 73.7442 595 71.8474Z"
            fill="#8BACFF"
          />
          <path
            d="M118 336.125V316.877C118 315.429 117.61 314.006 116.869 312.752C116.128 311.497 115.062 310.456 113.778 309.732L96.7145 300.105C95.4311 299.381 93.9754 299 92.4935 299C91.0117 299 89.556 299.381 88.2726 300.105L71.22 309.729C69.9368 310.453 68.8713 311.495 68.1306 312.749C67.3898 314.003 66.9999 315.426 67 316.875V336.125C66.9999 337.573 67.3898 338.996 68.1306 340.25C68.8713 341.504 69.9368 342.546 71.22 343.27L88.2766 352.895C89.5598 353.619 91.0154 354 92.497 354C93.9787 354 95.4342 353.619 96.7175 352.895L113.78 343.269C115.063 342.545 116.129 341.504 116.869 340.25C117.61 338.995 118 337.573 118 336.125V336.125Z"
            fill="#B9CDFF"
          />
          <g clip-path="url(#clip0_0_1)">
            <path
              d="M275 309.334C255.47 309.351 236.426 303.242 220.552 291.866C204.677 280.49 192.77 264.42 186.509 245.921C180.249 227.422 179.948 207.424 185.652 188.746C191.355 170.067 202.774 153.647 218.3 141.8C218.899 141.276 219.599 140.879 220.357 140.636C221.115 140.392 221.915 140.306 222.708 140.383C223.501 140.46 224.269 140.699 224.966 141.084C225.663 141.469 226.273 141.993 226.76 142.624C227.247 143.254 227.599 143.977 227.796 144.749C227.992 145.521 228.029 146.325 227.903 147.111C227.777 147.897 227.492 148.649 227.064 149.321C226.636 149.993 226.076 150.57 225.417 151.017C209.205 163.458 198.315 181.584 194.942 201.738C191.569 221.893 195.964 242.577 207.241 259.618C218.519 276.66 235.839 288.791 255.709 293.564C275.578 298.338 296.519 295.399 314.307 285.34C332.095 275.281 345.406 258.851 351.557 239.364C357.708 219.877 356.24 198.782 347.449 180.334C338.658 161.887 323.199 147.459 304.189 139.961C285.179 132.464 264.034 132.454 245.017 139.934C244.306 140.234 243.542 140.388 242.771 140.385C241.999 140.383 241.236 140.224 240.528 139.919C239.819 139.614 239.18 139.168 238.648 138.609C238.116 138.051 237.703 137.39 237.433 136.667C237.149 135.955 237.008 135.193 237.019 134.426C237.029 133.66 237.191 132.902 237.494 132.198C237.798 131.494 238.237 130.856 238.787 130.322C239.337 129.787 239.987 129.367 240.7 129.084C251.643 124.86 263.27 122.685 275 122.667C299.754 122.667 323.493 132.5 340.997 150.004C358.5 167.507 368.333 191.247 368.333 216C368.333 240.754 358.5 264.494 340.997 281.997C323.493 299.5 299.754 309.334 275 309.334V309.334Z"
              fill="#1C55E9"
            />
            <path
              d="M275 262.666C278.839 262.697 282.646 261.964 286.198 260.509C289.751 259.055 292.979 256.908 295.693 254.193C298.408 251.478 300.555 248.251 302.01 244.698C303.465 241.145 304.198 237.339 304.167 233.5C304.167 220.2 295.183 210.166 277.45 204.8H276.167C269.517 202.7 263.333 199.783 263.333 193.133C263.333 190.039 264.562 187.071 266.75 184.883C268.938 182.696 271.906 181.466 275 181.466C279.932 181.518 284.732 183.064 288.767 185.9C289.96 186.693 291.403 187.019 292.822 186.816C294.24 186.613 295.534 185.895 296.457 184.799C297.38 183.703 297.867 182.305 297.826 180.873C297.785 179.441 297.218 178.074 296.233 177.033C290.201 172.19 282.734 169.483 275 169.333C268.812 169.333 262.877 171.791 258.501 176.167C254.125 180.543 251.667 186.478 251.667 192.666C251.667 208.65 267.3 213.783 272.55 215.416H273.833C286.433 219.5 292.5 225.333 292.5 233.033C292.613 235.383 292.24 237.73 291.407 239.93C290.573 242.13 289.296 244.135 287.655 245.82C286.014 247.505 284.043 248.835 281.866 249.726C279.689 250.617 277.352 251.05 275 251C271.378 251 267.805 250.156 264.565 248.536C261.325 246.916 258.507 244.564 256.333 241.666C255.405 240.429 254.023 239.61 252.492 239.392C250.96 239.173 249.404 239.571 248.167 240.5C246.929 241.428 246.111 242.81 245.892 244.341C245.673 245.873 246.072 247.429 247 248.666C250.26 253.013 254.488 256.541 259.347 258.971C264.207 261.401 269.566 262.666 275 262.666Z"
              fill="white"
            />
            <path
              d="M275 274.333C276.547 274.333 278.031 273.718 279.125 272.624C280.219 271.531 280.833 270.047 280.833 268.5V262.666C280.833 261.119 280.219 259.636 279.125 258.542C278.031 257.448 276.547 256.833 275 256.833C273.453 256.833 271.969 257.448 270.875 258.542C269.781 259.636 269.167 261.119 269.167 262.666V268.5C269.167 270.047 269.781 271.531 270.875 272.624C271.969 273.718 273.453 274.333 275 274.333Z"
              fill="white"
            />
            <path
              d="M275 175.167C276.547 175.167 278.031 174.552 279.125 173.458C280.219 172.364 280.833 170.881 280.833 169.334V163.5C280.833 161.953 280.219 160.469 279.125 159.376C278.031 158.282 276.547 157.667 275 157.667C273.453 157.667 271.969 158.282 270.875 159.376C269.781 160.469 269.167 161.953 269.167 163.5V169.334C269.167 170.881 269.781 172.364 270.875 173.458C271.969 174.552 273.453 175.167 275 175.167Z"
              fill="white"
            />
            <path
              d="M403.333 335.583L376.733 309.333C376.189 308.768 375.537 308.319 374.815 308.013C374.094 307.706 373.317 307.548 372.533 307.548C371.749 307.548 370.973 307.706 370.252 308.013C369.53 308.319 368.878 308.768 368.333 309.333C367.257 310.443 366.655 311.929 366.655 313.475C366.655 315.021 367.257 316.506 368.333 317.616L396.1 345.383C397.19 341.321 399.773 337.821 403.333 335.583V335.583Z"
              fill="white"
            />
            <path
              d="M455.833 426C448.095 426.001 440.671 422.939 435.183 417.483L394.35 376.65C388.893 371.163 385.829 363.739 385.829 356C385.829 348.261 388.893 340.837 394.35 335.35C400.035 330.283 407.384 327.482 415 327.482C422.615 327.482 429.965 330.283 435.65 335.35L476.483 376.183C480.573 380.263 483.359 385.464 484.489 391.129C485.619 396.794 485.041 402.666 482.829 408.002C480.617 413.338 476.871 417.897 472.065 421.101C467.259 424.305 461.609 426.01 455.833 426ZM415 338.733C411.539 338.669 408.138 339.647 405.24 341.54C402.341 343.432 400.079 346.153 398.746 349.347C397.412 352.542 397.07 356.064 397.763 359.455C398.457 362.847 400.153 365.952 402.633 368.367L443.467 409.2C446.791 412.394 451.223 414.178 455.833 414.178C460.444 414.178 464.875 412.394 468.2 409.2C471.477 405.919 473.318 401.471 473.318 396.833C473.318 392.196 471.477 387.748 468.2 384.467L427.367 343.633C424.057 340.425 419.609 338.663 415 338.733V338.733Z"
              fill="white"
            />
            <path
              d="M275 356C247.311 356 220.243 347.789 197.22 332.406C174.197 317.022 156.253 295.157 145.657 269.576C135.061 243.994 132.288 215.845 137.69 188.687C143.092 161.53 156.426 136.584 176.005 117.005C195.584 97.4258 220.53 84.0921 247.687 78.6901C274.845 73.2882 302.994 76.0607 328.576 86.6569C354.157 97.2532 376.022 115.197 391.406 138.22C406.789 161.243 415 188.311 415 216C415 253.13 400.25 288.74 373.995 314.995C347.74 341.25 312.13 356 275 356ZM275 87.6667C249.618 87.6667 224.806 95.1933 203.702 109.295C182.598 123.396 166.149 143.439 156.436 166.889C146.722 190.339 144.181 216.142 149.133 241.037C154.084 265.931 166.307 288.798 184.255 306.745C202.202 324.693 225.069 336.916 249.963 341.867C274.858 346.819 300.661 344.278 324.111 334.565C347.561 324.851 367.604 308.403 381.705 287.298C395.807 266.194 403.333 241.382 403.333 216C403.333 181.964 389.813 149.322 365.745 125.255C341.678 101.188 309.036 87.6667 275 87.6667V87.6667Z"
              fill="white"
            />
          </g>
          <path
            d="M239 467.684V431.311C239 428.831 238.335 426.395 237.072 424.248C235.808 422.1 233.991 420.317 231.803 419.077L199.708 400.892C197.52 399.653 195.038 399 192.511 399C189.985 399 187.502 399.653 185.314 400.892L153.2 419.08C151.011 420.319 149.193 422.103 147.929 424.25C146.665 426.398 146 428.835 146 431.315V467.685C146 470.165 146.665 472.601 147.929 474.749C149.193 476.897 151.011 478.68 153.2 479.92L185.314 498.108C187.502 499.347 189.984 500 192.511 500C195.038 500 197.52 499.347 199.708 498.108L231.802 479.923C233.992 478.682 235.809 476.898 237.073 474.75C238.336 472.602 239.001 470.165 239 467.684V467.684Z"
            fill="#7794E0"
          />
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="350"
                height="350"
                fill="white"
                transform="translate(135 76)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default completeStep;
