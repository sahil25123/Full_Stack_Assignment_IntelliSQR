import express from 'express';
const app = express();

const port = 9001;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the API!" });
});