import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";


export default function App() {
  
  return (
    <div className="App p-4">
      <Form/>
      <WeatherCard/>
    </div>
  );
}

// location: Object
// name: "Khunti"
// region: "Jharkhand"
// country: "India"
// lat: 23.08
// lon: 85.28
// tz_id: "Asia/Kolkata"
// localtime_epoch: 1628231999
// localtime: "2021-08-06 12:09"
// current: Object
// last_updated_epoch: 1628231400
// last_updated: "2021-08-06 12:00"
// temp_c: 28
// temp_f: 82.4
// is_day: 1
// condition: Object
// text: "Mist"
// icon: "//cdn.weatherapi.com/weather/64x64/day/143.png"
// code: 1030
// wind_mph: 5.6
// wind_kph: 9
// wind_degree: 230
// wind_dir: "SW"
// pressure_mb: 1006
// pressure_in: 29.71
// precip_mm: 0.1
// precip_in: 0
// humidity: 84
// cloud: 75
// feelslike_c: 31
// feelslike_f: 87.8
// vis_km: 4
// vis_miles: 2
// uv: 6
// gust_mph: 6.9
// gust_kph: 11.2
