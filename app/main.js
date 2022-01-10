import { CaughtPokeController } from "./Controllers/CaughtPoke.js";
import { WildPokeController } from "./Controllers/WildPoke.js";


class App {
  caughtPokeController = new CaughtPokeController()
  wildPokeController = new WildPokeController()
}

window["app"] = new App();
