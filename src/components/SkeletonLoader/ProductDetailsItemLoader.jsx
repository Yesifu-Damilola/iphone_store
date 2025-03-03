const ProductDetailsItemLoader = () => {
  return (
    <div className="container m-auto px-1">
      <div className="mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[200px_minmax(0,_2fr)_1fr] gap-8">
        {/* Image Thumbnails Loader */}
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full h-[138px] bg-gray-200 animate-pulse rounded"
            ></div>
          ))}
        </div>

        {/* Main Image Loader */}
        <div className="flex flex-col items-center justify-center bg-gray-200 w-full h-[600px] rounded animate-pulse">
          <div className="w-[250px] h-[250px] bg-gray-300 animate-pulse rounded"></div>
        </div>

        {/* Product Details Loader */}
        <div className="ml-0 md:ml-5">
          <div className="space-y-3">
            <div className="w-3/4 h-8 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-1/2 h-6 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-full h-16 bg-gray-200 animate-pulse rounded"></div>

            <div className="py-2 w-full md:w-[400px]">
              <hr />
            </div>

            {/* Color Loaders */}
            <div className="flex gap-4 pt-1 pb-3">
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
            </div>

            {/* Size Loaders */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 mt-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-8 bg-gray-200 animate-pulse rounded"
                ></div>
              ))}
            </div>

            {/* Counter & Buttons Loader */}
            <div className="flex gap-3 py-3">
              <div className="w-24 h-10 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-28 h-10 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-10 h-10 bg-gray-200 animate-pulse rounded"></div>
            </div>

            {/* Delivery & Return Loader */}
            <div className="w-full h-[180px] bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItemLoader;
