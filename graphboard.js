var TabId = new Array(82);
var objnid = new Array(82);
var VerifTrue = false, err = false;
for(var d = 1; d < objnid.length; d++)
   objnid[d] = false;
var array_temp = new Array(9);
for(var ind = 1; ind <= 81; ++ind)
  TabId[ind] = 0;
console.table(TabId);
var numsquare;
function IdIns(){
var
 i,j,w,p,nu = 1;
 for(p = 1; p <= 81; ++p)
  if (TabId[p] === 0) break;
 w = p;
 for( j = p; j <= (2 + p); ++j)
 {
 for(i = w; i <= (2 + w); ++i){
 TabId[i] = i; array_temp[nu] = i; nu = nu + 1; }
  w = (2 + w) + 7
}
}


function funkcja1(nid) {
	 document.getElementById(nid).style.background="#0000ff";
} 
	

var obj2 = {
  osy: 0,
  osx: 0
}

function funkcja2(nid) {
	 for(var di = 1; di < objnid.length; di++)
      if (objnid[di] === false) document.getElementById(di).style.backgroundColor = "transparent"
      else 
		if(VerifTrue === true)
         if (err === true)
		  if (document.getElementById(di).textContent !== '') 
		   document.getElementById(di).style.backgroundColor = "red";
			 
}



function YX(liczba, obj) {
  if (liczba % 9 === 0) {
    obj.osy = Math.round(liczba / 9 - 0.5);
    obj.osx = 9
  } else {
    obj.osy = Math.round(liczba / 9 - 0.5) + 1;
    obj.osx = (liczba % 9)
  }
}

var EmptyField;

function Win(){
	EmptyField = 0;
	for (var iter = 1; iter <= 9; iter++){
     for (var jter = 1; jter <= 9; jter++)
      if (taborg[iter][jter] === null) break
	  else EmptyField = EmptyField + 1;
	 if (taborg[iter][jter] === null) break;
    }
	
	console.table(taborg);
	console.log(iter+' '+jter);
	if(iter === 10 && jter === 10) return true
	else return false;
}

var element = document.getElementById("timecounter");

function Watch(){
 TimeStart = Date.now();
 TimeObject.restmillisecond = 0;
 TimeObject.millisecond = 0;
 TimeObject.second = 0;
 TimeObject.minute = 0;
 TimeObject.hour = 0;
 
 TimeDisplay.timedisplay1 = 0;
 TimeDisplay.timedisplay2 = 0;
 TimeDisplay.timedisplay3 = 0;
 TimeDisplay.timedisplay4 = 0;
 TimeDisplay.timedisplay5 = 0;
 TimeDisplay.timedisplay6 = 0;
 TimeDisplay.timedisplay7 = 0;
 TimeDisplay.timedisplay8 = 0;
 TimeDisplay.timedisplay9 = 0;
 
 idInterwalu = setInterval(function(){stopwatch(TimeObject,TimeDisplay)},1);
}

function funkcja3(nid,Verif){
	for(var di = 1; di < objnid.length; di++)
      if(objnid[di] === true)
	   if(err === false){
		 objnid[di] = false; document.getElementById(di).style.backgroundColor = "transparent";
	   }
        else
		  if (Verif === true)	
		   if (document.getElementById(di).textContent === ''){
			  objnid[di] = false; document.getElementById(di).style.backgroundColor = "transparent";
			}
      
	document.getElementById(nid).style.background="#0000ff";
    objnid[nid] = true;
	
	window.onkeydown = function(){
	 if (EmptyField < 81 || obj4.zmiennastop === false) {
	   var code = event.keyCode;
       if ((code > 48) && (code < 58)){
        var theChar = String.fromCharCode(code);
        document.getElementById(nid).innerHTML = theChar;
		YX(nid, obj2);
		taborg[obj2.osy][obj2.osx] = parseInt(theChar);
		} else 
			if(code === 8 || code === 46) {
			 document.getElementById(nid).innerHTML = '';
			 YX(nid, obj2);
			 taborg[obj2.osy][obj2.osx] = null;
			} else
                if(code === 13 && document.getElementById("cell").value !== ''){ // Alternative on the phone
                  document.getElementById(nid).innerHTML = document.getElementById("cell").value;
				  YX(nid, obj2);
				  taborg[obj2.osy][obj2.osx] = parseInt(document.getElementById("cell").value);
				}
				else if(code !== 13) alert('Enter only digit form one to nine !!! ;)');
	   if(Verif === true) Verification(nid);
	 } else if (Verif === true) alert('Congratulations, you did it !!! \nYour time: '+the_display_string)
			else alert('Sudoku Solved !!!');
	}
}
 
 function funkcja4(){
	 for(var valuefield = 1; valuefield <= 81; ++valuefield){
	  if(document.getElementById(valuefield).textContent !== ''){
	   document.getElementById(valuefield).textContent = '';
	   YX(valuefield, obj2);
	   taborg[obj2.osy][obj2.osx] = null;
	   document.getElementById(valuefield).style.pointerEvents = "auto";
	   document.getElementById(valuefield).style.color = "rgb(0, 0, 0)";
	  }
	 if(objnid[valuefield] === true) objnid[valuefield] = false;
	}
	 obj3.wiersz = 1;
	 obj3.kolumna = 1;
	 obj3.kratkanumer = 1;
	 obj3.plikom = 0;
	 obj3.nr = 1;
	 obj4.zmiennastop = false;
	 VerifTrue = false;
	 err === false;
}

