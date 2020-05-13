


function timeAndWeather(city,locationTimeZone){

    
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=267fb9fcb017b79fd15032d32342fbe9`
        )
    .then(res => res.json()) 
    .then(data =>{
        
       
        const dateAndTime = new Date(data.dt * 1000).toLocaleString('en-GB', { timeZone: locationTimeZone.replace(' ','_').toLowerCase() })
        
       
        const weather = data.weather.reduce((element)=>{
            return element
        })

        
        const temprature = data.main.temp
        const minTemprature = data.main.temp_min
        const maxTemprature = data.main.temp_max
        const humidity = data.main.humidity


        
        console.log(
            `Date and Time: ${dateAndTime}
             City & Time Zone: ${city} - ${locationTimeZone} 
             Weather: ${weather.description}
             Temprature: ${temprature}
             Min Temprature: ${minTemprature}
             Max Temprature: ${maxTemprature}
             Humidity: ${humidity}
             
            `)

    }).catch((error) => {

        console.error('Error:', error)
        
    })

}


timeAndWeather('Los Angeles','America/Los Angeles')


timeAndWeather('Nairobi','Africa/Nairobi')

