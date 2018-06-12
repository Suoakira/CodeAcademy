// Scope

const satellite = "the Moon";
const galaxy = "The Milky Way";

let stars = "North Star";

const myNightSky = () => {
	return `Night sky ${satellite}, ${stars}. ${galaxy}`
}

console.log(myNightSky());

// Global Scope II //

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius'
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);

// Block Scope

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);  
    }
  console.log(lightWaves);
};


visibleLightWaves();
console.log(lightWaves); // throws ref error as outside block scope //

// Block Scope II

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);  
    }
  console.log(lightWaves);
};


visibleLightWaves();

// Block Scope II

const starCount = () => {
  let i = 5;
  console.log(i);
  for (i = 0; i < 12; i++) {
    console.log(i);
  }
}

starCount();
console.log(i); // throws ref error as outside scope of the block
