/* eslint-disable react/prop-types */
export const ArrowLeft = ({ color = "#000000", ...res }) => {
  return (
    <>
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg "
        {...res}
      >
        <path d="M8 1L1 8L8 15M1 8H17" fill={color} />
      </svg>
    </>
  );
};
