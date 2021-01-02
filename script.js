
let display_div = document.getElementById("display");


//handles button clicks
$(".drum-pad").click(function(){
    const tune = this.id;
    const audio = new Audio(`./audio/${tune}.wav`);

    display_div.innerHTML = tune.charAt(0).toUpperCase() + tune.slice(1);
    audio.play();
});

//handles keypress
$(document).keypress(function(e){
    const keyPressed = e.key.toUpperCase();
    if(document.getElementById(keyPressed) !== null)
    {
        const tune = document.getElementById(keyPressed).parentNode.id;
        const audio = new Audio(document.getElementById(keyPressed).src);

        display_div.innerHTML = tune.charAt(0).toUpperCase() + tune.slice(1);
        audio.play();
    }
});