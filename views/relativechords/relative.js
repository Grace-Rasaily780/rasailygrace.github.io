
var C = document.getElementById('C');
var Cs = document.getElementById('C#');
var D = document.getElementById('D');
var Ds = document.getElementById('D#');
var E = document.getElementById('E');
var F = document.getElementById('F');
var Fs = document.getElementById('F#');
var G = document.getElementById('G');
var Gs = document.getElementById('G#');
var A = document.getElementById('A');
var As = document.getElementById('A#');
var B = document.getElementById('B');

C.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Dm, Em, F, G, Am, B dim");
})

Cs.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("D#m, Fm, F#, G#, A#m, C dim");
});

D.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Em, F#m, G, A, Bm, C# dim");
});

Ds.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Fm, Gm, G#, A#, Cm, D dim");
});

E.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("F#m, G#m, A, B, C#m, D# dim,");
});

F.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Gm, Am, A#, C, Dm, E dim");
});

Fs.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("G#m, A#m, B, C#, D#m, F dim,");
});

G.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Am, Bm, C, D, Em, F# dim,");
});

Gs.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("A#m, Cm, C#, D#, Fm, G dim,");
});

A.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Bm, C#m, D, E, F#m, G# dim,");
});

As.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("Cm, Dm, D#, F, Gm, A dim,");
});

B.addEventListener("click" ,function(){
	document.getElementById('out').innerHTML = ("C#m, D#m, E, F#, G#m, A# dim,");
});

var vc = document.getElementById('elm');
var del = document.getElementById('elm2');

