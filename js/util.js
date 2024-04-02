export {
    EnableScroll,
    DisableScroll,
    ShowLoadingScreen,
    HideLoadingScreen
}

function ShowLoadingScreen() {
    document.querySelector(".loader")?.classList.remove("d-none");
    document.querySelector('main').classList.add("d-none");
}

function HideLoadingScreen() {
    document.querySelector(".loader")?.classList.add("d-none");
    document.querySelector('main').classList.remove("d-none");
}

function EnableScroll() {
    document.body.classList.remove("remove-scrolling");
}

function DisableScroll() {
    let body = document.body;
    if(body)
        document.body.classList.add("remove-scrolling");
}