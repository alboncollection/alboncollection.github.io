export {
    AsyncGetJson,
    AsyncGetText,
    AsyncGetArtifacts,
    AsyncGetArtifact
}

import { PATH_ARTIFACTLIST } from "/js/constant.js";

async function AsyncGetJson(path) {
    let response = await fetch(path);
    return await response.json();
}

async function AsyncGetText(path) {
    try {
        const response = await fetch(path);
        if(!response.ok) {
            throw new Error(`failed to find ${path}`);
        }
        return await response.text();
    } catch(error) {
        throw error;
    }
}

async function AsyncGetArtifacts() {
    return await AsyncGetJson(PATH_ARTIFACTLIST);
}

async function AsyncGetArtifact(id) {
    var artifacts = await AsyncGetArtifacts();
    return artifacts.find(a => a.id == id);
}