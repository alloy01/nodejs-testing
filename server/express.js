import e from "express";

const app = e();

const port = 5000;

app.use(e.json());

app.get("/api", (req, res) => {
    res.send("API is running...");
});

app.get("/api/users", (req, res) => {
    res.status(200).json({
        message: "Something here."
    });
});

app.get("/api/users/:id", (req, res) => {
    if (req.params.id === "999") {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json({
        message: "Something here."
    });
});

app.post("/api/add_user", (req, res) => {
    res.status(201).json({
        message: "User created successfully"
    });
});

app.put("/api/users/:id", (req, res) => {
    res.status(200).json({
        message: "User updated successfully"
    });
});

app.patch("/api/users/:id", (req, res) => {
    res.status(200).json({
        message: "User updated successfully"
    });
});

app.delete("/api/users/:id", (req, res) => {
    res.status(200).json({
        message: "User deleted successfully"
    });
});

app.listen(port, () => {
    console.log(`server on port: ${port}`)
})


export default app;