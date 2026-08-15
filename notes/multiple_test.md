
## Writing multiple tests

- #### beforeEach

Suppose you want to execute a particular function `authenticate()` that loads the `jwt` into the `cookies` before every test
```js
// Now the most naive way to do this is just add 'authenticate' in each test 

test("description", () => {
	authenticate();
	expect(function(x)).toEqual("value");
});

// Now this works for 1 test but what if there are tens of hundreds of tests that want this particular function 'authenticate' to be executed so that would be redundant right?
```

Another way to do this is to just use an inbuilt function in `JEST` which is `beforeEach()`
```js
// This is the standard way to authenticate a function that needs to be executed before each test

beforeEach(() => {
	authenticate();
});

// Since this loads up/sets something up, we call this as 'setUp hook'
```

- #### afterEach

Now again suppose you want to remove `jwt` after each test so we create a function `cleanUp()`
```js
// The most naive way to do this is just call the 'cleanUp' function after each test

test("description", () => {
	authenticate();
	expect(function(x)).toEqual("value");
	cleanUp();
});
```

```js
// Again the standard way to do this is to use inbuilt 'afterEach()' function

afterEach(() => {
	cleanUp();
});

// Since this clears/removes something, we call this as 'teardown hook'
```

- #### beforeAll & afterAll

Now suppose you know the fact that you don't need to `authenticate()` over and over, so we can just load the `jwt` into `browser` once and then run all tests and then `cleanUp()` at last when all tests are complete
```js
beforeAll(() => {
	authenticate();
});
// Since this loads up/sets something up, we call this as 'setUp hook'

afterAll(() => {
	cleanUp();
});
// Since this clears/removes something, we call this as 'teardown hook'
```

- #### Async functions

Out of every case we can't say that every function we need to execute `beforeAll` or `beforeEach` test to be synchronous, sometimes it can be async as well. Also in the above example loading `jwt` is also an async function (This works for all 4 `Hooks`)
```js
// So to make sure our tests run properly we need to return the promise made by the 'authenticate()' function only if 'authenticate()' returns a promise

beforeAll(() => {
	return authenticate();
});

// or

// If using async/await which is generally the better way to write 'async' code we should use

beforeAll(async () => {
	await authenticate();
});

```
### Hooks
```js
// So basically all the above inbuilt 'jest' functions are called 'Hooks'

// Now the main difference between beforeEach() vs beforeAll() and their after variants is how often they run

beforeEach(() => {
	func(x);
}); 
// func(x) -> test 1 -> func(x) -> test 2 -> func(x) -> test 3

beforeAll(() => {
	func(x);
});
// func(x) -> test 1 -> test 2 -> test 3

// similarly for 'teardown hooks' too
```