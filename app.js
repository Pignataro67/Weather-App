// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weaherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => { 
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set Location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}


try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  decodeURIComponent('%');

} catch(e) {
  console.log(`{e.name} It's null Donkey!!!`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');