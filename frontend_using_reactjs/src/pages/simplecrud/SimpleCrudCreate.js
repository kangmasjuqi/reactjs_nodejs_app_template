import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import '../../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { createNewUser } from '../../redux/users/users.action';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { EditorState, ContentState, convertToRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";


const SimpleCrudCreate = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const [regDate, setRegDate] = useState(new Date());

    const [address, setAddress] = useState(() =>
      EditorState.createWithContent(
        ContentState.createFromBlockArray(htmlToDraft(''))
      )
    );

    const createUsersDispatch = (values) => {

      let activeStatus = 0;
      if (values.active.length === 1) {
        activeStatus = 1;
      }

      const styledAddress = draftToHtml(convertToRaw(address.getCurrentContent()))

      const payload = {
          fullname: values.fullname,
          email: values.email,
          age: values.age,
          role: values.role,
          address: styledAddress,
          active: activeStatus,
          registration_date: regDate.getFullYear() + "-" + (regDate.getMonth() + 1) + "-" + regDate.getDate()
      };

      dispatch(createNewUser(payload)).then((res) => {
          if (res.status === 200) {
              alert('User has been created!');
              history.push("/simplecrud");
          } else {
            console.log(res.response)
          } 
      });
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      age: 0,
      role: 'member',
      address: '',
      active: '1',
      regDate: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      age: Yup.string().required('Required'),
      role: Yup.string().required('Role is required!'),
    }),
    onSubmit: values => createUsersDispatch(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-4 form-group">
          <label htmlFor="firstName">Full name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
            className="form-control"
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div className="feedback">{formik.errors.fullname}</div>
          ) : null}
        </div>
        <div className="col-4 form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="feedback">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="col-2 form-group">
          <label>Role</label>
          <select 
            name="role"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.role}
          >
            <option value="admin">Admin</option>
            <option value="member">Member</option>
          </select>
          {formik.touched.role && formik.errors.role ? (
            <div className="feedback">{formik.errors.role}</div>
          ) : null}
        </div>
        <div className="col-2 form-group">
            <label>Registration Date</label>
            <div>
                <DatePicker 
                    selected={regDate} 
                    onChange={(date) => {
                      setRegDate(date)
                      formik.setFieldValue('regDate', date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    className="form-control"
                    forceShowMonthNavigation='true'
                />
            </div>
            {formik.touched.regDate && formik.errors.regDate ? (
                <div className="feedback">{formik.errors.regDate}</div>
            ) : null}
        </div>
      </div>

      <div className="row">
        <div className="col-8 form-group">
          <label>Address</label>
          <Form.Group id="address">
              <Editor 
                  editorState={address}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={(address) => {
                    setAddress(address);
                    formik.setFieldValue('address', address);
                  }}
              />
          </Form.Group>
          {formik.touched.address && formik.errors.address ? (
            <div className="feedback">{formik.errors.address}</div>
          ) : null}
        </div>
        <div className="col-2 form-group">
          <label htmlFor="email">Age</label>
          <input
            id="age"
            name="age"
            type="numeric"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            className="form-control"
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="feedback">{formik.errors.age}</div>
          ) : null}
        </div>
        <div className="col-2 form-group">
          <label>Status</label>
          <div>
            <input 
              type="checkbox" 
              name="active" 
              value="1"
              onChange={formik.handleChange} 
            /> Active
          </div>
          {formik.touched.active && formik.errors.active ? (
            <div className="feedback">{formik.errors.active}</div>
          ) : null}
        </div>
      </div>

      <div className="row">
        <div className="col text-right">
          <Link to="/simplecrud">
            <Button 
              type="submit"
              variant="outline-secondary"
              style={{ marginTop: '32px', marginRight: '5px' }}
            >
              Cancel
            </Button>
          </Link>
          <Button 
            type="submit"
            variant="primary"
            style={{ marginTop: '32px', width: '160px' }}
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SimpleCrudCreate;
