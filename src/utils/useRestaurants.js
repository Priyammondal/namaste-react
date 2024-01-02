import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "./constants";
const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurans, setFilteredRestaurans] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const res = await data.json();

    const swiggyData =
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(swiggyData);
    setFilteredRestaurans(swiggyData);
  };

  return [listOfRestaurants, filteredRestaurans, setFilteredRestaurans];
};
export default useRestaurants;
