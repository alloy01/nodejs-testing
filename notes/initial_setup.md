##### nodeJS testing

## Configuration -

1. Install `jest` & `supertest` as a dev-dependencies
```Bash
npm install --save-dev jest
# Install jest as a testing framework 

npm install --save-dev supertest
npm install --save-dev @types/supertest
# Install supertest to test api endpoints

# If you want to use TypeScript

npm install --save-dev ts-jest
npm install --save-dev @types/jest

# As of Sept 01 2026 ts-jest is only supported for TypeScript 6.0

npm uninstall typescript
npm install --save-dev typescript@6.0
```

2.  Add `script` in `package.json`
```json
"scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

3.  Create `jest.config.js` with this
```js
export default {
  testEnvironment: "node"
};
```

```bash
# If using TypeScript run

npx ts-jest config:init

# This will create a jest.config.js file, you can modify RootDir too
```

4.  Make sure to have `module` in `package.json` 
```json
{
	"type": "module"
}
```

5.  `test` file naming convention
```bash
[name].test.js # This is the convention used by jest to find test files
```

6. Root directory ( optional )
```bash
# If you want to have config in different file and tests in different file
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
	
# Then configure the root directory in jest.config.js

export default {
    rootDir: "..",
    testEnvironment: "node"
};
```

7.  To run `tests` , get into root directory
```bash
npm test
```

## NOTE:

We cannot run tests written in `Supertest` alone we would need a framework, here we are using `Jest`

