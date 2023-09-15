import { LoadHtmlInto } from "/js/util.js";
import { AsyncSetup as SetupArchive } from "/js/archive.js"
import { CheckForRewrite } from "/js/rewrite.js"
import { AsyncActionGoToArtifact } from "/js/action.js";

window.onload = function(){
    CheckForRewrite();
    LoadHtmlInto("/partial/footer.partial.html", "footer");

    // this has to be the last thing happening to the body otherwise it doesnt load correctly
    AOS.init({
        duration:1000,
        once:true,
    });
}

window.SetupArchive = function() {
    SetupArchive();
}

window.ActionGoToArtifact = function(id) {
    AsyncActionGoToArtifact(id);
}