import {} from './user.controller.js';
import express from 'express'
import * as auth from '../../src/authChecker.js'
import * as schemaChecker from '../../utils/schemaChecker.js'

const router = express.Router()

export default router;