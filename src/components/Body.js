import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listOfRestaurants, filteredRestaurans, setFilteredRestaurans] =
    useRestaurants();

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }

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
          <RestaurantCard key={index} resData={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
