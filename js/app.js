import * as util from "/js/util.js";
import { Setup as SetupArchive } from "/js/archive.js"

window.onload = function(){
    util.LoadHtmlInto("/partial/footer.partial.html", "footer");

    // this has to be the last thing happening to the body otherwise it doesnt load correctly
    AOS.init({
        duration:1000,
        once:true,
    });
}

window.SetupArchive = function() {
    SetupArchive();
}