import {CreateApplication, LoadSavedProgress, SavePageProgress, UpdateTimeSpent, FinishApplication} from './RequestCredit.Controller.js'
import express from 'express'
import * as auth from '../../../utils/AuthChecker.js'
import * as schema from './RequestCredit.Schema.js'
import * as schemaChecker from '../../../utils/SchemaChecker.js'
import MulterUploader from './utils/multer.js'

const router = express.Router({mergeParams: true})

// create new application
router.post("/Create", auth.basic, CreateApplication)

// Load saved data
router.get("/LoadSavedProgress", auth.basic, LoadSavedProgress)

// save current page
router.post("/SaveProgress/:step", auth.basic, schemaChecker.checkparams(
    schema.SavePageProgress_params),
    MulterUploader,
    SavePageProgress)

// update time taken on speceific step
router.post(
    "/UpdateTime/:step", 
    auth.basic,
    schemaChecker.checkparams(schema.UpdateTimeSpent_params), 
    schemaChecker.checkbody(schema.UpdateTimeSpent_body),
    UpdateTimeSpent
)

// finish application
router.post("/Finish", auth.basic, FinishApplication)

export default router;