import React from 'react';

import Button from 'react-bootstrap/Button';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import '../App.css';

const preferenceRules = yup.object().shape({
    admin_email: yup.string().required('Admin Email is required'),
    notif_channel: yup.string().required('Notif Channel is required'),
    default_language: yup.string().required('Default Language is required'),
    address: yup.string().required('Address is required'),
    show_socmed_buttons: yup.bool(),
    accept_comments_automatically: yup.bool(),
});


const Preferences = () => {

    const handleSetPreferences = (values) => {
        console.log("hey handleSetPreferences")
        console.log(values)
        alert("The preferences is changed : \n" + JSON.stringify(values));
    };

    return (
        <>
            <h4 style={{margin: '20px 0px'}}>Preferences </h4>
            <Formik
                validationSchema={preferenceRules}
                initialValues={{
                    admin_email: 'admin@email.com',
                    notif_channel: 'sms',
                    default_language: 'english',
                    address: 'Jl. Pembangunan, 123, Jakarta, Indonesia',
                    show_socmed_buttons: true,
                    accept_comments_automatically: false,
                }}
                onSubmit={handleSetPreferences}
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
                                <label>Admin Email</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.admin_email}
                                    name="admin_email"
                                    className="form-control"
                                    style={{width:'480px'}}
                                />
                                {errors.admin_email && 
                                    <div id="feedback">{errors.admin_email}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>Notification Channel</label>
                                <div>
                                    <label style={{ margin: '5px 10px'}}>
                                        <Field type="radio" name="notif_channel" value="email" />
                                        &nbsp;Email
                                    </label>
                                    <label style={{ margin: '5px 10px'}}>
                                        <Field type="radio" name="notif_channel" value="sms" />
                                        &nbsp;SMS
                                    </label>
                                </div>
                                {errors.notif_channel && <div id="feedback">{errors.notif_channel}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>Default Language</label>
                                <select
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="default_language"
                                    className="form-control"
                                    style={{width:'480px'}}
                                    defaultValue="bahasa_indonesia"
                                >
                                    <option value="arabic">Arabic</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="bahasa_indonesia">Bahasa Indonesia</option>
                                    <option value="english">English</option>
                                </select>
                                {errors.default_language && 
                                    <div id="feedback">{errors.default_language}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <label>Address</label>
                                <textarea
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                    name="address"
                                    className="form-control"
                                    style={{width:'480px'}}
                                />
                                {errors.address && 
                                    <div id="feedback">{errors.address}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col form-group">
                                <p>
                                    <Field type="checkbox" name="show_socmed_buttons" />
                                        &nbsp;Show Social Media Buttons
                                </p>
                                <p>
                                    <Field type="checkbox" name="accept_comments_automatically" />
                                        &nbsp;Accept Comments Automatically
                                </p>
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

export default Preferences;