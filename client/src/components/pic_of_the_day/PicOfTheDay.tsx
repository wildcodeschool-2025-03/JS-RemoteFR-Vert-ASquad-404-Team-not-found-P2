import { useEffect, useState } from "react";

import "./PicOfTheDay.css";

const apiKey = import.meta.env.VITE_API_NASA_KEY;

type PicOfTheDay_type = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export default function PicOfTheDay() {
  const [picOfTheDay, setPicOfTheDay] = useState<PicOfTheDay_type | null>(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPicOfTheDay(data);
      });
  }, []);

  return (
    <div className="picOfTheDay_container">
      <h2>{picOfTheDay?.title}</h2>
      <div className="pictureAndDate">
        <img src={picOfTheDay?.hdurl} alt="pic of the day" />
        <span className="pic_date">{picOfTheDay?.date}</span>
      </div>
      <p className="pic_explanation">{picOfTheDay?.explanation}</p>
    </div>
  );
}
