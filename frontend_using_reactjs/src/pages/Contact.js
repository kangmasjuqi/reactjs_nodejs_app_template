import React, { useState } from 'react';
import '../App.css';

import { useFormik } from 'formik';

import * as Yup from 'yup';

const Contact = () => {

  const [isSending, setIsSending] = useState(false);

  const sendContact = (values) => {
    console.log("hey sendContact")
    console.log(values)
    alert("Thank you for reaching out : \n" + JSON.stringify(values));
    setIsSending(true)
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is Required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      subject: Yup.string().required('Subject is Required'),
      message: Yup.string().required('Message is Required!'),
    }),
    onSubmit: values => sendContact(values),
  });

    return (
        <section className="content">
            <div className="card">
                <div className="card-body row">
                    <div className="col-5 text-center d-flex align-items-center justify-content-center">
                        <div className="">
                            <h2>Discovery<strong>Data</strong></h2>
                            <p className="lead mb-5">123 Perth, Testtown, 9876 Australia<br />
                            Phone: +1 234 56789012
                            </p>
                        </div>
                    </div>
                    <div className="col-7">
                        {
                        isSending === true ? 
                            <div role="alert" 
                                className="fade alert alert-success show"
                                style={{margin: '10px'}}
                            >
                                Thank you for reaching out. Your query is being processed.
                            </div> :
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className="form-control"
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="feedback">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">E-Mail</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className="form-control"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="feedback">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputSubject">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.subject}
                                        className="form-control"
                                    />
                                    {formik.touched.subject && formik.errors.subject ? (
                                        <div className="feedback">{formik.errors.subject}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        type="textarea"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                        className="form-control"
                                    />
                                    {formik.touched.message && formik.errors.message ? (
                                        <div className="feedback">{formik.errors.message}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary" value="Send message"  />
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Contact;
