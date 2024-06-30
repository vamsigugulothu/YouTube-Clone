import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data || {};
  const { thumbnails } = snippet || {};

  return (
    <div className="my-4 mx-2 rounded-lg overflow-hidden shadow-sm w-80 h-72 hover:bg-slate-100 cursor-pointer">
      <img alt={"thumbnail"} src={thumbnails?.medium?.url} />
      <div className="flex flex-col p-2">
        <label className="text-wrap">{snippet?.title}</label>
        <span>{statistics.viewCount} Views</span>
      </div>
    </div>
  );
};

export default VideoCard;
