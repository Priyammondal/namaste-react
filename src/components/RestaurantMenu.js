import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import parse from "html-react-parser";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, menuItems] = useRestaurantMenu(resId);

  console.log("resInfo->", resInfo);
  console.log("menuItems->", menuItems);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <p>
        {resInfo?.cuisines.join(",")} - {resInfo?.costForTwoMessage}
      </p>
      <p>{resInfo?.araName}</p>
      <p>{parse(resInfo?.feeDetails?.message)}</p>
      <p>⭐ {`${resInfo?.avgRating} - ${resInfo?.totalRatingsString}`}</p>
      <h2>Menu</h2>
      <ul>
        {menuItems?.map((item, index) => (
          <div key={index}>
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
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
