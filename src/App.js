// Code Starts Here

// Imports
import React, {useState, useEffect} from "react";
import axios from "axios";
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
        <h1>Nasa's Photo of the Day: Andromeda</h1>
      <div className = "AppInfo">
        <img src = {data.hdurl} alt = "The Andromeda Galaxy"></img>
        <h2>{data.title}</h2>
        <h3>{data.date}</h3>
      </div>
        <p>{data.explanation}</p>
    </div>
  );
}

export default App;
