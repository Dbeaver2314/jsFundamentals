/**
 * container that sets multipe sets of data.
 *  -stores data as key value pairs.
 * denoted by curly braces
 */
let netflix = {
  id: 1,
  showName: "The Office",
  season1: {
    seasonInfo: {
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot"
        },
        {
          episode: 2,
          episodeName: "Diversity Day"
        },
        {
          episode: 3,
          episodeName: "Health Care"
        },
        {
          episode: 4,
          episodeName: "The Alliance"
        },
        {
          episode: 5,
          episodeName: "Basketball"
        },
        {
          episode: 6,
          episodeName: "Hot Girl"
        }
      ]
    }
  },
  season2: {},
  season3: {},
  season4: {}
};
//to access data use dot notation for objects

// console.log("all Data", netflix);
// console.log("season Info",netflix.season1.seasonInfo);
// console.log("specific episode name", netflix.season1.seasonInfo.episodeInfo[1].episodeName)

// console.log("Episode number",netflix.season1.seasonInfo.episodeInfo[5].episode,"Episode Name", netflix.season1.seasonInfo.episodeInfo[5].episodeName)

/**
    -JSON stands for Javascript Object Notation
    -JSON syntax is derived from javascript object notation, but is text only
    -JSON data exists as a string and needs to be converted to native JS object if we want to access the data.
 */

let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit1: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevil: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky Pig"
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko"
  },
  nbaPlayers: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkNicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charlotteHornets2: "Muggsy Bogues"
  }
};
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));

console.log(Object.keys(spaceJam.toonSquad).toString());
console.log(Object.values(spaceJam.nbaPlayers));

/*
        -Object Backer notation
            -object bracket notation  allows us to find a vaule in an object
            -it aslo allows us to set the key of an onject.
            also allows us to store the keys of an object.
    -object bracket notation works because all keys inside an object are strings, even though they are not wrapped in quotes
 */

let garden = {
  vegetable: "zucchini",
  flower: "sunflower",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10
};

let test = Object.keys(garden); // returns an array of keys
console.log(test);

let zucchini = garden["vegetable"];
console.log(zucchini);

let baking = {};
