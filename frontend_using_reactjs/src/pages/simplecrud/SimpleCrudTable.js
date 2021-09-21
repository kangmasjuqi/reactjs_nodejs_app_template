import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import '../../App.css';
import Table from 'react-bootstrap/Table';
import SimpleCrudEdit from './SimpleCrudEdit';
import Button from 'react-bootstrap/Button';

import { FaEdit, FaTrash } from 'react-icons/fa';

import { removeUser } from '../../redux/users/users.action';

const SimpleCrudTable = ({rawData, getUsersDispatch, setShowNotif, 
        setNotifMessage, currentPage, searchKey, 
        handleSortBy, sortBy, sortDir
    }) => {

    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);
    const [editValue, setEditValue] = useState(null);

    const hideModal = () => {
        setShowEditModal(false);
    };

    const openEditModal = (value) => {
        setShowEditModal(true);
        setEditValue(value);
    };

    const removeUsersDispatch = (item) => {
        dispatch(removeUser(item)).then((res) => {
            if (res.status === 200) {
                setShowNotif(true);
                setNotifMessage("User data successfully removed");
            }
        });
    };

    const removeData = (item) => {
        const r = window.confirm("Do you really want to remove the item?"); 
        if(r === true){            
            removeUsersDispatch(item);
            getUsersDispatch({
                currentPage: currentPage, searchKey: searchKey,
                sortBy: sortBy, sortDir: sortDir
            });     
        }
    };

    const displayRow = (data) => {
        return data.map((item) => (
            <tr key={item.id} id={item.id}>
                <td>{ item.id }</td>
                <td>{ item.fullname }</td>
                <td>{ item.email }</td>
                <td>{ item.age }</td>
                <td>{ item.role }</td>
                <td>{ item.active === 1? 'Yes': 'No' }</td>
                <td className="column-center action">
                    <Button  variant="warning" onClick={() => openEditModal(item)}
                        style={{marginRight: '5px'}}
                    >
                        <FaEdit />
                    </Button>                    
                    <Button variant="danger" onClick={() => removeData(item)}>
                        <FaTrash />
                    </Button>
                </td>
            </tr>    
        ));
    };
    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="sortableHeader" onClick={ () => handleSortBy('fullname')}>Full Name</th>
                        <th className="sortableHeader" onClick={ () => handleSortBy('email')}>Email</th>
                        <th className="sortableHeader" onClick={ () => handleSortBy('age')}>Age</th>
                        <th className="sortableHeader" onClick={ () => handleSortBy('role')}>Role</th>
                        <th className="sortableHeader" onClick={ () => handleSortBy('active')}>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { displayRow(rawData) }
                </tbody>
            </Table>
            <SimpleCrudEdit 
                show={showEditModal}
                hide={hideModal}
                editValue={editValue}
                getUsersDispatch={getUsersDispatch}
                setShowNotif={setShowNotif}
                setNotifMessage={setNotifMessage}
                currentPage={currentPage}
                searchKey={searchKey}
                sortBy={sortBy}
                sortDir={sortDir}
            />
        </>
    );

}

export default SimpleCrudTable;
