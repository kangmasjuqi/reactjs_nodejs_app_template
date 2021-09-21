import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../App.css';
import SimpleCrudPaginationFetchAll from './SimpleCrudPaginationFetchAll';
import SimpleCrudPaginationByRequest from './SimpleCrudPaginationByRequest';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { FaPlus } from 'react-icons/fa';

import { getUsers } from '../../redux/users/users.action';

const SimpleCrudIndex = () => {

    const dispatch = useDispatch();

    const [dataUsers, setDataUsers] = useState([]);
    const [dataMeta, setDataMeta] = useState({});
    const [showNotif, setShowNotif] = useState(false);
    const [notifMessage, setNotifMessage] = useState('');

    const getUsersDispatch = (params) => {

        let search = ''
        if (params.hasOwnProperty('searchKey')){
            search = params.searchKey
        }
        let currentPage = 1
        if (params.hasOwnProperty('currentPage')){
            currentPage = params.currentPage
        }
        let sortBy = 'id'
        if (params.hasOwnProperty('sortBy')){
            sortBy = params.sortBy
        }
        let sortDir = 'desc'
        if (params.hasOwnProperty('sortDir')){
            sortDir = params.sortDir
        }
        const payload = {
            search: search,
            currentPage: currentPage,
            sortBy: sortBy,
            sortDir: sortDir
        };

        dispatch(getUsers(payload)).then((res) => {
            setDataUsers(res.data.data);
            setDataMeta(res.data.meta);
        });
    };

    return (
        <>
            <p className="text-right">
                <Link to="/simplecrud/create">
                    <Button><FaPlus /> Create User</Button>
                </Link>
            </p>
            {
                showNotif? (
                    <p className="text-center">
                        <Alert 
                            key="alert-info" 
                            variant="info" 
                            onClose={() => setShowNotif(false)} 
                            dismissible>
                            {notifMessage}
                        </Alert>
                    </p>
                ): ''
            }
            <hr/>

            <SimpleCrudPaginationByRequest 
                dataUsers={dataUsers} 
                dataMeta={dataMeta} 
                getUsersDispatch={getUsersDispatch} 
                setShowNotif={setShowNotif}
                setNotifMessage={setNotifMessage}
            />

        </>
      );
    
}

export default SimpleCrudIndex;
