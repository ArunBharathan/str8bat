$(document).ready(function(){
    let controller = new ScrollMagic.Controller()
    let AniScene = new ScrollMagic.Scene({
        triggerElement:"#cover-2"
    })
    .setClassToggle("#cover-2","slide-in")
    .addTo(controller)
});

