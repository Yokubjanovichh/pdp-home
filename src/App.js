import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "L52Vm0qZZZ91JgEbZh2cMWRRJZpRp233";

export default class App extends React.Component {
  gettingWeather = async (e) => {
    e.preventDefault();
    const api_url = await fetch(`https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY }`);
    const data = await api_url.json();
    console.log(data);
  };
  render() {
    return (
      <div className="container">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

// return da hamma kolarimizni bitta ota divga tiqib ketishimiz kerak, return faqat bitta ota div qabul qiladi;
