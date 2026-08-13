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



// Throwing a error
const divide = (a, b) => {
	if(b === 0){
		throw new Error("Cannot divide by zero"); 
	} 
	
	return a / b; 
}
test("throws when dividing by zero", () => {
	expect(() => divide(10, 0)).toThrow("Cannot divide by zero"); 
});