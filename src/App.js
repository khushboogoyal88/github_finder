import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Users from "./users/Users";
import Search from "./users/Search";

export class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search github users
  searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
