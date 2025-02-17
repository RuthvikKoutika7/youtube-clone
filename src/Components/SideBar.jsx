import { useSelector } from "react-redux";
import {
  HISTORY_ICON,
  HOME_ICON,
  LIKED_ICON,
  LIVE_ICON,
  MOVIES_ICON,
  MUSIC_ICON,
  PLAYLIST_ICON,
  SHOPPING_ICON,
  SUBSCRIPTIONS_ICON,
  TRENDING_ICON,
  USER_ICON,
  WATCHLATER_ICON,
  YT_SHORTS_ICON,
} from "./Utils/Constants";
import { Link } from "react-router-dom";


const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className=" mx-2">
      <div className="">
        <div className="font-bold py-3 shodow-lg  border-gray-300 border-b-2 ">
          <h1 className="font-semibold flex justify-between">
            <Link to={"/"}> <img alt="home-icon" className="h-12" src={HOME_ICON} /> </Link>
            <h1 className="py-3 pl-1 pr-5"> <Link to={"/"}>Home</Link> </h1>
          </h1>

          <h1 className="font-semibold flex justify-between">
            <img alt="home-icon" className="h-12" src={YT_SHORTS_ICON} />
            <h1 className="py-3 pr-5">Shorts</h1>
          </h1>

          <h1 className="font-semibold flex justify-between">
            <img alt="home-icon" className="h-12" src={SUBSCRIPTIONS_ICON} />
            <h1 className="py-3  pr-5">Subscriptions</h1>
          </h1>
        </div>

        <div className="  border-gray-300 border-b-2">
          <h1 className="font-semibold text-xl m-2"> You - </h1>
          <ul>
            <li className="flex justify-between">
              <img
                alt="user-icon "
                className="h-8 ml-2 mb-1"
                src={HISTORY_ICON}
              />
              History
            </li>
            <li className="flex justify-between">
              <img
                alt="user-icon "
                className="h-8 ml-2 mb-1"
                src={PLAYLIST_ICON}
              />
              Playlists
            </li>
            <li className="flex justify-between">
              <img
                alt="user-icon "
                className="h-8 ml-2 mb-1"
                src={WATCHLATER_ICON}
              />
              Watch Later
            </li>
            <li className="flex justify-between">
              <img
                alt="user-icon "
                className="h-8 ml-2 mb-1"
                src={LIKED_ICON}
              />
              Liked Videos
            </li>
          </ul>
        </div>

        <div className=" border-gray-300 border-b-2">
          <h1 className="font-semibold text-xl m-2"> Subscriptions </h1>
          <ul className="">
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={USER_ICON} />
              Sriman Kotaru
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={USER_ICON} />
              UNQ Gamer
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={USER_ICON} />
              RAW Talks
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={USER_ICON} />
              Allu Arjun
            </li>
          </ul>
        </div>

        <div className="  border-gray-300 border-b-2">
          <h1 className="font-semibold text-xl m-2"> Explore </h1>
          <ul>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10 mb-1" src={TRENDING_ICON} />
              Trending
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10 mb-1" src={SHOPPING_ICON} />
              Shopping
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={MUSIC_ICON} />
              Music
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={MOVIES_ICON} />
              Movies
            </li>
            <li className="flex justify-between">
              <img alt="user-icon " className="h-10" src={LIVE_ICON} />
              Live
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
