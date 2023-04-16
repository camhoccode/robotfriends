import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../components/robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        this.setState({ robots: user });
      });
    this.setState({ robots: robots });
  }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRObots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <>
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRObots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </>
    );
  }
}

export default App;
