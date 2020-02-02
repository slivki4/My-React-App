const apiURL = 'https://swapi.co/api/people/';

export const getPeople = () => {
  return fetch(apiURL)
  .then(res => res.json())
  .then(data =>  data.results)
  .catch(error => console.log(error));
}
