function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

//SMOOTH SCROLL FOR IE/ EDGE /SAFARI

$("a").on('click', function(event){
    if(this.hash !==""){
        event.prevenDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop : $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});