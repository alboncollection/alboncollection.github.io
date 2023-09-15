export {
    LoadHtmlInto,
    AsyncGetArtifactJSON,
    AsyncGetArtifactType,
    GetArtifactPageType
}

import { ARTIFACT_LIST_PATH, ARTIFACT_TYPE_TO_PAGE } from "/js/constant.js"

function LoadHtmlInto(filename, selector) {
    fetch(filename)
    .then(response => response.text())
    .then(text => document.querySelector(selector).innerHTML = text)
    .catch((error) => {
        console.log(`failed to load '${filename}' into '${selector}' | ${error}`);
    });
}

async function AsyncGetArtifactType(id) {
    const data = await AsyncGetArtifactJSON();
    return data.filter(
      (data) => {return data.id == id}  
    )[0].type;
}

function GetArtifactPageType(type) {
    return ARTIFACT_TYPE_TO_PAGE[type.toLowerCase()];
}

async function AsyncGetArtifactJSON() {
    let response = await fetch(ARTIFACT_LIST_PATH)
    let json = await response.json();
    return json;
}