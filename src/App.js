import React from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtubeApi from "./api/youtubeApi";
class App extends React.Component {
  // In this state we set the list of result we get from our api and we send
  // it to the component in which we want it to be displayed
  state = { videos: [], selectedVideo: null };
  handleSubmit = async (searchVal) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: searchVal,
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <h1>Youtube video Search</h1>
        <SearchBar onSub={this.handleSubmit} />
        <div className="header-div">
          <div style={{ width: "566.5px", marginRight: "10px" }}>
            <VideoDetail video={this.state.selectedVideo} />
          </div>

          <div style={{ width: "366.5px" }}>
            {/* Now in this videolist pass the result as property to the items*/}
            <VideoList onSelect={this.onSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
