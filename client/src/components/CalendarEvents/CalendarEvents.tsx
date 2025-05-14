import { useEffect, useState } from "react";
import "./CalendarEvents.css";
import { motion } from "motion/react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
type dateEventType = {
  total_count: number;
  results: [
    {
      ecl_type: string;
      calendar_year: number;
      calendar_month: string;
      calendar_day: number;
      td_of_greatest_eclipse: [string];
    },
  ];
};

export default function CalendarEvents() {
  const [value, onChange] = useState<Value>(new Date());
  const [dateEvent, setDateEvent] = useState<dateEventType | null>(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    fetch(
      "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/five-millennium-catalog-of-solar-eclipses0/records?select=ecl_type%2Ccalendar_year%2C%20calendar_month%2C%20calendar_day%2C%20td_of_greatest_eclipse&limit=100&refine=calendar_year%3A2025&lang=fr",
    )
      .then((response) => response.json())
      .then((data) => setDateEvent(data));
  }, []);

  const transDate =
    dateEvent?.results.map(
      (d) =>
        new Date(
          `${d.calendar_year}, ${months.indexOf(d.calendar_month) + 1}, ${d.calendar_day}`,
        ),
    ) || [];

  return (
    <motion.main
      className="mainEvents"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <h1>Calendrier d'evénements</h1>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date }) => {
          let classes = "tile";
          if (
            transDate.length > 0 &&
            transDate.some((b) => b.getTime() === date.getTime())
          ) {
            classes = `${classes} dotted`;
          }
          return classes;
        }}
      />
      <p>
        <span className="point" /> : Jour d'éclipse solaire
      </p>
    </motion.main>
  );
}
