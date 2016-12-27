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
    //Create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            //Take some Action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not Done Yet
    };
    
    //Make a request
    request.open('GET', 'http://akash1997.imad.hasura-app.io/counter', true);
    request.send(null);
};