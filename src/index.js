import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 8000;
const mockUsers = [
  { id: 1, name: "John", email: " john@example.com" },
  { id: 2, name: "Jack Smith", email: " jack@example.com" },
  { id: 3, name: "John Doe", email: " john@example.com" },
];
const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 200 },
  { id: 3, name: "Orange", price: 300 },
];
app.get("/", (req, res) =>
  res.status(201).send("Welcome to the Express server!!")
);

app.get("/api/users", (req, res) => {
  res.status(200).send(mockUsers);
});
app.get("/api/products", (req, res) => {
  res.status(200).send(products);
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).send("Bad request. Invalid id");
  }
  const findUser = mockUsers.find((user) => user.id === id);
  if (findUser) {
    res.status(200).send(findUser);
  } else {
    res.status(404).send("User not found");
  }
  res.status(200).send();
});
app.listen(port, () => console.log("listening on port " + port));
