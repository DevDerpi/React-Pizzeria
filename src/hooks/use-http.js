import axios from "axios";
import { useState } from "react";
const useHttp = (applyData) => {
  const [hasError, setHasError] = useState(false);
  const sendRequest = (url, config) => {
    if (config.method === "GET") {
      axios
        .get(url)
        .then((response) => {
          applyData(response.data);
        })
        .catch((error) => {
          console.log(error);
          setHasError(true);
        });
    }
    if (config.method === "POST") {
      axios.post(url, config.data).catch((error) => {
        console.log(error);
        setHasError(true);
      });
    }
  };
  return { sendRequest, hasError };
};
export default useHttp;
