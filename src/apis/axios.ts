import axios from "axios";

const instance = axios.create({
  headers: {
    ApiKeyClient: "b60f9e67-6c99-4ddb-96b6-04b4a6ffa48a",
  },
  baseURL: "https://hieuleeportfolioapi.azurewebsites.net",
});

export default instance;
