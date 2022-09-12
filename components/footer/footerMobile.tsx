import Link from "next/link";
import React from "react";

const FooterMobile = () => {
  return (
    <div className="text-center d-block d-md-none">
      <Link href={"/"}>
        <a>
          <svg
            width="118"
            height="90"
            viewBox="0 0 118 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_0_1)">
              <path
                d="M56.9269 25.1455L38 14.2178V27.3305L53.1412 36.0725V40.4433L38 31.7013V36.0725L56.9269 46.9998V33.8867L41.7828 25.1444L41.7854 20.7736L56.9251 29.5159L56.9269 25.1455Z"
                fill="white"
              />
              <path
                d="M79.6379 14.2178L60.7109 25.1451V38.2579L75.8521 29.5159V33.8875L60.7109 42.629V46.9998L79.6379 36.0725L79.636 22.9586L76.1991 24.9437L64.5044 31.6973V27.3349L79.6444 18.5886L79.6379 14.2178Z"
                fill="white"
              />
              <path
                d="M77.7531 10.9178L58.8178 0L47.4616 6.55657L62.6142 15.2967L58.8181 17.4828L43.6839 8.74707L39.8916 10.9284L58.8185 21.8562L70.1743 15.2879L55.0456 6.54994L58.8321 4.37994L73.9696 13.1069L77.7531 10.9178Z"
                fill="white"
              />
            </g>
            <path
              d="M5.99511 75.6456C4.28222 75.6456 2.8757 75.2418 1.77556 74.4341C0.675407 73.6125 0.0835556 72.4427 0 70.9247H4.36578C4.40756 71.44 4.56074 71.816 4.82533 72.0527C5.08993 72.2895 5.43111 72.4079 5.84889 72.4079C6.22489 72.4079 6.53126 72.3173 6.768 72.1363C7.01867 71.9413 7.144 71.6767 7.144 71.3425C7.144 70.9108 6.94207 70.5766 6.53822 70.3399C6.13437 70.1031 5.47985 69.8385 4.57467 69.5461C3.61378 69.2258 2.83393 68.9194 2.23511 68.627C1.65022 68.3206 1.13496 67.8819 0.689333 67.311C0.25763 66.7261 0.0417778 65.9671 0.0417778 65.0341C0.0417778 64.0871 0.278519 63.2794 0.752 62.611C1.22548 61.9286 1.88 61.4133 2.71556 61.0652C3.55111 60.717 4.49808 60.543 5.55645 60.543C7.26933 60.543 8.63408 60.9468 9.65067 61.7545C10.6812 62.5483 11.2313 63.6693 11.3009 65.1176H6.85156C6.83763 64.672 6.69837 64.3378 6.43378 64.115C6.18311 63.8922 5.85585 63.7807 5.452 63.7807C5.14563 63.7807 4.89496 63.8713 4.7 64.0523C4.50504 64.2333 4.40756 64.491 4.40756 64.8252C4.40756 65.1037 4.512 65.3474 4.72089 65.5563C4.9437 65.7513 5.21526 65.9253 5.53556 66.0785C5.85585 66.2178 6.32933 66.3988 6.956 66.6216C7.88904 66.9419 8.65496 67.2622 9.25378 67.5825C9.86652 67.8889 10.3887 68.3276 10.8204 68.8985C11.2661 69.4556 11.4889 70.1658 11.4889 71.0292C11.4889 71.9065 11.2661 72.6933 10.8204 73.3896C10.3887 74.0859 9.75511 74.636 8.91956 75.0399C8.09793 75.4437 7.12311 75.6456 5.99511 75.6456Z"
              fill="white"
            />
            <path
              d="M26.782 60.7727L21.6016 70.8203V75.4994H17.4865V70.8203L12.306 60.7727H16.9851L19.5753 66.4545L22.1656 60.7727H26.782Z"
              fill="white"
            />
            <path
              d="M41.6794 75.4994H37.5852L32.1332 67.2692V75.4994H28.0389V60.7727H32.1332L37.5852 69.1074V60.7727H41.6794V75.4994Z"
              fill="white"
            />
            <path
              d="M48.1058 64.0523V66.4545H52.8058V69.567H48.1058V72.2199H53.4325V75.4994H44.0116V60.7727H53.4325V64.0523H48.1058Z"
              fill="white"
            />
            <path
              d="M54.9543 68.1047C54.9543 66.6565 55.2537 65.3683 55.8525 64.2403C56.4652 63.0984 57.3286 62.2141 58.4427 61.5874C59.5568 60.9468 60.838 60.6265 62.2863 60.6265C64.1245 60.6265 65.6703 61.1209 66.9236 62.1096C68.1769 63.0845 68.9846 64.4144 69.3467 66.0994H64.9392C64.6746 65.5424 64.3055 65.1176 63.832 64.8252C63.3725 64.5327 62.8363 64.3865 62.2236 64.3865C61.2766 64.3865 60.5177 64.7277 59.9467 65.4101C59.3897 66.0785 59.1112 66.9767 59.1112 68.1047C59.1112 69.2467 59.3897 70.1588 59.9467 70.8412C60.5177 71.5096 61.2766 71.8439 62.2236 71.8439C62.8363 71.8439 63.3725 71.6976 63.832 71.4052C64.3055 71.1127 64.6746 70.688 64.9392 70.131H69.3467C68.9846 71.816 68.1769 73.1529 66.9236 74.1416C65.6703 75.1165 64.1245 75.6039 62.2863 75.6039C60.838 75.6039 59.5568 75.2905 58.4427 74.6639C57.3286 74.0233 56.4652 73.139 55.8525 72.011C55.2537 70.869 54.9543 69.567 54.9543 68.1047Z"
              fill="white"
            />
            <path
              d="M82.3775 60.7727V64.0314H78.4503V75.4994H74.3561V64.0314H70.4708V60.7727H82.3775Z"
              fill="white"
            />
            <path
              d="M87.9865 60.7727V75.4994H83.8922V60.7727H87.9865Z"
              fill="white"
            />
            <path
              d="M89.8167 68.1047C89.8167 66.6565 90.1161 65.3683 90.7149 64.2403C91.3277 63.0984 92.1911 62.2141 93.3051 61.5874C94.4192 60.9468 95.7004 60.6265 97.1487 60.6265C98.9869 60.6265 100.533 61.1209 101.786 62.1096C103.039 63.0845 103.847 64.4144 104.209 66.0994H99.8016C99.537 65.5424 99.1679 65.1176 98.6945 64.8252C98.2349 64.5327 97.6988 64.3865 97.086 64.3865C96.1391 64.3865 95.3801 64.7277 94.8091 65.4101C94.2521 66.0785 93.9736 66.9767 93.9736 68.1047C93.9736 69.2467 94.2521 70.1588 94.8091 70.8412C95.3801 71.5096 96.1391 71.8439 97.086 71.8439C97.6988 71.8439 98.2349 71.6976 98.6945 71.4052C99.1679 71.1127 99.537 70.688 99.8016 70.131H104.209C103.847 71.816 103.039 73.1529 101.786 74.1416C100.533 75.1165 98.9869 75.6039 97.1487 75.6039C95.7004 75.6039 94.4192 75.2905 93.3051 74.6639C92.1911 74.0233 91.3277 73.139 90.7149 72.011C90.1161 70.869 89.8167 69.567 89.8167 68.1047Z"
              fill="white"
            />
            <path
              d="M111.704 75.6456C109.991 75.6456 108.585 75.2418 107.485 74.4341C106.385 73.6125 105.793 72.4427 105.709 70.9247H110.075C110.117 71.44 110.27 71.816 110.535 72.0527C110.799 72.2895 111.14 72.4079 111.558 72.4079C111.934 72.4079 112.24 72.3173 112.477 72.1363C112.728 71.9413 112.853 71.6767 112.853 71.3425C112.853 70.9108 112.651 70.5766 112.247 70.3399C111.844 70.1031 111.189 69.8385 110.284 69.5461C109.323 69.2258 108.543 68.9194 107.944 68.627C107.359 68.3206 106.844 67.8819 106.399 67.311C105.967 66.7261 105.751 65.9671 105.751 65.0341C105.751 64.0871 105.988 63.2794 106.461 62.611C106.935 61.9286 107.589 61.4133 108.425 61.0652C109.26 60.717 110.207 60.543 111.266 60.543C112.979 60.543 114.343 60.9468 115.36 61.7545C116.39 62.5483 116.94 63.6693 117.01 65.1176H112.561C112.547 64.672 112.408 64.3378 112.143 64.115C111.892 63.8922 111.565 63.7807 111.161 63.7807C110.855 63.7807 110.604 63.8713 110.409 64.0523C110.214 64.2333 110.117 64.491 110.117 64.8252C110.117 65.1037 110.221 65.3474 110.43 65.5563C110.653 65.7513 110.924 65.9253 111.245 66.0785C111.565 66.2178 112.039 66.3988 112.665 66.6216C113.598 66.9419 114.364 67.2622 114.963 67.5825C115.576 67.8889 116.098 68.3276 116.53 68.8985C116.975 69.4556 117.198 70.1658 117.198 71.0292C117.198 71.9065 116.975 72.6933 116.53 73.3896C116.098 74.0859 115.464 74.636 114.629 75.0399C113.807 75.4437 112.832 75.6456 111.704 75.6456Z"
              fill="white"
            />
            <path
              d="M26.2664 82.3204C27.0602 82.3204 27.7461 82.4701 28.324 82.7695C28.9089 83.0619 29.3545 83.4832 29.6609 84.0333C29.9742 84.5833 30.1309 85.2309 30.1309 85.9759C30.1309 86.721 29.9742 87.3685 29.6609 87.9186C29.3545 88.4617 28.9089 88.8795 28.324 89.1719C27.7461 89.4574 27.0602 89.6002 26.2664 89.6002H24V82.3204H26.2664ZM26.2664 88.8168C27.2064 88.8168 27.9236 88.5696 28.418 88.0753C28.9124 87.5739 29.1596 86.8742 29.1596 85.9759C29.1596 85.0707 28.9089 84.364 28.4076 83.8557C27.9132 83.3474 27.1995 83.0933 26.2664 83.0933H24.9504V88.8168H26.2664Z"
              fill="white"
            />
            <path
              d="M32.335 83.0933V85.5268H34.9879V86.3102H32.335V88.8168H35.3012V89.6002H31.3845V82.3099H35.3012V83.0933H32.335Z"
              fill="white"
            />
            <path
              d="M42.7554 82.3204L40.0085 89.6002H38.9118L36.1649 82.3204H37.178L39.4654 88.5975L41.7527 82.3204H42.7554Z"
              fill="white"
            />
            <path
              d="M44.748 83.0933V85.5268H47.4009V86.3102H44.748V88.8168H47.7142V89.6002H43.7975V82.3099H47.7142V83.0933H44.748Z"
              fill="white"
            />
            <path
              d="M50.1028 88.8273H52.6512V89.6002H49.1523V82.3204H50.1028V88.8273Z"
              fill="white"
            />
            <path
              d="M56.961 89.6733C56.2856 89.6733 55.6694 89.5166 55.1124 89.2033C54.5553 88.883 54.1132 88.4408 53.7859 87.8768C53.4656 87.3059 53.3055 86.6653 53.3055 85.955C53.3055 85.2448 53.4656 84.6077 53.7859 84.0437C54.1132 83.4727 54.5553 83.0306 55.1124 82.7173C55.6694 82.397 56.2856 82.2368 56.961 82.2368C57.6434 82.2368 58.2631 82.397 58.8201 82.7173C59.3772 83.0306 59.8158 83.4693 60.1361 84.0333C60.4564 84.5973 60.6166 85.2379 60.6166 85.955C60.6166 86.6722 60.4564 87.3128 60.1361 87.8768C59.8158 88.4408 59.3772 88.883 58.8201 89.2033C58.2631 89.5166 57.6434 89.6733 56.961 89.6733ZM56.961 88.8482C57.4693 88.8482 57.9254 88.7298 58.3292 88.493C58.7401 88.2563 59.0604 87.9186 59.2901 87.4799C59.5269 87.0413 59.6452 86.533 59.6452 85.955C59.6452 85.3702 59.5269 84.8619 59.2901 84.4302C59.0604 83.9915 58.7435 83.6538 58.3397 83.417C57.9358 83.1803 57.4763 83.0619 56.961 83.0619C56.4458 83.0619 55.9862 83.1803 55.5824 83.417C55.1785 83.6538 54.8582 83.9915 54.6215 84.4302C54.3917 84.8619 54.2768 85.3702 54.2768 85.955C54.2768 86.533 54.3917 87.0413 54.6215 87.4799C54.8582 87.9186 55.1785 88.2563 55.5824 88.493C55.9932 88.7298 56.4527 88.8482 56.961 88.8482Z"
              fill="white"
            />
            <path
              d="M66.7384 84.451C66.7384 85.0568 66.5295 85.5616 66.1117 85.9655C65.7009 86.3624 65.0708 86.5608 64.2213 86.5608H62.8217V89.6002H61.8713V82.3204H64.2213C65.0429 82.3204 65.6661 82.5188 66.0909 82.9157C66.5226 83.3126 66.7384 83.8244 66.7384 84.451ZM64.2213 85.7775C64.7505 85.7775 65.1404 85.6626 65.3911 85.4328C65.6417 85.203 65.7671 84.8758 65.7671 84.451C65.7671 83.5528 65.2518 83.1037 64.2213 83.1037H62.8217V85.7775H64.2213Z"
              fill="white"
            />
            <path
              d="M75.3039 82.3726V89.6002H74.3535V84.2108L71.9512 89.6002H71.2828L68.8701 84.2004V89.6002H67.9197V82.3726H68.9432L71.617 88.3468L74.2908 82.3726H75.3039Z"
              fill="white"
            />
            <path
              d="M77.8662 83.0933V85.5268H80.5191V86.3102H77.8662V88.8168H80.8324V89.6002H76.9158V82.3099H80.8324V83.0933H77.8662Z"
              fill="white"
            />
            <path
              d="M87.9941 89.6002H87.0437L83.221 83.8035V89.6002H82.2706V82.3099H83.221L87.0437 88.0961V82.3099H87.9941V89.6002Z"
              fill="white"
            />
            <path
              d="M94.095 82.3204V83.0933H92.1106V89.6002H91.1601V83.0933H89.1652V82.3204H94.095Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0_0_1">
                <rect
                  width="41.6451"
                  height="47"
                  fill="white"
                  transform="translate(38)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </Link>
      <div className="mt-4">
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
            d="M26.2399 18.6838H28.64C28.9582 18.6838 29.2634 18.8103 29.4884 19.0353C29.7136 19.2603 29.8399 19.5657 29.8399 19.8839H32.24C32.24 18.9291 31.8607 18.0134 31.1855 17.3382C30.5103 16.6632 29.5946 16.2839 28.64 16.2839V13.8838H26.2399V16.2839C25.2851 16.2839 24.3694 16.6632 23.6944 17.3382C23.0192 18.0134 22.6399 18.9291 22.6399 19.8839V22.284V22.2838C22.6399 23.2386 23.0192 24.1543 23.6944 24.8295C24.3694 25.5045 25.2851 25.8838 26.2399 25.8838V28.2839H28.64V25.8838C29.5946 25.8838 30.5103 25.5045 31.1855 24.8295C31.8607 24.1543 32.24 23.2386 32.24 22.2838H29.8399C29.8399 22.6022 29.7136 22.9073 29.4884 23.1323C29.2634 23.3574 28.9582 23.4839 28.64 23.4839H26.2399C25.9217 23.4839 25.6163 23.3574 25.3913 23.1323C25.1663 22.9073 25.04 22.6022 25.04 22.2838V19.8837V19.8839C25.04 19.5657 25.1663 19.2603 25.3913 19.0353C25.6163 18.8103 25.9217 18.6838 26.2399 18.6838Z"
            fill="white"
          />
          <path
            d="M60.828 16.62H58.826L57.034 23.088L55.144 16.62H53.31L51.42 23.088L49.628 16.62H47.64L50.37 26H52.4L54.234 19.672L56.054 26H58.098L60.828 16.62ZM68.1203 22.374C68.0503 20.246 66.4403 18.804 64.5783 18.804C62.5763 18.804 60.9663 20.316 60.9663 22.514C60.9663 24.712 62.5763 26.21 64.5503 26.21C66.0763 26.21 67.3223 25.51 67.9383 24.054L66.2863 23.704C65.7823 24.558 65.0963 24.628 64.5503 24.628C63.6963 24.628 62.9823 24.012 62.8003 23.004H68.1203V22.374ZM64.5783 20.414C65.3203 20.414 65.9923 20.806 66.2303 21.702H62.8563C63.0803 20.834 63.8783 20.414 64.5783 20.414ZM82.1266 26L78.0666 16.62H76.2886L72.2286 26H74.2866L75.1126 23.998H79.2566L80.0686 26H82.1266ZM78.5426 22.276H75.8126L77.1846 18.93L78.5426 22.276ZM86.2883 24.516C85.1263 24.516 84.3423 23.718 84.3423 22.514C84.3423 21.324 85.1263 20.498 86.2883 20.498C87.1003 20.498 87.7583 20.904 88.0103 21.884L89.7883 21.38C89.3263 19.812 87.9123 18.804 86.2883 18.804C84.2443 18.804 82.5503 20.316 82.5503 22.514C82.5503 24.712 84.2443 26.21 86.2883 26.21C87.9543 26.21 89.3963 25.188 89.7883 23.592L88.0803 23.158C87.7583 24.124 87.1003 24.516 86.2883 24.516ZM94.5084 24.516C93.3464 24.516 92.5624 23.718 92.5624 22.514C92.5624 21.324 93.3464 20.498 94.5084 20.498C95.3204 20.498 95.9784 20.904 96.2304 21.884L98.0084 21.38C97.5464 19.812 96.1324 18.804 94.5084 18.804C92.4644 18.804 90.7704 20.316 90.7704 22.514C90.7704 24.712 92.4644 26.21 94.5084 26.21C96.1744 26.21 97.6164 25.188 98.0084 23.592L96.3004 23.158C95.9784 24.124 95.3204 24.516 94.5084 24.516ZM106.144 22.374C106.074 20.246 104.464 18.804 102.602 18.804C100.6 18.804 98.9905 20.316 98.9905 22.514C98.9905 24.712 100.6 26.21 102.574 26.21C104.1 26.21 105.346 25.51 105.962 24.054L104.31 23.704C103.806 24.558 103.12 24.628 102.574 24.628C101.72 24.628 101.006 24.012 100.824 23.004H106.144V22.374ZM102.602 20.414C103.344 20.414 104.016 20.806 104.254 21.702H100.88C101.104 20.834 101.902 20.414 102.602 20.414ZM111.847 18.804C110.895 18.804 110.125 19.084 109.537 19.574V19.014H107.689V28.38H109.537V25.454C110.125 25.93 110.895 26.21 111.847 26.21C113.625 26.21 115.277 24.712 115.277 22.514C115.277 20.316 113.625 18.804 111.847 18.804ZM111.525 24.6C110.531 24.6 109.537 23.802 109.537 22.514C109.537 21.226 110.531 20.414 111.525 20.414C112.645 20.414 113.485 21.226 113.485 22.514C113.485 23.802 112.645 24.6 111.525 24.6ZM121.361 24.152C120.997 24.348 120.521 24.488 120.199 24.488C119.583 24.488 119.177 24.124 119.177 23.284V20.526H121.459V19.014H119.177V16.9H117.329V19.014H115.831V20.526H117.329V23.424C117.329 25.342 118.421 26.21 120.073 26.21C120.661 26.21 121.165 26.084 121.893 25.692L121.361 24.152ZM131.074 24.432C129.394 24.432 128.064 23.088 128.064 21.31C128.064 19.532 129.394 18.202 131.074 18.202C132.376 18.202 133.496 18.916 133.846 20.54L135.694 20.022C135.218 17.768 133.328 16.41 131.074 16.41C128.316 16.41 126.146 18.566 126.146 21.31C126.146 24.068 128.316 26.21 131.074 26.21C133.328 26.21 135.232 24.866 135.694 22.458L133.846 22.08C133.496 23.718 132.376 24.432 131.074 24.432ZM141.724 18.916C140.59 18.916 139.778 19.476 139.218 20.288V19.014H137.37V26H139.218V23.746C139.218 21.8 140.002 20.75 141.71 20.75H142.116L142.214 18.972C142.046 18.916 141.906 18.916 141.724 18.916ZM150.568 19H148.51L146.578 23.466L144.73 19H142.672L145.57 25.776L144.45 28.38H146.508L150.568 19ZM155.985 18.804C155.033 18.804 154.263 19.084 153.675 19.574V19.014H151.827V28.38H153.675V25.454C154.263 25.93 155.033 26.21 155.985 26.21C157.763 26.21 159.415 24.712 159.415 22.514C159.415 20.316 157.763 18.804 155.985 18.804ZM155.663 24.6C154.669 24.6 153.675 23.802 153.675 22.514C153.675 21.226 154.669 20.414 155.663 20.414C156.783 20.414 157.623 21.226 157.623 22.514C157.623 23.802 156.783 24.6 155.663 24.6ZM165.5 24.152C165.136 24.348 164.66 24.488 164.338 24.488C163.722 24.488 163.316 24.124 163.316 23.284V20.526H165.598V19.014H163.316V16.9H161.468V19.014H159.97V20.526H161.468V23.424C161.468 25.342 162.56 26.21 164.212 26.21C164.8 26.21 165.304 26.084 166.032 25.692L165.5 24.152ZM170.271 18.846C168.185 18.846 166.463 20.316 166.463 22.514C166.463 24.712 168.185 26.182 170.271 26.182C172.315 26.182 174.037 24.712 174.037 22.514C174.037 20.316 172.315 18.846 170.271 18.846ZM170.271 24.6C169.263 24.6 168.255 23.816 168.255 22.514C168.255 21.212 169.263 20.428 170.271 20.428C171.237 20.428 172.245 21.212 172.245 22.514C172.245 23.816 171.237 24.6 170.271 24.6ZM177.63 16.62H175.6V17.054L175.67 22.934H177.56L177.63 17.054V16.62ZM176.608 23.914C175.964 23.914 175.502 24.418 175.502 24.992C175.502 25.594 175.964 26.056 176.608 26.056C177.252 26.056 177.714 25.594 177.714 24.992C177.714 24.418 177.252 23.914 176.608 23.914Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="mt-4">
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
      <div className="mobileSocial">
        <Link href={"/"}>
          <a>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_354_1373)">
                <path
                  d="M16.875 27.3604C22.8891 26.4556 27.5 21.2663 27.5 15C27.5 8.09644 21.9035 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.2663 7.11092 26.4556 13.125 27.3604V18.75H11.25C10.2145 18.75 9.375 17.9105 9.375 16.875C9.375 15.8395 10.2145 15 11.25 15H13.125V12.5C13.125 10.0838 15.0837 8.125 17.5 8.125H18.125C19.1605 8.125 20 8.96446 20 10C20 11.0355 19.1605 11.875 18.125 11.875H17.5C17.1549 11.875 16.875 12.1548 16.875 12.5V15H18.75C19.7855 15 20.625 15.8395 20.625 16.875C20.625 17.9105 19.7855 18.75 18.75 18.75H16.875V27.3604Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_354_1373">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>
        <Link href={"/"}>
          <a className="mx-4">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_354_1385)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 17.362 3.15631 19.5743 4.29695 21.4604L3.18226 25.2502C2.90029 26.209 3.79105 27.0998 4.74969 26.8178L8.53964 25.703C10.4257 26.8438 12.638 27.5 15 27.5C21.9035 27.5 27.5 21.9035 27.5 15C27.5 8.09644 21.9035 2.5 15 2.5ZM12.1728 17.8284C14.7009 20.3565 17.115 20.6898 17.9674 20.7211C19.2639 20.7689 20.5262 19.7787 21.0184 18.6302C21.139 18.349 21.1089 18.0106 20.9069 17.7517C20.2227 16.8756 19.2966 16.2479 18.3918 15.623C18.0007 15.3525 17.4631 15.4363 17.1751 15.8194L16.4242 16.9632C16.3409 17.0901 16.1753 17.1337 16.0435 17.0584C15.5354 16.7679 14.7945 16.2725 14.2615 15.7395C13.7291 15.2071 13.2639 14.4997 13.0027 14.0244C12.9341 13.8994 12.9721 13.745 13.0865 13.66L14.2409 12.8027C14.5851 12.5048 14.6456 11.9986 14.3923 11.6279C13.8312 10.8071 13.1777 9.764 12.2319 9.07408C11.9735 8.88563 11.6468 8.86448 11.3769 8.9801C10.2271 9.47288 9.23218 10.7349 9.27998 12.0337C9.31135 12.8861 9.64465 15.3003 12.1728 17.8284Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_354_1385">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_354_1379)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 3.75C24.5711 3.75 26.25 5.42894 26.25 7.5V22.5C26.25 24.5711 24.5711 26.25 22.5 26.25H7.5C5.42894 26.25 3.75 24.5711 3.75 22.5V7.5C3.75 5.42894 5.42894 3.75 7.5 3.75H22.5ZM10 12.5C9.30965 12.5 8.75 13.0596 8.75 13.75V20C8.75 20.6904 9.30965 21.25 10 21.25C10.6904 21.25 11.25 20.6904 11.25 20V13.75C11.25 13.0596 10.6904 12.5 10 12.5ZM13.75 11.25C13.0596 11.25 12.5 11.8097 12.5 12.5V20C12.5 20.6904 13.0596 21.25 13.75 21.25C14.4404 21.25 15 20.6904 15 20V15.4247C15.3811 14.9944 16.0259 14.4901 16.7416 14.184C17.1576 14.006 17.7835 13.9349 18.2189 14.0717C18.4093 14.1316 18.5179 14.2157 18.585 14.3064C18.6501 14.3946 18.75 14.5884 18.75 15V20C18.75 20.6903 19.3096 21.25 20 21.25C20.6904 21.25 21.25 20.6903 21.25 20V15C21.25 14.1615 21.0372 13.4178 20.5947 12.8195C20.154 12.2238 19.5595 11.8726 18.9686 11.6869C17.8415 11.3324 16.5924 11.5287 15.7584 11.8855C15.4937 11.9987 15.2329 12.1304 14.9801 12.2766C14.8748 11.6928 14.3641 11.25 13.75 11.25ZM10 8.75C9.30965 8.75 8.75 9.30965 8.75 10C8.75 10.6904 9.30965 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10C11.25 9.30965 10.6904 8.75 10 8.75Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_354_1379">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
