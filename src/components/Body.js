import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
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
  console.log("listOfRestaurants-->", listOfRestaurants);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="border border-black border-solid p-0.5 focus:outline-none"
          />
          <button
            className="bg-green-200 px-4 py-1 rounded"
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
        </div>

        <button
          onClick={() => {
            setFilteredRestaurans(
              listOfRestaurants.filter((item) => item.info.avgRating > 4.5)
            );
          }}
          className="filter-btn m-4 bg-gray-400 px-4 rounded"
        >
          Top Rated Restaurants
        </button>

        <button
          className="m-4 bg-red-400 px-4 rounded"
          onClick={() => {
            setSearchInput("");
            setFilteredRestaurans(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurans?.map((item, index) =>
          item.info.avgRating > 4.5 ? (
            <RestaurantCardPromoted key={index} resData={item.info} />
          ) : (
            <RestaurantCard key={index} resData={item.info} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
