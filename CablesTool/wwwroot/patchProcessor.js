function setVariable(varName, varContent) {
    return document.getElementById('patchFrame').contentWindow.CABLES.patch.setVariable(varName, varContent);
}

function getVariable(varName) {
    var result = document.getElementById('patchFrame').contentWindow.CABLES.patch.getVar(varName);
    return result == null ? "undefined" : result.getValue();
}

function initWebGL() {
    document.getElementById('patchFrame').contentWindow.CABLES.patch;
} 