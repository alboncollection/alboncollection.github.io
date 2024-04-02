export {
    AsyncComposeArtifacts,
    AsyncComposeArchiveItem,
    AsyncComposeHtmlLoad,
    AsyncComposeHref
}

import { SELECTOR_ARTIFACTLIST_BODY, ATTRIBUTE_HTMLLOAD, ATTRIBUTE_HREF } from "/js/constant.js";
import { AsyncBuildArtifactListItems, AsyncBuildArchiveItem } from "/js/build.js";
import { AsyncGetText } from "/js/adapter.js";
import { AsyncResolveAttributesForNode } from "/js/setup.js";

async function AsyncComposeArtifacts() {
    const artifactListItems = await AsyncBuildArtifactListItems();
    const container = document.querySelector(SELECTOR_ARTIFACTLIST_BODY);
    if(!container)
        return;

    for(const artifact of artifactListItems) {
        container.innerHTML+=artifact;
    }

    AsyncResolveAttributesForNode(container);
}

async function AsyncComposeHtmlLoad(element) {
    const path = element.getAttribute(ATTRIBUTE_HTMLLOAD);
    const html = await AsyncGetText(path);
    element.innerHTML += html;
}

async function AsyncComposeHref(element) {
    element.addEventListener("click", () => window.location=element.getAttribute(ATTRIBUTE_HREF));
}

async function AsyncComposeArchiveItem(id) {
    const archiveItem = await AsyncBuildArchiveItem(id);
    const container = document.querySelector("main");
    container.innerHTML+=archiveItem;

    AsyncResolveAttributesForNode(container);
}