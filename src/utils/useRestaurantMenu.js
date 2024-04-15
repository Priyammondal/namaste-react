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
    console.log("json->", json.data);
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => item.card.card.itemCards
      )
    );
  };

  return [resInfo, menuItems];
};

export default useRestaurantMenu;
