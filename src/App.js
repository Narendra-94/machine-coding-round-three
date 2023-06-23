import "./App.css";
import { Snacks } from "./component/Snacks";
import { snacks } from "./component/data";

function App() {
  return (
    <div className="App">
      <Snacks data={snacks} />
    </div>
  );
}

export default App;
