import { Review } from "../../assets/icons/Review"


export const Reviews = () => {
  return (
    <div className="flex gap-3 md:flex-row md:gap-x-4 py-2 cursor-pointer">
         <span>
            <Review />
         </span>
         <h4 className="text-white text-sm md:text-base">My Reviews</h4>
       </div>
  )
}
