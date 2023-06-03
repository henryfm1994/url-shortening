export const getShorten = async (link) => {

  try {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    return (data)
  } catch (error) {
    // const test = await error.json()
    return error;
  }

};