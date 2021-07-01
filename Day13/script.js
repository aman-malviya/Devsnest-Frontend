fetch(
  "https://api.weatherapi.com/v1/forecast.json?key=110f68bbb7a445728d9144244211306&q=Bhopal",
  { mode: "cors" }
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("location").innerHTML=data.location.name;
    document.getElementById("temperature").innerHTML=data.current.temp_c;
    document.getElementById("status").innerHTML=data.current.condition.text;
    document.getElementById("humidity").innerHTML="<i class='far fa-tint'></i>"+data.current.humidity + "%";
    document.getElementById("pressure").innerHTML="<i class='fas fa-thermometer-three-quarters'></i>"+data.current.pressure_mb + "mBar";
    document.getElementById("wind").innerHTML="<i class='fad fa-wind'></i>"+data.current.wind_kph + "km/h";
    let img="./Assets/clouds.png";
    let hourStatus=data.current.condition.text;
    console.log(hourStatus);
    if(hourStatus.search("cloudy") != -1){
        hourStatus.search("Partly") != -1?img="./Assets/clouds-and-sun.png":img="./Assets/clouds.png";
    }
    if(hourStatus.search("rain") != -1){
        img="./Assets/rain.png";
    }
    if(hourStatus.search("Mist") != -1){
        img="./Assets/mist.png";
    }
    document.getElementById("status-img").src=img;
    
    let hourNow=new Date().getHours();
    for(let i=hourNow; i<=24; i++){
        let hr=document.createElement("div");

        let hour;
        if(i > 12)hour=i%12+" PM";
        else hour=i + " AM";

        let img="./Assets/clouds.png";
        let hourStatus=data.forecast.forecastday[0].hour[i].condition.text;
        if(hourStatus.search("cloudy") != -1){
            hourStatus.search("Partly") != -1?img="./Assets/clouds-and-sun.png":img="./Assets/clouds.png";
        }
        if(hourStatus.search("rain") != -1){
            img="./Assets/rain.png";
        }
        hr.innerHTML="<span style='white-space:nowrap'>"+hour+"</span><br><img src="+img+" /><br><span style='font-size:1.8rem'>"+Math.round(data.forecast.forecastday[0].hour[i].temp_c)+"</span>";
        document.querySelector("#forecast > div").appendChild(hr);
    }
  });
