import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./Utils/apiData";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "./Utils/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const storeVideos = useSelector((store)=>store.video.videos)

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    dispatch(addVideos(json.items));
    
  };
  console.log(storeVideos);
  //console.log(storeVideos[1]?.Array[1]);
  return (
    <div className="flex flex-wrap">
      {videos[1] && <AdVideoCard info={videos[1]} />}

      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
