/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

export const CellPhones = ({ color = "#000000", ...res }) => {
  return (
    <>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <g clipPath="url(#clip0_813_868)">
          <g filter="url(#filter0_d_813_868)">
            <path
              d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
              fill={color}
            />
          </g>
          <path d="M25.6667 7H31.1354" fill={color} />
          <path d="M28 44.0052V44.0305" fill={color} />
          <line
            x1="15.1667"
            y1="39.8334"
            x2="40.8333"
            y2="39.8334"
            stroke="black"
            strokeWidth="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_813_868"
            x="9.32812"
            y="5.125"
            width="37.3438"
            height="53.75"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_813_868"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_813_868"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_813_868">
            <rect width="56" height="56" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
