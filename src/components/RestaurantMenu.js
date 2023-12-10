import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const res = await fetch(`${MENU_API}${resId}`);
    const json = await res.json();
    console.log("data-->", json?.data?.cards);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setMenuItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => item.card.card.itemCards
      )
    );
  };

  console.log("menuItems--->", menuItems);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <p>
        {resInfo?.cuisines.join(",")} - {resInfo?.costForTwoMessage}
      </p>
      <p>{resInfo?.araName}</p>
      <p>{resInfo?.feeDetails?.message}</p>
      <p>⭐ {`${resInfo?.avgRating} - ${resInfo?.totalRatingsString}`}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems?.map((item, index) => (
          <>
            {item.card.card.itemCards.map((menu, id) => (
              <li key={id}>
                <h3>{menu.card.info.ribbon.text}</h3>
                <h2>{menu.card.info.name}</h2>
                <p>
                  ₹
                  {menu.card.info.price / 100 ||
                    menu.card.info.defaultPrice / 100}
                </p>
                <p>{menu.card.info.description}</p>
                <hr />
              </li>
            ))}
          </>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
