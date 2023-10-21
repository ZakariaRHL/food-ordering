import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com/",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "a71ac79be7844f5e911d954c28edaa15",
  },
});

export default api;
