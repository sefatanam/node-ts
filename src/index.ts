import express from "express";

require("dotenv").config();

const app = express();

app.get("/hw", (request, response) => {
  try {
    return response.send({ name: "I'm ok" });
  } catch (err) {
    return response.status(400).send("Somethin went wrong");
  }
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
