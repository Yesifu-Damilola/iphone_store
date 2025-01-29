/* eslint-disable react/prop-types */
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = ({
  count = 5,
  width = 290,
  height = 250,
  direction = "horizontal",
}) => {
  return (
    <div
      className={direction === "horizontal" ? "flex gap-x-4" : "grid gap-y-4"}
    >
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} width={width} height={height} />
        ))}
    </div>
  );
};

export default SkeletonLoader;
