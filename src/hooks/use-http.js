import axios from "axios";
import { useCallback, useState } from "react";
const useHttp = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback((config, applyData) => {
    setIsLoading(true);
    if (config.method === "GET") {
      axios
        .get(config.url)
        .then((response) => {
          applyData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setHasError(true);
          setIsLoading(false);
        });
    }
    if (config.method === "POST") {
      axios
        .post(config.url, config.data)
        .then((res) => {
          setIsLoading(false);
          applyData();
        })
        .catch((error) => {
          console.log(error);
          setHasError(true);
          setIsLoading(false);
        });
    }
  }, []);
  return { sendRequest, hasError, isLoading };
};
export default useHttp;
