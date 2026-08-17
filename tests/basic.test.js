// Checking basic matchers
const add_num = (x, y) => {
    return x + y;
}
test("adds a + b to the value.", () => {
    expect(add_num(3, 5)).toBe(8);
});




// toContain
const shopping_list = [
    'diapers',
	'cleanx',
	'trash bags',
	'milk'
]
test("The shopping list has milk on it", () => {
	expect(shopping_list).toContain('milk');
});




// Throwing errors
class MathError extends Error {} // Allows custom error types
const divide = (a, b) => {
	if(b === 0){
		throw new MathError("Cannot divide by zero"); 
	} 
	
	return a / b; 
}
// Generic error
test("throw generic error when dividing by zero", () => {
	expect(() => divide(10, 0)).toThrow();
});
// Particular message 
test("throw error with a particular message when dividing by zero", () => {
	expect(() => divide(10, 0)).toThrow("Cannot divide by zero"); 
});
// Particular 'type' of error message
test("throw error with a particular type when dividing by zero", () => {
	expect(() => divide(10, 0)).toThrow(MathError);
});