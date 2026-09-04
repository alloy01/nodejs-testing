
## Writing HTTP tests 

- #### GET
```js
// You might also need to import jest features from modules
import { describe, it, except } from "@jest/globals";
import request from "supertest";
import app from "../src/app"; // Express application instance

describe('GET /api/users', () => {
	
	// it/test is used to write a single test whereas describe can be used to make a group of many tests
	it("Gets the data of the user from api", async () => {
		const response = await request(app).get('/api/users');
		
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: "Somthing here."
		});
	});
});
```

- #### POST / PATCH / PUT
```js
describe('POST /api/add_user', () => {

	it("Add a user to the database", async () => {
		const response = await request(app).post('/api/add_user').send({
			message: "Something here."
		});
		
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: "Something here."
		});
	});
});
```

- #### DELETE  
```js
describe('DELETE /api/delete_user', () => {
	
	it("Deletes the user data from database", async () => {
		const response = await request(app).delete('/api/delete_user')
		
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: "Something here."
		});
	});
});
```