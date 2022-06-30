const express = require('express');
const cors = require('cors');
const authRoute = require ('./routes/auth')
const PassportSetup =  require('./passport')
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

app.use(cookieSession(
        {name: "Session",
        keys: ['admin'] ,
        maxAge: 24  *    60  * 60   *  100 
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors ({
        origin: "http://localhost:3000",
        methods: 'Get, POST, PUT , DELETE',
        
        credentials: true,
    })
)


app.listen('5000', () => {
    console.log('Server is Runing ')
})