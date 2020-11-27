window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = ''  
/*input api alternative for darksky weather API here:
You can use other API's (openweathermap.org). The fundamentals are still the same, 
just the selectors are different. For example, where Ed uses:

const { temperature, summary } = data.currently   

at 22.53

Have to use other variables based on what the API is returning. For example:

const { temp } = data.main;
const  weather = data.weather[0].description;

Then you will have to work your own way to get the icons. Font Awesome SVG icons and an If statement that ads each icon as a class to the icon span can work too.degree-section
https://darkskyapp.github.io/skycons/ for app icons
*/
        });
    } 
});