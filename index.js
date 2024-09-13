setInterval(function(){
    let losangelestime = document.querySelector("#los-angeles #time");
    losangelestime.innerHTML = moment().tz("America/Los_Angeles").format("HH:mm:ss [<small>]A[</small>]");
    let losangelesdate = document.querySelector("#los-angeles #date");
    losangelesdate.innerHTML = moment().tz("America/Los_Angeles").format("dddd, D MMMM, YYYY ");
}, 1000);



setInterval(function(){
    let tokyotime = document.querySelector("#tokyo #time");
    tokyotime.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss [<small>]A[</small>]");
    let tokyodate = document.querySelector("#tokyo #date");
    tokyodate.innerHTML = moment().tz("Asia/Tokyo").format("dddd, D MMMM, YYYY ");
}, 1000);



setInterval(function(){
    let paristime = document.querySelector("#paris #time");
    paristime.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss [<small>]A[</small>]");
    let parisdate = document.querySelector("#paris #date");
    parisdate.innerHTML = moment().tz("Europe/Paris").format("dddd, D MMMM, YYYY ");
}, 1000);



setInterval(function(){
    let sydneytime = document.querySelector("#sydney #time");
    sydneytime.innerHTML = moment().tz("Australia/Sydney").format("HH:mm:ss [<small>]A[</small>]");
    let sydneydate = document.querySelector("#sydney #date");
    sydneydate.innerHTML = moment().tz("Australia/Sydney").format("dddd, D MMMM, YYYY ");
}, 1000);




