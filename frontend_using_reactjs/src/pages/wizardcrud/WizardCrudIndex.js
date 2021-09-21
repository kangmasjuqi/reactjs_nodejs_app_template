import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import '../../App.css';
import Button from 'react-bootstrap/Button';

import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { createNewStudent } from '../../redux/students/students.action';

const personalFieldRules = yup.object().shape({
    fullname: yup.string().required('Fullname is required').min(5),
    gender: yup.string().required('Gender is required')
});

const academicFieldRules = yup.object().shape({
    university: yup.string().required('University is required'),
    degree: yup.string().required('Degree is required'),
    ipk: yup.string().required('IPK is required'),
});

const contactAgreementRules = yup.object().shape({
    email: yup.string().required('Email is required').min(10),
    phone: yup.string().required('Phone is required').min(5),
    is_agree: yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
});

const WizardCrudIndex = () => {

    const dispatch = useDispatch();

    const [step, setStep] = useState(1);
    const [data, setData] = useState({});

    const nSteps = 3;

    const handlePersonalDataSubmission = (values) => {

        let new_payload = {
            fullname: values.fullname,
            gender: values.gender
        };

        setData(new_payload);
        setStep(2);
    };

    const handleAcademicSubmission = (values) => {

        let new_payload = data;
        new_payload.university = values.university;
        new_payload.degree = values.degree;
        new_payload.ipk = values.ipk;

        setData(new_payload);
        setStep(3);
    };
    
    const handleContactAgreementSubmission = (values) => {

        let agreeStatus = 0
        if( typeof values.is_agree !== 'string' ) {
            agreeStatus = 1;
        }

        let new_payload = data;
        new_payload.email = values.email;
        new_payload.phone = values.phone;
        new_payload.is_agree = agreeStatus;

        setData(new_payload);
  
        dispatch(createNewStudent(data)).then((res) => {
            if (res.status === 200) {
                alert('Student has been created!');
                setStep(4);
            }
        });
        
        
    };
    
    useEffect(() => {
        setStep(1);
    },[]);


    const ProgressStatus = ({currentStep}) => {

        const stepArray = [];
        let ii = 1;
        for (ii = 1; ii <= nSteps; ii += 1) {
            stepArray.push(ii);
        }

        let wizardDoneClass = 'wizard-step-stone done'
        if (currentStep > nSteps) {
            wizardDoneClass = 'wizard-step-stone done passed'
        }

        return (
            <div className="text-center">
                <div className="wizard-step-container">

                    {stepArray.map((value, index) => {

                        let wizardStepStoneClass = 'wizard-step-stone'
                        let wizardStepLineClass = 'wizard-step-line'
                        if (value <= currentStep) {
                            wizardStepStoneClass = 'wizard-step-stone passed'
                            wizardStepLineClass = 'wizard-step-line passed'
                        }

                        return (
                            <div key={index} className="wizard-step">
                                <span className={wizardStepStoneClass}>{value}</span>
                                <div className={wizardStepLineClass}>
                                    &nbsp;
                                </div>
                            </div>
                        )
                    })}

                    <div className="wizard-step">
                        <span className={wizardDoneClass}>Done</span>
                    </div>

                </div>
            </div>
        );
    };

    const PersonalData = () => {
        return (
            <div>

                <ProgressStatus currentStep={step} />

                <h4>Personal Data</h4>
                <>
                    <Formik
                        validationSchema={personalFieldRules}
                        initialValues={{
                            fullname: '',
                            gender: ''
                        }}
                        onSubmit={handlePersonalDataSubmission}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                errors
                            }) => (
                            <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col form-group">
                                    <label>Fullname</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fullname}
                                        name="fullname"
                                        className="form-control"
                                        style={{width:'320px'}}
                                    />
                                    {errors.fullname && <div id="feedback">{errors.fullname}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col form-group">
                                    <label>Gender</label>
                                    <div>
                                        <label style={{ margin: '5px 10px'}}>
                                            <Field type="radio" name="gender" value="male" />
                                            &nbsp;Male
                                        </label>
                                        <label style={{ margin: '5px 10px'}}>
                                            <Field type="radio" name="gender" value="female" />
                                            &nbsp;Female
                                        </label>
                                    </div>
                                    {errors.gender && <div id="feedback">{errors.gender}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                <Button type="submit" variant="primary">
                                    Save & Go to next step
                                </Button>
                                </div>
                            </div>
                            </form>
                        )}
                    </Formik>
                </>
            </div>
        );
    };

    const Academic = () => {
        return (
            <div>

                <ProgressStatus currentStep={step} />

                <h4>Academic Data</h4>
                <>
                    <Formik
                        validationSchema={academicFieldRules}
                        initialValues={{
                            university: '',
                            degree: '',
                            ipk: '0.00'
                        }}
                        onSubmit={handleAcademicSubmission}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                errors
                            }) => (
                            <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col form-group">
                                    <label>University</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.university}
                                        name="university"
                                        className="form-control"
                                        style={{width:'320px'}}
                                    />
                                    {errors.university && <div id="feedback">{errors.university}</div>}
                                </div>
                                <div className="col form-group">
                                    <label>Degree</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.degree}
                                        name="degree"
                                        className="form-control"
                                        style={{width:'320px'}}
                                    />
                                    {errors.degree && <div id="feedback">{errors.degree}</div>}
                                </div>
                                <div className="col form-group">
                                    <label>IPK</label>
                                    <input
                                        type="numeric"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.ipk}
                                        name="ipk"
                                        className="form-control"
                                        style={{width:'320px'}}
                                    />
                                    {errors.ipk && <div id="feedback">{errors.ipk}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                    <Button type="submit" variant="primary">
                                        Save & Go to next step
                                    </Button>
                                </div>
                            </div>
                            </form>
                        )}
                    </Formik>
                </>
            </div>
        );
    };

    const ContactAgreement = () => {
        return (
            <div>
                
                <ProgressStatus currentStep={step} />

                <h4>Contact Data & Agreement</h4>
                <>
                    <Formik
                        validationSchema={contactAgreementRules}
                        initialValues={{
                            email: '',
                            phone: '',
                            is_agree: false
                        }}
                        onSubmit={handleContactAgreementSubmission}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                errors
                            }) => (
                            <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        name="email"
                                        className="form-control"
                                        style={{width:'320px'}}
                                    />
                                    {errors.email && <div id="feedback">{errors.email}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        name="phone"
                                        className="form-control"
                                        style={{width:'320px'}}
                                    />
                                    {errors.phone && <div id="feedback">{errors.phone}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col form-group">
                                    <Field 
                                        type="checkbox" 
                                        name="is_agree" 
                                        onChange={handleChange} 
                                    /> I agree with the term and conditions
                                    {errors.is_agree && <div id="feedback">{errors.is_agree}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                <Button type="submit" variant="primary">
                                    Finish & Submit Application
                                </Button>
                                </div>
                            </div>
                            </form>
                        )}
                    </Formik>
                </>
            </div>
        );
    };

    const FinalPage = () => {
        return (
            <div>

                <ProgressStatus currentStep={step} />

                <h4>Data saved successfully. Thank you. :)</h4>
            </div>
        );
    };

    let renderedStep = ''
    if (step === 1) {
        renderedStep = <PersonalData />
    } else if (step === 2) {
        renderedStep = <Academic />
    } else if (step === 3) {
        renderedStep = <ContactAgreement />
    } else if (step === 4) {
        renderedStep = <FinalPage />
    }

    return renderedStep
    
}

export default WizardCrudIndex;
