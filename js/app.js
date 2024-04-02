import { AsyncRoute } from "/js/route.js";
import { AsyncResolveAttributesForNodeList } from "/js/setup.js";
import { ShowLoadingScreen, HideLoadingScreen, EnableScroll, DisableScroll } from "/js/util.js";

DisableScroll();
ShowLoadingScreen();

window.onload = async function(){
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    await AsyncRoute(path, params);
    AsyncResolveAttributesForNodeList(document.childNodes);

    HideLoadingScreen();
    EnableScroll();

    // this has to be the last thing happening to the body otherwise it doesnt load correctly
    AOS.init({
        duration:1000,
        once:true,
    });
}