export {
    Setup
}

import { ARTIFACT_LIST_PATH } from "/js/constant.js"

async function Setup() {
    PopulateArtifacts();
}

async function PopulateArtifacts() {
    const jsonArtifacts = GetArtifactJSON();
    const templateArtifactItem = GetArtifactListItemTemplate();
    const artifactListItems = BuildArtifactListItems(jsonArtifacts, templateArtifactItem);
    const container = document.getElementById("artifact-list");
    if(!container)
        return;

    for(const artifact of artifactListItems) {
        container.innerHTML+=artifact;
    }
}

function BuildArtifactListItems(jsonArtifacts, template) {
    let artifactItems = [];
    for(const jsonArtifact in jsonArtifacts) {
        artifactItems.push(BuildArtifactListItem(jsonArtifact, template));
    }
    return artifactItems;
}

function BuildArtifactListItem(jsonArtifact, template) {
    let copy = template;
    //copy = copy.replace("{{page}}", jsonArtifact.page);
    copy = copy.replace("{{type}}", jsonArtifact.type);
    copy = copy.replace("{{name}}", jsonArtifact.title);
    copy = copy.replace("{{author}}", jsonArtifact.author);
    copy = copy.replace("{{created}}", jsonArtifact.created);
    copy = copy.replace("{{admitted}}", jsonArtifact.admitted);
    return copy;
}

async function GetArtifactJSON() {
    let response = await fetch(ARTIFACT_LIST_PATH)
    let json = await response.json();
    return json.list;
}

async function GetArtifactListItemTemplate() {
    let response = await fetch("/partial/artifact-list-item.partial.html");
    let data = response.text();
    return data;
}