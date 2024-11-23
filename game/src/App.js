import GameTable from "./components/table";
import { animals } from "./assets/AnimalsDb";

function App() {
  return (
    <center>
      <h2>Animal Game</h2>
      <GameTable animalDetails={animals}/>
    </center>
  );
}

export default App;
