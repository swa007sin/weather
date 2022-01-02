let city = async()=>{
    let input = document.getElementById("search-bar").value;
    document.getElementById("search-bar").value="";
    if(input!==""){
      try{
        let fetchdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=en&units=metric&appid=78ea530bcb66434fe3d2276971510974`);
        let convert = await fetchdata.json();
        show(convert);
      }catch{
        document.getElementById("display-img").innerHTML="City Not Found"
      }
    }else{
      document.getElementById("display-img").hidden=false;
      document.getElementById("display-img").innerHTML="Enter City Name";
    }
    
  }
  
  function show({weather,main,wind,sys,name}){
    document.getElementById("display-img").hidden=false;
    document.getElementById("display-img").innerHTML=
   `<div id="name">
      <h4>Weather in ${name},${sys.country}</h4>
      <div>
        <i class="fas fa-cloud-sun fa-6x"></i>
        <p>${weather[0].description}</p>
      </div>
    </div>
    <div id="overall">
    <div id="temp">
    <p>current temp : ${main.temp}<sup>&#8451</sup></p> 
    <p>temp Max : ${main.temp_max}<sup>&#8451</sup></p> 
    <p>temp Min : ${main.temp_min}<sup>&#8451</sup></p> 
    </div>
    <div id="humi">
    <p> Humidity : ${main.humidity}%</p> 
    <p>Pressure : ${main.pressure} Hg</p>
    <p> Wind : ${wind.speed} Km/h</p>
    </div> 
    </div>`;
  } 
  
  document.getElementById('search-bar').addEventListener("keyup",function(event){
    
    if(event.key=="Enter"){
      city();
    }
  });