import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg w-60  ">
      <img
        alt="thumbnail"
        className=" rounded-lg"
        src={thumbnails.medium.url}
      />
      {/* <ui>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ui> */}
      <div>
        <h2 className="font-bold">{title}</h2>
        {/* <h2 className="font-bold">{snippet.tags[0]}</h2> */}
        <h2>{channelTitle}</h2>
        <h2>{Math.round(statistics.viewCount / 1000)}k Views</h2>
      </div>
    </div>
  );
  // return <div>check</div>
};

export const AdVideoCard = ({info}) =>{
  return (
    <div className="p-2 m-2 border border-red-900">
      <VideoCard info={info} />
      <h3 className="font-bold  flex items-center justify-center">Sponsored (hoc)</h3>
    </div>
  );
};

export default VideoCard;
