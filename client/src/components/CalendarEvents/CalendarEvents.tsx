import { useEffect, useState } from "react";
import "./CalendarEvents.css";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarEvents() {
  const [value, onChange] = useState<Value>(new Date());
  const [dateEvent, setDateEvent] = useState(null);
  console.log(dateEvent);
  console.log(value);
  console.log(new Date(2025, 0, 1));

  const eclipse = [new Date(2025, 2, 29), new Date(2025, 8, 21)];

  useEffect(() => {
    fetch(
      "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/five-millennium-catalog-of-solar-eclipses0/records?select=ecl_type%2Ccalendar_year%2C%20calendar_month%2C%20calendar_day%2C%20td_of_greatest_eclipse&limit=100&refine=calendar_year%3A2025&lang=fr",
    )
      .then((response) => response.json())
      .then((data) => setDateEvent(data));
  }, []);

  return (
    <main className="mainEvents">
      <h1>evenements</h1>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date }) => {
          let classes = "tile";

          if (eclipse?.some((b) => b.getTime() === date.getTime())) {
            classes = `${classes} dotted`;
          }
          return classes;
        }}
      />
    </main>
  );
}
