import  { useState } from "react";
import "./App.css";
import arrow from "./assets/images/icon-arrow.svg";

function App() {
  const [newday, setNewDay] = useState(0);
  const [newmonth, setNewMonth] = useState(0);
  const [newyear, setNewYear] = useState(0);
  const [number, setNumber] = useState(0);

  const errors = {
    1: "Must be a valid day",
    2: "Must be a valid month",
    3: "Must be a valid year",
  };

  const caulculate_age = (day, month, year) => {
    if (day > 31 || day < 1) {
      console.log(errors[1]);
      return;
    } else if (month > 12 || month < 1) {
      console.log(errors[2]);
      return;
    } else if (year > new Date().getFullYear() || year < 0) {
      console.log(errors[3]);
      return;
    }

    const currentDate = new Date();
    const todays = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    const added_date_string = `${month}/${day}/${year}`;
    const date1 = new Date(added_date_string);
    const date2 = new Date(todays);
    const time_difference = date2.getTime() - date1.getTime();
    const days_difference = time_difference / (1000 * 60 * 60 * 24);
    setNumber(Math.floor(days_difference));
  };

  const getFormatedStringFromDays = (numberOfDays) => {
    let years = Math.floor(numberOfDays / 365);
    let months = Math.floor((numberOfDays % 365) / 30);
    let days = Math.floor((numberOfDays % 365) % 30);

    if (years == 0) {
      years = "--";
    }
    if (months == 0) {
      months = "--";
    }
    if (days == 0) {
      days = "--";
    }

    return [years, months, days];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    caulculate_age(newday, newmonth, newyear);
  };

  return (
    <div className="bg-slate-200 flex justify-center align-middle">
      <div className="container bg-white w-7/12 h-2/5 my-10 p-4 rounded-xl rounded-br-3xl">
        <form onSubmit={handleSubmit}>
          <div className="inputpart flex justify-between w-8/12">
            <div>
              <label
                htmlFor="days"
                className="text-slate-400 font-bold text-xs"
              >
                DAYS
              </label>
              <input
                placeholder="DD"
                name="days"
                id="number"
                type="number"
                required
                onChange={(e) => setNewDay(e.target.value)}
                className=" remove-arrow block w-24 rounded-md border-1 px-3.5 py-3 required:border-red-500 text-gray-900 text-justify  text-2xl justify-center  ring-1  ring-gray-300 hover:ring-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 placeholder:text-gray-400 placeholder:text-2xl placeholder:text-justify  cursor-pointer "
              />
            </div>
            <div>
              <label
                htmlFor="month"
                className="text-slate-400 font-bold text-xs"
              >
                MONTH
              </label>
              <input
                placeholder="MM"
                name="month"
                id="month"
                type="number"
                required
                onChange={(e) => setNewMonth(e.target.value)}
                className="remove-arrow block w-24 rounded-md border-1 px-3.5 py-3 required:border-red-500 text-gray-900 text-justify  text-2xl justify-center  ring-1  ring-gray-300 hover:ring-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 placeholder:text-gray-400 placeholder:text-2xl placeholder:text-justify  cursor-pointer "
              />
            </div>
            <div>
              <label
                htmlFor="year"
                className="text-slate-400 required:border-red-500 font-bold text-xs"
              >
                Year
              </label>
              <input
                placeholder="YYYY"
                name="year"
                id="number"
                type="number"
                required
                onChange={(e) => setNewYear(e.target.value)}
                className=" remove-arrow block w-24 rounded-md border-1 px-3.5 py-3 required:border-red-500 text-gray-900 text-justify  text-2xl justify-center  ring-1  ring-gray-300 hover:ring-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 placeholder:text-gray-400 placeholder:text-2xl placeholder:text-justify  cursor-pointer "
              />
            </div>
          </div>
          <div className="middlepart flex">
            <div className="line border my-12 border-slate-300 w-10/12"></div>
            <button
              type="submit"
              className="rounded-full bg-purple-700 w-20 h-20 items-center flex justify-center cursor-pointer"
            >
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </form>
        <div className="content">
          <div className="years flex">
            <p className="text-7xl font-bold text-purple-700 mx-2">
              {getFormatedStringFromDays(number)[0]}
            </p>
            <p className="text-7xl font-bold  text-zinc-900">years</p>
          </div>
          <div className="months flex">
            <p className="text-7xl font-bold text-purple-700 mx-2">
              {getFormatedStringFromDays(number)[1]}
            </p>
            <p className="text-7xl font-bold  text-zinc-900">months</p>
          </div>
          <div className="days flex">
            <p className="text-7xl font-bold text-purple-700 mx-2">
              {getFormatedStringFromDays(number)[2]}
            </p>
            <p className="text-7xl font-bold  text-zinc-900">days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


