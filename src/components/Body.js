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
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    // console.log(
    //   "response-->",
    //   res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    const swiggyData =
      res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(swiggyData);
    setFilteredRestaurans(swiggyData);
  };
  // console.log("listOfRestaurants-->", listOfRestaurants);

  // conditional rendering

  return listOfRestaurants?.length === 0 ? (
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
                  item.info.name
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
              listOfRestaurants.filter((item) => item.info.avgRating >= 4)
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
        {filteredRestaurans?.map((item, index) => (
          <RestaurantCard
            // key={item.card.card.restaurant.info.id}
            key={index}
            resData={item.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
