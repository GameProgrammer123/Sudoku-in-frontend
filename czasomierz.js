var TimeObject = {
  restmillisecond: 0,
  millisecond: 0,
  second: 0,
  minute: 0,
  hour: 0
}

var TimeDisplay = {
 timedisplay1: 0,
 timedisplay2: 0,
 timedisplay3: 0,
 timedisplay4: 0,
 timedisplay5: 0,
 timedisplay6: 0,
 timedisplay7: 0,
 timedisplay8: 0,
 timedisplay9: 0
}

var TimeStop, TimeStart, idInterwalu, the_display_string;

function stopwatch(TimeObj,TimeDis){
 if (TimeObj.millisecond >= 1000) { TimeObj.restmillisecond = TimeObj.millisecond - 1000;
   TimeObj.second = TimeObj.second + 1; TimeObj.millisecond = 0; 
  TimeStart = Date.now();
   if (TimeObj.second >= 10){
      TimeDis.timedisplay5 = Math.floor(TimeObj.second / 10);
      TimeDis.timedisplay6 = Math.floor(TimeObj.second % 10);
      TimeDis.timedisplay7 = 0;
      TimeDis.timedisplay8 = 0;
      TimeDis.timedisplay9 = 0;
	} else {
       TimeDis.timedisplay6 = TimeObj.second;
       TimeDis.timedisplay7 = 0;
       TimeDis.timedisplay8 = 0;
       TimeDis.timedisplay9 = 0;
     }
 } else TimeObj.restmillisecond = 0;

 if (TimeObj.second === 60){ 
 TimeObj.minute = TimeObj.minute + 1; 
 TimeObj.second = 0;
 if (TimeObj.minute >= 10){
   TimeDis.timedisplay3	= Math.floor(TimeObj.minute / 10);
   TimeDis.timedisplay4 = Math.floor(TimeObj.minute % 10);
   TimeDis.timedisplay5 = 0;
   TimeDis.timedisplay6 = 0;
   TimeDis.timedisplay7 = 0;
   TimeDis.timedisplay8 = 0;
   TimeDis.timedisplay9 = 0;
 } else {
   TimeDis.timedisplay4 = TimeObj.minute;
   TimeDis.timedisplay5 = 0;
   TimeDis.timedisplay6 = 0;
   TimeDis.timedisplay7 = 0;
   TimeDis.timedisplay8 = 0;
   TimeDis.timedisplay9 = 0;
   TimeObj.second = 0;
 }
}

 if (TimeObj.minute === 60){ 
  TimeObj.hour = TimeObj.hour + 1; 
  TimeObj.minute = 0;
  if (TimeObj.hour >= 10){
  	 TimeDis.timedisplay1 = Math.floor(TimeObj.hour / 10);
     TimeDis.timedisplay2 = Math.floor(TimeObj.hour % 10);
     TimeDis.timedisplay3 = 0;
     TimeDis.timedisplay4 = 0;
     TimeDis.timedisplay5 = 0;
     TimeDis.timedisplay6 = 0;
     TimeDis.timedisplay7 = 0;
     TimeDis.timedisplay8 = 0;
     TimeDis.timedisplay9 = 0;
     TimeObj.minute = 0;
     TimeObj.second = 0;
   } else{
     TimeDis.timedisplay2 = TimeObj.hour;
     TimeDis.timedisplay3 = 0;
     TimeDis.timedisplay4 = 0;
     TimeDis.timedisplay5 = 0;
     TimeDis.timedisplay6 = 0;
     TimeDis.timedisplay7 = 0;
     TimeDis.timedisplay8 = 0;
     TimeDis.timedisplay9 = 0;
     TimeObj.minute = 0;
     TimeObj.second = 0;
 }
}

 if (TimeObj.millisecond % 1000 < 10)
   TimeDis.timedisplay9 = Math.floor(TimeObj.millisecond % 10);
 else if (TimeObj.millisecond % 1000 < 100){
    TimeDis.timedisplay8 = Math.floor((TimeObj.millisecond % 100) / 10);
    TimeDis.timedisplay9 = Math.floor((TimeObj.millisecond % 100) % 10);
   } else {
       TimeDis.timedisplay7 = Math.floor((TimeObj.millisecond % 1000) / 100);
       TimeDis.timedisplay8 = Math.floor((TimeObj.millisecond % 100) / 10);
       TimeDis.timedisplay9 = Math.floor((TimeObj.millisecond % 100) % 10);
      }

the_display_string = TimeDis.timedisplay1+' '+TimeDis.timedisplay2+' : '+TimeDis.timedisplay3+' '+TimeDis.timedisplay4+' : '+TimeDis.timedisplay5+' '+TimeDis.timedisplay6+'.'+TimeDis.timedisplay7+''+TimeDis.timedisplay8+''+TimeDis.timedisplay9;
element.innerHTML = the_display_string;

TimeStop = Date.now();
TimeObj.millisecond = TimeObj.restmillisecond + (TimeStop - TimeStart);
}