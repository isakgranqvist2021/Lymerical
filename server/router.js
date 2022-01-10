import express from 'express';
import rateLimit from 'express-rate-limit';

import {
	authorize,
	contact,
	getAccessToken,
	getInstaPosts,
} from './controllers';

const router = express.Router();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 3 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.post('/contact', limiter, contact);
router.get('/instagram', getInstaPosts);

router.get('/access-token', getAccessToken);
router.get('/authorize', authorize);

export default router;
