$(document).ready(function() {
	newGrid(16);

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