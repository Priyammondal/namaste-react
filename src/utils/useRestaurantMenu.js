import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const res = await fetch(`${MENU_API}${resId}`);
    const json = await res.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  return [resInfo, menuItems];
};

export default useRestaurantMenu;
