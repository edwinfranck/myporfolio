//Plugin URL: http://eisabainyo.net/demo/jquery.calendar-widget.php

(function(e){function t(t,r){var i=new Date;var s=i.getMonth();var o=i.getYear()+1900;var u={month:s,year:o};e.extend(u,r);var a=["January","February","March","April","May","June","July","August","September","October","November","December"];var f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];month=E=parseInt(u.month);year=parseInt(u.year);var l=0;var c="";if(month==11){var h='<a href="?month='+1+"&year="+(year+1)+'" title="'+a[0]+" "+(year+1)+'">'+a[0]+" "+(year+1)+"</a>"}else{var h='<a href="?month='+(month+2)+"&year="+year+'" title="'+a[month+1]+" "+year+'">'+a[month+1]+" "+year+"</a>"}if(month==0){var p='<a href="?month='+12+"&year="+(year-1)+'" title="'+a[11]+" "+(year-1)+'">'+a[11]+" "+(year-1)+"</a>"}else{var p='<a href="?month='+month+"&year="+year+'" title="'+a[month-1]+" "+year+'">'+a[month-1]+" "+year+"</a>"}c+='<h3 id="current-month">'+a[month]+" "+year+"</h3>";c+='<table class="calendar-month " '+'id="calendar-month'+E+' " cellspacing="0">';c+="<tr>";for(d=0;d<7;d++){c+='<th class="weekday">'+f[d]+"</th>"}c+="</tr>";var v=n(month,year);var m=new Date(year,month,1);var g=m.getDay();var y=n(month,year);var m=new Date(year,month,1);var g=m.getDay();var b=month==0?11:month-1;var w=b==11?year-1:year;var y=n(b,w);g=g==0&&m?7:g;var E=0;for(j=0;j<42;j++){if(j<g){c+='<td class="other-month"><span class="day">'+(y-g+j+1)+"</span></td>"}else if(j>=g+n(month,year)){E=E+1;c+='<td class="other-month"><span class="day">'+E+"</span></td>"}else{c+='<td class="current-month day'+(j-g+1)+'"><span class="day">'+(j-g+1)+"</span></td>"}if(j%7==6)c+="</tr>"}c+="</table>";t.html(c)}function n(e,t){var n=[31,28,31,30,31,30,31,31,30,31,30,31];if(e==1&&t%4==0&&(t%100!=0||t%400==0)){return 29}else{return n[e]}}e.fn.calendarWidget=function(e){t(this,e);return this}})(jQuery)