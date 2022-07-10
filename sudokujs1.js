var taborg = new Array(10);

function make2darray(rows, cols) {
  for (var i = 1; i <= rows; i++) {
    taborg[i] = new Array(10);
  }
}
make2darray(9, 9);
for (var iter = 1; iter <= 9; iter++)
  for (var jter = 1; jter <= 9; jter++)
    taborg[iter][jter] = null;

var obj1 = {
  min: 81,
  max: 1
};

function CoordinatesValues(i, obj) {
  var j;
  obj.min = 81;
  obj.max = 1;
  if (((Math.round(i / 27 - 0.5) === 0) && (i % 27 !== 0)) || ((Math.round(i / 27 - 0.5) === 1) && (i % 27 === 0))) {
    if (((i % 9 >= 7) || (i % 9 === 0))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 0) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 1) && (j % 27 === 0)))
          if (((j % 9 >= 7) || (j % 9 === 0))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    } else
    if (((i % 9 >= 4) && (i % 9 < 7))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 0) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 1) && (j % 27 === 0)))
          if (((j % 9 >= 4) && (j % 9 < 7))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    } else
    if (((i % 9 >= 1) && (i % 9 < 4))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 0) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 1) && (j % 27 === 0)))
          if (((j % 9 >= 1) && (j % 9 < 4))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    }
  } else
  if (((Math.round(i / 27 - 0.5) === 1) && (i % 27 !== 0)) || ((Math.round(i / 27 - 0.5) === 2) && (i % 27 === 0))) {
    if (((i % 9 >= 7) || (i % 9 == 0))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 1) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 2) && (j % 27 === 0)))
          if (((j % 9 >= 7) || (j % 9 === 0))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    } else
    if (((i % 9 >= 4) && (i % 9 < 7))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 1) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 2) && (j % 27 === 0)))
          if (((j % 9 >= 4) && (j % 9 < 7))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    } else
    if (((i % 9 >= 1) && (i % 9 < 4))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 1) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 2) && (j % 27 === 0)))
          if (((j % 9 >= 1) && (j % 9 < 4))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    }
  } else
  if (((Math.round(i / 27 - 0.5) === 2) && (i % 27 !== 0)) || ((Math.round(i / 27 - 0.5) === 3) && (i % 27 === 0))) {
    if (((i % 9 >= 7) || (i % 9 === 0))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 2) && (j % 27 !== 0)) || ((j / 27 === 3) && (j % 27 === 0)))
          if (((j % 9 >= 7) || (j % 9 === 0))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    } else
    if (((i % 9 >= 4) && (i % 9 < 7))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 2) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 3) && (j % 27 === 0)))
          if (((j % 9 >= 4) && (j % 9 < 7))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    } else
    if (((i % 9 >= 1) && (i % 9 < 4))) {
      for (j = 1; j <= 81; j++) {
        if (((Math.round(j / 27 - 0.5) === 2) && (j % 27 !== 0)) || ((Math.round(j / 27 - 0.5) === 3) && (j % 27 === 0)))
          if (((j % 9 >= 1) && (j % 9 < 4))) {
            if (j < obj.min) {
              obj.min = j
            }
            if (j > obj.max) {
              obj.max = j
            }
            //write(j:4)}
          }
      }
      //writeln; writeln(obj.min:4,obj.max:4)}
    }
  }
}

