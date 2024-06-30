import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data || {};
  const { thumbnails } = snippet || {};

  return (
    <div className="m-2 rounded-lg border-2 overflow-hidden shadow-sm w-80 h-72">
      <img alt={"thumbnail"} src={thumbnails?.medium?.url} />
      <div className="flex flex-col">
        <label className="text-wrap">{snippet?.title}</label>
        <span>{statistics.viewCount} Views</span>
      </div>
    </div>
  );
};

export default VideoCard;
