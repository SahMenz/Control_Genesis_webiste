export default function CustomSvg({name}) {
  return name === "collapseArrow" ? (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#222222" />
      <path
        d="M24.1744 26.4528L25.6479 18.0964L24.1744 26.4528ZM24.1744 26.4528L15.8181 24.9794L24.1744 26.4528ZM24.1744 26.4528L18.1519 17.8517L24.1744 26.4528ZM14.9972 13.3464L16.4312 15.3943L14.9972 13.3464Z"
        fill="#222222"
      />
      <path
        d="M24.1744 26.4528L25.6479 18.0964M24.1744 26.4528L15.8181 24.9794M24.1744 26.4528L18.1519 17.8517M14.9972 13.3464L16.4312 15.3943"
        stroke="#FFD800"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : name === "personalized" ? (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_41_541)">
        <rect
          x="17"
          y="14"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_41_541)"
          shapeRendering="crispEdges"
        />
      </g>
      <g style="mix-blend-mode:overlay" opacity="0.2">
        <rect x="17" y="14" width="40" height="40" rx="20" fill="#FFD800" />
      </g>
      <g clipPath="url(#clip0_41_541)">
        <path
          d="M38.2195 43.386C37.7159 44.0202 36.6948 43.6727 36.6826 42.8629L36.5052 31.0186H44.4693C45.9118 31.0186 46.7163 32.6847 45.8194 33.8144L38.2195 43.386Z"
          fill="#FAFAFF"
        />
        <path
          d="M38.2195 43.386C37.7159 44.0202 36.6948 43.6727 36.6826 42.8629L36.5052 31.0186H44.4693C45.9118 31.0186 46.7163 32.6847 45.8194 33.8144L38.2195 43.386Z"
          fill="#FAFAFF"
        />
        <path
          d="M34.9805 24.3276C35.4841 23.6933 36.5053 24.0408 36.5175 24.8506L36.5952 36.695H28.7307C27.2882 36.695 26.4836 35.0289 27.3806 33.8991L34.9805 24.3276Z"
          fill="#FAFAFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_41_541"
          x="-15"
          y="-18"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_41_541"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.4"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_41_541"
          />
          <feOffset dy="3.2" />
          <feGaussianBlur stdDeviation="9.6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_41_541"
            result="effect2_dropShadow_41_541"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_41_541"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_41_541"
          x1="18.0938"
          y1="19.3"
          x2="48.3049"
          y2="31.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FDFDFD" stopOpacity="0.2" />
        </linearGradient>
        <clipPath id="clip0_41_541">
          <rect
            width="19.2"
            height="19.7176"
            fill="white"
            transform="translate(27 24)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : name === "creative" ? (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_41_553)">
        <rect
          x="17"
          y="14"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_41_553)"
          shapeRendering="crispEdges"
        />
      </g>
      <g style="mix-blend-mode:overlay" opacity="0.2">
        <rect x="17" y="14" width="40" height="40" rx="20" fill="#FFD800" />
      </g>
      <g clipPath="url(#clip0_41_553)">
        <path
          d="M30.8318 26.1366L30.7367 26.223L34.0662 29.5092C33.5762 30.3011 33.3213 31.2158 33.3312 32.147C33.3116 32.7734 33.4215 33.3971 33.6538 33.9791C33.8862 34.5611 34.2361 35.0889 34.6816 35.5296C35.1272 35.9703 35.6589 36.3144 36.2434 36.5403C36.828 36.7662 37.4528 36.8692 38.0789 36.8427C39.0187 36.8568 39.9429 36.6017 40.7425 36.1077L44.0893 39.4372C43.2001 40.5988 42.0525 41.5373 40.7376 42.1783C39.4226 42.8192 37.9764 43.1451 36.5136 43.1299C35.2688 43.1483 34.0327 42.9185 32.8776 42.454C31.7225 41.9895 30.6715 41.2996 29.786 40.4245C28.9004 39.5494 28.198 38.5067 27.7198 37.3572C27.2416 36.2077 26.9972 34.9745 27.0008 33.7295C26.9806 32.2489 27.3184 30.7853 27.9854 29.4633C28.6524 28.1413 29.6289 27.0001 30.8318 26.1366ZM32.6912 24.8652C33.9646 24.2867 35.3485 23.9917 36.7472 24.0005C37.9876 23.9878 39.2182 24.222 40.3673 24.6893C41.5164 25.1566 42.5611 25.8477 43.4407 26.7224C44.3203 27.5972 45.0171 28.6381 45.4907 29.7846C45.9643 30.9312 46.2052 32.1604 46.1994 33.4009C46.2142 34.8029 45.9189 36.1909 45.3347 37.4655L42.351 34.4819C42.832 33.702 43.0865 32.8037 43.0861 31.8875C43.1118 31.2564 43.0063 30.6268 42.7763 30.0386C42.5462 29.4503 42.1966 28.9162 41.7496 28.47C41.3026 28.0238 40.7678 27.6752 40.1792 27.4462C39.5905 27.2172 38.9608 27.1128 38.3297 27.1397C37.4128 27.1347 36.5133 27.3895 35.7353 27.8748L32.6912 24.8652ZM38.3816 34.5942C38.0073 34.6073 37.6344 34.5437 37.2856 34.4075C36.9368 34.2713 36.6195 34.0654 36.3531 33.8022C36.0867 33.5391 35.8769 33.2243 35.7364 32.8772C35.596 32.5301 35.5279 32.158 35.5364 31.7836C35.5219 31.4057 35.5855 31.0288 35.7233 30.6766C35.861 30.3244 36.0699 30.0044 36.3369 29.7366C36.604 29.4687 36.9233 29.2588 37.2751 29.12C37.6269 28.9812 38.0036 28.9165 38.3816 28.9298C38.7578 28.9214 39.1318 28.9897 39.4809 29.1304C39.83 29.271 40.1468 29.4812 40.4121 29.7481C40.6774 30.0151 40.8857 30.3332 41.0242 30.6831C41.1628 31.033 41.2288 31.4074 41.2181 31.7836C41.2327 32.16 41.1693 32.5354 41.0319 32.8861C40.8945 33.2368 40.6861 33.5554 40.4198 33.8217C40.1534 34.0881 39.8349 34.2965 39.4841 34.4339C39.1334 34.5713 38.758 34.6347 38.3816 34.6201L38.3816 34.5942Z"
          fill="#FAFAFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_41_553"
          x="-15"
          y="-18"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_41_553"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.4"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_41_553"
          />
          <feOffset dy="3.2" />
          <feGaussianBlur stdDeviation="9.6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_41_553"
            result="effect2_dropShadow_41_553"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_41_553"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_41_553"
          x1="18.0938"
          y1="19.3"
          x2="48.3049"
          y2="31.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FDFDFD" stopOpacity="0.2" />
        </linearGradient>
        <clipPath id="clip0_41_553">
          <rect
            width="19.2"
            height="19.2"
            fill="white"
            transform="translate(27 24)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : name === "specialized" ? (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_41_563)">
        <rect
          x="17"
          y="14"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_41_563)"
          shapeRendering="crispEdges"
        />
      </g>
      <g style="mix-blend-mode:overlay" opacity="0.2">
        <rect x="17" y="14" width="40" height="40" rx="20" fill="#FFD800" />
      </g>
      <g clipPath="url(#clip0_41_563)">
        <path
          d="M35.7441 32.8919C36.1522 32.3063 37.0111 32.2964 37.4344 32.8621L37.4559 32.8919L41.8583 39.2099C41.859 39.2109 41.8599 39.2117 41.8609 39.2122C41.8619 39.2128 41.8631 39.2131 41.8643 39.2132L41.8676 39.2126L41.8705 39.2105C41.8712 39.2096 41.8722 39.2089 41.8733 39.2085C41.8743 39.208 41.8755 39.2078 41.8766 39.2079L41.8799 39.2088L41.8826 39.2111L43.3093 41.1566C43.385 41.2597 43.3749 41.403 43.283 41.492C41.5547 43.1682 39.1979 44.2 36.6 44.2C34.0022 44.2 31.6454 43.1682 29.9171 41.492C29.8306 41.408 29.8166 41.2764 29.8783 41.1751L29.8907 41.1564L31.3175 39.211C31.3181 39.2101 31.319 39.2093 31.32 39.2087C31.3211 39.2082 31.3222 39.2079 31.3234 39.2079L31.3268 39.2085L31.3295 39.2105C31.3303 39.2114 31.3313 39.2121 31.3323 39.2126C31.3334 39.2131 31.3346 39.2133 31.3358 39.2132L31.3391 39.2122L31.3418 39.2099L35.7441 32.8919ZM36.6 25C41.902 25 46.2 29.2981 46.2 34.6C46.2 36.3871 45.7118 38.0601 44.8612 39.493C44.7727 39.6423 44.5673 39.656 44.4542 39.5292L44.441 39.5133L43.0448 37.6827C43.0162 37.6447 42.9982 37.5996 42.9929 37.5523C42.9875 37.505 42.9949 37.4571 43.0142 37.4136C43.3925 36.5526 43.6025 35.6008 43.6025 34.6C43.6025 30.7327 40.4674 27.5976 36.6 27.5976C32.7326 27.5976 29.5976 30.7327 29.5976 34.6C29.5976 35.6007 29.8076 36.5524 30.1858 37.4135C30.2036 37.4536 30.2113 37.4974 30.2082 37.5412C30.2051 37.585 30.1912 37.6273 30.1679 37.6645L30.1552 37.6827L28.7591 39.5133C28.6496 39.6569 28.4309 39.6483 28.3388 39.493C27.4883 38.0601 27 36.387 27 34.6C27 29.2981 31.2981 25 36.6 25Z"
          fill="#FAFAFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_41_563"
          x="-15"
          y="-18"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="16" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_41_563"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.4"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_41_563"
          />
          <feOffset dy="3.2" />
          <feGaussianBlur stdDeviation="9.6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_41_563"
            result="effect2_dropShadow_41_563"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_41_563"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_41_563"
          x1="18.0938"
          y1="19.3"
          x2="48.3049"
          y2="31.413"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FDFDFD" stopOpacity="0.2" />
        </linearGradient>
        <clipPath id="clip0_41_563">
          <rect
            width="19.2"
            height="19.2"
            fill="white"
            transform="translate(27 25)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : name === "expandArrow" ? (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 137">
        <circle
          id="Ellipse 21"
          cx="33.6819"
          cy="34.1329"
          r="33.6447"
          fill="#FFD800"
        />
        <g id="Vector">
          <path
            d="M42.5013 24.4467L28.2271 24.4467L42.5013 24.4467ZM42.5013 24.4467L42.5013 38.7209L42.5013 24.4467ZM42.5013 24.4467L30.0113 36.9366L42.5013 24.4467ZM23.469 43.479L26.4428 40.5052L23.469 43.479Z"
            fill="#FFD800"
          />
          <path
            d="M42.5013 24.4467L28.2271 24.4467M42.5013 24.4467L42.5013 38.7209M42.5013 24.4467L30.0113 36.9366M23.469 43.479L26.4428 40.5052"
            stroke="#222222"
            strokeWidth="1.68223"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  ) : name === "x" ? (
    <svg
      width="26"
      height="23"
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="flowbite:x-solid">
        <path
          id="Vector"
          d="M14.9943 9.82686L22.3591 2.06836H19.0719L13.4507 7.99384L8.46383 2.06836H1.30762L9.65761 11.9881L1.81037 20.2531H5.09859L11.2012 13.8248L16.6149 20.2531H23.7711L14.9943 9.82686ZM12.4484 12.5091L10.9027 10.6734L4.90177 3.54769H7.37275L12.2163 9.29132L13.7599 11.128L20.1972 18.7737H17.7263L12.4484 12.5091Z"
          fill="#FFD800"
        />
      </g>
    </svg>
  ) : name === "send" ? (
    <svg
      width="61"
      height="62"
      viewBox="0 0 61 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 194">
        <circle
          id="Ellipse 23"
          cx="30.8997"
          cy="31.012"
          r="30.0423"
          fill="#FFD800"
        />
        <path
          id="Vector"
          d="M46.6943 15.2155C46.8361 15.3576 46.9332 15.5382 46.9732 15.735C47.0133 15.9318 46.9947 16.136 46.9197 16.3222L34.9937 46.1362C34.8886 46.3988 34.7131 46.6273 34.4865 46.7965C34.2599 46.9658 33.9911 47.0692 33.7095 47.0955C33.4279 47.1218 33.1445 47.0698 32.8905 46.9454C32.6365 46.821 32.4218 46.629 32.2699 46.3904L25.7566 36.1531L15.5194 29.6398C15.2803 29.4881 15.0877 29.2733 14.9629 29.0191C14.8381 28.7649 14.786 28.4811 14.8123 28.1992C14.8386 27.9172 14.9423 27.648 15.1119 27.4212C15.2815 27.1944 15.5105 27.0189 15.7735 26.914L45.5875 14.9921C45.7738 14.9171 45.978 14.8985 46.1748 14.9386C46.3715 14.9787 46.5522 15.0757 46.6943 15.2175V15.2155ZM27.802 35.5547L33.4607 44.4454L43.1609 20.1958L27.802 35.5547ZM41.712 18.7468L17.4623 28.447L26.3551 34.1036L41.712 18.7468Z"
          fill="#020202"
        />
      </g>
    </svg>
  ) : name === "plus" ? (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4286 13.4381H12.5714V21.2953C12.5714 22.1596 11.8643 22.8667 11 22.8667C10.1357 22.8667 9.42857 22.1596 9.42857 21.2953V13.4381H1.57143C0.707143 13.4381 0 12.731 0 11.8667C0 11.0024 0.707143 10.2953 1.57143 10.2953H9.42857V2.43813C9.42857 1.57384 10.1357 0.866699 11 0.866699C11.8643 0.866699 12.5714 1.57384 12.5714 2.43813V10.2953H20.4286C21.2929 10.2953 22 11.0024 22 11.8667C22 12.731 21.2929 13.4381 20.4286 13.4381Z"
        fill="#FAFAFF"
      />
    </svg>
  ) : name === "minus" ? (
    <svg
      width="26"
      height="5"
      viewBox="0 0 26 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M2 2.3667H24"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : name === "linkedin" ? (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="mdi:linkedin">
        <path
          id="Vector"
          d="M22.5545 3.57031C23.1787 3.57031 23.7773 3.81825 24.2186 4.25958C24.6599 4.70091 24.9079 5.29949 24.9079 5.92363V22.3968C24.9079 23.021 24.6599 23.6195 24.2186 24.0609C23.7773 24.5022 23.1787 24.7501 22.5545 24.7501H6.08134C5.4572 24.7501 4.85863 24.5022 4.4173 24.0609C3.97597 23.6195 3.72803 23.021 3.72803 22.3968V5.92363C3.72803 5.29949 3.97597 4.70091 4.4173 4.25958C4.85863 3.81825 5.4572 3.57031 6.08134 3.57031H22.5545ZM21.9662 21.8085V15.5722C21.9662 14.5549 21.5621 13.5792 20.8427 12.8598C20.1233 12.1405 19.1477 11.7363 18.1303 11.7363C17.1302 11.7363 15.9653 12.3482 15.4005 13.266V11.9599H12.1176V21.8085H15.4005V16.0076C15.4005 15.1016 16.13 14.3603 17.036 14.3603C17.4729 14.3603 17.8919 14.5338 18.2009 14.8427C18.5098 15.1517 18.6833 15.5707 18.6833 16.0076V21.8085H21.9662ZM8.29346 10.1125C8.81773 10.1125 9.32054 9.90426 9.69126 9.53354C10.062 9.16282 10.2702 8.66002 10.2702 8.13574C10.2702 7.04145 9.38775 6.14719 8.29346 6.14719C7.76606 6.14719 7.26027 6.3567 6.88734 6.72962C6.51441 7.10255 6.30491 7.60835 6.30491 8.13574C6.30491 9.23003 7.19917 10.1125 8.29346 10.1125ZM9.92901 21.8085V11.9599H6.66967V21.8085H9.92901Z"
          fill="#FFD800"
        />
      </g>
    </svg>
  ) : name === "instagram" ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M6.95785 1.24923H16.6621C20.0044 1.24923 22.7208 3.96557 22.7208 7.30795V17.0122C22.7208 18.619 22.0825 20.1601 20.9462 21.2963C19.81 22.4326 18.2689 23.0709 16.6621 23.0709H6.95785C3.61547 23.0709 0.899137 20.3545 0.899137 17.0122V7.30795C0.899137 5.70108 1.53746 4.16002 2.67369 3.02379C3.80992 1.88756 5.35098 1.24923 6.95785 1.24923ZM6.7268 2.27614C5.45356 2.27614 4.23247 2.78193 3.33215 3.68225C2.43183 4.58256 1.92604 5.80366 1.92604 7.0769V17.2432C1.92604 19.8967 4.07336 22.044 6.7268 22.044H16.8931C18.1664 22.044 19.3875 21.5382 20.2878 20.6379C21.1881 19.7376 21.6939 18.5165 21.6939 17.2432V7.0769C21.6939 4.42346 19.5466 2.27614 16.8931 2.27614H6.7268ZM17.8751 5.29266C18.0879 5.29266 18.2919 5.37718 18.4424 5.52764C18.5928 5.67809 18.6774 5.88215 18.6774 6.09492C18.6774 6.3077 18.5928 6.51176 18.4424 6.66221C18.2919 6.81266 18.0879 6.89719 17.8751 6.89719C17.6623 6.89719 17.4583 6.81266 17.3078 6.66221C17.1573 6.51176 17.0728 6.3077 17.0728 6.09492C17.0728 5.88215 17.1573 5.67809 17.3078 5.52763C17.4583 5.37718 17.6623 5.29266 17.8751 5.29266ZM11.81 7.02555C13.1717 7.02555 14.4777 7.56651 15.4406 8.52941C16.4035 9.49232 16.9445 10.7983 16.9445 12.1601C16.9445 13.5218 16.4035 14.8278 15.4406 15.7907C14.4777 16.7536 13.1717 17.2946 11.81 17.2946C10.4482 17.2946 9.14222 16.7536 8.17932 15.7907C7.21641 14.8278 6.67545 13.5218 6.67545 12.1601C6.67545 10.7983 7.21641 9.49232 8.17932 8.52941C9.14222 7.56651 10.4482 7.02555 11.81 7.02555ZM11.81 8.05245C10.7206 8.05245 9.67577 8.48522 8.90544 9.25554C8.13512 10.0259 7.70235 11.0707 7.70235 12.1601C7.70235 13.2495 8.13512 14.2942 8.90544 15.0646C9.67577 15.8349 10.7206 16.2677 11.81 16.2677C12.8994 16.2677 13.9441 15.8349 14.7145 15.0646C15.4848 14.2942 15.9176 13.2495 15.9176 12.1601C15.9176 11.0707 15.4848 10.0259 14.7145 9.25554C13.9441 8.48522 12.8994 8.05245 11.81 8.05245Z"
        stroke="#FFD800"
        strokeWidth="1.28363"
      />
    </svg>
  ) : name === "CG_Icon" ? (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="CG Icon" clipPath="url(#clip0_106_133)">
        <g id="Layer 1">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector"
                d="M18.6724 37.7651C8.43646 37.7651 0.10791 29.4366 0.10791 19.1993C0.10791 8.962 8.43646 0.634766 18.6724 0.634766C28.9084 0.634766 37.2369 8.96331 37.2369 19.2006C37.2369 29.4379 28.9084 37.7664 18.6724 37.7664V37.7651ZM18.6724 3.20952C9.8552 3.20952 2.68267 10.3821 2.68267 19.1993C2.68267 28.0165 9.8552 35.189 18.6724 35.189C27.4897 35.189 34.6622 28.0165 34.6622 19.1993C34.6622 10.3821 27.4897 3.20952 18.6724 3.20952Z"
                fill="#FAFAFF"
              />
              <path
                id="Vector_2"
                d="M18.6722 37.8731C8.37715 37.8731 0 29.496 0 19.1996C0 8.90318 8.37715 0.527344 18.6722 0.527344C28.9673 0.527344 37.3445 8.9045 37.3445 19.1996C37.3445 29.4947 28.9673 37.8718 18.6722 37.8718V37.8731ZM18.6722 0.742783C8.49538 0.742783 0.215439 9.02273 0.215439 19.1996C0.215439 29.3764 8.49538 37.6577 18.6736 37.6577C28.8517 37.6577 37.1317 29.3778 37.1317 19.1996C37.1317 9.02141 28.8504 0.742783 18.6722 0.742783ZM18.6722 35.2984C9.7959 35.2984 2.57476 28.0772 2.57476 19.2009C2.57476 10.3246 9.79721 3.1021 18.6722 3.1021C27.5473 3.1021 34.7697 10.3232 34.7697 19.1996C34.7697 28.0759 27.5486 35.2971 18.6722 35.2971V35.2984ZM18.6722 3.31885C9.91413 3.31885 2.7902 10.4441 2.7902 19.2009C2.7902 27.9577 9.91544 35.0829 18.6722 35.0829C27.429 35.0829 34.5543 27.9577 34.5543 19.2009C34.5543 10.4441 27.4304 3.31754 18.6722 3.31754V3.31885Z"
                fill="#FAFAFF"
              />
            </g>
            <g id="Group_3">
              <path
                id="Vector_3"
                d="M27.894 15.1165V9.64648H20.6229V15.1178C19.7992 15.9757 19.2462 17.1251 19.1043 18.4072C19.082 18.62 19.0688 18.8355 19.0688 19.0535C19.0688 22.1012 21.3927 24.5709 24.2591 24.5709C26.2755 24.5709 28.0227 23.3492 28.8818 21.5652C28.8818 21.5652 28.8818 21.5644 28.8818 21.5626C28.9042 21.5153 28.9265 21.4693 28.9475 21.4221C29.2694 20.7153 29.4493 19.9258 29.4493 19.093V19.0522C29.4493 17.51 28.8529 16.1149 27.894 15.1139V15.1165ZM22.3267 11.5132H26.1902L26.1954 13.9342C25.6778 13.7122 25.1182 13.5769 24.531 13.5454C24.4417 13.5401 24.351 13.5375 24.2591 13.5375C23.576 13.5375 22.9231 13.6781 22.3267 13.9329V11.5132ZM26.5462 21.4496C26.4082 21.5928 26.2585 21.7189 26.1021 21.8319C25.5859 22.2024 24.954 22.4217 24.2814 22.4217C22.7352 22.4217 21.4426 21.2802 21.1431 19.7682C21.1037 19.5764 21.084 19.3846 21.08 19.1836V19.177C21.08 19.1508 21.08 19.1245 21.08 19.0969C21.08 18.6135 21.1773 18.1497 21.3664 17.7359C21.4847 17.4588 21.641 17.1974 21.8301 16.9701C22.0272 16.7258 22.2479 16.5182 22.4962 16.3435C22.5816 16.287 22.6656 16.2318 22.7576 16.1806C22.8167 16.1491 22.8745 16.1175 22.9336 16.0873C23.3514 15.8745 23.8216 15.7615 24.3103 15.7615H24.3274C24.3432 15.7615 24.3602 15.7615 24.3747 15.7668C25.0079 15.7747 25.5951 15.9796 26.0903 16.3185C26.9521 16.9149 27.5196 17.9304 27.5196 19.0785C27.5196 20.0138 27.1478 20.8546 26.5488 21.4496H26.5462Z"
                fill="#FAFAFF"
              />
              <path
                id="Vector_4"
                d="M24.2593 24.6772C21.3404 24.6772 18.9653 22.155 18.9653 19.0561C18.9653 18.8407 18.9772 18.62 19.0008 18.398C19.1387 17.1447 19.6773 15.9677 20.5181 15.0784V9.54395H27.9967V15.0757C29.0003 16.1385 29.552 17.5506 29.552 19.0561V19.0968C29.552 19.9257 29.38 20.7244 29.041 21.4693C29.024 21.5087 29.0043 21.5494 28.9845 21.5901V21.6059L28.9675 21.6256C28.0545 23.5081 26.2508 24.6772 24.2567 24.6772H24.2593ZM20.7269 9.7515V15.1611L20.698 15.1913C19.8718 16.0518 19.3424 17.1986 19.2084 18.4203C19.1847 18.6344 19.1742 18.8485 19.1742 19.0561C19.1742 22.0407 21.456 24.4696 24.2607 24.4696C26.172 24.4696 27.9021 23.3478 28.7809 21.5415L28.7914 21.5192L28.7967 21.5087C28.8177 21.4666 28.8361 21.4246 28.8558 21.3826C29.1829 20.664 29.3484 19.8955 29.3484 19.0955V19.0548C29.3484 17.5887 28.8059 16.2147 27.822 15.1874L27.7931 15.1572V9.75019H20.7296L20.7269 9.7515ZM24.2804 22.5241C22.7171 22.5241 21.3549 21.3734 21.0396 19.7878C21.0002 19.596 20.9792 19.399 20.9739 19.1848C20.9739 19.1533 20.9739 19.1244 20.9739 19.0968C20.9739 18.5963 21.0737 18.1234 21.2695 17.6925C21.3956 17.3996 21.5572 17.1329 21.7476 16.903C21.9473 16.6547 22.172 16.4432 22.4334 16.258L22.4504 16.2462C22.5306 16.1936 22.6133 16.1385 22.704 16.0886C22.7605 16.0583 22.813 16.0308 22.8669 16.0019L22.8813 15.994C23.3148 15.7733 23.8074 15.6564 24.308 15.6564H24.325C24.3474 15.6564 24.3684 15.6577 24.3855 15.6616C25.0068 15.6708 25.615 15.8679 26.1471 16.2317C27.0706 16.8702 27.621 17.9342 27.621 19.0784C27.621 20.0124 27.265 20.8808 26.62 21.5231C26.4873 21.6611 26.3375 21.7898 26.1628 21.9159C25.6072 22.3139 24.9569 22.5254 24.2804 22.5254V22.5241ZM24.3066 15.8639C23.839 15.8639 23.3792 15.973 22.9772 16.1779L22.9641 16.1845C22.9102 16.2134 22.8564 16.2423 22.8025 16.2698C22.7224 16.3145 22.6462 16.3657 22.5647 16.4183L22.5503 16.4275C22.3086 16.5996 22.0971 16.7979 21.9079 17.0331C21.7279 17.2485 21.5769 17.4981 21.4586 17.774C21.2747 18.1799 21.1815 18.6239 21.1815 19.0942C21.1815 19.1205 21.1815 19.1454 21.1815 19.1704C21.1854 19.3793 21.2051 19.5645 21.2432 19.7444C21.5388 21.2341 22.817 22.3153 24.2804 22.3153C24.9122 22.3153 25.5218 22.1182 26.0407 21.7451C26.2062 21.6256 26.3467 21.5061 26.4702 21.376H26.4715C27.0784 20.7717 27.4121 19.9559 27.4121 19.0771C27.4121 18.0025 26.8945 17.0015 26.0275 16.4025C25.527 16.0597 24.953 15.8757 24.3697 15.8692L24.3421 15.8652C24.3421 15.8652 24.3369 15.8652 24.3224 15.8652H24.3053L24.3066 15.8639ZM26.2981 14.0918L26.1523 14.0301C25.6334 13.8081 25.0856 13.6806 24.5234 13.6491C24.4419 13.6439 24.3552 13.6425 24.258 13.6425C23.6038 13.6425 22.968 13.7726 22.3664 14.0301L22.2219 14.0918V11.4106H26.2929L26.2981 14.0931V14.0918ZM24.258 13.4337C24.3592 13.4337 24.4498 13.4363 24.5352 13.4415C25.0699 13.4704 25.5914 13.5847 26.0893 13.7792L26.084 11.6169H22.4294V13.7778C23.014 13.5493 23.6275 13.4337 24.258 13.4337Z"
                fill="#FAFAFF"
              />
            </g>
            <g id="Group_4">
              <path
                id="Vector_5"
                d="M15.3855 19.3403L15.266 15.1143H8.01465L8.1066 24.2927C8.1066 27.2852 10.4252 29.7247 13.2758 29.7247C16.1264 29.7247 18.445 27.2852 18.445 24.2927C18.445 22.0884 17.1905 20.1889 15.3855 19.3403ZM9.99432 16.9757H13.5267V18.87C13.4453 18.8621 13.3638 18.8621 13.2771 18.8621C12.0305 18.8621 10.885 19.3337 9.99432 20.1088V16.9744V16.9757ZM16.4969 24.6212C16.4798 24.7919 16.4509 24.9588 16.4089 25.119C16.3957 25.1716 16.3813 25.2267 16.3642 25.278C16.3406 25.3568 16.313 25.4356 16.2828 25.5105C16.2342 25.6379 16.1764 25.7614 16.112 25.8796C16.0358 26.0215 15.9491 26.1568 15.8545 26.2855C15.7586 26.413 15.6535 26.5338 15.5419 26.6455C15.4736 26.7177 15.4013 26.7847 15.3264 26.8478C15.2529 26.9108 15.1754 26.97 15.0979 27.0264C14.5816 27.3969 13.9497 27.6163 13.2771 27.6163C11.731 27.6163 10.4383 26.4747 10.1388 24.9627C10.0994 24.7709 10.0797 24.5791 10.0758 24.3781V24.3716C10.0758 24.3453 10.0758 24.319 10.0758 24.2914C10.0758 23.8986 10.1401 23.519 10.2662 23.1683C10.2938 23.0868 10.3267 23.008 10.3621 22.9305C10.4068 22.8267 10.4567 22.7242 10.5106 22.627C10.6025 22.4628 10.7076 22.3065 10.8259 22.1646C10.8994 22.0727 10.9769 21.9873 11.0584 21.9058C11.0847 21.8782 11.1122 21.852 11.1411 21.8257C11.2515 21.7206 11.3684 21.6247 11.4932 21.538C11.5786 21.4815 11.6627 21.425 11.7546 21.3751C11.8137 21.3436 11.8715 21.3121 11.9306 21.2819C12.3484 21.069 12.8187 20.9561 13.3073 20.9561H13.3244C13.3402 20.9561 13.3573 20.9561 13.3717 20.9613C14.0049 20.9692 14.5921 21.1741 15.0873 21.5131C15.2489 21.6247 15.4 21.7508 15.5392 21.8901C15.6089 21.9584 15.6759 22.0319 15.7389 22.1081C16.225 22.6901 16.5179 23.4467 16.5179 24.273C16.5179 24.3899 16.5113 24.5056 16.5008 24.6198L16.4969 24.6212Z"
                fill="#FAFAFF"
              />
              <path
                id="Vector_6"
                d="M13.2759 29.8297C10.3688 29.8297 8.00294 27.3456 8.00294 24.294L7.90967 15.0117H15.3673L15.4881 19.2758C17.3496 20.1796 18.5502 22.1422 18.5502 24.2953C18.5502 27.3482 16.1844 29.831 13.2772 29.831L13.2759 29.8297ZM8.11985 15.2193L8.21181 24.2927C8.21181 27.2313 10.4844 29.6221 13.2772 29.6221C16.0701 29.6221 18.3427 27.2313 18.3427 24.294C18.3427 22.1987 17.1657 20.2913 15.3423 19.4348L15.2845 19.4072L15.1663 15.218H8.12117L8.11985 15.2193ZM13.2759 27.7226C11.7127 27.7226 10.3504 26.5718 10.0352 24.9863C9.99575 24.7945 9.97473 24.5974 9.96947 24.3833C9.96947 24.3518 9.96947 24.3229 9.96947 24.2953C9.96947 23.8894 10.0352 23.5005 10.1665 23.1367C10.1941 23.0578 10.2256 22.9777 10.265 22.891C10.3097 22.7872 10.3609 22.6808 10.4174 22.5797C10.5146 22.4036 10.625 22.2434 10.7445 22.1015C10.8168 22.0122 10.8943 21.9255 10.9823 21.8361C11.0086 21.8085 11.0388 21.7796 11.0677 21.7534C11.178 21.6483 11.3002 21.5484 11.4303 21.4565L11.4486 21.4434C11.5288 21.3908 11.6115 21.3369 11.7009 21.287C11.7626 21.2542 11.8204 21.224 11.8782 21.1924C12.3117 20.9704 12.8043 20.8548 13.3048 20.8548H13.3219C13.3442 20.8548 13.3639 20.8562 13.3823 20.8601C14.0037 20.8693 14.6119 21.0663 15.1439 21.4302C15.3108 21.5458 15.4684 21.6772 15.6103 21.8204C15.6773 21.8861 15.7469 21.9622 15.8165 22.045C16.3341 22.6664 16.6192 23.4585 16.6192 24.2756C16.6192 24.3925 16.6126 24.5134 16.6008 24.6316C16.5837 24.8076 16.5535 24.981 16.5101 25.1452C16.4957 25.2004 16.4812 25.2556 16.4642 25.3094C16.4392 25.3909 16.4116 25.4723 16.3801 25.5485C16.3315 25.6746 16.2724 25.8034 16.2041 25.9295C16.1252 26.0766 16.0359 26.2172 15.9374 26.3472C15.8389 26.4786 15.7298 26.6034 15.6142 26.719C15.5499 26.7873 15.4763 26.8556 15.3935 26.9278C15.3239 26.9883 15.2464 27.0474 15.1584 27.1118C14.6027 27.5098 13.9525 27.7213 13.2759 27.7213V27.7226ZM13.3022 21.0624C12.8359 21.0624 12.3761 21.1714 11.9728 21.3764C11.9163 21.4066 11.8572 21.4381 11.7981 21.4696C11.7179 21.5143 11.6418 21.5642 11.5616 21.6168L11.5459 21.6273C11.4276 21.7113 11.312 21.8046 11.2082 21.9044C11.1807 21.9294 11.1544 21.9557 11.1294 21.982C11.0454 22.066 10.9718 22.1488 10.9035 22.2342C10.7918 22.3682 10.6894 22.5179 10.5987 22.6808C10.5462 22.7754 10.4976 22.8752 10.4542 22.9751C10.4161 23.0578 10.3872 23.1327 10.3609 23.2063C10.2388 23.5478 10.1757 23.9143 10.1757 24.2953C10.1757 24.3216 10.1757 24.3465 10.1757 24.3715C10.1797 24.5804 10.1994 24.7656 10.2375 24.9455C10.533 26.4352 11.8112 27.5164 13.2746 27.5164C13.9065 27.5164 14.516 27.3193 15.0349 26.9462C15.119 26.8858 15.1912 26.8293 15.2569 26.7728C15.3357 26.7058 15.4027 26.6428 15.4645 26.5771C15.5761 26.4668 15.6773 26.3498 15.7692 26.2264C15.8599 26.1042 15.944 25.9728 16.0188 25.8336C16.0832 25.7153 16.1384 25.5958 16.1844 25.4763C16.2133 25.404 16.2395 25.3278 16.2632 25.2503C16.2789 25.1991 16.2934 25.1465 16.3065 25.0953C16.3459 24.9403 16.3748 24.7787 16.3906 24.6132C16.4024 24.5002 16.4077 24.3872 16.4077 24.2769C16.4077 23.5084 16.1397 22.7623 15.6523 22.179C15.5866 22.1002 15.5223 22.0292 15.4592 21.9675C15.3252 21.8322 15.1781 21.71 15.0218 21.601C14.5213 21.2581 13.9472 21.0742 13.3639 21.0676L13.3364 21.0637C13.3364 21.0637 13.3311 21.0637 13.3167 21.0637H13.2996L13.3022 21.0624ZM9.88934 20.3386V16.8718H13.6293V18.9842L13.5163 18.9737C13.4401 18.9671 13.36 18.9671 13.2759 18.9671C12.1081 18.9671 10.9665 19.4006 10.0614 20.1888L9.88934 20.3386ZM10.0969 17.0807V19.888C11.0099 19.1589 12.1304 18.7596 13.2759 18.7596C13.3259 18.7596 13.3745 18.7596 13.4217 18.7609V17.0807H10.0982H10.0969Z"
                fill="#FAFAFF"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_106_133">
          <rect
            width="37.3458"
            height="37.3458"
            fill="white"
            transform="translate(0 0.527344)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <></>
  );
}