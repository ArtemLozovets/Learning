;(function() {
	//typeLesson();
	//numberLesson();	
	//numberWrapper();
	//stringLesson();
	//booleanLesson();
	//typeConvertLesson();
	//conditionalInstructionsLesson();
	//loopLesson();
    //functionLesson();
    //closureLesson();
    //exceptionLesson();
    objectsLesson();

})();

//=========================================================
function typeLesson(){
	//Простые типы
	var myString = "Loras Cat",
		myNumber = 666,
		myBool = true,
		myNull = null,
		myUndef = undefined;

	console.clear();
	console.log(typeof myString);
	console.log(typeof myNumber);
	console.log(typeof myBool);
	console.log(typeof myNull);
	console.log(typeof myUndef);
	console.log(myString.toUpperCase());

	//Объектные типы
	var obj = {name:'LoraX'},
		array = [1,2,3],
		regexp = /w+/g,
		func = function(){};
		console.log('-----------------');
		console.log(typeof obj);		
		console.log(typeof array); 
		console.log(typeof regexp);
		console.log(typeof func);
}


//==========================================================
function numberLesson(){
	console.clear();
	console.log(5);
	console.log(0);
	console.log(0xffccbb);
	console.log(011);

	console.log(12.45);
	console.log(.54);
	console.log(2e5);
	console.log(2e-5);
}

//===========================================================
function numberWrapper(){
	var N = new Number(666);
	var num = 555;
	var dec = 45.6;
	
	console.clear();
	console.log(typeof N);
	console.log(typeof num);

	console.log(N.toFixed(2));
	console.log(num.toFixed(2));

	console.log(num.toExponential(4));
	console.log(dec.toPrecision(6));

	console.log('10 == "10" =>', 10 == "10");
	console.log('10 === "10" =>', 10 === "10");
}

//===========================================================
function stringLesson(){
	var _str= "My \"test\" string for my lesson";
	console.log(_str, "=>", _str.length);
	var _str2 = "My \
new string \
in lesson";
	console.log(_str2);
	var _str3 = "My\n\tnew\n\t\ttest\n\t\t\tstring";
	console.log(_str3);
	var _str4 = "Sometimes the same is different";
	console.log(_str4," => ", _str4.charAt(_str4.length-1));
	console.log("\"_str4.substring(10)\" => ",_str4.substring(10));
	console.log("\"_str4.substring(10,16)\" => ",_str4.substring(10,16));
	console.log("\"_str4.slice(-10)\" => ",_str4.slice(-10));
	console.log("\"_str4.substr(10,10)\" => ",_str4.substr(10,10));
	console.log("\"_str4.indexOf(\"i\")\" => ",_str4.indexOf('i'));
	console.log("\"_str4.lastIndexOf(\"i\")\" => ",_str4.lastIndexOf('i'));
	console.log('"_str4.replace("is", "is not")" => ',_str4.replace("is", "is not"));
	console.log("\"_str4.split(' ')\" => ",_str4.split(' '));
	console.log("\"_str4.toUpperCase()\" => ",_str4.toUpperCase());
	console.log("\"_str4.toLowerCase()\" => ",_str4.toLowerCase());
	console.log("\"_str4[4]\" => ",_str4[4]);

}

//===========================================================
function booleanLesson(){
	console.log('"5 === 6" => ', 5 === 6);	
	console.log('"5 === 5" => ', 5 === 5);	
	console.log('"Boolean(5)" => ', Boolean(5));
	//Falsy values
	console.log('"Boolean(undefined)" => ', Boolean(undefined));
	console.log('"Boolean(null)" => ', Boolean(null));
	console.log('"Boolean(0)" => ', Boolean(0));
	console.log('"Boolean(NaN)" => ', Boolean(NaN));
	console.log('"Boolean("")" => ', Boolean(""));

	var a = 0,
		isTrue = true;
		//isTrue = false;
	isTrue && (a = 5);
	console.log(a);

	//var someString = "Non-empty string";
	var someString = "";
	var otherString = someString || "Default String";
	console.log(otherString);
}

