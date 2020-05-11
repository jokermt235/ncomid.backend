const express = require('express');
const banners = require('../controllers/banners');
const auth = require('../controllers/auth');
const route = express.Router();
route.get('/',banners.index);
route.get('/:id',banners.view);
route.post('/', auth.verifyToken,banners.create);
route.put('/:id',auth.verifyToken,banners.update);
module.exports = route;
