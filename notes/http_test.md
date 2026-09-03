
## Writing HTTP tests 

- #### GET
```js
import request from "supertest";
import app from "../src/app"; // Express application instance

describe('GET /api/users', () => {
	
	// it/test is used to write a single test whereas describe can be used to make a group of many tests
	it("Gets the data of the user from api", async () => {
		const respomse = await request(app).get('/api/users');
		
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
	
	// it/test is used to write a single test whereas describe can be used to make a group of many tests
	it("Gets the data of the user from api", async () => {
		const respomse = await request(app).post('/api/add_user').send({
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
	
	// it/test is used to write a single test whereas describe can be used to make a group of many tests
	it("Gets the data of the user from api", async () => {
		const respomse = await request(app).delete('/api/delete_user')
		
		expect(response.status).toBe(200);
		expect(response.body).toEqual({
			message: "Something here."
		});
	});
});
```