var obj2 = {
  osy: 0,
  osx: 0
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

function NumberBox(boxs, pw, pk, wsp_y, wsp_x, licz) {
  var z, x, zmf;
  zmf = false;
  if(boxs[wsp_y][wsp_x] === null)
  for (var i1 = pw; i1 <= pw + 2; i1++) {
    for (var j1 = pk; j1 <= pk + 2; j1++)
      // if ((i1 !== wsp_y) || (j1 !== wsp_x)) {
        if (boxs[i1][j1] !== null) {
          if (boxs[i1][j1] === licz) {
            zmf = true;
            break;
          }
        }
      // }
    if (zmf === true) {
      break;
    }
  }
  // console.log(' zmf    '+zmf);
  return zmf;
}

function NumberBox1(boxs, pw, pk, wsp_y, wsp_x) {
  var z, x, zmf;
  zmf = false;
  for (var i1 = pw; i1 <= pw + 2; i1++) {
    for (var j1 = pk; j1 <= pk + 2; j1++)
      if ((i1 !== wsp_y) || (j1 !== wsp_x)) {
        if (boxs[i1][j1] !== null) {
          if (boxs[i1][j1] === boxs[wsp_y][wsp_x]) {
            {
              zmf = true;
              break;
            }
          }
        }
      }
    if (zmf === true) {
      break;
    }
  }
  return zmf;
}

function SprWieKol(tab) {
  var i, j, k, valuefun;

  valuefun = false;
  // console.log('-'+valuefun);

  for (i = 1; i <= 9; i++) {
    for (k = 1; k <= 9; k++) {
      for (j = 1; j <= 9; j++) // kolumny
        // if (tab[i,j] <> 0) and (k <> j) then
        if ((tab[i][j] !== null) && (k !== j))
          // if tab[i,k] = tab[i,j] then
          if (tab[i][k] === tab[i][j]) {
            valuefun = true;
            break;
          }
      if (valuefun === true) break;
    }
    if (valuefun === true) break;
  }

  // console.log('-'+valuefun);
  if (valuefun === false)

    for (var i = 1; i <= 9; i++) {
      for (var k = 1; k <= 9; k++) {
        for (var j = 1; j <= 9; j++)
          if ((tab[j][i] !== null) && (k !== j))
            if (tab[k][i] === tab[j][i]) {
              valuefun = true;
              break;
            }
        if (valuefun === true) break;
      }
      if (valuefun === true) break;
    }
  return valuefun;
}

function BeginFromCell1(tab, obj) {
  var rows, cols, prows, pcols, likom = 0;
  // rows = obj.wiersz;
  /* while (rows <= obj.wiersz + 2) {
    cols = 1;
    while (cols <= 9) {
      if (tab[rows][cols] !== null)
        likom = likom + 1;
      pcols = cols++;
    }
    prows = rows++;
  } 

  rows = prows;
  cols = pcols; */
  
  prows = obj.wiersz;
  
  for(rows = prows; rows <= (prows + 2); rows++)
    for(cols = 1; cols <= 9; cols++)
      if (tab[rows][cols] !== null)
	   likom = likom + 1;
  
  
  rows--; cols--;
  console.log(rows+' '+cols);
  

  if ((obj.plikom <= likom) && (likom > 0)) {
    obj.nr = obj.kratkanumer;
    obj.plikom = likom;
  }

  if (obj.kratkanumer < 55) {
    obj.wiersz = rows + 1;
    obj.kolumna = 1;
    obj.kratkanumer = obj.kratkanumer + 27;
  }

  console.log(obj.wiersz+' '+obj.kolumna+' '+obj.kratkanumer+' '+likom);
}
obj3 = {
  wiersz: 1,
  kolumna: 1,
  kratkanumer: 1,
  plikom: 0,
  nr: 1
}
var obj4 = {
  zmiennastop: false
}

function BeginFromCell2(tab, obj, wi, iteration) {
  var rows, cols, pcols, likom = 0;
  
  console.log('zaczynamy '+obj.wiersz);
  // debugger;
  
  for(rows = obj.wiersz; rows <= (obj.wiersz + 2); ++rows)
    for(cols = 1; cols <= 9; ++cols)
      if (tab[rows][cols] !== null)
	   likom = likom + 1;
  
  
  rows--; cols--;
  console.log(rows+' '+cols);
  

  if (obj.plikom <= likom && likom >= 0 && likom < 27) {
    obj.nr = obj.kratkanumer;
    obj.plikom = likom;
	iteration = wi;
	console.log(obj.plikom);
	// debugger;
  }

  if (obj.kratkanumer < 55) {
    obj.wiersz = rows + 1;
    obj.kolumna = 1;
    obj.kratkanumer = obj.kratkanumer + 27;
  }

  console.log(obj.wiersz+' '+obj.kolumna+' '+obj.kratkanumer+' '+likom);
  
  return iteration;
}

function firstEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek, obj, second1, additionalvar, wariant, dot) {
  var
    kratka, wsp_y, wsp_x, cyfra, liczobr, pplikom,
    rows, cols, sw, sk, nrli, zak1, zak2, i1, j1;

  // valuefunction = false;
  
  
  

  if ((rozpatryliczbakratek === 1) && (opcje === 0)) {
	  console.log('engine 1 :)'+rozpatryliczbakratek);
    pplikom = 0;
    nrli = 1;
    for (i1 = 1; i1 <= 3; i1++)
      BeginFromCell1(taborg, obj3);
    rozpatryliczbakratek = obj3.nr;
	console.log(rozpatryliczbakratek);
    YX(rozpatryliczbakratek, obj2);
    pkw = obj2.osy;
    pkk = obj2.osx;
    if (rozpatryliczbakratek > 81) {
      pkw = 1;
      pkk = 1;
      rozpatryliczbakratek = 1;
    }
  };

  YX(rozpatryliczbakratek, obj2);
  pkw = obj2.osy;
  pkk = obj2.osx;

  do {
    kratka = rozpatryliczbakratek;
    CoordinatesValues(rozpatryliczbakratek, obj1);
    YX(obj1.min, obj2);
    pkw = obj2.osy;
    pkk = obj2.osx;
    YX(rozpatryliczbakratek, obj2);
    wsp_y = obj2.osy;
    wsp_x = obj2.osx;
    if (tab_kwad[wsp_y][wsp_x] !== null) {
      if (kratka === obj1.max) opcje = opcje + 1;
      if (kratka === 81) rozpatryliczbakratek = 0;
      rozpatryliczbakratek++;
    }
  } while ((tab_kwad[wsp_y][wsp_x] !== null) && (opcje < 9));
  
  if((tab_kwad[wsp_y][wsp_x] === null) && (wariant === 2)){
  additionalvar = rozpatryliczbakratek;
  // document.write(additionalvar+' - ');  
  }
// document.write('<br />');
  // document.write('<br />');
  

  var second2 = new Date().getSeconds();
  var diffrence;
  if (second2 < second1)
    diffrence = 60 - second1 + Math.abs(0 - second2)
  else diffrence = second2 - second1;
  
  // if (second1 === second2) memorydiffrence = 0;
  
  // console.log(second1+' -- '+second2+' -- '+diffrence);
  
  
  
  if (opcje === 9) obj.zmiennastop = true;
  // else if (memorydiffrence !== diffrence){ memorydiffrence = diffrence; myFunc(diffrence); }
  
   if (obj.zmiennastop === false){
	for (cyfra = 1; cyfra <= 9; cyfra++) {
      if (tab_kwad[wsp_y][wsp_x] === null) {
        tab_kwad[wsp_y][wsp_x] = cyfra
      } else if ((tab_kwad[wsp_y][wsp_x] >= cyfra) && (cyfra < 9)) {
        continue;
      } else {
        tab_kwad[wsp_y][wsp_x] = cyfra;
      }

      if ((SprWieKol(tab_kwad) === false) && (NumberBox1(tab_kwad, pkw, pkk, wsp_y, wsp_x) === false)) {
        if (rozpatryliczbakratek === obj1.max) opcje = opcje + 1;
        if (rozpatryliczbakratek === 81) rozpatryliczbakratek = 0;
        firstEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek + 1, obj, second1, additionalvar, wariant, dot);
        if (obj.zmiennastop === false) tab_kwad[wsp_y][wsp_x] = null
		else break;
      } else tab_kwad[wsp_y][wsp_x] = null;
    }
   }
  if(obj.zmiennastop === true){ // valuefunction = true; 
  if (wariant === 2 && additionalvar !== 0){
  YX(additionalvar, obj2); 
 wsp_y = obj2.osy; wsp_x = obj2.osx; 
  tab_kwad[wsp_y][wsp_x] = null;
  // document.write(additionalvar+' ');
  
  }
} 
  return obj.zmiennastop;
}

function secondEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek, obj, second1, additionalvar, wariant, dot) {
  var
    kratka, wsp_y, wsp_x, cyfra, liczobr, pplikom,
    rows, cols, sw, sk, nrli, zak1, zak2, i1, j1;

  // valuefunction = false;
  
  
  liczobr = false;

  if (rozpatryliczbakratek % 27 === 1 && opcje < 9){
	console.log('engine 2 :)'+rozpatryliczbakratek);
    pplikom = 0;
    nrli = 1; j1 = 1;
	obj3.plikom = 0; obj3.nr = 1; obj3.wiersz = 1; obj3.kolumna = 1; obj3.kratkanumer = 1;
    for (i1 = 1; i1 <= 3; i1++)
	 dot = BeginFromCell2(tab_kwad, obj3, i1, dot);
    dot = (dot * 27) - 26;
	console.log(' ZACZNIJ OD '+obj3.nr+' '+dot);
	console.log(obj3.wiersz);
	rozpatryliczbakratek = dot;
	console.log(rozpatryliczbakratek);
	YX(rozpatryliczbakratek, obj2);
    pkw = obj2.osy;
    pkk = obj2.osx;
    if (rozpatryliczbakratek > 81) {
      pkw = 1;
      pkk = 1;
      rozpatryliczbakratek = 1;
    }
	// debugger;
}

    CoordinatesValues(rozpatryliczbakratek, obj1);
    YX(obj1.min, obj2);
    pkw = obj2.osy;
    pkk = obj2.osx;
    YX(rozpatryliczbakratek, obj2);
    wsp_y = obj2.osy;
    wsp_x = obj2.osx;
	

  do {
    // kratka = rozpatryliczbakratek;
    
    if (tab_kwad[wsp_y][wsp_x] !== null) {
	 if (rozpatryliczbakratek === obj1.max && opcje < 9 && rozpatryliczbakratek % 27 !== 0) opcje = opcje + 1;
	 if (rozpatryliczbakratek < 81 && rozpatryliczbakratek % 27 !== 0) rozpatryliczbakratek++;
	 // if (rozpatryliczbakratek % 27 === 0) liczobr = true;
       CoordinatesValues(rozpatryliczbakratek, obj1);
       YX(obj1.min, obj2);
       pkw = obj2.osy;
       pkk = obj2.osx;
       YX(rozpatryliczbakratek, obj2);
       wsp_y = obj2.osy;
       wsp_x = obj2.osx;
	 if(opcje < 9 && tab_kwad[wsp_y][wsp_x] !== null && rozpatryliczbakratek % 27 === 0){ liczobr = true; opcje = opcje + 1; }
	}
  } while ((tab_kwad[wsp_y][wsp_x] !== null && rozpatryliczbakratek % 27 !== 0 && opcje < 9));
  
 if (opcje === 9) obj.zmiennastop = true;
	if (rozpatryliczbakratek === obj1.max && tab_kwad[wsp_y][wsp_x] === null && opcje < 9) opcje = opcje + 1;
  
   if (obj.zmiennastop === false){
	  for (cyfra = 1; cyfra <= 9; cyfra++){
        if (tab_kwad[wsp_y][wsp_x] === null) zak1 = cyfra
        else 
		 if (tab_kwad[wsp_y][wsp_x] >= cyfra && cyfra < 9) continue
		 else zak1 = cyfra;
		
		if (NumberBox(tab_kwad, pkw, pkk, wsp_y, wsp_x, zak1) === false){
		  if (tab_kwad[wsp_y][wsp_x] === null) tab_kwad[wsp_y][wsp_x] = zak1;
		   if (SprWieKol(tab_kwad) === false){
		    if (opcje < 9){
			  if (rozpatryliczbakratek === 81) rozpatryliczbakratek = 0; // debugger;
			  secondEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek + 1, obj, second1, additionalvar, wariant, dot)
			} else { obj.zmiennastop = true; console.table(tab_kwad); break; }
			if (obj.zmiennastop === false){
			 if(liczobr === false){ tab_kwad[wsp_y][wsp_x] = null; zak1 = null; }
			} else break
           } else { tab_kwad[wsp_y][wsp_x] = null; zak1 = null; }
	    } else zak1 = null;
    }
   }
  if(obj.zmiennastop === true){ // valuefunction = true; 
  if (wariant === 2 && liczobr === false){
  tab_kwad[wsp_y][wsp_x] = null;
  // document.write(additionalvar+' ');
  
  }
}
  return obj.zmiennastop;
}

