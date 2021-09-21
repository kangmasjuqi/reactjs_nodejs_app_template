const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getDetail(id){

  let message = "";
  let data = {};
  let meta = {};

  const row = await db.query(
    `SELECT * FROM users WHERE id=?`, 
    [id]
  );

  if (!row) {
    message = "";
    data = {};
  }else {
    message = "Data retrieved successfully";
    data = row[0];
  }

  return {message, data, meta}
}

async function getMultiple(
  page = 1, search_key='', sort_by='id', sort_dir='desc'
){
  const offset = helper.getOffset(page, config.listPerPage);

  let where_condition = ''
  const searchable_fields = ['fullname', 'email', 'address', 'role']
  if(search_key !== ''){
    for(const field of searchable_fields) {
      if(where_condition !== '')
        where_condition += ' OR '
      where_condition += field + " like '%" +search_key+ "%'"
    }
    where_condition = ' WHERE ' + where_condition  
  }

  let order_by_condition = ''
  if(sort_by !== ''){
      order_by_condition = ' ORDER BY ' +sort_by+ ' ' +sort_dir
  }

  const rows = await db.query(
    `SELECT * 
      FROM users 
        ` + where_condition + `
        ` + order_by_condition + `
          LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  let data = helper.emptyOrRows(rows);

  const total_data_query = await db.query(
    `SELECT count(1) as n_data FROM users ` + where_condition
  );
  let total_data = total_data_query[0]['n_data']

  let meta = {
    page, 
    total_data,
    n_perpage : config.listPerPage
  };

  let message = "Data retrieved successfully";
  return {message, data, meta}
}

async function create(User){

  let message = 'Error in creating User';
  let data = meta = {};
  let active = 1;
  let created_at = new Date();

  let inserted_data = [User.fullname, User.email, User.age, User.role, User.address, User.registration_date, active, created_at]
  const result = await db.query(
    `INSERT INTO users (fullname, email, age, role, address, registration_date, active, created_at) 
    VALUES  (?, ?, ?, ?, ?, ?, ?, ?)`, 
    inserted_data
  );

  if (result.affectedRows) {
	message = 'User created successfully';
	const inserted_data = {
	  "id" : result.insertId,
	  "fullname" : User.fullname,
	  "email" : User.email,
	  "age" : User.age,
	  "role" : User.role,
	  "address" : User.address,
    "registration_date" : User.registration_date,
	  "active" : active,
	  "created_at" : created_at,
	};
	data = inserted_data
  }

  return {message, data, meta}
}

async function update(id, User){

  let message = 'Error in updating User';
  let data = meta = {};
  let updated_data = [User.fullname, User.email, User.age, User.role, User.address, User.active, id]

  const result = await db.query(
    `UPDATE users SET fullname=?, email=?, age=?, role=?, address=?, active=? WHERE id=?`, 
    updated_data
  );

  if (result.affectedRows) {
	message = 'User updated successfully';
	const updated_data = {
	  "id" : id,
	  "fullname" : User.fullname,
	  "email" : User.email,
	  "age" : User.age,
	  "role" : User.role,
	  "address" : User.address,
	  "active" : User.active
	};
	data = updated_data
  }

  return {message, data, meta}
}

async function remove(id){

  let message = 'Error in deleting User';
  let data = meta = {};

  const result = await db.query(
    `DELETE FROM users WHERE id=?`, 
    [id]
  );

  if (result.affectedRows) {
    message = 'User deleted successfully';
  }

  return {message, data, meta}
}

module.exports = {
  getDetail,
  getMultiple,
  create,
  update,
  remove
}