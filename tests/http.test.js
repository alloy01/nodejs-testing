import request from "supertest";
import app from "../server/express.js";


// GET


// Basic matcher — toBe
test("GET /api/users returns status 200", async () => {
    const response = await request(app)
        .get("/api/users");

    expect(response.status).toBe(200);
});




// toEqual — compare entire response body
test("GET /api/users returns expected data", async () => {
    const response = await request(app)
        .get("/api/users");

    expect(response.body).toEqual({
        message: "Something here."
    });
});




// toContain — check if response contains something
test("GET /api/users contains expected message", async () => {
    const response = await request(app)
        .get("/api/users");

    expect(response.body.message).toContain("Something");
});


// POST


test("POST /api/add_user creates a user", async () => {
    const response = await request(app)
        .post("/api/add_user")
        .send({
            name: "Aj",
            age: 17
        });

    expect(response.status).toBe(201);

    expect(response.body).toEqual({
        message: "User created successfully"
    });
});


// PUT


test("PUT /api/users/1 updates a user", async () => {
    const response = await request(app)
        .put("/api/users/1")
        .send({
            name: "Aj",
            age: 17
        });

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
        message: "User updated successfully"
    });
});


// PATCH


test("PATCH /api/users/1 partially updates a user", async () => {
    const response = await request(app)
        .patch("/api/users/1")
        .send({
            name: "New Name"
        });

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
        message: "User updated successfully"
    });
});


// DELETE


test("DELETE /api/users/1 deletes a user", async () => {
    const response = await request(app)
        .delete("/api/users/1");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
        message: "User deleted successfully"
    });
});


// HTTP ERROR

// HTTP errors are normally tested through the response,
// rather than using toThrow().

test("GET /api/users/999 returns 404", async () => {
    const response = await request(app)
        .get("/api/users/999");

    expect(response.status).toBe(404);

    expect(response.body).toEqual({
        message: "User not found"
    });
});


// ASYNC / AWAIT


test("GET /api/users using async-await", async () => {
    const response = await request(app)
        .get("/api/users");

    expect(response.status).toBe(200);
});


// PROMISE


test("GET /api/users using promise", () => {
    return request(app)
        .get("/api/users")
        .then(response => {
            expect(response.status).toBe(200);

            expect(response.body).toEqual({
                message: "Something here."
            });
        });
});