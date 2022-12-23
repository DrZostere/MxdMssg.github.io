//  On button click first select which bike to take then where to go.
const button = document.querySelector("button");
const paragraph = document.querySelector("p");

//Calls the clickIt function and displays the Bike and Ride choice.
button.addEventListener("click", () => {
    paragraph.innerText = clickIt();
});

//  Choose a bike
const bikes = ['CBR600RR', 'Pegaso 650'];
  let bikeChoice = bikes[Math.floor(Math.random() * bikes.length)];
//  console.log(bikeChoice);

//  If CBR 
const hondaTrip = ['a Street Ride.', 'a Track Day Blast.', 'a Rip on the Twisties!']
  let CBRtrip = hondaTrip[Math.floor(Math.random() * hondaTrip.length)];
//  console.log(CBRtrip)

//  If Pegaso
const apriliaTrip = ['a Street Cruise.', 'a Grand Tour.', 'some Offroad Shenanigans!']
  let PegasoTrip = apriliaTrip[Math.floor(Math.random() * apriliaTrip.length)];
//  console.log(PegasoTrip);

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
//  console.log(dayOut())

//  Show result of button click
const clickIt = () => {
    let ride = dayOut();
    let bike = bikeChoice;

  return `It\'s a great day. Why don\'t you take the ${bike} for ${ride}`;
//  console.log(`It\'s a great day. Why don\'t you take the ${bikeChoice} for ${dayOut()}`)
};
console.log(clickIt());




