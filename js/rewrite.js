/*
    handle url rewriting from a few locations
*/

export {
    CheckForRewrite
}

import { AsyncGetArtifactType, GetArtifactPageType } from "/js/util.js"

const rules = [
    {
        "if":(path,params) => {return (path=="/archive.html" || path=="/archive") && (params.has("id"))},
        "then":async (params) => {
            const type = await AsyncGetArtifactType(params.get("id"));
            const page = GetArtifactPageType(type);
            history.pushState({},'title','/archive');
            window.location.href = page+"?"+params.toString();
        }
    },
    {
        "if":(path,params) => {return (path=="/archive-item.html" || path=="archive-item")},
        "then":(params) => {history.pushState({},'title','/archive.html?'+params.toString());}
    },
    {
        "if":(path,params) => {return (path=="/artifact-book.html" || path=="artifact-book")},
        "then":(params) => {history.pushState({},'title','/archive.html?'+params.toString());}
    },
    {
        "if":(path,params) => {return (path=="/artifact-painting.html" || path=="artifact-painting")},
        "then":(params) => {history.pushState({},'title','/archive.html?'+params.toString());}
    }
]

function CheckForRewrite() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    rules.forEach(r => {
        if(r.if(path,params)) {
            r.then(params);
            return;
        }
    });
}