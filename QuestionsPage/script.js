var timeInMinutes = 5; var t=1;
var now = new Date().getTime();
var countDownDate = new Date(now + timeInMinutes*60*1000).getTime();

var x = setInterval(function() {
     
     var update = new Date().getTime();
    
    if(t==1)
    var distance = countDownDate - now;
    
    else
    var distance = countDownDate - update;
    
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("clock").innerHTML = minutes + "m " + seconds + "s ";
    
    if (distance<(180*1000))
        {
            document.getElementById("hint1").style.opacity="1";
        }
        
    
    if(distance<(60*1000)&&distance>(30*1000)) {
        document.getElementById("clock").style.backgroundColor="white";
        document.getElementById("clock").style.color="red";
    }
    
    else if (distance<(30*1000)) {
        document.getElementById("clock").style.backgroundColor="red";
        document.getElementById("clock").style.color="white";
        document.getElementById("clock").style.marginLeft="40%";
        document.getElementById("clock").style.marginRight="30%";
    }
    
    
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
    t++;
}, 1000);



