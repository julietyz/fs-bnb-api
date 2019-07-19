const express = require('express');
const cors = require("cors");

//app is an instance of express
const app = express();

app.use(cors());

const usersRouter = require('./src/api/user-routes');
const listingRouter = require('./src/api/listing-routes');
const bookingRouter = require('./src/api/booking-routes');

const authRouter = require('./src/api/auth-routes');
const providerAuthRouter = require('./src/api/provider-auth-routes');

const imageMapURLRouter = require('./src/api/imageURLMap-routes');
const providerRouter = require('./src/api/provider-routes');


//const users = require('./src/models/user-model');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req,res,next)=>{
    console.log("This middle ware");
    next();
});

app.use('/api/user', usersRouter);
app.use('/api/listing', listingRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/auth', authRouter);
app.use('/api/providerauth', providerAuthRouter);
app.use('/api/imgMap', imageMapURLRouter);
app.use('/api/provider', providerRouter);

/*app.get('/api/user', (req,res) => {
    res.send(users);
});*/

//if we don't have an environment variable named port, it will just set it to 5000
const PORT = process.env.PORT || 5000;

//this will run when port is sucesfully posted 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
