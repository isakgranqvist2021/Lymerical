import express from 'express';
import https from 'https';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import router from './router';

import { getAccessTokenUrl } from './utils';

dotenv.config();

const ssl = {
	key: fs.readFileSync(path.resolve('./key.pem')).toString(),
	cert: fs.readFileSync(path.resolve('./cert.pem')).toString(),
};

const app = express();

const server = https.createServer(ssl, app);

app.use(cors());
app.use(express.json());
app.use('/api', router);

server.listen(8080, () => {
	console.log('Server has started at http://localhost:8080');
	console.log('Get access token ->', getAccessTokenUrl());
});
