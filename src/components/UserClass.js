import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      count: 1,
      count2: 2,
    };
  }
  render() {
    console.log("child render");
    const { name, location, email } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {email}</h4>
      </div>
    );
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }
}

export default UserClass;
