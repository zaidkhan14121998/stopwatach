var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var stopi = " ";


var totalTime=0

start.addEventListener("click", function()
{
    stopi=setInterval ( function()
    {

        totalTime++;
        sec.innerHTML = totalTime%60;

        min.innerHTML = (parseInt( totalTime/60))%60;

        hr.innerHTML =  (parseInt( totalTime/3600))


    } , 1000  );
  
}
)

stop.addEventListener("click", function()
{
   clearInterval( stopi) 
}
)



reset.addEventListener("click", function()
{
   clearInterval( stopi) 
   totalTime=0
   sec.innerHTML=00
   min.innerHTML=00
   hr.innerHTML=00

}
)
