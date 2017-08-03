$(document).ready(function(){

function createDivs(edge){	
	var arr=[];
	for(var i = 0; i < (edge * edge); i++){
		arr.push('<div class="gridElement"></div>');
	};
	return arr;
}	

console.log(createDivs(16));

function insertGrid(array){
	$('body').append('<div class="grid"></div>');
	
	array.forEach(function(entry){
		$('.grid').append(entry);
	});
	
	var width = 5;
	var marg = 1;
	var gridWidth = (width * (Math.sqrt(array.length))) + ((Math.sqrt(array.length)) * 2*marg);
	
	$('.gridElement').width(width + "px");
	$('.gridElement').height(width + "px");
	$('.gridElement').css("background-color", "lightblue");
	$('.gridElement').css("margin", marg, "auto");
	
	$('.gridElement').css("display", "inline-block");
	$('.gridElement').css("padding", "0px");
	$('.grid').width(gridWidth + "px");
	//$('.grid').css("maxHeight", gridWidth+ "px");
}

insertGrid(createDivs(100));

$('.gridElement').mouseover(function(){
		$(this).css("background-color", "red");
	});


});
