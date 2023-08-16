const express = require("express");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();


const port = process.env.PORT || 3000;

// app.use(cors({
//   origin: "*",
// }));

app.use(cors());

connectDb(); 
app.use(express.json());
app.use("/api/items", require("./routes/todoItems"));








app.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})