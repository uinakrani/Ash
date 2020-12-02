window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    setTimeout(function () {
        $(load_screen).css({'transform':'scale(1.1)', 'transition': '1s', 'opacity': '0'});
        setTimeout(function () {
            document.body.removeChild(load_screen);
        }, 500)
    }, 1500)
});