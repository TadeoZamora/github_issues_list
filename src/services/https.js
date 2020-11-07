import axios from "axios";
//it's created as a hook, because when we try to use tokens for security it's more simple to import or call auth functions
//NOTE: im not going to use a DotEnv file to not expend more time
const http = () => {
  const request = axios.create({
    baseURL: "https://api.github.com/repos/", //this value its better to set in a DotEnv file
    headers: {
      "Content-Type": "application/json"
    }
  });

  return {
    request
  };
};

export default http;
