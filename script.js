const  apiKey="0f8343b47f77fa6a164ff4f3ffec07ed"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
let weatherICon=document.querySelector(".weather-icon");
let card =document.querySelector(".card");


const d=new Date();

async function checkWeather(city) {
    let response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data= await response.json();//json is a function
    //console.log(data);
     document.querySelector(".city").innerHTML=data.name
     document.querySelector(".temp").innerHTML=(data.main.temp)+'°c'
     document.querySelector(".humidity").innerHTML=(data.main.humidity)+'%'
     document.querySelector(".wind").innerHTML=(data.wind.speed)+'Km/hr'
     document.querySelector(".date").innerHTML = currentDate;
     document.querySelector(".Time").innerHTML= d.toLocaleTimeString();
        
     if (data.weather[0].main=="Clouds"){
        weatherICon.src="images/clouds.png"
        card.style.backgroundImage="url('https://digital-photography-school.com/wp-content/uploads/flickr/14718892840_10bba8ff6d_o-600x403.jpg')"
    

    }
    else if(data.weather[0].main=="Clear"){
        weatherICon.src="images/clear.png"
        card.style.backgroundImage="url('https://i.makeagif.com/media/4-05-2016/utmjeB.gif')"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherICon.src="images/drizzle.png"
        bkgImg.style.backgroundImage="url('https://media4.giphy.com/media/3o7at59KDANvJrUDbG/200w.gif?cid=6c09b95230dfraxfrfdtgbe1humypuloumzjs732h5yeqsuh&ep=v1_gifs_search&rid=200w.gif&ct=g')"
    }
    else if(data.weather[0].main=="Mist"){
        weatherICon.src="images/mist.png"
        card.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeqSUUXlRlt9GoGRxmYGk7NI0x_TUi67NvGMSBeg1x1hDnko4fO-qJXsROYz2WioZGzo&usqp=CAU')"
    
    }
    else if (data.weather[0].main=="Rain"){
        weatherICon.src="images/rain.png"
        card.style.backgroundImage="url('https://cdn.pixabay.com/animation/2023/03/26/01/15/01-15-42-612_512.gif')"
    }
    else if (data.weather[0].main=="Snow"){
        weatherICon.src="images/snow.png"
        card.style.backgroundImage="url('https://i.pinimg.com/originals/a2/e7/0e/a2e70ee9920b35d55f9fc6d4b5af21aa.gif')"
    
    }
    else if(data.weather[0].main=="Haze"){
        weatherICon.src="images/haze.png"
        card.style.backgroundImage="url('')"
    }
    document.querySelector(".weather").style.display="block"
}
    
    
   


searchBtn.addEventListener('click',()=> {
    checkWeather(searchBox.value);
});
searchBox.addEventListener('keydown',(event)=>{
    if(event.key=='Enter'){
        checkWeather(searchBox.value);
    }
})

    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let currentDate = today.toLocaleDateString('en-US', options);

    
    document.querySelector(".date").innerHTML = currentDate;



displayDate();
