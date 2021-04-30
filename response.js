timeleft = 30;
counter = 0;
stop = "00:00";
manipulate = document.getElementById("manipulate");
let glows = document.getElementById("glowing");
function secondsConverter(s) {
    minute = Math.floor(s / 60);
    seconds = s % 60;
    if (minute <= 9 && seconds <= 9) return `0${minute}:0${seconds}`;
    else if (minute <= 9) return `0${minute}:${seconds}`;
    else if (seconds <= 9) return `${minute}:0${seconds}`;
    else return minute + ":" + seconds;
}

function count() {
    counter++;
    manipulate.innerHTML = secondsConverter(timeleft - counter);
    if (secondsConverter(timeleft - counter) == stop) {
        clearInterval(interval);
        var date = document.getElementById("date");
        date.textContent = "30th of april 2021";
        date.style.color = "gold";
    }
    if (secondsConverter(timeleft - counter) == "00:10") {
        manipulate.style.color = "red";
        var date = document.getElementById("date");
        date.textContent = "It's almost time baby";
        date.style.color = "gold";
    }
}
interval = setInterval(count, 1000);
function theday() {
    date.style.display = "none";
    manipulate.style.display = "none";
    $("#glowing:nth-child(3n + 1)").hide();
    $("#glowing:nth-child(3n + 2)").hide();
    $("#glowing:nth-child(3n + 3)").hide();
    $("#glowing:nth-child(4)").hide();
    $(".animate").hide()
}
setTimeout(theday, 34000);

function animation() {
    var typed = new Typed(".animate", {
        strings: ["The heaven rejoices", "For an angel is about to be born","The cloud roared as never before","cause a queen is about to be birthed", "Behold earth hath never seen its kind before","for the earth shooked and the wind blew", "A girl of great courage", "A mighty person", "A girl who is to redeem the earth."],
        typespeed: 300,
        backspeed: 100,
        loop: false,
        showCursor: false,
    });
}
animation()
$(".box").hide()
$("#button").hide()
$("#birthday").hide()
function vid(){
    var video = document.getElementById('video')
}
setTimeout(vid,46000)
function show() {
    $(".box").show()
    body = document.getElementById("body")
    body.style.display ="flex";
   
}
setTimeout(show,36000)

function showbd(){
  
    $("#birthday").show()
    
    body = document.getElementById("body");
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.minHeight="100vh";
    $("#video").show()

    $(".box").hide()
}
function showbutton(){
    $("button").show()
    $("#video").hide()
    $("#birthday").hide()
}

setTimeout(showbd,46000)
setTimeout(showbutton, 49000)
$("#boxs").hide()
let p = document.getElementById("typewriters")
let texts = `Hey! Today is the happiest day in my life, you wanna know why? Cause I have been watching you grow, right from the height to the ass to the boobs, you have grown more matured and beautiful. You are a girl whom I love a lot and I wouldn't mind spending the rest of my life with you. Common look at you, you are the most beautiful girl I have ever seen, you are courageous, kind and also hot at the same time, lol! You changed my life, you made me who I am today, you encouraged me to be the best of the best and you instilled the "don't you ever give up" attitude in me.
You are a very unique girl with a great attitude, I admire everything in you and I hope that someday we get to marry. Happy birthday to you Limot.`
speed = 75
number = 0
function typewriter() {
    if(number < texts.length){
    p.innerHTML += texts.charAt(number); number++
    setTimeout(typewriter,speed)
}
}
audi = document.getElementById('audio')
function aud(){
    audi = new Audio('happy.mp3')
    audi.play()
}

let message = document.getElementById("button").addEventListener('click',()=>{
$("#boxs").show()
 $("#birthday").hide()
    $("#button").hide()
    typewriter()
    aud()
})
