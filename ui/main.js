console.log('Loaded!');

//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value';

/*var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};*/

var button = document.getElementById('counter');
button.onclick = function() {
    //Make a request to the counter endpoint
    
    //Capture the response and store it in variable
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = count.toString();
};