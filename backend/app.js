const express = require('express');
const cors = require('cors');

const app = express()

const auth = require('./handlers/auth');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.post("/login", auth.login)

app.get("/", (req, res) => {
    const date = new Date();
    const dateString = date.toLocaleDateString(
        'en-us',
        { weekday: "long", year: "numeric", month: "short", day: "numeric" }
    );
    res.send(`<p>Hello from Todo App!</p>The date is currently: <h3>${dateString}</h3>`);
});

module.exports = app