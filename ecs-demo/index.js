const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use ECS port if available

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App running on port ${port}`));
