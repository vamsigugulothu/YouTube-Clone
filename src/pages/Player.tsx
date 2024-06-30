import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { URL } from "../constants/ApiContants";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";

const Player = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const videoId = searchParams.get("v");

  //close sidebar on opening videoplayer
  useEffect(() => {
    dispatch(closeSidebar({}));
  }, []);

  useEffect(() => {
    async function fetchVideoDetails() {
      try {
        setLoading(true);
        const response = await fetch(URL.videoDetails);
        const data = await response.json();
        setVideoInfo(data.items[0]);
      } catch (err) {
        console.log("Failed to load video details");
      } finally {
        setLoading(false);
      }
    }
    if (videoId) {
      fetchVideoDetails();
    }
  }, [videoId]);

  if (loading) {
    return <div className="text-center">Loader...</div>;
  }

  const { snippet } = videoInfo || {};
  return (
    <div className="m-4">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <label className="text-xl font-bold">{snippet?.title}</label>
      </div>
    </div>
  );
};

export default Player;
