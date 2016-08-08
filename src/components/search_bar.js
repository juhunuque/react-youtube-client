import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value = { this.state.term }
          onChange={ event => this.onInputChange(event.target.value) }/>
      </div>
      );
  }

  // We also can use functions instead to hardcode the function inside the onChange event of the component
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
