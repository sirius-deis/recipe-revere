const baseUrl = 'http://localhost:3000/api/v1/'

const fetchData = async (url: string, options: any, type: "json" | "blob"): Promise<any> => {
  const response = await fetch(`${baseUrl}${url}`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
   ...options,
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  let data;
  if(response.body) {
    try {
      switch (type) {
        case "json":
          data = await response.json();
          break;
        case "blob":
          data = await response.blob();
          break;
        default:
          data = await response.text()
      }
    } catch(err) {
      return;
    }
  }
  
  return data;
}

export default fetchData;