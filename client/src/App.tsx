import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
