var input = document.getElementById('text');
var output = document.getElementById('out');

var postBtn = document.getElementById('post');
var delBtn = document.getElementById('del');

postBtn.addEventListener("click" , function() {
	var inputName = prompt("Enter your name");
	var userName = localStorage.setItem('User' , inputName);

	var extra = "'s question"
	var question = localStorage.setItem('questions' , text.value)
	

	var label = document.createElement('label');
	var p = document.createElement('p');

	label.setAttribute('id' , 'comName');
	p.setAttribute('id' , 'comment');
	var finName = document.createTextNode(localStorage.getItem('User'));
	var finCon = document.createTextNode(localStorage.getItem('questions'));

	label.appendChild(finName);
	p.appendChild(finCon);

	output.appendChild(label);
	output.appendChild(p);
})

delBtn.addEventListener("click" , function(){
	document.getElementById('comName').remove();
	document.getElementById('comment').remove();
})

var delAll = document.getElementById('godDel');

delAll.addEventListener("click" , function() {
	localStorage.clear();
})

function load(){
var label = document.createElement('label');
	var p = document.createElement('p');

	label.setAttribute('id' , 'comName');
	p.setAttribute('id' , 'comment');
	var finName = document.createTextNode(localStorage.getItem('User'));
	var finCon = document.createTextNode(localStorage.getItem('questions'));

	label.appendChild(finName);
	p.appendChild(finCon);

	output.appendChild(label);
	output.appendChild(p);
}