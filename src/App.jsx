import "./App.css";
import { Restaurant } from "./components/RestaurantDetails";
function App() {
  const url = "http://localhost:5000/data";

  return (
    <div className="App">
      <Restaurant />
    </div>
  );
}

export default App;
