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
          }
      }
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
          }
      }
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
          }
      }
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
          }
      }
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
          }
      }
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
          }
      }
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
          }
      }
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
          }
      }
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
          }
      }
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
      if (boxs[i1][j1] !== null) {
          if (boxs[i1][j1] === licz) {
            zmf = true;
            break;
          }
        }
    if (zmf === true) {
      break;
    }
  }
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
  
  for (i = 1; i <= 9; i++) {
    for (k = 1; k <= 9; k++) {
      for (j = 1; j <= 9; j++)
        if ((tab[i][j] !== null) && (k !== j))
          if (tab[i][k] === tab[i][j]) {
            valuefun = true;
            break;
          }
      if (valuefun === true) break;
    }
    if (valuefun === true) break;
  }

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
  
  prows = obj.wiersz;
  
  for(rows = prows; rows <= (prows + 2); rows++)
    for(cols = 1; cols <= 9; cols++)
      if (tab[rows][cols] !== null)
	   likom = likom + 1;
  
  rows--; cols--;
  
  if ((obj.plikom <= likom) && (likom > 0)) {
    obj.nr = obj.kratkanumer;
    obj.plikom = likom;
  }

  if (obj.kratkanumer < 55) {
    obj.wiersz = rows + 1;
    obj.kolumna = 1;
    obj.kratkanumer = obj.kratkanumer + 27;
  }
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
  
  for(rows = obj.wiersz; rows <= (obj.wiersz + 2); ++rows)
    for(cols = 1; cols <= 9; ++cols)
      if (tab[rows][cols] !== null)
	   likom = likom + 1;
  
  rows--; cols--;
  
  if (obj.plikom <= likom && likom >= 0 && likom < 27) {
    obj.nr = obj.kratkanumer;
    obj.plikom = likom;
	iteration = wi;
  }

  if (obj.kratkanumer < 55) {
    obj.wiersz = rows + 1;
    obj.kolumna = 1;
    obj.kratkanumer = obj.kratkanumer + 27;
  }

  return iteration;
}

function firstEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek, obj, second1, additionalvar, wariant, dot) {
  var
    kratka, wsp_y, wsp_x, cyfra, liczobr, pplikom,
    rows, cols, sw, sk, nrli, zak1, zak2, i1, j1;

  if ((rozpatryliczbakratek === 1) && (opcje === 0)) {
	pplikom = 0;
    nrli = 1;
    for (i1 = 1; i1 <= 3; i1++)
      BeginFromCell1(taborg, obj3);
    rozpatryliczbakratek = obj3.nr;
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
  }

  if (opcje === 9) obj.zmiennastop = true;
  
  
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
  if(obj.zmiennastop === true){
  if (wariant === 2 && additionalvar !== 0){
   YX(additionalvar, obj2); 
   wsp_y = obj2.osy; wsp_x = obj2.osx; 
   tab_kwad[wsp_y][wsp_x] = null;
 }
} 
  return obj.zmiennastop;
}

function secondEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek, obj, second1, additionalvar, wariant, dot) {
  var
    kratka, wsp_y, wsp_x, cyfra, liczobr, pplikom,
    rows, cols, sw, sk, nrli, zak1, zak2, i1, j1;

  liczobr = false;

  if (rozpatryliczbakratek % 27 === 1 && opcje < 9){
	pplikom = 0;
    nrli = 1; j1 = 1;
	obj3.plikom = 0; obj3.nr = 1; obj3.wiersz = 1; obj3.kolumna = 1; obj3.kratkanumer = 1;
    for (i1 = 1; i1 <= 3; i1++)
	 dot = BeginFromCell2(tab_kwad, obj3, i1, dot);
    dot = (dot * 27) - 26;
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
}

    CoordinatesValues(rozpatryliczbakratek, obj1);
    YX(obj1.min, obj2);
    pkw = obj2.osy;
    pkk = obj2.osx;
    YX(rozpatryliczbakratek, obj2);
    wsp_y = obj2.osy;
    wsp_x = obj2.osx;
	

  do {
    if (tab_kwad[wsp_y][wsp_x] !== null) {
	 if (rozpatryliczbakratek === obj1.max && opcje < 9 && rozpatryliczbakratek % 27 !== 0) opcje = opcje + 1;
	 if (rozpatryliczbakratek < 81 && rozpatryliczbakratek % 27 !== 0) rozpatryliczbakratek++;
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
			  if (rozpatryliczbakratek === 81) rozpatryliczbakratek = 0;
			  secondEngine(tab_kwad, opcje, pkw, pkk, rozpatryliczbakratek + 1, obj, second1, additionalvar, wariant, dot)
			} else { obj.zmiennastop = true; console.table(tab_kwad); break; }
			if (obj.zmiennastop === false){
			 if(liczobr === false){ tab_kwad[wsp_y][wsp_x] = null; zak1 = null; }
			} else break
           } else { tab_kwad[wsp_y][wsp_x] = null; zak1 = null; }
	    } else zak1 = null;
    }
   }
  if(obj.zmiennastop === true)
   if (wariant === 2 && liczobr === false)
    tab_kwad[wsp_y][wsp_x] = null;
  
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

  f_wsp_y = Math.floor(Math.random() * 81 + 1);

  CoordinatesValues(f_wsp_y, obj1);
  YX(obj1.min, obj2);

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
    
  for(ind = 1; ind <= secondindex; ind++){
   valueindex = RandomNumber(LengthMainBoard,ArrayAllValue);
    checkvalue[ind] = valueindex;
   
  YX(checkvalue[ind],obj2);
   mainboard[obj2.osy][obj2.osx] = null;
   LengthMainBoard = LengthMainBoard - 1;
  }
 checkvalue.sort(sortNum);
}
var difftime = new Date().getSeconds();