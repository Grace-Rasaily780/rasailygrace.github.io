const express = require('express')
const router = express.Router();

router.get('/' , (req, res) => {
	res.render('relativechords/index');
});

module.exports = router;