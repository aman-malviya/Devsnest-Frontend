import React from 'react'
import { useSelector } from 'react-redux'


function WeatherCard() {
    const placeData = useSelector(state => state.placeData)

    return (
       <div className="container">
           <div className="row">
           <div className=" d-flex align-items-center col-12 col-lg-4 mt-4 m-auto">
            <div className="card m-auto">
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
                      className="my-2"
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
    )
}

export default WeatherCard
