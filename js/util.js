export {
    LoadHtmlInto
}

async function LoadHtmlInto(filename, selector) {
    let object = document.querySelector(selector)
    if(!object) {
        console.log(`failed to load '${filename}' as no element matches the selector '${selector}'`);
        return
    }

    fetch(filename)
    .then(response => response.text())
    .then(text => document.querySelector(selector).innerHTML = text)
    .catch((error) => {
        console.log(`failed to load '${filename}' into '${selector}' | ${error}`);
    });
}