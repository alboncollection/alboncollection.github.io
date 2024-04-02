function ActionGoToArtifact(id) {
    window.location.replace("/archive?id="+id);
}

window.ActionGoToArtifact = function(id) {
    ActionGoToArtifact(id);
}