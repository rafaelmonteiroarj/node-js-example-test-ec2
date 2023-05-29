const express = require("express");
const axios = require("axios");
const ip = require("ip");

// app configuration
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app routes
app.get("/", (req, res) =>
  res.send(`Hello from a Node.js ===> ${ip.address()}`)
);

app.get("/healthcheck", (req, res) => {
  try {
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("/dogs", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");

    console.log(JSON.stringify(response.data));

    const { message: dogImage } = response.data;
    res.send(
      `<img src="${dogImage}" alt="random dog" style="max-width: 500px" />`
    );
  } catch (error) {
    console.error(JSON.stringify(error));
    res.status(500);
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
