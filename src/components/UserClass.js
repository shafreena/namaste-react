import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="p-3 border border-solid border-black">
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default UserClass;
