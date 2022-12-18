const app = require('./app.js');
const port = 3010;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

exports.app