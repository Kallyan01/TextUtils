// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import About from './componants/About';
import Navbar from './componants/Navbar';
import Alert from './componants/Alert';
import TextForm from './componants/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  // setmode("light")
  const showAlert=(msg,type)=>{
    setalert({
      txt:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode=='dark')
    {
      setmode('light')
      document.body.style.backgroundColor="#F9F9F9 ";
      document.body.style.color="black ";
      showAlert("Light Mode enabled","success");
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor="#082032";
      document.body.style.color="white ";
      showAlert("Dark Mode enabled","success");
    }
  }
  return (
    
    <Router>
      <Navbar title="TextUtils" aboutUs="AboutTU" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert alert={alert}/> */}
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         //it's better to use exact for safety
          <Route exact path="/">
          <TextForm heading="Enter Your Text to Analyse"/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
