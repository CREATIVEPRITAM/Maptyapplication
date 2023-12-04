'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const map = document.querySelector('#map');
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let { latitude } = position.coords;
      let { longitude } = position.coords;
      let coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);

      //   console.log(map);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
            })
          )
          .openPopup();
      });
    },

    function (err) {
      console.log(`ERROR(${err.code}: ${err.message})`);
    }
  );
}

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//     //   console.log(position);
//     console.log('hello mapty application');
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(latitude,longitude);
//     //   console.log(`https://www.google.com/maps/@28.5929668,77.3128549,16z?entry=ttu`);
//     //   console.log(`https://www.google.com/maps/@${latitude}.@${longitude}`);
//     },
//     function error(err) {
//       alert(`ERROR(${err.code}): ${err.message}`);
//     }
//   );
// }

// if (navigator.geolocation){
//     navigator.geolocation.getCurrentPosition((position)=>{
//         console.log(position);
// })
// }

// const cordinats = navigator.geolocation.getCurrentPosition();
