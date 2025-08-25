/* eslint-disable react/prop-types */
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = ({
  count = 5,
  width = 290,
  height = 250,
  // direction = "horizontal",
}) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} width={width} height={height} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
