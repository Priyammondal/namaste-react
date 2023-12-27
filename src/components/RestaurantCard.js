// to import a named export we use curly {} bracket
// for default export we don't need any bracket

import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

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
    <Link to={`restaurants/${id}`} className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </Link>
  );
};

export default RestaurantCard;