//===========================================================
function typeConvertLesson(){
	console.log('\"5 + "5"\" => ', (5 + "5"), typeof(5 + "5"));
	console.log('\"5 * "4"\" => ', (5 * "4"), typeof(5 * "4"));
	console.log('\"5 * "hi"\" => ', (5 * "hi"), typeof(5 * "hi"));
	console.log('"Number("555")" => ', (Number("555")), typeof(Number("555")));
	console.log('"String(4444)" => ', (String(4444)), typeof(String(4444)));
	console.log('"!!5" => ', (!!5), typeof(!!5));
	console.log('"!!0" => ', (!!0), typeof(!!0));
	console.log('"555 + """ => ', (555 + ""), typeof(555 + ""));
	console.log('"+"555"" => ', (+ "555"), typeof(+ "555"));
	console.log('"+"555"" => ', (+ "555"), typeof(+ "555"));

	var myNum = 666;
	console.log('myNum.toString(16) =>', myNum.toString(16), typeof(myNum.toString(16)));
	console.log('parseInt("45px", 10)', parseInt("45px", 10), typeof(parseInt("45px", 10)));
	console.log('parseInt("45px", 16)', parseInt("45px", 16), typeof(parseInt("45px", 16)));
	console.log('parseFloat("100 em", 16)', parseInt("100 em", 16), typeof(parseInt("100 em", 16)));

}

//===========================================================
function conditionalInstructionsLesson(){
	var name = 'Serhii';
	var homecity;
	if(name === 'Yulia'){
		homecity = "Lubny";
	}else if(name === 'Serhii'){
		homecity = "Bagachka";
	}else if(name === 'Olga'){
		homecity = 'Lviv';
	}

	console.log(homecity);

	var name2 = 'Olga';
	switch(name2){
		case 'Yulia': homecity = "Lubny"; break;
		case 'Serhii': homecity = "Bagachka"; break;
		case 'Olga': homecity = "Lviv"; break;
		default: homecity = "Kyiv";
	}

	console.log(homecity);

	var x = 10;
	var text = x > 10 ? "x > 10" : x < 10 ? "x < 10" : "x = 10";
	console.log('x = '+ x +' |', text);
}

//===========================================================
function loopLesson(){

	// for (инициализация; тест; инкремент) тело цикла
	console.clear();
	for(i=0;i<12;i++){
     	console.log(i);
	};

	console.clear();
	for(i=10;i--;){
		console.log(i);
	}

	//while(выражение) инструкция
	console.log('WHILE LOOP');
	var a = 10;
	while(a--){
		console.log(a);
	}

	console.log('DO WHILE LOOP');
	var b = 4
	do console.log(b); while(b--);
}

//===========================================================
function functionLesson(){

	var greet = function(name){
		console.log(arguments);
		return "Hello " + name;
	};

	console.log(greet("Serge", 12).toUpperCase());

	var greeting = (function(name){
		return 'Hello ' + name;
	})("Sorax");

	console.log(greeting);
}


//===========================================================
function closureLesson(){
	console.log('Closure Lesson');
	var func = function(){
		var i = 10;
		return function(){
			return i;
		}
	};

	var anotherFunc = function(){
		var i = 20;
		console.log(func()());
	};

	anotherFunc();

console.log('----------COUNTER------------');

	var counter = (function(){
		var count = 0;
		return function(num){
			count = num !== undefined ? num : count;
			return count++;
		};
	}());

	console.log(counter());
	console.log(counter());
	console.log(counter());
	console.log(counter(500));
	console.log(counter());
	console.log(counter());
	console.log(counter());
}

//===========================================================
function exceptionLesson(){
	console.log('---Exception Lesson---');
	var calculate = function(n){
		if(n > 10) throw new Error("n should be less than 10");
		return n + 10;
	};

	try{
		calculate(20);
	} catch(e){
		console.log('Error text: ' + e.message);
	} finally{
		console.log('Finally');
	}
}

//===========================================================
function objectsLesson(){
	console.log('---Objects Lesson---');
}




