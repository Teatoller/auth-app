import React, { Component } from "react";
import { getProfile } from "../axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  componentDidMount() {
    getProfile.then(res => {
      this.setState({
        name: res.user.name,
        email: res.user.email
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-4, mx-auto">
            <h1 className="text-center">Profile</h1>
          </div>
          <table className="table md-col-4 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Profile;
