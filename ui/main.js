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
        if(request.readyState === XMLHttpRequest.DONE) {
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

//Submit Name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    
    //Capture a list of names and render it as a list
    var name = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0; i<names.length;i++) {
        list+="<li>"+name[i]+"</li>";
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;
};