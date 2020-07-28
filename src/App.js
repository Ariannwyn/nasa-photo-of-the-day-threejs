import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header"
import NasaInfo from "./components/NasaInfo"
import NasaPhoto from "./components/NasaPhoto"

function App() {
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response.data);
        let mediaType = response.data.media_type;
        if (mediaType === "image"){
          setImage(response.data.url);
          setDate(response.data.date);
          setDescription(response.data.explanation);
          setTitle(response.data.title);
        }
        else if (mediaType === "video"){
          axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14") 
          .then(response => {
            setImage(response.data.url);
            setDate(response.data.date);
            setDescription(response.data.explanation);
            setTitle(response.data.title);
          })
        }
      })
      .catch(error => console.log("data was not returned", error))
  }, []);
  
  return (
    <div className="App">
        <Header />
        <NasaPhoto image={image}/>
        <NasaInfo date={date} description={description} title={title}/>
      
    </div>
  );
}

export default App;

//if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, 
//OR just fetch the APOD from a different date by adding this to the back of the API endpoint: &date=2012-03-14

//Notice the optional query param date? You can pass a different date in your url like this 
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14 to get the APOD from a different date. 
//Add a date dropdown that allows you to select a different date and see that APOD. This will be quite a bit of work, 
//but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. 
//This is also a very common type of interaction, so it would be good to try this out