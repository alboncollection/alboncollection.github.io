export {
    AsyncResolveAttributesForNode,
    AsyncResolveAttributesForNodeList
}

import { SELECTOR_HTMLLOAD, SELECTOR_HREF } from "/js/constant.js";
import { AsyncComposeHtmlLoad, AsyncComposeHref } from "/js/compose.js";

async function AsyncResolveAttributesForNode(node) {
    // Check if node is a DOM element
    if (!(node instanceof Element)) {
        return;
    }

    const nodesHtmlLoad = node.querySelectorAll(SELECTOR_HTMLLOAD);
    const arrayHtmlLoad = Array.from(nodesHtmlLoad);
    await Promise.all(arrayHtmlLoad.map(async (element) => {
        await AsyncComposeHtmlLoad(element);
        await AsyncResolveAttributesForNodeList(element.childNodes);
    }));

    node.querySelectorAll(SELECTOR_HREF).forEach(element => AsyncComposeHref(element));
}

async function AsyncResolveAttributesForNodeList(nodelist) {
    for(const node of nodelist) {
        AsyncResolveAttributesForNode(node)
    }
}