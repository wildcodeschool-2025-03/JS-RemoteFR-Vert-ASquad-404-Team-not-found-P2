import { useEffect, useState } from "react";

import "./PicOfTheDay.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const apiKey = import.meta.env.VITE_API_NASA_KEY;

type PicOfTheDay_type = {
  copyright: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function PicOfTheDay() {
  //useState hook to store the picture of the day.
  const [picOfTheDay, setPicOfTheDay] = useState<PicOfTheDay_type | null>(null);
  //useState hook to store the date of the picture of the day, initial value is the current date.
  const [value, onChange] = useState<Value>(new Date());

  //useEffect hook to fetch the picture of the day when the date changes.
  useEffect(() => {
    //Convert the selected date to a string in the format "yyyy-mm-dd" to fit API requirements.
    const selectedDate = new Date(value instanceof Date ? value : new Date());
    const year: number = selectedDate.getFullYear();
    const month: number = selectedDate.getMonth() + 1;
    const day: number = selectedDate.getDate();
    const formatedDate: string = `${year}-${month}-${day}`;

    //Fetch the picture of the day from the API using the selected date (or the current date by default).
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formatedDate}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setPicOfTheDay(data);
      });
  }, [value]);

  return (
    <div className="picOfTheDay_container">
      <h2>{picOfTheDay?.title}</h2>
      <img src={picOfTheDay?.hdurl} alt="pic of the day" />
      <p className="pic_explanation">{picOfTheDay?.explanation}</p>
      <div className="calendar_container">
        <p>Voir une autre photo en choissisant une date antérieure</p>
        <DatePicker onChange={onChange} value={value} format="yyyy-MM-dd" />
      </div>
    </div>
  );
}
