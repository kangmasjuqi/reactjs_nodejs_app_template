import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import '../../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { editUser } from '../../redux/users/users.action';
import { Formik } from 'formik';
import * as yup from 'yup';

import { EditorState, ContentState, convertToRaw } from 'draft-js'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const SimpleCrudEdit = (props) => {
    const {
        show, hide, editValue, getUsersDispatch, 
        setShowNotif, setNotifMessage, currentPage, searchKey,
        sortBy, sortDir
    } = props;

    const dispatch = useDispatch();
    
    const schema = yup.object().shape({
        fullname: yup.string().required('Fullname is required!'),
        email: yup.string().required('Email is required!'),
        age: yup.string().required('Age is required!'),
        role: yup.string().required('Role is required!')
      }); 
    
    const hideModal = () => {
        hide();
    };

    const [address, setAddress] = useState(() => {
        if (editValue !== null){
            console.log("hey buddy")
            console.log(editValue)
            EditorState.createWithContent(
                ContentState.createFromBlockArray(htmlToDraft(editValue.address))
            )
        }
    });

    const editUsersDispatch = (values) => {

        const styledAddress = draftToHtml(convertToRaw(address.getCurrentContent()))

        const payload = {
            fullname: values.fullname,
            email: values.email,
            age: values.age,
            role: values.role,
            address: styledAddress,
            active: values.active 
        };

        dispatch(editUser(payload, editValue.id)).then((res) => {
            if (res.status === 200) {
                hide();
                setShowNotif(true);
                setNotifMessage("User data successfully updated");
                getUsersDispatch({
                    currentPage: currentPage, searchKey: searchKey,
                    sortBy: sortBy, sortDir: sortDir
                });         
            }
        });
    };

    let defaultValue = {
        'id': 0, 'fullname': '', 'email': '', 'age': 0, 
        'role': '', 'address' : '', 'active':1
    };
    
    if (editValue !== null){
        defaultValue = editValue;
    }

    return (
        <>
            <Modal
                show={show}
                onHide={hideModal}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User {defaultValue.fullname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        validationSchema={schema}
                        onSubmit={editUsersDispatch}
                        initialValues={{
                            fullname: defaultValue.fullname,
                            email: defaultValue.email,
                            age: defaultValue.age,
                            role: defaultValue.role,
                            address: defaultValue.address,
                            active: defaultValue.active === 1
                        }}
                    >
                    {({
                        handleSubmit,
                        handleChange,
                        setFieldValue,
                        values,
                        touched,
                        errors
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group controlId="fullname" as={Col}>
                                <Form.Label>Fullname</Form.Label>
                                <Form.Control 
                                    name="fullname" 
                                    type="text" 
                                    defaultValue={defaultValue.fullname}
                                    onChange={handleChange} 
                                />
                            </Form.Group>
                            <Form.Group controlId="email" as={Col}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    name="email" 
                                    type="email" 
                                    defaultValue={defaultValue.email}
                                    onChange={handleChange} 
                                />
                            </Form.Group>
                            <Form.Group controlId="age" as={Col}>
                                <Form.Label>Age</Form.Label>
                                <Form.Control 
                                    name="age" 
                                    type="numeric" 
                                    defaultValue={defaultValue.age}
                                    onChange={handleChange} 
                                />
                            </Form.Group>
                            <Form.Group controlId="role" as={Col}>
                                <Form.Label>Role</Form.Label>
                                <Form.Control 
                                    name="role"
                                    as="select" 
                                    defaultValue={defaultValue.role}
                                    onChange={handleChange} 
                                >
                                    <option value="admin">Admin</option>
                                    <option value="member">Member</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="address" as={Col}>
                                <Form.Label>Address</Form.Label>
                                <Form.Group id="address">
                                    <Editor 
                                        editorState={address}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={(address) => {
                                            setAddress(address);
                                            setFieldValue('address', address);
                                        }}
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group controlId="active" as={Col}>
                                <Form.Label>Status</Form.Label>
                                <Form.Group id="active">
                                    <Form.Check 
                                        id="active"
                                        name="active"
                                        label="Active" 
                                        onChange={handleChange}
                                        value={defaultValue.active}
                                        defaultChecked={editValue !== null && editValue.active}
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group controlId="buttons" as={Col} className="text-right">
                                <Button 
                                    variant="secondary" 
                                    onClick={hideModal}
                                    style={{marginRight: '5px'}}
                                >
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Form.Group>
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
    
}

export default SimpleCrudEdit;
