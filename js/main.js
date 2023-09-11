import * as util from "/js/util.js";

window.onload = function(){
    util.LoadHtmlInto("/footer.partial.html", "footer");

    // this has to be the last thing happening to the body otherwise it doesnt load correctly
    AOS.init({
        duration:1000,
        once:true,
    });
}