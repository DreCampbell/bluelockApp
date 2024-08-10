const express = require("express");
const app = express();
const PORT = 5001;

app.use("/", (req, res) => {
  res.send(`The server is running`);
});

app.listen(PORT, console.log(`The server is running on PORT ${PORT}`));
