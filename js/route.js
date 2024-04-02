export {
    AsyncRoute
}

import { AsyncComposeArtifacts, AsyncComposeArchiveItem } from "/js/compose.js";
import { URL_ARCHIVEITEM, TEMPLATE_REPLACE_ID } from "/js/constant.js";

async function AsyncRoute(path, params) {
    let route = FindMatchingRoute(path, params);
    if(route != undefined) {
        await route.handler(params);
        return;
    }

    console.log("no matching route");
}

function FindMatchingRoute(path, params) {
    return routes.filter(route => 
        route.path === path && 
        (!route.params || route.params.length === params.size) &&
        (!route.params || params.size === 0 || route.params.every(param => params.has(param)))
    ).sort((a, b) => (b.params ? b.params.length : 0) - (a.params ? a.params.length : 0))[0];
}

let routes = [];

routes.push({path:"/",handler:AsyncHome});
async function AsyncHome() {
    console.log("setting up home");
}

routes.push({path:"/archive",handler:AsyncArchive});
async function AsyncArchive(params) {
    console.log("setting up archive");
    AsyncComposeArtifacts();
}

routes.push({path:"/archive",params:["id"],handler:AsyncArchiveWithId});
async function AsyncArchiveWithId(params) {
    console.log("re-navigating to archive-item");
    var url = URL_ARCHIVEITEM;
    url = url.replace(TEMPLATE_REPLACE_ID, params.get("id"));
    window.location=url;
}

routes.push({path:"/archive-item",params:["id"],handler:AsyncArchiveItem});
async function AsyncArchiveItem(params) {
    console.log("setting up archive-item");
    var newUrl = window.location.href.replace("/archive-item", "/archive");
    history.replaceState(null, '', newUrl);
    AsyncComposeArchiveItem(params.get("id"));
}