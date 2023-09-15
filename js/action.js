export {
    AsyncActionGoToArtifact
}

async function AsyncActionGoToArtifact(id) {
    window.location.replace("/archive.html?id="+id);
}