import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import explore from "./components/explore";
import Details from "./components/Details";
import Plan from "./components/Plan";
import Places from "./components/Places";
import Fotter from "./components/Fotter";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Details />
      <Plan />
      <Places />
      <Fotter />
    </div>
  );
}

export default App;
