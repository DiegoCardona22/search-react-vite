export const getGifts = async (category) => {
  const apiKey = "TEypSx0vrie564dYIudKz9zjAyktFLvP";
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
  const { data } = await response.json();
  
  const gifs = (data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  })));

  return gifs;
};