const baseUrl = 'http://localhost:3000/api/v1/'

const fetchData = async (url: string, options: any) => {
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
      data = await response.json();
    } catch(err) {
      return;
    }
  }
  
  return data;
}

export default fetchData;