export {
    AsyncSetup
}

import { AsyncGetArtifactJSON } from "/js/util.js";

async function AsyncSetup() {
    AsyncPopulateArtifacts();
}

async function AsyncPopulateArtifacts() {
    const artifactListItems = await AsyncBuildArtifactListItems();
    const container = document.querySelector("#artifact-list table tbody");
    if(!container)
        return;

    for(const artifact of artifactListItems) {
        container.innerHTML+=artifact;
    }
}

async function AsyncBuildArtifactListItems() {
    const jsonArtifacts = await AsyncGetArtifactJSON();
    const templateArtifactItem = await AsyncGetArtifactListItemTemplate();
    let artifactItems = []; 
    for(let i = 0; i < jsonArtifacts.length; i++) {
        let artifact = jsonArtifacts[i];
        artifactItems.push(BuildArtifactListItem(artifact, templateArtifactItem));
    }  
    return artifactItems;
}

function BuildArtifactListItem(jsonArtifact, template) {
    let copy = template;
    copy = copy.replace("{{id}}", jsonArtifact.id);
    copy = copy.replace("{{page}}", "www.google.com");
    copy = copy.replace("{{type}}", jsonArtifact.type);
    copy = copy.replace("{{name}}", jsonArtifact.title);
    copy = copy.replace("{{author}}", jsonArtifact.author);
    copy = copy.replace("{{created}}", jsonArtifact.created);
    copy = copy.replace("{{admitted}}", jsonArtifact.admitted);
    return copy;
}

async function AsyncGetArtifactListItemTemplate() {
    let response = await fetch("/partial/artifact-list-item.partial.html");
    let data = response.text();
    return data;
}