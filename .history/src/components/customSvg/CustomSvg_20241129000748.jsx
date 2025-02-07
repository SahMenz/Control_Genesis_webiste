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
  ) :
  name ==='creative'
  ?
  <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_bd_41_553)">
<rect x="17" y="14" width="40" height="40" rx="20" fill="url(#paint0_linear_41_553)" shapeRendering="crispEdges"/>
</g>
<g style="mix-blend-mode:overlay" opacity="0.2">
<rect x="17" y="14" width="40" height="40" rx="20" fill="#FFD800"/>
</g>
<g clipPath="url(#clip0_41_553)">
<path d="M30.8318 26.1366L30.7367 26.223L34.0662 29.5092C33.5762 30.3011 33.3213 31.2158 33.3312 32.147C33.3116 32.7734 33.4215 33.3971 33.6538 33.9791C33.8862 34.5611 34.2361 35.0889 34.6816 35.5296C35.1272 35.9703 35.6589 36.3144 36.2434 36.5403C36.828 36.7662 37.4528 36.8692 38.0789 36.8427C39.0187 36.8568 39.9429 36.6017 40.7425 36.1077L44.0893 39.4372C43.2001 40.5988 42.0525 41.5373 40.7376 42.1783C39.4226 42.8192 37.9764 43.1451 36.5136 43.1299C35.2688 43.1483 34.0327 42.9185 32.8776 42.454C31.7225 41.9895 30.6715 41.2996 29.786 40.4245C28.9004 39.5494 28.198 38.5067 27.7198 37.3572C27.2416 36.2077 26.9972 34.9745 27.0008 33.7295C26.9806 32.2489 27.3184 30.7853 27.9854 29.4633C28.6524 28.1413 29.6289 27.0001 30.8318 26.1366ZM32.6912 24.8652C33.9646 24.2867 35.3485 23.9917 36.7472 24.0005C37.9876 23.9878 39.2182 24.222 40.3673 24.6893C41.5164 25.1566 42.5611 25.8477 43.4407 26.7224C44.3203 27.5972 45.0171 28.6381 45.4907 29.7846C45.9643 30.9312 46.2052 32.1604 46.1994 33.4009C46.2142 34.8029 45.9189 36.1909 45.3347 37.4655L42.351 34.4819C42.832 33.702 43.0865 32.8037 43.0861 31.8875C43.1118 31.2564 43.0063 30.6268 42.7763 30.0386C42.5462 29.4503 42.1966 28.9162 41.7496 28.47C41.3026 28.0238 40.7678 27.6752 40.1792 27.4462C39.5905 27.2172 38.9608 27.1128 38.3297 27.1397C37.4128 27.1347 36.5133 27.3895 35.7353 27.8748L32.6912 24.8652ZM38.3816 34.5942C38.0073 34.6073 37.6344 34.5437 37.2856 34.4075C36.9368 34.2713 36.6195 34.0654 36.3531 33.8022C36.0867 33.5391 35.8769 33.2243 35.7364 32.8772C35.596 32.5301 35.5279 32.158 35.5364 31.7836C35.5219 31.4057 35.5855 31.0288 35.7233 30.6766C35.861 30.3244 36.0699 30.0044 36.3369 29.7366C36.604 29.4687 36.9233 29.2588 37.2751 29.12C37.6269 28.9812 38.0036 28.9165 38.3816 28.9298C38.7578 28.9214 39.1318 28.9897 39.4809 29.1304C39.83 29.271 40.1468 29.4812 40.4121 29.7481C40.6774 30.0151 40.8857 30.3332 41.0242 30.6831C41.1628 31.033 41.2288 31.4074 41.2181 31.7836C41.2327 32.16 41.1693 32.5354 41.0319 32.8861C40.8945 33.2368 40.6861 33.5554 40.4198 33.8217C40.1534 34.0881 39.8349 34.2965 39.4841 34.4339C39.1334 34.5713 38.758 34.6347 38.3816 34.6201L38.3816 34.5942Z" fill="#FAFAFF"/>
</g>
<defs>
<filter id="filter0_bd_41_553" x="-15" y="-18" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="16"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_41_553"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2.4" operator="erode" in="SourceAlpha" result="effect2_dropShadow_41_553"/>
<feOffset dy="3.2"/>
<feGaussianBlur stdDeviation="9.6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="effect1_backgroundBlur_41_553" result="effect2_dropShadow_41_553"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_41_553" result="shape"/>
</filter>
<linearGradient id="paint0_linear_41_553" x1="18.0938" y1="19.3" x2="48.3049" y2="31.413" gradientUnits="userSpaceOnUse">
<stop stopColor="#FDFDFD" stopOpacity="0.3"/>
<stop offset="1" stopColor="#FDFDFD" stopOpacity="0.2"/>
</linearGradient>
<clipPath id="clip0_41_553">
<rect width="19.2" height="19.2" fill="white" transform="translate(27 24)"/>
</clipPath>
</defs>
</svg>
:
   (
    <></>
  );
}
