import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    });
  }
  const toggleMode = () =>{
    if(mode==="dark"){
      setmode("light");
      showAlert("Light Mode is Enabled", "Success");
      document.body.style.backgroundColor="white";
    }
    else{
      setmode("dark");
      showAlert("Dark Mode is Enabled", "Success")
      document.body.style.backgroundColor="#001a76";
    }
  }
  return (
   <>
   <Router>
   <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}></Navbar>
   <Alert alert={alert} />
    {/* <TextForm mode={mode} showAlert={showAlert}></TextForm>  */}
    
   <Switch>
          <Route path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/home">
            <TextForm mode={mode} showAlert={showAlert}></TextForm>
          </Route>
        </Switch>
   </Router>
   </>
  );
}

export default App;
