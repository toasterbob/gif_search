export const fetchSearchGiphys = (searchTerm, num) => {
  console.log(num);
  return $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=${num}`
  });
};
