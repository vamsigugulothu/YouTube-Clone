const API_KEY = "AIzaSyD7uQK8am7IY6kcVimnIbCUQ74Z96glZwg";
export const URL = {
  popularVideos: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=50`,
  videoDetails: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${API_KEY}`,
};
