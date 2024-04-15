import React from "react";
import UserClass from "./UserClass";
import User from "./User";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      userInfo: {
        name: "Rakesh Bhowmik",
        location: "Hydrabad",
      },
    };
  }

  async componentDidMount() {
    console.log("parent componentDidMount");
    const data = await fetch("https://api.github.com/users/Priyammondal");
    const json = await data.json();
    console.log("json--->", json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("parent render");
    const { avatar_url, name, location, email } = this.state.userInfo;
    return (
      <div>
        {/* <h1>About (class based component)</h1>
        <h2>This is a Namaste React Web Series</h2> */}

        {/* <UserClass
          avatar_url={avatar_url}
          name={name}
          location={location}
          email={email}
        /> */}

        <User
          avatar_url={avatar_url}
          name={name}
          location={location}
          email={email}
        />
      </div>
    );
  }
}

export default About;
