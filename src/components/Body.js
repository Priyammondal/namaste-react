import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244806999999&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.022505&lng=72.5713621&str=Chicken&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=8fcbca3c-4673-2b15-0a8b-006361e56a63&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NONVEG%22%2C%22cloudinaryId%22%3A%22cqlbsjmwngaagned62yc%22%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D"
    );
    const res = await data.json();
    const swiggyData =
      res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
    // console.log("swiggyData-->", swiggyData);
    setListOfRestaurants(
      swiggyData.filter((item) => item?.card?.card?.restaurant)
    );
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

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
        {listOfRestaurants.map((item) => (
          <RestaurantCard
            key={item.card.card.restaurant.info.id}
            resData={item.card.card.restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
