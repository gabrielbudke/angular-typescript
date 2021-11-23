import { Spacecraft } from "./Spacecraft";

// 1.3 Definindo uma interface
interface ContainerShip {
   cargoContainer: number;
}

// 1.2 Definindo uma classe que extende uma classe pai
class MilleniumFalcon extends Spacecraft implements ContainerShip {

   cargoContainer: number;

   constructor() {
      super("hyperdrive");
      this.cargoContainer = 4;
   }

   jumpIntoHyperspace() {
      if (Math.random() >= 0.5) {
         super.jumpIntoHyperspace();
      } else {
         console.log('Failed to jump into hyperspace');
      }
   }
}

export { MilleniumFalcon, ContainerShip };