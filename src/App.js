import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {
   const [mode, setMode] = useState("light");
   const [alert, setAlert] = useState(null);
   const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
   }
   const togglemode = ()=>{
    let txtarea = document.querySelector("textarea");
    let card = document.getElementById('card')
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white";
      txtarea.style.backgroundColor = "#042743";
      txtarea.style.color = "white";
      card.style.backgroundColor = "#042743"
      card.style.border = "1px solid white";
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
      card.style.backgroundColor = "white";
      card.style.border = "1px solid black";
      txtarea.style.backgroundColor = "white";
      txtarea.style.color = "black";
      showAlert("Light Mode Has Been Enabled", "success");

    }
   }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar title="M.Roshan" className="hello" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className="container">
      <Textform showAlert={showAlert} heading="Enter the text here to modify: "/>
      </div>
    </div>
  );
}

export default App;
