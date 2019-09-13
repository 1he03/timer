var seconds = 0;
var minutes = 0;
var hours = 2;

var interval = setInterval(()=>timer(),1000);
var timer = ()=>
{
    console.log(`${hours}h:${minutes}m:${seconds}s`);
    seconds--;
    if(seconds == -1)
    {
        seconds = 59;
        minutes --;
        if(minutes != -1) return;
        minutes = 59;
        hours --;
        if(hours != -1) return;
        clearInterval(interval);
    }
}                                                                                                      