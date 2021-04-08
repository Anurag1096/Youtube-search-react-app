import React from "react";
import VideoSublist from "./VideoSublist";

const VideoList = ({ videos, onSelect }) => {
  const renderVideos = videos.map((video) => {
    return (
      <VideoSublist onSelect={onSelect} video={video} key={video.id.videoId} />
    );
  });

  return <div className="ui middle aligned divided list">{renderVideos}</div>;
};
export default VideoList;
