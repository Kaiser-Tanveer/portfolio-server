// api/routes/index.js

const express = require('express');
const projectsRouter = require('./projects');

const router = express.Router();

router.use('/projects', projectsRouter);

module.exports = router;