vc.addEventListener("click" , function(){

	var ele = document.createElement("img");
	ele.setAttribute('src' , 'chords/A.png');
	ele.setAttribute('id' , 'delpng');

	var ele2 = document.createElement("img");
	ele2.setAttribute('src' , 'chords/A7.png');
	ele2.setAttribute('id' , 'delpng2');

	var ele3 = document.createElement("img");
	ele3.setAttribute('src' , 'chords/Ab.png');
	ele3.setAttribute('id' , 'delpng3');

	var ele4 = document.createElement("img");
	ele4.setAttribute('src' , 'chords/Am.png');
	ele4.setAttribute('id' , 'delpng4');

	var ele5 = document.createElement("img");
	ele5.setAttribute('src' , 'chords/B.png');
	ele5.setAttribute('id' , 'delpng5');

	var ele6 = document.createElement("img");
	ele6.setAttribute('src' , 'chords/B7.png');
	ele6.setAttribute('id' , 'delpng6');

	var ele7 = document.createElement("img");
	ele7.setAttribute('src' , 'chords/Bb.png');
	ele7.setAttribute('id' , 'delpng7');

	var ele8 = document.createElement("img");
	ele8.setAttribute('src' , 'chords/Bb7.png');
	ele8.setAttribute('id' , 'delpng8');

	var ele9 = document.createElement("img");
	ele9.setAttribute('src' , 'chords/Bbm.png');
	ele9.setAttribute('id' , 'delpng9');

	var ele10 = document.createElement("img");
	ele10.setAttribute('src' , 'chords/Bm.png');
	ele10.setAttribute('id' , 'delpng10');

	var ele11 = document.createElement("img");
	ele11.setAttribute('src' , 'chords/Csm.png');
	ele11.setAttribute('id' , 'delpng11');
	
	var ele12 = document.createElement("img");
	ele12.setAttribute('src' , 'chords/C.png');
	ele12.setAttribute('id' , 'delpng12');

	var ele13 = document.createElement("img");
	ele13.setAttribute('src' , 'chords/C7.png');
	ele13.setAttribute('id' , 'delpng13');

	var ele14 = document.createElement("img");
	ele14.setAttribute('src' , 'chords/Cm.png');
	ele14.setAttribute('id' , 'delpng14');

	var ele15 = document.createElement("img");
	ele15.setAttribute('src' , 'chords/D.png');
	ele15.setAttribute('id' , 'delpng15');

	var ele16 = document.createElement("img");
	ele16.setAttribute('src' , 'chords/D7.png');
	ele16.setAttribute('id' , 'delpng16');

	var ele17 = document.createElement("img");
	ele17.setAttribute('src' , 'chords/Db.png');
	ele17.setAttribute('id' , 'delpng17');

	var ele18 = document.createElement("img");
	ele18.setAttribute('src' , 'chords/Dm.png');
	ele18.setAttribute('id' , 'delpng18');

	var ele19 = document.createElement("img");
	ele19.setAttribute('src' , 'chords/E flat.png');
	ele19.setAttribute('id' , 'delpng19');

	var ele20 = document.createElement("img");
	ele20.setAttribute('src' , 'chords/E.png');
	ele20.setAttribute('id' , 'delpng20');

	var ele21 = document.createElement("img");
	ele21.setAttribute('src' , 'chords/E7.png');
	ele21.setAttribute('id' , 'delpng21');

	var ele22 = document.createElement("img");
	ele22.setAttribute('src' , 'chords/Eb7.png');
	ele22.setAttribute('id' , 'delpng22');

	var ele23 = document.createElement("img");
	ele23.setAttribute('src' , 'chords/Em.png');
	ele23.setAttribute('id' , 'delpng23');

	var ele24 = document.createElement("img");
	ele24.setAttribute('src' , 'chords/Fs.png');
	ele24.setAttribute('id' , 'delpng24');

	var ele25 = document.createElement("img");
	ele25.setAttribute('src' , 'chords/Fs7.png');
	ele25.setAttribute('id' , 'delpng25');

	var ele26 = document.createElement("img");
	ele26.setAttribute('src' , 'chords/Fsm.png');
	ele26.setAttribute('id' , 'delpng26');

	var ele27 = document.createElement("img");
	ele27.setAttribute('src' , 'chords/F.png');
	ele27.setAttribute('id' , 'delpng27');

	var ele28 = document.createElement("img");
	ele28.setAttribute('src' , 'chords/F7.png');
	ele28.setAttribute('id' , 'delpng28');

	var ele29 = document.createElement("img");
	ele29.setAttribute('src' , 'chords/Fm.png');
	ele29.setAttribute('id' , 'delpng29');

	var ele30 = document.createElement("img");
	ele30.setAttribute('src' , 'chords/Gsm.png');
	ele30.setAttribute('id' , 'delpng30');

	var ele31 = document.createElement("img");
	ele31.setAttribute('src' , 'chords/G.png');
	ele31.setAttribute('id' , 'delpng31');

	var ele32 = document.createElement("img");
	ele32.setAttribute('src' , 'chords/G7.png');
	ele32.setAttribute('id' , 'delpng32');

	var ele33 = document.createElement("img");
	ele33.setAttribute('src' , 'chords/Gm.png');
	ele33.setAttribute('id' , 'delpng33');

	

	document.getElementById('out2').appendChild(ele);
	document.getElementById('out2').appendChild(ele2);
	document.getElementById('out2').appendChild(ele3);
	document.getElementById('out2').appendChild(ele4);
	document.getElementById('out2').appendChild(ele5);
	document.getElementById('out2').appendChild(ele6);
	document.getElementById('out2').appendChild(ele7);
	document.getElementById('out2').appendChild(ele8);
	document.getElementById('out2').appendChild(ele9);
	document.getElementById('out2').appendChild(ele10);
	document.getElementById('out2').appendChild(ele11);
	document.getElementById('out2').appendChild(ele12);
	document.getElementById('out2').appendChild(ele13);
	document.getElementById('out2').appendChild(ele14);
	document.getElementById('out2').appendChild(ele15);
	document.getElementById('out2').appendChild(ele16);
	document.getElementById('out2').appendChild(ele17);
	document.getElementById('out2').appendChild(ele18);
	document.getElementById('out2').appendChild(ele19);
	document.getElementById('out2').appendChild(ele20);
	document.getElementById('out2').appendChild(ele21);
	document.getElementById('out2').appendChild(ele22);
	document.getElementById('out2').appendChild(ele23);
	document.getElementById('out2').appendChild(ele24);
	document.getElementById('out2').appendChild(ele25);
	document.getElementById('out2').appendChild(ele26);
	document.getElementById('out2').appendChild(ele27);
	document.getElementById('out2').appendChild(ele28);
	document.getElementById('out2').appendChild(ele29);
	document.getElementById('out2').appendChild(ele30);
	document.getElementById('out2').appendChild(ele31);
	document.getElementById('out2').appendChild(ele32);
	document.getElementById('out2').appendChild(ele33);
});

del.addEventListener("click" , function(){
	document.getElementById('delpng').remove();
	document.getElementById('delpng2').remove();
	document.getElementById('delpng3').remove();
	document.getElementById('delpng4').remove();
	document.getElementById('delpng5').remove();
	document.getElementById('delpng6').remove();
	document.getElementById('delpng7').remove();
	document.getElementById('delpng8').remove();
	document.getElementById('delpng9').remove();
	document.getElementById('delpng10').remove();
	document.getElementById('delpng11').remove();
	document.getElementById('delpng12').remove();
	document.getElementById('delpng13').remove();
	document.getElementById('delpng14').remove();
	document.getElementById('delpng15').remove();
	document.getElementById('delpng16').remove();
	document.getElementById('delpng17').remove();
	document.getElementById('delpng18').remove();
	document.getElementById('delpng19').remove();
	document.getElementById('delpng20').remove();
	document.getElementById('delpng21').remove();
	document.getElementById('delpng22').remove();
	document.getElementById('delpng23').remove();
	document.getElementById('delpng24').remove();
	document.getElementById('delpng25').remove();
	document.getElementById('delpng26').remove();
	document.getElementById('delpng27').remove();
	document.getElementById('delpng28').remove();
	document.getElementById('delpng29').remove();
	document.getElementById('delpng30').remove();
	document.getElementById('delpng31').remove();
	document.getElementById('delpng32').remove();
	document.getElementById('delpng33').remove();
})

