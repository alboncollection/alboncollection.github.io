export {
    PATH_ARTIFACTLIST,
    PATH_TEMPLATE_ARTIFACTITEM,
    ARTIFACT_TYPE_TO_PAGE,
    SELECTOR_ARTIFACTLIST_BODY,
    SELECTOR_HTMLLOAD,
    ATTRIBUTE_HTMLLOAD,
    SELECTOR_HREF,
    ATTRIBUTE_HREF,
    URL_ARCHIVEITEM,
    TEMPLATE_REPLACE_ID,
    TEMPLATE_REPLACE_TYPE,
    TEMPLATE_REPLACE_NAME,
    TEMPLATE_REPLACE_AUTHOR,
    TEMPLATE_REPLACE_CREATED,
    TEMPLATE_REPLACE_ADMITTED,
    PATH_TEMPLATE_ARTIFACTTYPE,
    PATH_TEMPLATE_DEFAULTARTIFACTYPE
}

const PATH_ARTIFACTLIST = "/artifact/artifact.json";
const PATH_TEMPLATE_ARTIFACTITEM = "/partial/artifact-list-item.partial.html";
const URL_ARCHIVEITEM = "/archive-item?id={{id}}";
const ARTIFACT_TYPE_TO_PAGE = {
    "book":"/artifact-book",
    "painting":"/artifact-painting"
}
const SELECTOR_ARTIFACTLIST_BODY = "#artifact-list table tbody";
const SELECTOR_HTMLLOAD = "[js-html-load]";
const ATTRIBUTE_HTMLLOAD = "js-html-load";
const SELECTOR_HREF = "[js-href]";
const ATTRIBUTE_HREF = "js-href";
const TEMPLATE_REPLACE_ID = "{{id}}";
const TEMPLATE_REPLACE_TYPE = "{{type}}";
const TEMPLATE_REPLACE_NAME = "{{name}}";
const TEMPLATE_REPLACE_AUTHOR = "{{author}}";
const TEMPLATE_REPLACE_CREATED = "{{created}}";
const TEMPLATE_REPLACE_ADMITTED = "{{admitted}}";
const PATH_TEMPLATE_ARTIFACTTYPE = "/partial/artifact-{{type}}.partial.html"
const PATH_TEMPLATE_DEFAULTARTIFACTYPE = "/partial/artifact-object.partial.html"