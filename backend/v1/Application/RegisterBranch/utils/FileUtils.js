import mimeTypes from 'mime-types';
import { randomUUID } from 'crypto'
import path from 'path';
import config from '../../../../config/Config.js';

function ValidateFileType (mimetype) {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    return validTypes.includes(mimetype);
}

function ValidateFields(objList, previous_fields) {

  // check for object length
  if ((!objList || Object.keys(objList).length == 0) && previous_fields.length == 0) {
    return false;
  }
  
  // convert object to array of dictionaries
  if (objList && Object.keys(objList).length > 0) {
    objList = Object.keys(objList).map(key => objList[key][0]);
  }

  // Check for duplicate fieldnames
  if (Object.keys(objList).length > 0) {
    const fieldCount = new Map();
    for (const file of objList) {
      const count = fieldCount.get(file.fieldname) || 0;
      fieldCount.set(file.fieldname, count + 1);
    }
  
    for (const [fieldname, count] of fieldCount) {
      if (count > 1) {
        return false;
      }
    }
  }
  
  // Check for allowed fields and required fields
  const allowedFields = config.Applications.RequestCredit.UploadFields.map(obj => obj.field);
  const requiredFields = config.Applications.RequestCredit.UploadFields.filter(obj => obj.required).map(obj => obj.field);
  let fieldnames = []

  if (objList && Object.keys(objList).length > 0) {
    fieldnames = objList.map(obj => obj.fieldname);
  }

  for (const field of requiredFields) {
    if (!fieldnames.includes(field) && !previous_fields.includes(field)) {
      return false;
    }
  }

  for (const field of fieldnames) {
    if (!allowedFields.includes(field)) {
      return false;
    }
  }
  
  return true;
}

export { ValidateFileType, ValidateFields };
