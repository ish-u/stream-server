const express = require("express");
const app = express();

app.use(express.urlencoded());

app.post("/auth", (req, res) => {
  // streamkey
  const streamkey = req.body.key;

  // authenticating
  if (streamkey === "secret") {
    res.status(200).send();
    return;
  }

  // rejecting the ability to stream if incorrect stream key is given
  res.status(403).send();
});

app.listen(8000, () => {
  console.log("Auth Server running on 8000 !");
});
