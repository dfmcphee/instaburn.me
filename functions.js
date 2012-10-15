// Returns class and text for burn degree label
function getBurnDegree(score) {
	var topScore = topBurn.score;
	var degree = "";
	var label_class = "";
	
	if (score > (topScore * 0.75)) {
		degree = "4th Degree";
		label_class = "label-important";
	}
	else if (score > (topScore * 0.5)) {
		degree = "3rd Degree";
		label_class = "label-warning";
	}
	else if (score > (topScore * 0.25)) {
		degree = "2nd Degree";
		label_class = "label-warning";
	}
	else if (score > 0) {
		degree = "1st Degree";
	}
	else if (score === 0) {
		degree = "Ho Hum";
	}
	else if (score < 0) {
		degree = "Ice Cold";
		label_class = "label-info";
	}
	return {degree: degree, label_class: label_class};
}