;(function() {
	//typeLesson();
	//numberLesson();	
	numberWrapper();

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