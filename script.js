let inputEle = document.getElementById("locInput")
let tempEle = document.getElementById("tempValue")
let locEle=document.getElementById('location')
let weatherDesc = document.getElementById('weatherDesc')
let btnEle = document.getElementById('btn')
let icon=document.getElementById('icon')

const apiKey = "fe40b57c9d017de24ecf35bf695dc59d"

btnEle.onclick = function(){
    if(inputEle.value == '')
    alert("Please Enter Some location")
    else{
        loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
        fetch(url).then(res=>res.json())
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            tempEle.innerText=Math.floor(feels_like-273);
            locEle.innerText=name;
            weatherDesc.innerText=description;

        })
        .catch(()=>{
            alert("Enter valid location")
        })
        inputEle.value=""
    }
}