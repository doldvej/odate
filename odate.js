// odate.js - daniel@oldvej.dk

(function() {
/// Odate functions
	var OdateSet = function(k)
	{
	
	}
	function Odate(arguments) {
		this.that = this;
		if (arguments.length > 1)
		{
		t = [0,0,1,0,0,0,0,0,0];for (var i = 0;i<arguments.length;i++) t[i]=arguments[i];
	
	
	this[0] = new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5],t[6],t[7],t[8]);
		}
		else this[0] = new Date(arguments[0]);
		if (arguments.length == 0) this[0] = new Date();
		Odate.prototype.jsDate = this[0];
		Odate.prototype.updateVars(this);
	};
	
	Odate.prototype = {
	find: function(s)
	{
		var t = s.split(' ');
	
	return this;
	},
	isWeekend: function()
	{
		return this.weekDay == 6 || this.weekDay == 7 ;
	},
	lastWorkDay: function()
	{
			var d;
			var t = odate().firstDateInWeek().addDays(5);
			while (t.addDays(-1).Hellig())
			{
	
			}
			return t;
	},
	weekDays: ['','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag','Søndag'],
	Months: ['','Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'],
	updateVars:function(j) {
	k = {};
	k.weekDay = j.WeekDay();
	k.weekDayString = Odate.prototype.weekDays[j.WeekDay()];
	k.hour =j[0].getHours();
	k.minute = j[0].getMinutes();
	k.second = j[0].getSeconds();
	k.ms = j[0].getMilliseconds();
	k.day = j[0].getDate();
	k.week = j.WeekNumber();
	k.month = j[0].getMonth()+1;
	k.monthString = Odate.prototype.Months[k.month];
	k.year = j[0].getYear();
	k.Year = j[0].getFullYear();
	k.unixtime = Math.floor(j[0].valueOf() / 1000);
	k.timestamp = j[0].valueOf();
	
	for (property in k)
	{
	j[property] = k[property];
	}
	},
	firstDateInWeek: function()
	{
	
		return new Tee(this[0].setDate(this.day-this.weekDay+1));
	},
	weeksInMonth: function(month,year)
	{
		var out = [];
	
		this.datesInMonth(month,year).forEach(function(x) {if (out.indexOf(x.week) == -1) out.push(x.week);});
		return out;
	},
	datesInMonth: function(month,year)
	{
		var k = new Tee(year,month);
		var out =[];
	
		while (k.month == month)
		{
	
		out.push(new Tee(k[0].valueOf()));
		k.addDays(1);
		}
		return out;
	},
	datesInWeek: function(week,year)
	{
	var k = odate(year-1+'/12/31');
	
	while (k.week == 52) {k = k.addDays(1);}
	
	while (k.week != week)
	{
	
	k.addDays(1);
	}
	
	var out=[];
	k.addDays(-1);
	
	for (var i = 0;i<7;i++)
	{
	out.push(new Tee(k.addDays(1)[0].valueOf()));
	}
	
	
	return out;
	},
	lastDayOfMonth: function() {
		var j = this[0];
	return new Date(j.getFullYear(),j.getMonth()+1,0).getDate();
	},
	WeekNumber: function() {
	return this._WeekNumber(this[0])[1];
	},
	_WeekNumber: function(d) {
		// Copy date so don't modify original
		d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
		// Set to nearest Thursday: current date + 4 - current day number
		// Make Sunday's day number 7
		d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
		// Get first day of year
		var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
		// Calculate full weeks to nearest Thursday
		var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
		// Return array of year and week number
		return [d.getUTCFullYear(), weekNo];
	},
	datefromweekyear: function(y,w) {
	var k = odate(1970,1,1);
	while (k.Year != y) k.addYears(1);
	while (k.week != w) k.addDays(7);
	return k.firstDateInWeek();
	},
	
	WeekDay: function()
	{
	return this[0].getDay() == 0 ? 7:this[0].getDay();
	},
	addDays: function(x)
	{
	
	return this.map(function(d) {d.setDate(d.getDate()+x)});
	},
	addWeeks: function(x)
	{
	
	return this.map(function(d) {d.setDate(d.getDate()+(7*x))});
	},
	addMonths: function (x)
	{
	return this.map(function(d) {d.setMonth(d.getMonth()+x)});
	},
	map: function(cb)
	{
		cb(this[0]);
		Odate.prototype.jsDate = this[0];
		Odate.prototype.updateVars(this);
		return new Tee(this[0]);
	},
	addYears: function (x) {
	return this.map(function (d) {
	d.setFullYear(d.getFullYear()+x);
	});
	},
	addMinutes: function (x) {
		return this.map(function(d){d.setMinutes(d.getMinutes() + x)});
	},
	addMilliSeconds: function(x) {
	return this.map(function(d){d.setMilliseconds(d.getMilliseconds()+x)});
	},
	addSeconds: function(x) {
	return this.map(function(d){d.setSeconds(d.getSeconds()+x)});
	},
	addHours: function(x) {
	return this.map(function(d){d.setHours(d.getHours()+x);});
	},
	jsDate: "",
	Weekend:function()
	{
		return this.weekDay == 6 || this.weekDay == 7;
	},
	datesBetween: function (x,y)
	{
	
		if (x.timestamp > y.timestamp) return false;
		if (x.timestamp == y.timestamp) {
	
		t = [];
		t.push(x);
		return t;
		}
		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = x[0];
	var secondDate = y[0];
	
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	
	var t = [];
	var tmp = new Tee(x.timestamp);
	
	t.push(x);
	for (var i = 0;i<diffDays;i++)
	{
		t.push(tmp);
		tmp = tmp.addDays(1);
	}
		return t;
	},
	when: function()
	{
		var delta = Math.abs(this[0].getTime()-Date.now())/1000;
		var days = Math.floor(delta / 86400);
		delta -= days * 86400;
	
		// calculate (and subtract) whole hours
		var hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;
	
		// calculate (and subtract) whole minutes
		var minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;
	
		// what's left is seconds
		var seconds = delta % 60;  // in theory the modulus is not required
		//console.log(days,hours,minutes,seconds);
		var k = new OdateInterval();
		k.days = days;
		k.hours = hours;
		k.minutes = minutes;
		k.seconds = this.roundTo(seconds,0);
		if (k.seconds == 60) {k.seconds = 0; k.minutes++;}
		if (k.minutes == 60) {k.minutes = 0; k.hours++;}
		if (k.hours == 24) {k.hours=0;k.days++;}
		return k;
    },
    roundTo: function(a,b)
	{
	a = Number(a);
	return Math.round((a+0.00001)*Math.pow(10,b))/Math.pow(10,b);
	
	
	},
	since: function()
	{
		var delta = Math.abs(Date.now() - this[0].getTime())/1000;
		var days = Math.floor(delta / 86400);
		delta -= days * 86400;
	
		// calculate (and subtract) whole hours
		var hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;
	
		// calculate (and subtract) whole minutes
		var minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;
	
		// what's left is seconds
		var seconds = delta % 60;  // in theory the modulus is not required
		//console.log(days,hours,minutes,seconds);
		var k = new OdateInterval();
		k.days = days;
		k.hours = hours;
		k.minutes = minutes;
		k.seconds = this.roundTo(seconds,0);
		if (k.seconds == 60) {k.seconds = 0; k.minutes++;}
		if (k.minutes == 60) {k.minutes = 0; k.hours++;}
		if (k.hours == 24) {k.hours=0;k.days++;}
		return k;
		},
	interval: function(delta)
	{
		var days = Math.floor(delta / 86400);
		delta -= days * 86400;
	
		// calculate (and subtract) whole hours
		var hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;
	
		// calculate (and subtract) whole minutes
		var minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;
	
		// what's left is seconds
		var seconds = delta % 60;  // in theory the modulus is not required
		//console.log(days,hours,minutes,seconds);
		var k = new OdateInterval();
		k.days = days;
		k.hours = hours;
		k.minutes = minutes;
		k.seconds = $O.roundTo(seconds,0);
		return k;
	
	},
	getAge: function()
	{
	var ageDifMs = Date.now() - this[0].getTime();
	console.log(ageDifMs);
	   var ageDate = new Date(ageDifMs); // miliseconds from epoch
	   return Math.abs(ageDate.getUTCFullYear() - 1970);
	},
	formatDate: function (x)
	{
		var zeroPad = function(z)
		{
			z = ""+z;
			return z.length == 1 ? '0'+z:z;
		}
		return x.replace('%d',zeroPad(this.day)).
		replace('%m',zeroPad(this.month)).replace("%w",this.weekDayString.substr(0,3)).
		replace('%Y',this.Year).replace('%h',zeroPad(this.hour)).replace('%g',zeroPad(this.minute)).replace('%s',zeroPad(this.second)).replace("%W",this.weekDayString);
	},
	set: function(x,v)
	{
		var pp = function(p)
		{
	
		var x=
		p=="hour" && "setHours" ||
		p=="minutes" && "setMinutes" ||
		p=="seconds" && "setSeconds" ||
		p=="day" && "setDate" ||
		p=="month" && "setMonth" ||
		p=="year" && "setFullYear";
		return x;
		}
	
		if (typeof x == "string")
		{
		var type = pp(x);
		x=="month" && v--;
		return new Tee(this[0][type](v));
		}
		else
		if (typeof x == "object")
		{
		 for(property in x)
		 {
			 property == "month" && x[property]--;
	
		 this[0][pp(property)](x[property]);
		 }
		return new Tee(this[0]);
		}
	
	}
	,
	Helligdage: function()
	{
		/*
		 $holidays[] = array( $easter-(49*ONEDAY),          'Fastelavn', 'mærke' );
		$holidays[] = array( $easter-(7*ONEDAY),           'Palmesøndag', 'hellig' );
		$holidays[] = array( $easter-(3*ONEDAY),           'Skærtorsdag', 'hellig' );
		$holidays[] = array( $easter-(2*ONEDAY),           'Langfredag', 'hellig' );
		$holidays[] = array( $easter,                    'Påskedag', 'hellig' );
		$holidays[] = array( $easter+(1*ONEDAY),           '2. påskedag', 'hellig' );
		$holidays[] = array( $easter+(26*ONEDAY),          'Store bededag', 'hellig' );
		$holidays[] = array( $easter+(39*ONEDAY),          'Kristi Himmelfartsdag ', 'hellig' );
		$holidays[] = array( $easter+(49*ONEDAY),          'Pinsedag', 'hellig' );
		$holidays[] = array( $easter+(50*ONEDAY),          '2. pinsedag', 'hellig' );
		$holidays[] = array( mktime(0,0,0,1,1,  $year),     'nytårsdag', 'mærke' );
		$holidays[] = array( mktime(0,0,0,2,14, $year),     'Valentinsdag', 'mærke' );
		$holidays[] = array( mktime(0,0,0,6,5,  $year),     'Grundlovs dag', 'hellig' );
		$holidays[] = array( mktime(0,0,0,12,24,$year),     'juleaften', 'mærke' );
		$holidays[] = array( mktime(0,0,0,12,25,$year),     'juledag', 'hellig' );
		$holidays[] = array( mktime(0,0,0,12,26,$year),     '2. juledag', 'hellig' );
		$holidays[] = array( mktime(0,0,0,12,31,$year),     'nytårs aften', 'mærke' );        */
		var t = [];
	
		t.push(this.Easter().addDays(-7));
		t.push(this.Easter().addDays(-3));
		t.push(this.Easter().addDays(-2));
		t.push(this.Easter());
		t.push(this.Easter().addDays(1));
		t.push(this.Easter().addDays(26));
		t.push(this.Easter().addDays(39));
		t.push(this.Easter().addDays(49));
		t.push(this.Easter().addDays(50));
		t.push(this.set({day:5,month:6}));
		t.push(this.set({day:25,month:12}));
		t.push(this.set({day:26,month:12}));
		t.push(this.set({day:1,month:1}));
		return t;
	},
	Hellig: function()
	{
		return $O.grep(this.Helligdage(),function (i,v)
		{
			return v.day == this.day && v.month == this.month && v.Year == this.Year;
		}.bind(this)) == false ? false:true;
	},
	Easter: function(Y) { //https://stackoverflow.com/questions/1284314/easter-date-in-javascript
		if (typeof Y == "undefined") Y = this.Year;
		var C = Math.floor(Y/100);
		var N = Y - 19*Math.floor(Y/19);
		var K = Math.floor((C - 17)/25);
		var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
		I = I - 30*Math.floor((I/30));
		I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
		var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
		J = J - 7*Math.floor(J/7);
		var L = I - J;
		var M = 3 + Math.floor((L + 40)/44);
		var D = L + 28 - 31*Math.floor(M/4);
	
		//return padout(M) + '.' + padout(D);
		return new Tee(Y,M,D);
	}
	,
	isLeap:function(y)
	{
	if (typeof y == "undefined") y = this.Year;
	return new Tee(y,2,29).day == 29;
	},
	DayOfYear: function() {
		var month = this[0].getMonth();
		var year = this[0].getFullYear();
		var days = this[0].getDate();
		for (var i = 0; i < month; i++) {
			days += new Date(year, i+1, 0).getDate();
		}
		return days;
	}
	}
	function OdateInterval()
	{
	}
	OdateInterval.prototype = {
	format: function(a)
	{
		var zeroPad = function(z)
		{
			z = ""+z;
			return z.length == 1 ? '0'+z:z;
		}
		if (a == void 0)
		{
		if (this.days > 0)
		return this.days +"d "+zeroPad(this.hours) + ":"+zeroPad(this.minutes) + ":" + zeroPad(this.seconds);
		else
		return zeroPad(this.hours) + ":"+zeroPad(this.minutes) + ":" + zeroPad(this.seconds);
		}
		a = a.replace("%D",this.days);
		a = a.replace("%d",zeroPad(this.days));
		a = a.replace("%h",zeroPad(this.hours));
		a = a.replace("%g",zeroPad(this.minutes));
		a = a.replace("%s",zeroPad(this.seconds));
		return a;
	}
	}
	var Tee = function()
	{
	return new Odate(arguments);
	}
	window.odate = Tee;

})()