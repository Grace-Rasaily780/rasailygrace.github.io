var inputName = prompt("Enter your name");

console.log(inputName);
document.getElementById('nameOut').innerHTML = inputName;

var input = document.getElementById('text');
var output = document.getElementById('out');

var postBtn = document.getElementById('post');
var delBtn = document.getElementById('del');

postBtn.addEventListener("click" , function() {
	var qname = document.createElement("label");
	var nameText = document.createTextNode(inputName + "'s question");
	qname.appendChild(nameText);
	qname.setAttribute('id' , 'qname');

	var area = document.createElement("textarea");
	var content = document.createTextNode(text.value);
	area.setAttribute('disabled' , '');
	area.setAttribute('id' , 'area'); 
	area.appendChild(content);

	var br = document.createElement("br");
	var br2 = document.createElement("br");

	output.appendChild(qname);
	output.appendChild(br);
	output.appendChild(area);
	output.appendChild(br2);
})

delBtn.addEventListener("click" , function(){
	document.getElementById('qname').remove();
	document.getElementById('area').remove();
}) 