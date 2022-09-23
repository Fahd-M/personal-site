require('dotenv').config();
const express = require('express');
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');

//Define Constants
const backendURL = process.env.BACKEND_URL;
const port = process.env.PORT || 8089;

//Express App set up 

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'personal-site/public')));
// app.use("/api", require("./routes/api.js"));

// Route setup
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "personal-site/public", "index.html"))
})


//to be able to send JSON data in the req body
// this is JSON parsing middleware
// app.use(express.json());
// app.use(express.static('public'));

// app.get('/', (req,res) => {
//     res.json('express running - home page');
// });

// app.get('/about', (req,res) => {
//     res.send('About Page');
// });

// app.get('./experience',(req,res) => {
//     res.send('Experience Page');
// });

// app.get('./education',(req,res) => {
//     res.send('education Page');
// });

// app.get('./contact',(req,res) => {
//     res.send('contact Page');
// });



// start Express on port 8080
app.listen(port, () => {
    console.log(`Server Started on ${backendURL}:${port}`);
});