function checkdatainput(smallbox) {
  var beginrows, begincols, coordinates_y, coordinates_x, valuefunction;
  valuefunction = true;
  for (var checkindeks = 1; checkindeks <= 81; checkindeks++) {
    CoordinatesValues(checkindeks, obj1);
    YX(obj1.min, obj2);
    beginrows = obj2.osy;
    begincols = obj2.osx;
    YX(checkindeks, obj2);
    coordinates_y = obj2.osy;
    coordinates_x = obj2.osx;
    if (NumberBox1(smallbox, beginrows, begincols, coordinates_y, coordinates_x) === true) {
      valuefunction = false;
      break;
    }
  }
  return valuefunction;
}
/*taborg[1][1] = 1; taborg[1][2] = 2; taborg[1][3] = 3; 
taborg[2][1] = 4; taborg[2][2] = 5; taborg[2][3] = 6; 
taborg[3][1] = 7; taborg[3][2] = 8; taborg[3][3] = 9;*/
/*taborg[7][7] = 7; taborg[7][8] = 3;  taborg[7][9] = 2;
taborg[8][7] = 6; taborg[8][8] = 4;  taborg[8][9] = 1;
taborg[9][7] = 5; taborg[9][8] = 9;  taborg[9][9] = 7;*/
function RandomNumber(length_board,auxiliary_board){
  var memory;
  TheDrawnValue = Math.floor(Math.random() * length_board + 1);
  memory = auxiliary_board[TheDrawnValue];
  for (var index = 1; index <= length_board; index++)
   if (auxiliary_board[TheDrawnValue] <= auxiliary_board[index])
    auxiliary_board[index] = auxiliary_board[index + 1];
  return memory;
}
function InsertRandomNumbersToSmallSquare(length_array, starting_place) {
  var
    proce_i, f_wsp_y;
  tab_num = new Array(10);


  for (var proce_j = 1; proce_j <= 9; proce_j++)
    tab_num[proce_j] = proce_j;

  f_wsp_y = Math.floor(Math.random() * 81 + 1); // losowanie

  CoordinatesValues(f_wsp_y, obj1); // mini max
  YX(obj1.min, obj2); // wsp mini max

  for (f_wsp_y = obj2.osy; f_wsp_y <= (obj2.osy + 2); f_wsp_y++) {
    for (var f_wsp_x = obj2.osx; f_wsp_x <= (obj2.osx + 2); f_wsp_x++) {
      starting_place[f_wsp_y][f_wsp_x] = RandomNumber(length_array,tab_num);
	  length_array = length_array - 1;
    }
    f_wsp_x = f_wsp_x - 2;
  }
}
function sortNum (a, b) {
  return a - b
}
function CreatNewBoard(mainboard,LengthMainBoard,obj,secondindex){
  var valueindex, ArrayAllValue = new Array(81);
  var checkvalue = new Array(81);
  for(valueindex = 1; valueindex <= 81; valueindex++)
   ArrayAllValue[valueindex] = valueindex;
  InsertRandomNumbersToSmallSquare(9,mainboard);
  firstEngine(mainboard, 0, 1, 1, 1, obj, 0, 1, 1);
  console.table(mainboard);
  console.log(obj.zmiennastop);
  // obj.zmiennastop = false;
  
  console.log('secondindex; '+secondindex);
  // ( 27 - w zależności od poziomu trudności)
  for(ind = 1; ind <= secondindex; ind++){
   valueindex = RandomNumber(LengthMainBoard,ArrayAllValue);
    checkvalue[ind] = valueindex;
   
  // console.log(checkvalue[ind]);
   YX(checkvalue[ind],obj2);
   mainboard[obj2.osy][obj2.osx] = null;
   // console.log(checkvalue[ind]+' ');
   LengthMainBoard = LengthMainBoard - 1;
}
 checkvalue.sort(sortNum);
 
 
 
 /* for(ind = 0; ind < secondindex; ind++)
 document.write(checkvalue[ind]+'      ');
document.write('<br />'); */
}
   /*taborg = [[,,,,,,,,,,],
			[,null,6,null,null,2,null,null,4,null],
			[,5,null,null,3,null,null,null,null,null],
			[,null,8,null,null,1,null,null,null,null],
			[,6,null,null,null,null,7,null,null,null],
			[,null,3,7,null,null,null,2,8,null],
			[,null,2,null,8,null,null,null,3,null],
			[,null,null,null,null,null,null,null,null,null],
			[,7,null,null,4,null,null,null,null,1],
			[,null,null,null,null,6,null,null,2,null]];*/
	   
	   
	   /*taborg = [[,,,,,,,,,,],
	            [,5,3,4,6,7,8,9,1,2],
				[,6,7,2,1,9,5,3,4,8],
				[,1,9,8,3,4,2,5,6,7],
				[,8,5,9,7,6,1,4,2,3],
				[,4,2,6,8,5,3,7,9,1],
				[,7,1,3,9,2,4,8,5,6],
				[,9,6,1,5,3,7,2,8,4],
				[,2,8,7,4,1,9,6,3,5],
				[,3,4,5,2,8,6,1,7,9]];*/
		  /*[[,,,,,,,,,,],
            [,5,3,null,null,7,null,null,null,null],
            [,6,null,null,1,9,5,null,null,null],
            [,null,9,8,null,null,null,null,6,null],
            [,8,null,null,null,6,null,null,null,3],
            [,4,null,null,8,null,3,null,null,1],
            [,7,null,null,null,2,null,null,null,6],
            [,null,6,null,null,null,null,2,8,null],
            [,null,null,null,4,1,9,null,null,5],
            [,null,null,null,null,8,null,null,7,9]];*/
