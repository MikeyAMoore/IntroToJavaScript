const postsPromise =fetch('https://www.swapi.tech/api/people')
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

postsPromise
  .then(data => data.json())
  .then(data => {
  console.log(Object.keys(data.result.properties))
})
.catch(err => console.log(err))