import { ArrowLeft, CheckCircle, Package } from "lucide-react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../components/SkeletonLoader";
import { useOrdersConfirmation } from "../../hooks/useOrdersConfirmation";

export const Orders = () => {
  const { orders, isLoading, isError, error, calculateTotal } =
    useOrdersConfirmation();

  console.log(orders, isLoading, isError, error);

  if (isError)
    return <p className="text-red-500">Error fetching order details.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {isLoading && <SkeletonLoader count={1} width="896px" height={896} />}
      {!isLoading &&
        orders?.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md p-8 mb-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Order Confirmed!
              </h2>
              <p className="text-gray-600 mt-2">
                Thank you for your purchase. Your order has been received.
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-normal text-base">{order.order_ref}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">
                  {new Date(order.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">
                Shipping Information
              </h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-gray-700">{order.shipping_address}</p>
                <div className="flex items-center mt-3 text-indigo-600">
                  <Package className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    Estimated delivery: {order.estimated_delivery}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Images
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {order?.items &&
                      order?.items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            <img
                              src={item?.product_images[0]}
                              alt={item.product_name}
                              className="w-9 h-9 md:w-9 md:h-7 pr-2"
                            />
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {item.product_name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900 text-right">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900 text-right">
                            {item.quantity}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-900 text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-3 text-sm font-medium text-gray-900 text-right"
                      >
                        Total
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                        ${calculateTotal().toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        ))}
      <div className="text-center text-green-600">
        <Link to="/" className="inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
