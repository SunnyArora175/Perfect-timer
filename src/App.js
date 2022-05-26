import React,{useState} from 'react'
import './App.css';
import Timer from './Timer';

function App() {
  const[theme,setTheme]=useState("");

  return (
    <div className="container" style={{backgroundColor: theme}}>
      <center>
        <Timer setColor={setTheme} />
      </center>
    </div>
  );
}

export default App;
