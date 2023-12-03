import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log("restaurants=-->", listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((item) => item.data.avgRating > 4)
            );
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
        <button onClick={() => setListOfRestaurants(resList)}>Reset</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
