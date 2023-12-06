import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurans, setFilteredRestaurans] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
    setListOfRestaurants(
      swiggyData.filter((item) => item?.card?.card?.restaurant)
    );
    setFilteredRestaurans(
      swiggyData.filter((item) => item?.card?.card?.restaurant)
    );
  };

  // conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <span className="search">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (searchInput.length > 0) {
                const filteredList = listOfRestaurants.filter((item) =>
                  item.card.card.restaurant.info.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                );
                setFilteredRestaurans(filteredList);
              } else {
                setFilteredRestaurans(listOfRestaurants);
              }
            }}
          >
            Search
          </button>
        </span>
        <button
          onClick={() => {
            setFilteredRestaurans(
              listOfRestaurants.filter(
                (item) => item.card.card.restaurant.info.avgRating >= 4
              )
            );
            console.log("listOfRestaurants after filter-->", listOfRestaurants);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
        <button
          onClick={() => {
            setSearchInput("");
            setFilteredRestaurans(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurans.map((item, index) => (
          <RestaurantCard
            // key={item.card.card.restaurant.info.id}
            key={index}
            resData={item.card.card.restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
