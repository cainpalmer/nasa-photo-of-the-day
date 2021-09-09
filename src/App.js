// Code Starts Here

// Imports
import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from './Header.js';
import Body from './Body.js';
import "./App.css";

// App
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Q7vYhSUm52jjNtAFWqK6wSu0dtkqAF6rdgBKHRyp")
    .then(res => {
      const data = res.data;
      setData(data);
    })
    .catch(err => {
      console.log("Error recieving Data");
    })
  },[])

// Return
  return (
    <div className = "App">
        <Header header = {data.title} />
        <Body body = {data.hdurl} explanation = {data.explanation} data = {data.date} />
    </div>
  );
}

export default App;