export {
    Setup,
    GetArtifactsList
}

import { ARTIFACTS_LIST_PATH } from "/js/constant.js"

function Setup() {

}

async function GetArtifactsList() {
    let response = await fetch(ARTIFACTS_LIST_PATH)
    const json = response.json();
    return json
}