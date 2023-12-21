import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  async componentDidMount() {
    // console.log("parent componentDidMount");
    const data = await fetch("https://api.github.com/users/Priyammondal");
    const json = data.json();
    console.log("json--->", json);
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About (class based component)</h1>
        <h2>This is a Namaste React Web Series</h2>

        <UserClass
          name={"Bishnu Gorai"}
          location={"Durgapur"}
          email={"bishnu.gorai@innsight.com"}
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a Namaste React Web Series</h2>

//       <UserClass
//         name={"Bishnu Gorai"}
//         location={"Durgapur"}
//         email={"bishnu.gorai@innsight.com"}
//       />
//     </div>
//   );
// };

export default About;
