import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState({ color: 'white' });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2f3864";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = color.color;
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <NavBar title="Text Util App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-10">
        {/* <About/> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
