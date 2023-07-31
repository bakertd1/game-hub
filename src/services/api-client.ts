import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "60988fc810a243c4880e12a068f468c5",
  },
});
