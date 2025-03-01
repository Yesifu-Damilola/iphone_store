/* eslint-disable react/prop-types */
const OrderSkeletonLoader = ({ count = 2 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-8 mb-6 animate-pulse">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mt-6">
            <div className="flex justify-between mb-2">
              <span className="h-4 w-32 bg-gray-300 rounded"></span>
              <span className="h-4 w-20 bg-gray-300 rounded"></span>
            </div>
            <div className="flex justify-between">
              <span className="h-4 w-32 bg-gray-300 rounded"></span>
              <span className="h-4 w-16 bg-gray-300 rounded"></span>
            </div>
          </div>

          <div className="mt-6">
            <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-48 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderSkeletonLoader;