// InsertRandomNumbersToSmallSquare(9,taborg);
/*taborg[1][1] = 3; taborg[1][3] = 6; taborg[1][4] = 5; taborg[1][6] = 8; taborg[1][7] = 4;
taborg[2][1] = 5; taborg[2][2] = 2; 
taborg[3][2] = 8; taborg[3][3] = 7; taborg[3][8] = 3; taborg[3][9] = 1; 
taborg[4][3] = 3; taborg[4][5] = 1; taborg[4][8] = 8;
taborg[5][1] = 9; taborg[5][4] = 8; taborg[5][5] = 6; taborg[5][6] = 3; taborg[5][9] = 5;
taborg[6][2] = 5; taborg[6][5] = 9; taborg[6][7] = 6;
taborg[7][1] = 1; taborg[7][2] = 3; taborg[7][7] = 2; taborg[7][8] = 5;
taborg[8][8] = 7; taborg[8][9] = 4;
taborg[9][3] = 5; taborg[9][4] = 2; taborg[9][6] = 6; taborg[9][7] = 3; taborg[9][9] = null;
taborg[4][1] = null;*/
/*taborg[1][1] = 4; taborg[1][2] = 8; taborg[4][3] = null;
taborg[2][1] = 3; taborg[2][2] = 5; taborg[5][3] = null;
taborg[3][1] = 2; taborg[3][2] = 9; taborg[3][3] = 3;*/
/*taborg[1][1] = 4; taborg[1][2] = null;  taborg[1][3] = 1;
taborg[2][1] = 9; taborg[2][5] = 3;  taborg[2][6] = 1; taborg[2][8] = 5;
taborg[3][2] = 6; taborg[3][3] = null;  taborg[3][4] = null;
taborg[4][2] = 5; taborg[4][4] = 1;  taborg[4][6] = 6; taborg[4][8] = null;
taborg[5][2] = 8; taborg[5][5] = null;  taborg[5][7] = 9; taborg[5][8] = null;
taborg[6][5] = 5; taborg[6][6] = 3;  taborg[6][7] = 4; taborg[6][8] = null;
taborg[7][8] = 3; taborg[7][9] = 8;
taborg[8][7] = 2; taborg[8][8] = 7;
taborg[9][3] = 2; taborg[9][4] = 7;  taborg[9][6] = 4; taborg[9][9] = 1;*/
/*taborg[7][7] = 4; taborg[7][8] = 8; taborg[7][9] = 7; 
taborg[8][7] = 3; taborg[8][8] = 5; taborg[8][9] = 1;
taborg[9][7] = 2; taborg[9][8] = 9; taborg[9][9] = 6;*/
/*taborg[1][1] = 4; taborg[1][5] = 3;
taborg[2][2] = 7; taborg[2][5] = 8; taborg[2][7] = 3;
taborg[3][2] = 2; taborg[3][4] = 7;
taborg[4][5] = 4; taborg[4][6] = 2;
taborg[5][3] = 9; taborg[5][7] = 2; taborg[5][8] = 5; taborg[5][9] = 6;
taborg[6][1] = 2; taborg[6][2] = 8; taborg[6][3] = 7; taborg[6][7] = 1;
taborg[7][6] = 1; taborg[7][8] = 8;
taborg[8][3] = 6; taborg[8][6] = 5; taborg[8][9] = 3;
taborg[9][4] = 6; taborg[9][9] = 1;*/
/*taborg[1][1] = null; taborg[1][3] = 2; taborg[1][4] = 8;
taborg[2][3] = 5; taborg[2][4] = 6; taborg[2][8] = 8;
taborg[3][3] = 7; taborg[3][5] = 9; taborg[3][7] = 4;
taborg[4][3] = 3; taborg[4][5] = 7; taborg[4][8] = 5;
taborg[5][3] = 9; taborg[5][5] = null; taborg[5][7] = 8;
taborg[6][2] = 6; taborg[6][5] = 1; taborg[6][8] = 2;
taborg[7][3] = 8; taborg[7][5] = 3; taborg[7][8] = 7;
taborg[8][5] = 5; taborg[8][8] = 1;
taborg[9][2] = 2; taborg[9][4] = 4; taborg[9][8] = 6;*/
/*taborg[4][1] = 2; taborg[4][2] = 3; taborg[4][3] = 8;
taborg[5][1] = 5; taborg[5][2] = 7; taborg[5][3] = 6;
taborg[6][1] = 4; taborg[6][2] = 1; taborg[6][3] = 9;
taborg[1][3] = 8;
LevelOfDifficulty = 51;
CreatNewBoard(taborg,81,obj4,LevelOfDifficulty);*/
/*taborg[4][1] = 2; taborg[4][2] = 3; taborg[4][3] = 8;
taborg[5][1] = 5; taborg[5][2] = 7; taborg[5][3] = 6;
taborg[6][1] = 4; taborg[6][2] = 1; taborg[6][3] = 2;*/
/*taborg[4][7] = 9; taborg[4][8] = 2; taborg[1][9] = 3;
taborg[5][7] = 4; taborg[5][8] = 5; taborg[2][9] = 6;
taborg[6][7] = null; taborg[6][8] = 8; taborg[3][9] = 1;*/
var difftime = new Date().getSeconds();