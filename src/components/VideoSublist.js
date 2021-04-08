import React from "react";

const VideoSublist = ({ video, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(video)}
      className="item"
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "10px",
        cursor: "pointer",
        padding: "5px",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <img
          style={{ maxWidth: "180px" }}
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div>
        <span>
          <h4>{video.snippet.channelTitle}</h4>
          <h6>{video.snippet.title}</h6>
        </span>
      </div>
    </div>
  );
};

export default VideoSublist;
