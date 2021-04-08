import axios from "axios";

const KEY = "AIzaSyCMpIuvoZUu9sURc3fCWbkiqS2SGNJpbKM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
