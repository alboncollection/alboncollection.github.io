export {
    Setup
}

import { ARTIFACT_LIST_PATH } from "/js/constant.js"

async function Setup() {
    PopulateArtifacts();
}

async function PopulateArtifacts() {
    const artifactListItems = await BuildArtifactListItems();
    const container = document.querySelector("#artifact-list table tbody");
    if(!container)
        return;

    for(const artifact of artifactListItems) {
        container.innerHTML+=artifact;
    }
}

async function BuildArtifactListItems() {
    const jsonArtifacts = await GetArtifactJSON();
    const templateArtifactItem = await GetArtifactListItemTemplate();
    let artifactItems = [];
    console.log(jsonArtifacts);   
    for(let i = 0; i < jsonArtifacts.length; i++) {
        let artifact = jsonArtifacts[i];
        console.log(artifact);
        artifactItems.push(BuildArtifactListItem(artifact, templateArtifactItem));
    }  
    return artifactItems;
}

function BuildArtifactListItem(jsonArtifact, template) {
    let copy = template;
    copy = copy.replace("{{page}}", "www.google.com");
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
    return json;
}

async function GetArtifactListItemTemplate() {
    let response = await fetch("/partial/artifact-list-item.partial.html");
    let data = response.text();
    return data;
}