const express  = require('express');
const router   = express.Router();

const authentications = require('../controllers/authentications');
const feminists       = require('../controllers/feminists');

router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);
router.route('/feminists')
  .get(feminists.index);

module.exports = router;
