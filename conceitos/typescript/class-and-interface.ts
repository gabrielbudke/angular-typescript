import { Spacecraft } from "./Spacecraft";
import { MilleniumFalcon, ContainerShip } from "./MilleniumFalcon";

import _ from "lodash";
console.log(_.pad("Typescript Examples", 40, "="));

// 1. CLASSES
const ship = new Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();

const millenium = new MilleniumFalcon();
millenium.jumpIntoHyperspace();

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainer > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(millenium) ? "YES" : "NO"}`);

