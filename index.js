const express = require('express');
const app = express();
const cors = require('cors')


const router = require('./src/routes');



app.use(cors()) // Use this after the variable declaration


require('./startup/config')(app,express);
require('./startup/db')();

require('./startup/logging')();




app.use('/api', router);

app.get("/logout", (req,res) => {    
    res.status(200).send("user Logged out")
})

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`listening on port ${port}`));