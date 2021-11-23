// 1.1 Definindo uma classe
class Spacecraft {
   constructor(private propulsor: string) { };

   jumpIntoHyperspace() {
      console.log(`Entering hyperspace with ${this.propulsor}`);
   }
}

export { Spacecraft };