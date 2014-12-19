describe("Calculator", function() {
	describe(".performOperation", function(){
	var calc;	

	beforeEach(function(){
		calc = new Calculator();
	});	
	it("performs addition of two numbers", function() {
			
			var result = calc.performOperation("add",2,3);
			expect(result).toBe(5);
		});

	it("performs subtraction of two numbers", function() {
			
			var result = calc.performOperation("subtract",5,2);
			expect(result).toBe(3);
		});
	it("performs multiplication of two numbers", function() {
			var result = calc.performOperation("multiply",5,5);
			expect(result).toBe(25);
		});
	it("performs division of two numbers", function() {
			var result = calc.performOperation("divide",100,20);
			expect(result).toBe(5);
		});

	});
});