import React from 'react'

export default function UserLocation(props) {

    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity, img } = props.weather;

    function currentDateandTime(){
        var today = new Date();

        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var d = new Date();
        var monthName=months[d.getMonth()]; 
        var dateTime = monthName+'       '+d.getDate();
        return dateTime;
    }


    function weatherIcon(icon){
        if(icon==="Haze")
          return <i class='fas fa-cloud-sun fa-5x mb-2'></i>;
        else if(icon==="Sunny")
         return <i class="fas fa-sun fa-5x mb-2"></i>
        else if(icon==="Smoke")
         return <i class="fas fa-smog fa-5x mb-2"></i>
         else if(icon==="Rainy")
         return <i class='fas fa-cloud-showers-heavy fa-5x mb-2'></i>
         return <i class=" fas fa-cloud-sun-rain mb-2 fa-5x"></i>
        
         
        }

    return (
   
      <div  style={{height:"100%"}}>
        <div className="row justify-content-center mt-5" >
          <div className="col-md-7"  >
            <div className="card  text-white text-center border-0">
              <img
                src=""
                className="card-img"
                alt=""
              />
              <div className="card-img-overlay">
                <div className="py-3" style={{ backgroundColor : "rgba(22, 28, 45 , 0.7)"}}>

                <h2 className="card-title">{location}</h2>
                <p className="card-text lead">
                {region} , {country}
                </p>
                <hr/>

                {weatherIcon(description)}
                <h1 className="fw-bolder mb-5"> {temperature}<sup>o</sup>C </h1>
                <p className="fw-bold mb-1"> { description}</p>
                {console.log(description)}
                {console.log(img)}
                <p className="lead mb-1"> {currentDateandTime()} </p>
                <hr/>
                <p className="mb-0">Humidity <em>{humidity}%</em><i class="fas fa-humidity"></i></p>
                <p className=" mb-0">Pressure <em>{pressure} Pa</em><i class="fas fa-humidity"></i></p>
                </div>
                
        
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}
