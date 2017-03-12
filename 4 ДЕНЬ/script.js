window.onload = function() {
	var el = document.querySelector(".btn-animation"); // объявили переменную 	
	console.log (el.innerHTML); //показать в консоли что там лежит
	el.innerHTML ="Новый текст";
	$(".btn-animation").click(function() {
		$(".btn-animation").toggleClass("active"); //мметод JQ переключать класс
	}) //тоже что во 2 строчке, то с помощью JQuery
}