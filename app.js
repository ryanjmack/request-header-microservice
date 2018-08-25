const PORT    = Number(process.env.PORT || 3000);
const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.get('/api/whoami', (req, res) => {
  res.json({"ipaddress": req.ip, "language": req.headers['accept-language'], "software": req.headers['user-agent']});
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
