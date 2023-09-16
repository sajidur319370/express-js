// Import file from other folder
const dbConnect = require("./utils/dbConnect");
const toolsRoute = require('./routes/v1/tools.route');
const count = require('./middleware/viewCount');

// imported package
const express = require('express');
const cors = require('cors');
const { dirname } = require("path");


// Creating App with middleware
const app = express();
app.use(cors());
app.use(express.json());
// app.use(express.static('public'));
app.set('view engine', 'ejs');

// Creating Port
const port = 8080;

// middleware
// app.use(count);

dbConnect();

// CRUD opearation
app.use('/api/v1/tools', toolsRoute);

app.get("/", (req, res) => {

    // res.sendFile(__dirname + '/public/test.html')
    res.render('home.ejs', {
        id: '09',
        user: {
            name: 'Sajid',
        }
    })
})

app.all('*', (req, res) => {
    res.send("No route found!")
})

app.listen(port, () => {
    console.log(`Server is runnin on ${port}`);
})