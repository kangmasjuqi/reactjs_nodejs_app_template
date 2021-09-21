import React from 'react';

import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

import '../App.css';

const changePasswordRules = yup.object().shape({
    old_password: yup.string().required('Old Password is required').min(5),
    new_password: yup.string().required('New Password is required').min(5),
    retype_new_password: yup.string().required('Retype New Password is required').min(5),
});

const ChangePassword = () => {

    const handleChangePassword = (values) => {
        console.log("hey handleChangePassword")
        console.log(values)
        alert("The password is changed : \n" + JSON.stringify(values));
    };

    return (
        <>
            <h4 style={{margin: '20px 0px'}}>Change Password </h4>
            <Formik
                validationSchema={changePasswordRules}
                initialValues={{
                    old_password: '',
                    new_password: '',
                    retype_new_password: ''
                }}
                onSubmit={handleChangePassword}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        errors
                    }) => (
                    <form onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
                        <div className="row">
                            <div className="col form-group">
                                <label>Old Password</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.old_password}
                                    name="old_password"
                                    className="form-control"
                                    style={{width:'320px'}}
                                />
                                {errors.old_password && 
                                    <div id="feedback">{errors.old_password}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.new_password}
                                    name="new_password"
                                    className="form-control"
                                    style={{width:'320px'}}
                                />
                                {errors.new_password && 
                                    <div id="feedback">{errors.new_password}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>Retype New Password</label>
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.retype_new_password}
                                    name="retype_new_password"
                                    className="form-control"
                                    style={{width:'320px'}}
                                />
                                {errors.retype_new_password && 
                                    <div id="feedback">{errors.retype_new_password}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-left">
                                <Button type="submit" variant="primary">
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );

}

export default ChangePassword;