const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function uploadUsingBase64(body){

  let caption = 'hey test caption'
  let created_at = new Date()
  let inserted_data = [
    body.file_name, body.data_url, caption, created_at
  ]

  const result = await db.query(
    `INSERT INTO artefacts 
        (filename, file_content, caption, created_at) 
        VALUES  (?, ?, ?, ?)`,  inserted_data
  );

  let message = 'Error in creating Artefact UsingBase64';
  let data = meta = {};
  if (result.affectedRows) {
    message = 'Artefact created successfully';
    const inserted_data = {
      "id" : result.insertId,
      "filename" : body.filename, "file_content" : body.data_url,
      "caption" : caption, "created_at" : created_at,
    };
    data = inserted_data
  }
  return {message, data, meta}
}

async function uploadUsingForm(body, file){

  let created_at = new Date()
  let inserted_data = [
    file.originalname, file.path, body.caption, created_at
  ]

  const result = await db.query(
    `INSERT INTO artefacts 
        (filename, file_path, caption, created_at) 
        VALUES  (?, ?, ?, ?)`,  inserted_data
  );

  let message = 'Error in creating Artefact UsingBase64';
  let data = meta = {};
  if (result.affectedRows) {
    message = 'Artefact created successfully';
    const inserted_data = {
      "id" : result.insertId,
      "filename" : file.originalname, 
      "file_path" : file.path,
      "caption" : body.caption, 
      "created_at" : created_at,
    };
    data = inserted_data
  }
  return {message, data, meta}
}

module.exports = {
  uploadUsingBase64, uploadUsingForm
}