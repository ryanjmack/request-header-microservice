const PORT    = Number(process.env.PORT || 3000);
const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
