// index.js
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/dbConfig");
const userLeadRoutes = require("./routes/usersLeadsRoutes");

const app = express();
connectToDatabase();

app.use(cors()); // Corrected line

// parse request of content type - application/json
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Connected to the server');
});

app.use("/usersLeads",userLeadRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});