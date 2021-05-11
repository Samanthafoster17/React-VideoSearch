import axios from "axios";

const KEY = "AIzaSyC6amGanptsvW11mqyziny5zR7fH1eYv4s";


export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",  
   params: {
       part: "snippet",
       maxResults: 5,
       key: KEY
   }
});

