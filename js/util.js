export {
    LoadHtmlInto
}

function LoadHtmlInto(filename, id) {
    fetch(filename)
    .then(response => response.text())
    .then(text => document.getElementById(id).innerHTML = text)
    .catch((error) => {
        console.log("load html failed:",error);
    });
}