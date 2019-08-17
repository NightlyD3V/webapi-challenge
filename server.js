require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const server = express();

const projectRouter = require('./data/helpers/projectRouter.js');
const actionRouter = require('./data/helpers/actionRouter.js');

const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send('Don\'t worry be happy!');
})

server.listen(port, () => {
    console.log(`***Server is running on ${port}***`)
})

//Middleware