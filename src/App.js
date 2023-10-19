import "./App.css";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import Section3 from "./components/Section3.jsx";

function App() {
  return (
    <div className="App">
      <div className="sectionOne">
        <Section1 />
      </div>
      <div className="sectionTwo">
        <Section2 />
      </div>
      <div className="sectionThree">
        <Section3 />
      </div>
    </div>
  );
}

export default App;
