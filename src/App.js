import "./App.css";
import { Nav } from "./UI";
import ProdListGrid from "./UI/ProdList";

function App() {
  return (
    // Main Component
    <div className="App">
      {/* Navbar */}
      <Nav />
      {/* Product List Dashboard */}
      {/* Product Listing Grid */}
      <ProdListGrid />
      {/* Product List Dashboard */}
    </div>
  );
}

export default App;
