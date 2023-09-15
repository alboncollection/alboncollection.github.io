export {
    LoadHtmlInto,
}

function LoadHtmlInto(filename, selector) {
    fetch(filename)
    .then(response => response.text())
    .then(text => document.querySelector(selector).innerHTML = text)
    .catch((error) => {
        console.log(`failed to load '${filename}' into '${selector}' | ${error}`);
    });
}