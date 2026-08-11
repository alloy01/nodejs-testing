##### nodeJS testing

## Configuration -

1. Install `jest` as a dev-dependencies
```Bash
npm install --save-dev jest
```

2.  Add `script` in `package.json`
```json
"scripts": {
    "test": "jest --config=./configs/jest.config.js"
}
```

3.  Create `jest.config.js` with this
```js
export default {
  testEnvironment: "node"
};
```

4.  Make sure to have `module` in `package.json` 
```json
{
	"type": "module"
}
```

5.  `test` file naming convention
```json
[name].test.js // this is the convention used by jest to find test files
```

6. Root directory ( optional )
```json
// if you want to have config in different file and tests in different file
-- project/
	|
	|-- configs/
	|	|
	|	|-- jest.config.js
	|
	|-- test/
	|	|
	|	|-- basic.test.js  
	|
	
// then configure the root directory in jest.config.js

export default {
    rootDir: "..",
    testEnvironment: "node"
};
```

7.  To run `tests` , get into root directory
```bash
npm test
```

