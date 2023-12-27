import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
  }
  render() {
    console.log("child render");
    const { avatar_url, name, location, email } = this.props;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {email || `priyammondal1998@gmail.com`}</h4>
      </div>
    );
  }

  componentDidMount() {
    console.log("child componentDidMount");
    // this.timer = setInterval(
    //   () => console.log("setInterval in class component"),
    //   1000
    // );
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
    // clearInterval(this.timer);
  }
}

export default UserClass;
