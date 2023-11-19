import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          restaurant="Behrouz Biryani"
          img="https://b.zmtcdn.com/data/dish_photos/77a/70033edf4e8ade8cab451efae1faa77a.jpg"
          cuisine="Biryani, Kebab, Roll"
          stars="4.3 stars"
          time="22 min"
        />
        <RestaurantCard
          restaurant="La Pino'z Pizza"
          img="https://b.zmtcdn.com/data/pictures/chains/9/18438909/8ac67f799c14cd3b586e18e48eaa00f7_o2_featured_v2.jpg"
          cuisine="Pizza, Pasta, Italian"
          stars="4.1 stars"
          time="24 min"
        />
        <RestaurantCard
          restaurant="The Belgian Waffle Co."
          img="https://b.zmtcdn.com/data/pictures/chains/1/18543621/bd6d35499c5fb33bea73c32bbf4b0237_o2_featured_v2.jpg"
          cuisine="Waffle, Pancake, Ice Cream"
          stars="4.2 stars"
          time="30 min"
        />
        <RestaurantCard
          restaurant="KFC"
          img="https://b.zmtcdn.com/data/pictures/chains/5/112945/148024162061ada077592ebeaef52f89_o2_featured_v2.jpg"
          cuisine="Burger, Fast Food, Fries"
          stars="3.7 stars"
          time="33 min"
        />
        <RestaurantCard
          restaurant="Alinea Restaurant & Banquet"
          img="https://b.zmtcdn.com/data/pictures/9/111899/b5003ed066467bc858298934f73c4574_o2_featured_v2.jpg"
          cuisine="North Indian, Chinese"
          stars="4.2 stars"
          time="32 min"
        />
      </div>
    </div>
  );
};

export default Body;
