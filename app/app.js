var Calculator = (function() {
	function Calculator() {};
	
	Calculator.prototype.add = function(num1, num2) {
		return num1 + num2;
	}
	
	return Calculator;
}());