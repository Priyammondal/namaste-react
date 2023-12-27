import { useEffect, useState } from "react";

const User = ({ avatar_url, name, location, email }) => {
  useEffect(() => {
    // const timer2 = setInterval(() => {
    //   console.log("SetInterval in functional component");
    // }, 1000);
    // return () => {
    //   clearInterval(timer2);
    // };
  });

  return (
    <div className="user-card">
      <img src={avatar_url} />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {email || "priyam.mondal@gmail.com"}</h4>
    </div>
  );
};

export default User;
