const express = require('express');
const cors = require("cors")
// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json())
app.use(cors())

app.get('/', (_req, res) => {
    
    res.send("Welcome 🚀");
});


app.get('/version', (_req, res) => {
    const data = {
        version: 1
    }
    res.send(data);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});