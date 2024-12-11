export default function CustomSvg(name) {
  return name === "expandArrow" ? (
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
  ) : (
    <></>
  );
}
