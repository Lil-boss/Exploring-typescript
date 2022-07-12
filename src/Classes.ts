import { player } from "./classes/player.js";

const mashrafi = new player("Mashrafi", 45, "Bangladesh");
const shakib = new player("shakib", 45, "Bangladesh");

console.log(mashrafi.country);
console.log(shakib.age);
const players: player[] = [];
players.push(mashrafi);
