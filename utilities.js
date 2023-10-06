function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueStr = element.innerText;
    const elementValue = parseFloat(elementValueStr);
    element.innerText = '';
    return elementValue;
}

function setElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
