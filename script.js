// promedio

function callbackPromedio (uno, dos, tres, callback){

	var promedio = ( uno + dos + tres)/3;

	return callback(promedio);
}


// segundero

var seconds=1
	function segundero (){
		document.getElementById("titulo").innerHTML = seconds++
	}
	
setInterval (segundero,1000); 
