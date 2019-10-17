const express = require('express')

const server = express();

const cors = require('cors');

const helmet = require('helmet');

const authRouter = require('./endpoints/auth/auth-router')

const authorize = require('./middleware/auth-middleware')

const tlsRouter = require('./endpoints/tls/tls-router')
const projectRouter = require('./endpoints/projects/projects-router')
const studentRouter = require('./endpoints/students/students-router')

server.use(express.json());
server.use(helmet())
server.use(cors())
server.use('/api/auth', authRouter);
server.use(authorize)
server.use('/api/tls', tlsRouter);
server.use('/api/projects', projectRouter)
server.use('/api/students', studentRouter)

module.exports = server;