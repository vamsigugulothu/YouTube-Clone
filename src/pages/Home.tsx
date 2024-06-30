import React, { useEffect, useState } from "react";
import { URL } from "../constants/ApiContants";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [videoList, setVideoList] = useState(null);
  useEffect(() => {
    async function fetchPopularVideos() {
      const response = await fetch(URL.popularVideos, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setVideoList(data.items);
      console.log("data", data);
    }
    fetchPopularVideos();
  }, []);
  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      {videoList?.map((video) => (
        <VideoCard key={video.id} data={video} />
      ))}
    </div>
  );
};

export default Home;
