import React, { useEffect, useState } from "react";
import { URL } from "../constants/ApiContants";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function fetchPopularVideos() {
      try {
        setLoading(true);
        const response = await fetch(URL.popularVideos, {
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();
        setVideoList(data.items);
        console.log("data", data);
      } catch (err) {
        console.log("Failed to load videos", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPopularVideos();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      {videoList?.map((video) => (
        <Link key={video.id} to={`watch?v=${video.id}`}>
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
