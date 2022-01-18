import express from 'express';

import http from 'http';
import https from 'https';

import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import router from './router';

import { getAccessTokenUrl } from './utils';

dotenv.config();

let server;
const app = express();

if (process.env.NODE_ENV === 'production') {
	const ssl = {
		key: fs.readFileSync(path.resolve('./key.pem')).toString(),
		cert: fs.readFileSync(path.resolve('./cert.pem')).toString(),
	};

	server = https.createServer(ssl, app);
} else {
	server = http.createServer(app);
}

app.use(cors());

app.use('/public', express.static('./public'));
app.use(express.json());

app.use('/api', router);

server.listen(8080, () => {
	console.log('Server has started at http://localhost:8080');
	console.log('Get access token ->', getAccessTokenUrl());
});
