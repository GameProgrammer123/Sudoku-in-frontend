var TabId = new Array(82);
var objnid = new Array(82);
var VerifTrue = false, err = false;
for(var d = 1; d < objnid.length; d++)
   objnid[d] = false;
var array_temp = new Array(9);
for(var ind = 1; ind <= 81; ++ind)
  TabId[ind] = 0;
var numsquare, GetIdDiv = null;

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
	if (document.getElementById(nid).textContent === '' || VerifTrue === false)
	  document.getElementById(nid).style.backgroundColor = "#0000ff";
} 
	
function funkcja2(nid){
	 for(var di = 1; di < objnid.length; di++)
      if (objnid[di] === false) document.getElementById(di).style.backgroundColor = "transparent"; 
	  else 
		if(VerifTrue === true)
         if (err === true){
		  if (document.getElementById(di).textContent !== '') 
		   document.getElementById(di).style.backgroundColor = "red";
	     } else if (document.getElementById(di).textContent !== '')
			     document.getElementById(di).style.pointerEvents = "none";
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


var FilledField = 0;

function funkcja3(nid,Verif){
	var IsDigit = false;
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
      
	document.getElementById(nid).style.backgroundColor = "#0000ff";
    
	if (Verif === true){
	  if (document.getElementById(nid).textContent === ''){
		if (objnid[nid] === false)
	      objnid[nid] = true;
	  }
	} else objnid[nid] = true;
	
	window.onkeydown = function(){
	 if (FilledField < 81 || obj4.zmiennastop === false){
	   var code = event.keyCode;
       if (code > 48 && code < 58 && objnid[nid] === true){
        var theChar = String.fromCharCode(code);
		document.getElementById(nid).innerHTML = '<p class="fieldP'+nid+'">'+theChar+'</p>';
		YX(nid, obj2);
		taborg[obj2.osy][obj2.osx] = parseInt(theChar);
		IsDigit = true;
		middleOfElement('field','fieldP'+nid,0,0);
		document.getElementsByClassName('fieldP'+nid)[0].style.position = 'relative';
		document.getElementsByClassName('fieldP'+nid)[0].style.margin = 0;
		} else 
		  if ((objnid[nid] === true && Verif === false) || (objnid[nid] === true && Verif === true))
		   if (code === 8 || code === 46) {
			document.getElementById(nid).innerHTML = '';
			YX(nid, obj2);
			taborg[obj2.osy][obj2.osx] = null;
			IsDigit = false;
		   } else { alert('Enter only digit form one to nine !!! ;)'); IsDigit = false; }
       if(Verif === true && IsDigit === true) Verification(nid);
	 }
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
elemsquare.onclick = function(){ funkcja3(this.id,VerifTrue); GetIdDiv = this.id; }
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

var numbersquare = 1, elemsquare, marleft = 0, martop = 0, PositionDiv = 0;
for(var i = 1; i <= 9; ++i){
var edgespace = 0, 
div_board = document.createElement("div");
elemsquare = document.createElement("div");
elemsquare.classList.add('box'+numbersquare);
if(i % 2 === 0)
elemsquare.style.background = 'grey'
else elemsquare.style.background = 'white';
elemsquare.style.position = 'absolute';
div_board.style.position = elemsquare.style.position;
elemsquare.style.left = edgespace + marleft+'%';
div_board.style.left = elemsquare.style.left;
elemsquare.style.top = martop+'%';
if (i > 1 && i % 3 === 1) PositionDiv = PositionDiv + 28.5;
div_board.style.top = PositionDiv+'%';
elemsquare.style.width = 33.33+'%';
div_board.style.width = elemsquare.style.width;
elemsquare.style.height = 33.33+'%';
div_board.style.height = 28.5+'%';
div_board.setAttribute('id','keyboardvalue'+i);
div_board.classList.add('numberKey');
numbersquare = numbersquare + 1;
const div = document.querySelector(".board-of-game");
const div_keyboard = document.querySelector(".virtualkeyboard");
div.appendChild(elemsquare);
div_board.style.border = '1px solid #000000';
div_board.innerHTML = '<p class="fieldP1">'+i+'</p>';
div_board.onmouseover = function(){
	document.getElementById(this.id).style.backgroundColor="black";
	document.getElementById(this.id).style.color="white";
}
div_board.onmouseout = function(){
	document.getElementById(this.id).style.backgroundColor="transparent";
	document.getElementById(this.id).style.color="black";
}
div_board.onclick = function(){
	var IsDigit = false;
	document.getElementById(this.id).style.backgroundColor="yellow";
	document.getElementById(this.id).style.color="red";
	if (FilledField < 81 || obj4.zmiennastop === false)
	if(GetIdDiv !== null && objnid[GetIdDiv] === true){
	document.getElementById(GetIdDiv).innerHTML = '<p class="fieldP'+GetIdDiv+'">'+document.getElementById(this.id).textContent+'</p>';
	YX(GetIdDiv, obj2);
	taborg[obj2.osy][obj2.osx] = parseInt(document.getElementById(this.id).textContent);
	IsDigit = true;
	middleOfElement('field','fieldP'+GetIdDiv,0,0);
	document.getElementsByClassName('fieldP'+GetIdDiv)[0].style.position = 'relative';
	document.getElementsByClassName('fieldP'+GetIdDiv)[0].style.margin = 0;
	}
	if(GetIdDiv !== null && VerifTrue === true && IsDigit === true) Verification(GetIdDiv);
}
div_keyboard.appendChild(div_board);
IdIns();
smallsquare(i);
marleft = marleft + 33.33;
if(i % 3 === 0){
martop = martop + 33.33; marleft = 0; }
}
var LevelNumber, EngineNumber;
if(document.getElementsByName("level")[0].checked === true) LevelNumber = document.getElementsByName("level")[0].value;
if(document.getElementsByName("engine")[0].checked === true) EngineNumber = document.getElementsByName("engine")[0].value
else EngineNumber = document.getElementsByName("engine")[1].value;
if(document.getElementsByName("keyboardvirtual")[1].checked === true) document.getElementsByClassName("virtualkeyboard")[0].style.visibility = 'hidden'
else document.getElementsByClassName("virtualkeyboard")[0].style.visibility = 'visible';
const elementsRiadio1 = document.getElementsByName("level");
const elementsRiadio2 = document.getElementsByName("engine");
const elementsRiadio3 =	document.getElementsByName("keyboardvirtual");

function ChangeRiado(radioButtons,numberFunction){
for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', showSelected);
  if(radioButton.disabled === true && numberFunction === 4)
	radioButton.disabled = false;
}
function showSelected(e) {
  if (this.checked) {
	if(numberFunction === 1)
	  LevelNumber = this.value;
    if(numberFunction === 2){
	  EngineNumber = this.value;
	  alert('Selected engine '+EngineNumber);
	}
    if(numberFunction === 3)
	 if(document.getElementsByClassName("virtualkeyboard")[0].style.visibility === 'visible') document.getElementsByClassName("virtualkeyboard")[0].style.visibility = 'hidden'
	 else document.getElementsByClassName("virtualkeyboard")[0].style.visibility = 'visible';
    }
}
}

ChangeRiado(elementsRiadio1,1);
ChangeRiado(elementsRiadio2,2);
ChangeRiado(elementsRiadio3,3);

  function finish(){
	obj3.wiersz = 1;
	obj3.kolumna = 1;
	obj3.kratkanumer = 1;
	obj3.plikom = 0;
	obj3.nr = 1;
	obj4.zmiennastop = false;
	var memoryFilledField = FilledField;
	FilledField = 0;
	if (checkdatainput(taborg) === true){
	 if(EngineNumber === '1')
	  if (firstEngine(taborg, 0, 1, 1, 1, obj4, 1, 1, 1, 1) === true){ 
	   for(var r = 1; r <= 9; ++r)
         for(var c = 1; c <= 9; ++c){
		   document.getElementById((r - 1)* 9 + c).innerHTML = '<p class="fieldP">'+taborg[r][c]+'</p>';
		   FilledField = FilledField + 1;
		 }
	   if(FilledField === 81){
	     element.innerHTML = 'Sudoku Solved !!!';
		 if (VerifTrue === true){ clearInterval(idInterwalu); ChangeRiado(elementsRiadio2,4); VerifTrue = false; }
	   }
	  } else alert('No Solution !!!')
	 else if(secondEngine(taborg, 0, 1, 1, 1, obj4, 1, 1, 1, 1) === true){
           for(var r = 1; r <= 9; ++r)
            for(var c = 1; c <= 9; ++c){
		     document.getElementById((r - 1)* 9 + c).innerHTML = '<p class="fieldP">'+taborg[r][c]+'</p>';
			 FilledField = FilledField + 1;
			}
		   if(FilledField === 81){
		    element.innerHTML = 'Sudoku Solved !!!';
		    if (VerifTrue === true){ clearInterval(idInterwalu); ChangeRiado(elementsRiadio2,4); VerifTrue = false; }
		  }
		 } else alert('No Solution !!!');
	} else alert('No Solution !!!');
	FilledField = memoryFilledField;
	centeringTheNumbersOnTheBoard();
}

function RandomNumberInTheRange(min,max){
  return Math.floor(Math.random()*(max+1-min)+min);
}

function middleOfElement(ClassName1,ClassName2,numInd1,numInd2){
heightDiv = document.getElementsByClassName(ClassName1)[numInd1].clientHeight;
heightP = document.getElementsByClassName(ClassName2)[numInd2].clientHeight;
console.log(heightDiv+' i '+heightP);
if(heightDiv > heightP) document.getElementsByClassName(ClassName2)[numInd2].style.top = 50/100*heightDiv - (heightP/2)  + 'px'
else if(heightDiv === heightP) document.getElementsByClassName(ClassName2)[numInd2].style.top = 0
	 else document.getElementsByClassName(ClassName2)[numInd2].style.top = 50/100*heightDiv - (heightP/2)  + 'px';
 // console.log(50/100*heightDiv - (heightP/2));
 }

function BodyFromFunctionVerification(){
	for(var z = 1; z < objnid.length; z++)
		if (objnid[z] === true){ 
	     document.getElementById(z).style.backgroundColor = "green";
		 FilledField = FilledField + 1;
		 objnid[z] = false;
		}
	  err = false;
	  if(FilledField === 81){ 
	   element.innerHTML = 'Congratulations, you did it !!! '+'<br />'+'Your time: '+the_display_string;
	   clearInterval(idInterwalu);
	   ChangeRiado(elementsRiadio2,4);
	   middleOfElement('WhetherCorrectDigit','meter',0,0);
	  }
}

function Verification(FiledId){
  obj3.wiersz = 1;
  obj3.kolumna = 1;
  obj3.kratkanumer = 1;
  obj3.plikom = 0;
  obj3.nr = 1;
  obj4.zmiennastop = false;
  if (checkdatainput(taborg) === true){
	if(EngineNumber === '1')
	  if (firstEngine(taborg, 0, 1, 1, 1, obj4, 1, 1, 1, 1) === true)
	     BodyFromFunctionVerification()
	  else { err = true; document.getElementById(FiledId).style.backgroundColor = "red"; }
	else if(secondEngine(taborg, 0, 1, 1, 1, obj4, 1, 1, 1, 1) === true)
		   BodyFromFunctionVerification()
		 else { err = true; document.getElementById(FiledId).style.backgroundColor = "red"; }
  } else { err = true; document.getElementById(FiledId).style.backgroundColor = "red"; }
  TimeStart = Date.now();
}

function CreateNewSudoku(){

if (VerifTrue === true) clearInterval(idInterwalu);

switch (LevelNumber) {
    case '1':
	  document.getElementById('DescLevel').innerHTML = 'Easy Level';
	  FilledField = RandomNumberInTheRange(29,34);
	  Watch();
	  break;
    case '2':
	  document.getElementById('DescLevel').innerHTML = 'Medium Level';
	  FilledField = RandomNumberInTheRange(25,29);
	  Watch();
	  break;
    case '3':
	  document.getElementById('DescLevel').innerHTML = 'Hard Level';
	  FilledField = RandomNumberInTheRange(22,25);
	  Watch();
	  break;
    default:
	   document.getElementById('DescLevel').innerHTML = 'Choose level !!!';
}
  if (FilledField !== 0){
  funkcja4();
  CreatNewBoard(taborg,81,obj4,81 - FilledField);
  for(var r = 1; r <= 9; ++r)
    for(var c = 1; c <= 9; ++c)
	 if(taborg[r][c] !== null){
	  document.getElementById((r - 1)* 9 + c).style.pointerEvents = "none";
	  document.getElementById((r - 1)* 9 + c).style.color = "rgb(98 25 25)";
	  document.getElementById((r - 1)* 9 + c).innerHTML = '<p class="fieldP">'+taborg[r][c]+'</p>';
	}
  if(document.getElementsByName("engine")[0].checked === true) document.getElementsByName("engine")[1].disabled = true
  else document.getElementsByName("engine")[0].disabled = true
  }
centeringTheNumbersOnTheBoard();
VerifTrue = true;
}
/* var heightDiv = document.getElementById("remove").clientHeight;
var heightP = document.getElementById("writingremove").clientHeight;
console.log(heightDiv+' i '+heightP);
if(heightDiv >= heightP)
document.getElementById("writingremove").style.top = 50/100*heightDiv - (heightP/2)  + 'px'
else 
  document.getElementById("writingremove").style.top = 0;
console.log(document.getElementById("writingremove").clientHeight);

var heightDivTime = document.getElementById("timecounter").clientHeight; */

/* middleOfElement('field','fieldP'); */
for(var i = 0; i < 9; ++i){
 middleOfElement('numberKey','fieldP1',0,i);
 document.getElementsByClassName('fieldP1')[i].style.position = 'relative';
 document.getElementsByClassName('fieldP1')[i].style.margin = 0;
 /* for(var helpI = i * 9; helpI < i * 9 + 9; ++helpI){
   middleOfElement('field','fieldP',helpI,helpI);
   document.getElementsByClassName('fieldP')[helpI].style.position = 'relative';
   document.getElementsByClassName('fieldP')[helpI].style.margin = 0
 } */
}
middleOfElement('backspace','writingremove',0,0);
middleOfElement('WhetherCorrectDigit','meter',0,0);
middleOfElement('InfoLevel','DescInfoLevel',0,0);

function centeringTheNumbersOnTheBoard(){
 for(var i = 0; i < 9; ++i)
  for(var helpI = i * 9; helpI < i * 9 + 9; ++helpI){
   if(helpI < document.getElementsByClassName('fieldP').length){
    middleOfElement('field','fieldP',helpI,helpI);
    document.getElementsByClassName('fieldP')[helpI].style.position = 'relative';
    document.getElementsByClassName('fieldP')[helpI].style.margin = 0;
  }
 }
}