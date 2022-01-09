const express = require('express');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.get('/update-cache/:username', require('./controllers/update-cache'));
router.get('/instagram', require('./controllers/instagram-posts'));
router.post('/contact', limiter, require('./controllers/contact'));

module.exports = router;
