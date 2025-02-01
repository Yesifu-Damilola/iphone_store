/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line react/prop-types
export const CustomButton = ({ className, onClick, text, type }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`${className} text-sm bg-primary rounded `}
      // addToCart={addToCart}
    >
      {text}
    </button>
  );
};
