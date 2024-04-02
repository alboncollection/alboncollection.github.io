export {
    AsyncBuildArtifactListItems,
    AsyncBuildArchiveItem
}

import { AsyncGetArtifacts, AsyncGetArtifact, AsyncGetText } from "/js/adapter.js";
import {
    PATH_TEMPLATE_ARTIFACTITEM,
    TEMPLATE_REPLACE_ID,
    TEMPLATE_REPLACE_TYPE,
    TEMPLATE_REPLACE_NAME, 
    TEMPLATE_REPLACE_AUTHOR,
    TEMPLATE_REPLACE_CREATED,
    TEMPLATE_REPLACE_ADMITTED,
    PATH_TEMPLATE_ARTIFACTTYPE,
    PATH_TEMPLATE_DEFAULTARTIFACTYPE } from "/js/constant.js";

async function AsyncBuildArtifactListItems() {
    const jsonArtifacts = await AsyncGetArtifacts();
    const templateArtifactItem = await AsyncGetText(PATH_TEMPLATE_ARTIFACTITEM);
    let artifactItems = []; 
    for(let i = 0; i < jsonArtifacts.length; i++) {
        let artifact = jsonArtifacts[i];
        artifactItems.push(BuildArtifactListItem(artifact, templateArtifactItem));
    }  
    return artifactItems;
}

function BuildArtifactListItem(jsonArtifact, template) {
    let copy = template;
    copy = copy.replace(TEMPLATE_REPLACE_ID, jsonArtifact.id);
    copy = copy.replace(TEMPLATE_REPLACE_TYPE, jsonArtifact.type.charAt(0).toUpperCase() + jsonArtifact.type.slice(1));
    copy = copy.replace(TEMPLATE_REPLACE_NAME, jsonArtifact.title);
    copy = copy.replace(TEMPLATE_REPLACE_AUTHOR, jsonArtifact.author);
    copy = copy.replace(TEMPLATE_REPLACE_CREATED, jsonArtifact.created);
    copy = copy.replace(TEMPLATE_REPLACE_ADMITTED, jsonArtifact.admitted);
    return copy;
}

async function AsyncBuildArchiveItem(id) {
    const jsonArtifact = await AsyncGetArtifact(id);

    var main = document.querySelector("main");
    main.innerHTML = main.innerHTML.replace("{{title}}",jsonArtifact.title);

    var templatePath = PATH_TEMPLATE_ARTIFACTTYPE;
    templatePath = templatePath.replace(TEMPLATE_REPLACE_TYPE, jsonArtifact.type);
    var templateArchiveItem;
    try {
        templateArchiveItem = await AsyncGetText(templatePath);
    } catch (e) {
        templateArchiveItem = await AsyncGetText(PATH_TEMPLATE_DEFAULTARTIFACTYPE);
    }

    // do some more replaces
    return templateArchiveItem;
}