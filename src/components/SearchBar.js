import React from "react";

class SearchBar extends React.Component {
  state = { searchVal: "" };

  handelClick = (e) => {
    e.preventDefault();

    this.props.onSub(this.state.searchVal);
  };

  render() {
    return (
      <div className=" ui segment">
        <form onSubmit={this.handelClick} className="ui form">
          <div className="ui fluid action input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.searchVal}
              onChange={(e) => this.setState({ searchVal: e.target.value })}
            />
            <div onClick={this.handelClick} className="ui button">
              Search
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
