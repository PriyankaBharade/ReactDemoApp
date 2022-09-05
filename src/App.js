import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode,setdarkMode] = useState(false);
  return (
    <>
      <NavBar title="Text Util App" />
      <div className="container my-10">
        {/* <About/> */}
        <TextForm heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
