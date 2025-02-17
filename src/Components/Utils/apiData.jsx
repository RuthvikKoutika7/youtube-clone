const GOOGLE_API_KEY = "AIzaSyBn3cKFowOsmjcpZXtKnfI4wtph7GToP1M";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_TELUGU_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Telugu&key=YOUR_API_KEY" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" ;