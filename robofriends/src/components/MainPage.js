import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./MainPage.css";
import ErrorBoundry from "../components/ErrorBoundry";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };
  render() {
    const { onSearchChange, isPending } = this.props;

    // !isPending ? (
    //   <h1>Loading</h1>
    // ) :

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
