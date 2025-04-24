import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
