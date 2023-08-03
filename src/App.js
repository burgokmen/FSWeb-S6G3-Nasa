import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Greeting from "./Greetings";
import ApodContainer from "./ApodContainer";
import styled from "styled-components";

/* const sahteData = {
  date: "1997-01-21",
  explanation:
    "In Jules Verne's science fiction classic A Journey to the Center of the Earth, Professor Hardwigg and his fellow explorers encounter many strange and exciting wonders. What wonders lie at the center of our Galaxy? Astronomers now know of some of the bizarre objects which exist there, like vast dust clouds,\r bright young stars, swirling rings of gas, and possibly even a large black hole. Much of the Galactic center region is shielded from our view in visible light by the intervening dust and gas. But it can be explored using other forms of electromagnetic radiation, like radio, infrared, X-rays, and gamma rays. This beautiful high resolution image of the Galactic center region in infrared light was made by the SPIRIT III telescope onboard the Midcourse Space Experiment. The center itself appears as a bright spot near the middle of the roughly 1x3 degree field of view, the plane of the Galaxy is vertical, and the north galactic pole is towards the right. The picture is in false color - starlight appears blue while dust is greenish grey, tending to red in the cooler areas.",
  hdurl: "https://apod.nasa.gov/apod/image/9701/galcen_msx_big.gif",
  media_type: "image",
  service_version: "v1",
  title: "Journey to the Center of the Galaxy \r\nCredit:",
  url: "https://apod.nasa.gov/apod/image/9701/galcen_msx.jpg",
}; */

function App() {
  const [apodData, setApodData] = useState("");
  const [showImg, setShowImg] = useState(false);
  const [showExplanation, setShowExplantion] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  /*   useEffect(() => {
    console.log("Use Effect Kullanıldı");
  }, [showExplanation, showImg]);
 */
  const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${(props) => (props.type === "primary" ? `background: #2196f3;` : null)}
  `;
  const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    border-style: double;
  `;

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "g2rhKv5VN6rXVDVCewmcMt6UxpjkdYBnllgIrsiF",
          date: date,
        },
      })
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log("Nasa Api is not working");
      });
    console.log("Page is rendered.");
  }, [date]);

  return (
    <div className="App">
      <Greeting date={apodData.date} />

      <ApodContainer data={apodData} setDate={setDate} currentDate={date} />

      <Button
        type="primary"
        onClick={() => {
          setShowExplantion(!showExplanation);
        }}
      >
        Hide / Show Explanation
      </Button>

      <br />
      <br />

      {showExplanation && (
        <WrapperDiv>
          <p>{apodData.explanation}</p>
        </WrapperDiv>
      )}
    </div>
  );
}

export default App;
