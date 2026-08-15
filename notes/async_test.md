
## Writing async tests

- #### Promises + callback
```js
// Point to be noted is that 'fetchData' is the function we want to test, 'data' is the promise and we expect it to be resolved to "value"

test("description", () => {
	return fetchData(url).then(data => {
		expect(data).toEqual("value");
	});
});
```
suppose there's a function that returns a promise to be resolved and `jest` will wait for the promise to be resolved

Try this yourself, with https://jsonplaceholder.typicode.com/

- #### Async / await
```js
// Using async / await is preferred over callback method

test("description", async () => {
	const data = await fetchData(url);
	expect(data).toEqual("value");
});
```
here `jest` will wait till data is fetched and then check, similar to basic testing

```js
// using resolves / rejects to make the test easier to understand

test("description", async () => {
	const data = await fetchData(url);
	expect(data).resolves.toEqual("value");
});
```