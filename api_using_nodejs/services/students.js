const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getDetail(id){

  let message = "";
  let data = {};
  let meta = {};

  const row = await db.query(
    `SELECT * FROM students WHERE id=?`, 
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
  const searchable_fields = ['fullname', 'email', 'university', 'degree']
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
      FROM students 
        ` + where_condition + `
        ` + order_by_condition + `
          LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  let data = helper.emptyOrRows(rows);

  const total_data_query = await db.query(
    `SELECT count(1) as n_data FROM students ` + where_condition
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

async function create(Student){

  let message = 'Error in creating Student';
  let data = meta = {};
  let created_at = new Date();

  let inserted_data = [
      Student.fullname, Student.gender, 
      Student.university, Student.degree, Student.ipk, 
      Student.email, Student.phone, Student.is_agree, 
      created_at
  ]
  
  const result = await db.query(
    `INSERT INTO students 
        (fullname, gender, 
            university, degree, ipk, 
            email, phone, is_agree, 
            created_at) 
        VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    inserted_data
  );

  if (result.affectedRows) {
	message = 'Student created successfully';
	const inserted_data = {
	  "id" : result.insertId,
	  "fullname" : Student.fullname,
	  "gender" : Student.gender,
    "university" : Student.university,
    "degree" : Student.degree,
    "ipk" : Student.ipk,
	  "email" : Student.email,
	  "phone" : Student.phone,
	  "is_agree" : Student.is_agree,
	  "created_at" : created_at,
	};
	data = inserted_data
  }

  return {message, data, meta}
}

async function update(id, Student){

  let message = 'Error in updating Student';
  let data = meta = {};
  let updated_data = [
    Student.fullname, Student.gender, 
    Student.university, Student.degree, Student.ipk, 
    Student.email, Student.phone, Student.is_agree, 
    id
  ]

  const result = await db.query(
    `UPDATE students 
        SET 
            fullname=?, gender=?, 
            university=?, degree=?, ipk=?, 
            email=?, phone=?, is_agree=? 
                WHERE id=?`, 
    updated_data
  );

  if (result.affectedRows) {
	message = 'Student updated successfully';
	const updated_data = {
	  "id" : id,
	  "fullname" : Student.fullname,
	  "gender" : Student.gender,
	  "university" : Student.university,
	  "degree" : Student.degree,
	  "ipk" : Student.ipk,
	  "email" : Student.email,
	  "phone" : Student.phone,
	  "is_agree" : Student.is_agree
	};
	data = updated_data
  }

  return {message, data, meta}
}

async function remove(id){

  let message = 'Error in deleting Student';
  let data = meta = {};

  const result = await db.query(
    `DELETE FROM students WHERE id=?`, 
    [id]
  );

  if (result.affectedRows) {
    message = 'Student deleted successfully';
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