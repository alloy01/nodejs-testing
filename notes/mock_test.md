
- ### Meaning 

The fundamental idea of `mocking` is just to create a fake alternative to a real function, but why create a fake one when we already have real one? - The real function might be a bit `costly` to use, `resource heavy` or `time-consuming` to execute. 

#### Example? 

Suppose there's a particular function that shows `PAYMENT FAILED` message when user doesn't confirm the payment, so how do you check if it works or not?
1. Is to repeatedly do payments via Web Service or SaaS, which is again an issue how many times would you actually do this? Some tests have to be run over a number of times.
2. Create a fake ( Payment ) function that will just tell if the payment was completed or not.

- ### How to create Mock Function

```js
// Using 'jest.fn()' creates a mock function that doesn't return or do anything 

const payment = jest.fn();
```

- ### Mock calls

```js
// Now we know that the payment is a 'mock' function we can also know what parameters, values, payload has been passed through it

payment("user#632", 99);
// Tells us that payment of 99 was done by user#632, and now if there are number of these results then?

// Mock functions have inbuilt methods to know parameters passed

payment.mock.calls // Returns an array of arrays passed through the payment mock function

console.log(payment.mock.calls); 

// logs ->
[
	{"user#632", 99},
	{"user#809", 379}
]
``` 

- ### Returning value 

Since `mock` functions by default don't return any value then that's a bit concerning because many functions use return values from other functions

```js
// Here's a way to do it

const payment = jest.fn();

payment.mockReturnValue({
	message: "PAYMENT FAILED"
});

// Now whenever we run this function it will return the value
// We can also use payment.mockReturnValueOnce({}); to get a response once

console.log(payment());
// logs "PAYMENT FAILED"

// Another example

const number = jest.fn();

number.mockReturnValueOnce(10).mockReturnValueOnce(20).mockReturnValue(30);

console.log(number);

// 1st time -> 10
// 2nd time -> 20
// 3rd time -> 30
// 4th time -> 30 
```

- ### Special matchers

While writing some complex tests we need to check if a `mock` function was called with correct `parameter` 

```js
// This is a test to check if was called or not

test("payment was called with correct param", () => {
	expect(payment).toHaveBeenCalled();
});

// Test to check if the 'mock' function was called with correct parameter

test("payment was called with correct param", () => {
	expect(payment).toHaveBeenCalledWith(X);
});
// This test checks whether the parameter passed to the payment function was X or not
```
