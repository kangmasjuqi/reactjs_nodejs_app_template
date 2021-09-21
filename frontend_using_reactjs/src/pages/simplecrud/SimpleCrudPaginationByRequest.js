import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import SimpleCrudTable from './SimpleCrudTable';

const SimpleCrudPaginationByRequest = ({
        dataUsers, dataMeta, getUsersDispatch, setShowNotif, setNotifMessage
    }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const [sortBy, setSortBy] = useState('id');
    const [sortDir, setSortDir] = useState('desc');

    useEffect(() => {
        getUsersDispatch({currentPage: currentPage, searchKey: ''});
    },[]);

    const getPaginatedData = (currentPage) => {
        setCurrentPage(currentPage)
        getUsersDispatch({
            currentPage: currentPage, searchKey: searchKey,
            sortBy: sortBy, sortDir: sortDir
        }); 
    };

    const searchData = (param) => {
        setSearchKey(param)
        getUsersDispatch({currentPage: 1, searchKey: searchKey})
    };

    let pagesLinks = [];
    let nLinks = dataMeta.total_data/dataMeta.n_perpage
    if(dataMeta.total_data%dataMeta.n_perpage > 0)
        nLinks += 1
    for (var i = 1; i <= nLinks; i++) {
        pagesLinks.push(i);
    }
    const paginationLinks = (pagesLinks, currentPage) => {
        return pagesLinks.map(function(page){
            let linkClasses = "pagination-item-custom"
            if(page === currentPage){
                linkClasses += " active"
            }
            return (
                <li key={page} className={linkClasses}>
                    <Link key={page} onClick={() => getPaginatedData(page)}>
                        {page}
                    </Link>
                </li>                
            )
        })
    };

    const handleSortBy = (sortBy) => {
        let sortDirection = (sortDir === 'desc') ? 'asc': 'desc';
        setSortBy(sortBy);
        setSortDir(sortDirection);
        getUsersDispatch({
            currentPage: currentPage, searchKey: searchKey,
            sortBy: sortBy, sortDir: sortDirection
        });        
    };

    return (
        <>
            <div className="row">
                <div className="col text-left">
                    <h4>PARTIAL DATA ARE FETCHED by request</h4>
                </div>
                <div className="col text-right">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="form-control"
                        placeholder="Search for.."
                        value={searchKey}
                        onChange={(e) => searchData(e.target.value)}
                        style={{ width: '320px', display: 'inline', marginBottom: '10px' }}
                    />
                </div>
            </div>

            <SimpleCrudTable 
                rawData={dataUsers} 
                getUsersDispatch={getUsersDispatch} 
                setShowNotif={setShowNotif}
                setNotifMessage={setNotifMessage}
                currentPage={currentPage}
                searchKey={searchKey}
                handleSortBy={handleSortBy}
                sortBy={sortBy}
                sortDir={sortDir}
            />

            <div className="text-center">
                <div className="pagination-container-custom">
                    <ul className="pagination-list-custom">
                        { paginationLinks(pagesLinks, currentPage) }
                    </ul>
                </div>
            </div>

        </>
      );
    
}

export default SimpleCrudPaginationByRequest;
