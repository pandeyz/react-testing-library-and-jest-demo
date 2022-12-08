// function to male an api call and return data

async function fetchApiData(url) {
  try {
    const data =  await fetch(url).then((response) => response.json());
    return data;
  }
  catch (e) {
    console.log('error: ',)
    return [];
  }
}

export { fetchApiData };