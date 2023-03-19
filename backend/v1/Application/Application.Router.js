import {} from './Application.Controller.js';
import express from 'express'
import * as auth from '../../utils/AuthChecker.js'
//import * as schema from '../../config/schema.js'
import * as schemaChecker from '../../utils/SchemaChecker.js'
import RegisterBranch from './RegisterBranch/RegisterBranch.Router.js'

const router = express.Router()

router.use('/RegisterBranch/', RegisterBranch)

export default router;