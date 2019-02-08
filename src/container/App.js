import React, { Component } from 'react';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import { setSearchField, requestPeople } from '../action';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPeople.searchField,
    people: state.requestPeople.people,
    isPending: state.requestPeople.isPending,
    error: state.requestPeople.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestPeople: () => dispatch(requestPeople())
})

class App extends Component {

  // onSearchChange = (e) => {
  //   this.setState({searchField: e.target.value});
  //   // this.setState({robots: filteredRobos});
  // }

  componentDidMount = () => {
    this.props.onRequestPeople();
  }

  render() {
    const { searchField, onSearchChange, people, isPending } = this.props;

    const filteredPeople = people.filter(user => {
      return user.name.first.toLowerCase().includes(searchField.toLowerCase());
    });
    
    if (isPending) {
      return (
        <h1 className="tc pa5 ma5 light-yellow">Loading...</h1>
      )
    } else {
      return (
        <div className="tc">
          <h1 className="ttu gold">People</h1>
          <SearchBox searchChange={onSearchChange} searchField={searchField}/>
          <Scroll>
            <ErrorBoundary>
              <CardList data={filteredPeople} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
