// Grab website and make iframe
let newssite = document.getElementById('newssite').src = document.getElementById("newsinput").value;

//Remove all parameter element attributes that put up paywall
const allParameters = document.querySelectorAll('p');

allParameters.forEach((parameter) => {
    parameter.removeAttribute('class');
    parameter.removeAttribute('style');
});

