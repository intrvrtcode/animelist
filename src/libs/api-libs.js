const getAnimeData = async (resource, params) => {
  try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${params}`)
    const data = await response.json();
    return data;

  } catch (err) {
    console.log(err)
  }
}

const getNestedAnimeData = async (resource, objectProperty) => {
  const response = await getAnimeData(resource);
  return response.data.flatMap(item => item[objectProperty])
}

const generateRandomData = (data, length) => {
  const randomKey = [];
  const result = [];

  do {
    const randomNum = Math.floor(Math.random() * data.length);

    if (!randomKey.includes(randomNum)) {
      randomKey.push(randomNum)
    }

  } while (randomKey.length < (length));

  randomKey.forEach(item => {
    result.push(data[item]);
  });

  return result;
}

export { getAnimeData, getNestedAnimeData, generateRandomData };