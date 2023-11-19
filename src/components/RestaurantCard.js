const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={props.img} alt="res-logo" />
      <h3>{props.restaurant}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.stars}</h4>
      <h4>{props.time}</h4>
    </div>
  );
};

export default RestaurantCard;
