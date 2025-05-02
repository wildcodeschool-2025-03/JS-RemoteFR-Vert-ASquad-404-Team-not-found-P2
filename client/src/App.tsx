import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import RocketOnTop from "./components/OnTopbutton/RocketOnTop";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <RocketOnTop />
      <Footer />
    </div>
  );
}

export default App;
