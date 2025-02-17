import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_ICON,
  MIC_ICON,
  NOTIFICATION_ICON,
  RUTHVIK_ICON,
  USER_ICON,
  YOUTUBE_ICON,
} from "./Utils/Constants";
import { toggleMenu } from "./Utils/navAppSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./Utils/apiData";
import { cacheResults } from "./Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
   // console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="border border-gray-200 shadow-lg grid grid-flow-col ">
      <div className="flex col-span-1">
        <img
          alt="sidebar"
          className="h-14 mx-3 cursor-pointer"
          onClick={toggleMenuHandler}
          src={HAMBURGER_ICON}
        />
        <a href="/">
          {" "}
          <img
            alt="youtube-logo"
            className="h-16 mx-5 cursor-pointer"
            src={YOUTUBE_ICON}
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <div className="flex">
          <input
            type="text"
            className=" px-5 border border-gray-400 rounded-l-full p-2 my-2 w-1/2  "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 rounded-r-full p-2 my-2 bg-slate-100">
            🔍
          </button>

          <img alt="mic" className="h-12 mt-2 ml-5" src={MIC_ICON} />
        </div>

        {showSuggestions && (
          <div className="absolute  bg-white py-2 px-2 w-[40rem] shadow-lg rounded-lg border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                  {" "}
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex">
        <img alt="user-icon" className="h-14 mr-3" src={NOTIFICATION_ICON} />
        <img alt="user-icon" className="h-14 ml-3 rounded-full " src={RUTHVIK_ICON} />
      </div>
    </div>
  );
};

export default Header;
