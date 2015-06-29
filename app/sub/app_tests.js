describe('Calculator2 tests', function() {
	it('add adds', function() {
		// Arrange
		var calc = new Calculator2();
		
		// Act
		var result = calc.subtract(1, 2);
		
		// Assert
		expect(result).toBe(-5);
	});
	
	// it('will fail', function() {
	// 	// Arrange
	// 	var calc = new Calculator();
		
	// 	// Act
	// 	var result = calc.add(1, 2);
		
	// 	// Assert
	// 	expect(result).toBe(5);
	// });
})