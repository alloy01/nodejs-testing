## Writing basic tests

- #### Syntax
```js
test("description", () => {
	expect(function(x)).toBe(y);
});
```
expect returns an `expectation` object and we compare them with `matcher` 

- #### Matchers
```js
let a = {"name": "ajeet"};
let b = {"name": "ajeet"};

expect(a).toBe(b); <-- // This test will fail as `a` and `b` are different references

expect(a).toEqual(b); <-- // This test will pass as value of `a` and `b` are equal but references might be different, recursively checks deep contents 

expect(a).not.toBe(b); <-- // Checks it `not` toBe/toEqual
```
- more matchers and their details can be found https://jestjs.io/docs/expect

- #### Truthiness
```js
const n = null;

expect(n).toBeNull(); <-- // Matches only with null
expect(n).toBeDefined(); <-- // Matches only with defined variables
expect(n).toBeUndefined() <-- // Matches only with undefined 
expect(n).toBeFalsy(); <-- // Matches only with anything that if statement treats as false
expect(n).toBeTruthy(); <-- // Matches only with anything that if statements as true
```

- #### Numbers
```js
expect(value).toBeGreaterThan(x);
expect(value).toBeLessThan(x);
expect(value).toBeGreaterThanOrEqual(x);
expect(value).toBeLessThan(x);

expect(value).toBe(x); <-- // Both toBe/toEqual are treated as equivalent

expect(value).toBeCloseTo(x); <-- // Works for float values 
```

- #### Strings
```js
// We will make use of regular expression (regex)

test("There is no 'I' in team", () => {
	expect("team").not.toMatch(/I/);
});
```

- #### Arrays & Iterables
```js
const shopping_list = [
	'diapers',
	'cleanx',
	'trash bags',
	'milk'
];

test("The shopping list has milk on it", () => {
	expect(shopping_list).toContain('milk');
});
```

- #### Exceptions - 
  exceptions are usually tested with `toThrow()`

```js
// To just check whether a function is throwing an error or not

function divide(a, b){
	if(b === 0){
		throw new Error("Cannot divide by zero"); 
	} 
	
	return a / b; 
}

test("throws when dividing by zero", () => {
	 expect(() => divide(10, 0)).toThrow(); 
});
```

```js
// To just check for a particular error message

function divide(a, b){
	if(b === 0){
		throw new Error("Cannot divide by zero"); 
	} 
	
	return a / b; 
}

test("throws when dividing by zero", () => {
	 expect(() => divide(10, 0)).toThrow("Cannot divide by zero"); 
});
```

```js
// To just check for a particular error type

// Make sure to add this, this will help create a new error class
class MathError extends Error {} // Allows custom error types

function divide(a, b){
	if(b === 0){
		throw new MathError("Cannot divide by zero"); 
	} 
	
	return a / b; 
}

test("throws when dividing by zero", () => {
	 expect(() => divide(10, 0)).toThrow(MathError); 
});
```