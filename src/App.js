import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header"
import NasaInfo from "./components/NasaInfo"
import NasaPhoto from "./components/NasaPhoto"
import Calendar from "./components/Calendar"
import ImagePlane from "./components/Canvas/ImagePlane"
import GroundPlane from "./components/Canvas/GroundPlane"
import WallPlane from "./components/Canvas/WallPlane"
import { Canvas, useFrame } from "react-three-fiber";

function App() {
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
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
      .catch(error => {
        console.log("data was not returned", error)
        setImage("https://image.freepik.com/free-vector/funny-error-404-background-design_1167-219.jpg");
      })
  }, []);
  
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={"Loading..."}>
          <pointLight position={[-10, -10, 30]} intensity={0.5} />
          <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
          <ImagePlane image={image}/>
          <GroundPlane />
          <WallPlane />
        </Suspense>
      </Canvas>
        {/* <Header />
        <NasaPhoto image={image}/>
        <NasaInfo date={date} description={description} title={title}/>
        <Calendar/> */}
    </div>
  );
}

export default App;

//Notice the optional query param date? You can pass a different date in your url like this 
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14 to get the APOD from a different date. 
//Add a date dropdown that allows you to select a different date and see that APOD. This will be quite a bit of work, 
//but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. 
//This is also a very common type of interaction, so it would be good to try this out