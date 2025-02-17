import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./Utils/navAppSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./LiveChat";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" flex flex-col w-full">
      <div className="px-2 flex w-full">
        <div className="pl-5 py-2 w-full">
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-2 w-full">
          <Livechat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watchpage;
