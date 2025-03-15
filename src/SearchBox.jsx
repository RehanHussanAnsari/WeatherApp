import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {

    const [city, setCity] = useState("");
    const [weatherCondition, setWeatherCondition] = useState("clouds");

    let handleChange = (event) => {
        if(event.target.value == "") return;
        else setCity(event.target.value);
    }
    let url = "https://api.openweathermap.org/data/2.5/weather?q=";
    let apiKey = "02ed73083a4cecd7c2807854174d11ca&units=metric";

    let getWeatherInfo = async ()=>{
        let response = await fetch(`${url}${city}&appid=${apiKey}`);
        let jsonRes =   await response.json();

        let usefulData = {
            weather_conditions: jsonRes.weather[0].main,
            city: jsonRes.name,
            temp: jsonRes.main.temp,
            temp_max: jsonRes.main.temp_max,
            temp_min: jsonRes.main.temp_min,
            humidity: jsonRes.main.humidity,
            pressure: jsonRes.main.pressure,
            feels_like: jsonRes.main.feels_like
        }
        return usefulData;
    }
    let checkCity = async (event) => {
        let weatherData = await getWeatherInfo();
        setWeatherCondition(weatherData.weather_conditions);
        updateInfo(weatherData);
    }

    let imageUrl = "https://png.pngtree.com/thumb_back/fh260/background/20210823/pngtree-beautiful-clouds-blue-sky-image_768689.jpg";
    switch(weatherCondition){
        case "Thunderstorm": imageUrl = "https://www.livemint.com/lm-img/img/2024/05/07/1600x900/Thunderstorm_1715055102301_1715055102557.JPG";
                            break;
        case "Clear": imageUrl = "https://www.vmcdn.ca/f/files/sudbury/uploadedImages/SUMMER_sunWater.jpg;w=660";
                            break;
        case "Drizzle": imageUrl = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
                            break;
        case "Mist": imageUrl = "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTlhNTQwZGQwLWM1OWEtMTFlZi1iN2U1LTZkYzM5MWFjZTdiZS5qcGc=";
                            break;
        case "Smoke": imageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgaoRu6tKkXt9tj3aqBdeObBH54VH77LQ6Cuq0YP9ejJ_WKOwaF-IxBDy172bFEBJ0Vsyrh8bXEkntz02HfxDoELkFI47-cavgSi6kj6Bo3OVdAjrUjnGYfHmYMQ0o-8ARUSOsbYU_ct8/s1600/Screen+Shot+2020-09-11+at+9.16.03+AM.png";
                            break;
        case "Haze": imageUrl = "https://media.wired.com/photos/65e860922a01e579ac0d29f2/16:9/w_1920,h_1080,c_limit/london-heatwave.jpg";
                            break;
        case "Fog": imageUrl = "https://www.salina.com/gcdn/authoring/2020/01/14/NSAJ/ghows-KS-9c1c6764-dc32-5196-e053-0100007ffdaf-9242f86b.jpeg";
                            break;
        case "Sand": imageUrl = "https://www.shutterstock.com/image-photo/climate-change-africa-dramatic-dusty-600nw-1751879375.jpg";
                            break;
        case "Dust": imageUrl = "https://i0.wp.com/www.ecomena.org/wp-content/uploads/2015/04/Sandstorm_MiddleEast.jpg?ssl=1";
                            break;
        case "Tornado": imageUrl = "https://upload.wikimedia.org/wikipedia/commons/9/98/F5_tornado_Elie_Manitoba_2007.jpg";
                            break;
        case "Snow": imageUrl = "https://static01.nyt.com/images/2019/11/26/us/26holiday-weather01sub/26holiday-weather01sub-superJumbo.jpg";
                            break;
        case "Ash": imageUrl = "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/8a0a9394-df09-4fa2-a125-a32acd639d36/Rendition/low-res/Content/Public";
                            break;
        case "Squall": imageUrl = "https://apac.dtn.com/app/uploads/2023/01/Newcastle-squal-line-2021.jpeg";
                            break;
        case "Rain": imageUrl = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";
                            break;
    }


    return (
        <>
            <Card sx={{ maxWidth: 600, height: 300 }} className='cardBox'>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {imageUrl}
                />
                <CardContent className='cardContent'>
                    <form className='inputForm'>
                        <TextField id="standard-basic" label="City" variant="standard" onChange={handleChange}  /> <br /> <br />
                        <Button size="small" variant="contained" className='submitBtn' onClick={checkCity}>Check</Button>
                    </form>

                </CardContent>
            </Card>
        </>
    );
}