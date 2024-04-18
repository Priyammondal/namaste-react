import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import parse from "html-react-parser";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, categories] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  console.log("resInfo->", resInfo);
  console.log("categories-->", categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.name}</h1>
      <p className="font-bold text-lg">
        {resInfo?.cuisines.join(",")} - {resInfo?.costForTwoMessage}
      </p>
      <p>{resInfo?.araName}</p>
      <p>
        {resInfo?.feeDetails?.message && parse(resInfo?.feeDetails?.message)}
      </p>
      <p>⭐ {`${resInfo?.avgRating} - ${resInfo?.totalRatingsString}`}</p>

      <ul>
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
