import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=812db64110f144689c064900210208&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPlaceData(data);
      });
  };

  // useEffect(() => {

  // }, []);
  return (
    <div className="App p-4">
      <div className="container p-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="p-1 px-2 m-2"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <button className="btn btn-dark m-1" onClick={updatePlaceData}>
              Search
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 mt-4">
            <div className="card">
              {placeData.location ? (
                <>
                  <div className="location">
                    <h2>{placeData.location.name}</h2>
                    <h6>
                      {placeData.location.region} , {placeData.location.country}
                    </h6>
                  </div>
                  <div className="weather my-2">
                    <img
                      classNmae="my-2"
                      src={placeData.current.condition.icon}
                      alt=""
                    />
                    <h3>{placeData.current.temp_c}°C </h3>
                    <h6>{placeData.current.condition.text}</h6>
                  </div>
                  <div className="container my-3">
                    <div className="row d-flex whp">
                      <div className="col">
                        <div className="title">Wind Speed</div>
                        <div className="data ">
                          {placeData.current.wind_kph}
                          <span className="unit">km</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_mm}
                          <span className="unit">mm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h2>Weather Not Found </h2>
              )}
            </div>
          </div>
        </div>
      </div>
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
