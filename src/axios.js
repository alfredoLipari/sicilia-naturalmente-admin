//* Default url of the backend

import axios from "axios";

const instance = axios.create({
  baseURL: "https://sicilia-naturalmente-staging.herokuapp.com/",
});

export default instance;
