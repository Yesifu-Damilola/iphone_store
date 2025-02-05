// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { getProduct } from "../services/GetProduct";


// export const useGetSingleProduct = () => {
//   const { id } = useParams();
//   console.log("productID:", id);

//   const { data, isPending, error } = useQuery({
//     queryKey: ["products", id ?? ""], 
//     queryFn: () => getProduct({ id }), 
//   });

//   return { data, isPending, id, error };
// };