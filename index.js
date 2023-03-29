const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();

app.use(cors());
app.use(express.json());

const router = require('./routes/authorRouter');

app.use('/api/v1',router);

db.sequelize.sync({ force: false }).then(() => {
    console.log(' db is synced --------------------')
}).catch((err) => {
    console.log( ' error in syncing ', err);
})

app.get("/", (req, res) => {
    console.log( " what is this then ");
    res.json({
      username: "Vishal",
      email: "Vishal@gmail.com",
    });
  });

  const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})






