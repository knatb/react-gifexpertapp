
export const getGifs = async( category ) => {

  // url a consultar
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=vPR1jHNwB5a9ifqgKxljbG8c1n8c71zO`;
  // 
  const resp = await fetch(url);
  // obtener la respuesta en formato json
  // desestructuracion de data
  const { data } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  
  return gifs;
}