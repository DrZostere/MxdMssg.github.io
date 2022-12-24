//  On button click first select which bike to take then where to go.

//  Choose a bike
const bikes = ['CBR600RR', 'Pegaso 650'];
  let bikeChoice = bikes[Math.floor(Math.random() * bikes.length)];

//  If CBR 
const hondaTrip = ['a Street Ride.', 'a Track Day Blast.', 'a Rip on the Twisties!']
  let CBRtrip = hondaTrip[Math.floor(Math.random() * hondaTrip.length)];

//  If Pegaso
const apriliaTrip = ['a Street Cruise.', 'a Grand Tour.', 'some Offroad Shenanigans!']
  let PegasoTrip = apriliaTrip[Math.floor(Math.random() * apriliaTrip.length)];

//  Return the trip
const dayOut = () => {
    if(bikeChoice === 'CBR600RR') {
    return CBRtrip;
  } else if(bikeChoice === 'Pegaso 650') {
    return PegasoTrip;
  } else {
  return 'You messed up'
  }
};

//  Show result of button click
const clickIt = () => {
    let ride = dayOut();
    let bike = bikeChoice;

  return `It\'s a great day. Why don\'t you take the ${bike} for ${ride}`;
};

let button = document.querySelector('button');
let para = document.querySelector('p');

function bike () {
  para.innerHTML = clickIt();
}

button.addEventListener('click', bike);