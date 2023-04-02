import {GenerateToken, AddAccount} from './User.Controller.js';
import express from 'express'
import * as schema from './User.Schema.js'
import * as auth from '../../utils/AuthChecker.js'
import * as schemaChecker from '../../utils/SchemaChecker.js'

const router = express.Router()

router.post("/GenerateToken", auth.admin, schemaChecker.checkbody(schema.GenerateToken_body), GenerateToken)
router.post("/AddAccount", auth.admin, schemaChecker.checkbody(schema.AddAccount_body), AddAccount)


export default router;