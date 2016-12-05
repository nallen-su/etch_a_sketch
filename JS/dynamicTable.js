$(document).ready(function() {

	newGrid(50);

	$(".box").mouseenter(function() {
		$(this).css("background-color","black");
	});

	$("#colorGrid").click(function() {
		$(".box").mouseenter(function() {
			$(this).css("background-color",getRandomColor());
		});
	});

	$("#blackGrid").click(function() {
		$(".box").mouseenter(function() {
			$(this).css("background-color","black");
		});
	});
	
});

function newGrid(dimension) {
	var $sketch = $("#sketch");
	for (var i = 0; i < dimension; i++) {
		var $sketch = $("#sketch");
		var $table = $("<tr>");
		$sketch.append($table);
		for (var j=0; j<dimension; j++) {
			$table.append("<td class='box' data-grayscale='0'></td>");
		}
		$sketch.append("</tr>");
	}
	var size = 800 / dimension;
	$(".box").css({"height":size+"px", "width":size+"px"});
} 

function clearGrid() {
	$(".box").data("grayscale",0);
	$(".box").css({"background-color":"white"});
}

function userInputGrid() {
	var number = newGrid(prompt("How many rows and columns would you like?"));
	return number;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}














