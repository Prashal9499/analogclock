//javascript for clock
setInterval(() => {
    date = new Date ();
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    rotatehr = 30*hr + min/2 //rotation for hour
    rotatemin = 6*min; //rotation for minutes
    rotatesec = 6*sec; //rotation for seconds
    //css clock hands rotation
    hour.style.transform = `rotate(${rotatehr}deg)`;
    minute.style.transform = `rotate(${rotatemin}deg)`;
    second.style.transform = `rotate(${rotatesec}deg)`;
}, 1000);