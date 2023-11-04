const getAnimeData = async (resource, params) => {
  try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?${params}`)
    const data = await response.json();
    return data;

  } catch (err) {
    console.log(err)
  }
}

export { getAnimeData };