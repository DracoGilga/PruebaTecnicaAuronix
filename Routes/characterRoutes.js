const express = require('express');
const router = express.Router();
const CharacterController = require('../Controllers/characterController');

router.get('/', CharacterController.getCharacters);

module.exports = router;