function smallsquare(num){
var numsquare = 1, mleft = 0, mtop = 0;
for(var j = 1; j <= 9; ++j){
elemsquare = document.createElement("div");
elemsquare.classList.add('field');
elemsquare.setAttribute('id',array_temp[j]);
elemsquare.onmouseover = function(){ funkcja1(this.id); }
elemsquare.onmouseout = function(){ funkcja2(this.id); }
elemsquare.onclick = function(){ funkcja3(this.id,VerifTrue); }
elemsquare.style.position = 'absolute';
elemsquare.style.left = edgespace + mleft+'%';
elemsquare.style.top = mtop+'%';
elemsquare.style.width = 33.33+'%';
elemsquare.style.height = 33.33+'%';
numsquare = numsquare + 1;
div = document.querySelector('.box'+num);
elemsquare.style.border = '1px solid #000000';
div.appendChild(elemsquare);
mleft = mleft + 33.33;
if(j % 3 === 0){
mtop = mtop + 33.33; mleft = 0; }
}
}

var numbersquare = 1, elemsquare, marleft = 0, martop = 0;
for(var i = 1; i <= 9; ++i){
var edgespace = 0, 

elemsquare = document.createElement("div");
elemsquare.classList.add('box'+numbersquare);
if(i % 2 === 0)
elemsquare.style.background = 'grey'
else elemsquare.style.background = 'white';
elemsquare.style.position = 'absolute';
elemsquare.style.left = edgespace + marleft+'%';
elemsquare.style.top = martop+'%';
elemsquare.style.width = 33.33+'%';
elemsquare.style.height = 33.33+'%';
numbersquare = numbersquare + 1;
const div = document.querySelector(".board-of-game");
div.appendChild(elemsquare);
IdIns();
smallsquare(i);
marleft = marleft + 33.33;
if(i % 3 === 0){
martop = martop + 33.33; marleft = 0; }
}
const radioButtons = document.querySelectorAll('input[name="level"]');
var LevelNumber;
for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', showSelected);
}
function showSelected(e) {
  if (this.checked) {
   LevelNumber = this.value;
  }
}

function finish(){
	obj3.wiersz = 1;
	obj3.kolumna = 1;
	obj3.kratkanumer = 1;
	obj3.plikom = 0;
	obj3.nr = 1;
	obj4.zmiennastop = false;
	EmptyField = 0;
	if (checkdatainput(taborg) === true)
	  if (SudokuSolution(taborg, 0, 1, 1, 1, obj4, difftime, 1, 1, 1) === true)
	   for(var r = 1; r <= 9; ++r)
         for(var c = 1; c <= 9; ++c){
		   document.getElementById((r - 1)* 9 + c).innerHTML = taborg[r][c];
		   element.innerHTML = 'Sudoku Solved !!!';
		   if (VerifTrue === true){ VerifTrue = false; clearInterval(idInterwalu); }
		   EmptyField = EmptyField + 1;
		 }
	  else alert('No Solution !!!')
	else alert('No Solution !!!');
	console.table(taborg);
}

function RandomNumberInTheRange(min,max){
  return Math.floor(Math.random()*(max+1-min)+min);
}

function Verification(FiledId){
  obj3.wiersz = 1;
  obj3.kolumna = 1;
  obj3.kratkanumer = 1;
  obj3.plikom = 0;
  obj3.nr = 1;
  obj4.zmiennastop = false;
  if (checkdatainput(taborg) === true){
	if (SudokuSolution(taborg, 0, 1, 1, 1, obj4, difftime, 0, 2, 1) === true){
	  for(var z = 1; z < objnid.length; z++)
		if (objnid[z] === true){ 
	     document.getElementById(z).style.backgroundColor = "green"; 
		}
	  err = false
	  objnid[FiledId] = true; 
	  if(Win() === true){ element.innerHTML = 'Congratulations, you did it !!! '+'<br />'+'Your time: '+the_display_string;  clearInterval(idInterwalu); }
	} else { 
		err = true; 
		objnid[FiledId] = true; document.getElementById(FiledId).style.backgroundColor = "red";
	 }
  } else 
     { 
      err = true; objnid[FiledId] = true; 
	  document.getElementById(FiledId).style.backgroundColor = "red";
	}
  TimeStart = Date.now();
}

function CreateNewSudoku(){

var LevelOfDifficulty = 0;

if (VerifTrue === true) clearInterval(idInterwalu);

switch (LevelNumber) {
    case '1':
	  document.getElementById('DescLevel').innerHTML = 'Easy Level';
	  LevelOfDifficulty = RandomNumberInTheRange(29,34);
	  Watch();
	  break;
    case '2':
	  document.getElementById('DescLevel').innerHTML = 'Medium Level';
	  LevelOfDifficulty = RandomNumberInTheRange(25,29);
	  Watch();
	  break;
    case '3':
	  document.getElementById('DescLevel').innerHTML = 'Hard Level';
	  LevelOfDifficulty = RandomNumberInTheRange(22,25);
	  Watch();
	  break;
    default:
	   document.getElementById('DescLevel').innerHTML = 'Choose level !!!';
}
  if (LevelOfDifficulty !== 0){
  console.log('number: '+LevelOfDifficulty);
  funkcja4();
  CreatNewBoard(taborg,81,obj4,81 - LevelOfDifficulty);
  console.table(taborg);
  for(var r = 1; r <= 9; ++r)
     for(var c = 1; c <= 9; ++c){
       document.getElementById((r - 1)* 9 + c).innerHTML = taborg[r][c];
	   if(taborg[r][c] !== null){
		 document.getElementById((r - 1)* 9 + c).style.pointerEvents = "none";
		 document.getElementById((r - 1)* 9 + c).style.color = "rgb(98 25 25)";
		}
	 }
  }
EmptyField = 0;
VerifTrue = true;
}
