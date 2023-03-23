import {GenerateToken, AddAccount} from './user.controller.js';
import express from 'express'
import * as schema from './User.Schema.js'
import * as auth from '../../utils/authChecker.js'
import * as schemaChecker from '../../utils/schemaChecker.js'

const router = express.Router()

router.post("/GenerateToken", auth.admin, schemaChecker.checkbody(schema.GenerateToken_body), GenerateToken)
router.post("/AddAccount", auth.admin, AddAccount)


export default router;