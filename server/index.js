const express = require('express');
const cors = require('cors');

const router = require('./router');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(8080, () => {
	console.log('Server has started at http://localhost:8080');
});
