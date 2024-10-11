import { useEffect, useState } from "react";

const baseUrl = '';

const useFetch = (url: string, options: any, type: "json" | "blob") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  let abort;

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${baseUrl}${url}`, {
          credentials: 'include',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: abortController.signal,
          ...options,
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let data;
        switch (type) {
          case "json":
            data = await response.json();
            break;
          case "blob":
            data = await response.blob();
            break;
          default:
            data = await response.json();
        }

        setData(data)
      } catch (error) {
        setError(error);
      }
    }
    abort = () => {
      abortController.abort();
    }
    fetchData();
    return () => abortController.abort();
  }, [url, options, type])
  return [data, isLoading, error, abort]
}

export default useFetch;