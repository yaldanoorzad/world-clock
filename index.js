setInterval(function(){
    let losangelestime = document.querySelector("#los-angeles #time");
    losangelestime.innerHTML = moment().tz("America/Los_Angeles").format("HH:mm:ss [<small>]A[</small>]");
    let losangelesdate = document.querySelector("#los-angeles #date");
    losangelesdate.innerHTML = moment().tz("America/Los_Angeles").format("dddd, D MMMM, YYYY ");



    let tokyotime = document.querySelector("#tokyo #time");
    tokyotime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss [<small>]A[</small>]");
    let tokyodate = document.querySelector("#tokyo #date");
    tokyodate.innerHTML = moment().tz("Asia/Tokyo").format("dddd, D MMMM, YYYY ");



    let paristime = document.querySelector("#paris #time");
    paristime.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss [<small>]A[</small>]");
    let parisdate = document.querySelector("#paris #date");
    parisdate.innerHTML = moment().tz("Europe/Paris").format("dddd, D MMMM, YYYY ");



    let sydneytime = document.querySelector("#sydney #time");
    sydneytime.innerHTML = moment().tz("Australia/Sydney").format("HH:mm:ss [<small>]A[</small>]");
    let sydneydate = document.querySelector("#sydney #date");
    sydneydate.innerHTML = moment().tz("Australia/Sydney").format("dddd, D MMMM, YYYY ");
}, 1000);


function updatecity(event){
    let cityTimezone = event.target.value;
    if (cityTimezone === "current"){
        cityTimezone = moment.tz.guess();
    }
    let cityname = cityTimezone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let cityElement = document.querySelector("#home-cities");
    cityElement.innerHTML = `
        <div class="city">
                <div>
                    <h2>${cityname}</h2>
                    <div id="date">${cityTime.format("dddd, D MMMM, YYYY")}</div>
                </div>
                <div id="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>`
}

let selectcity = document.querySelector("#select-cities");
selectcity.addEventListener("change", updatecity);

