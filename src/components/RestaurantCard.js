// to import a named export we use curly {} bracket
// for default export we don't need any bracket

import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData-->", resData);

  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData;

  return (
    <Link to={`restaurants/${id}`}>
      <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <img
          className="rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
