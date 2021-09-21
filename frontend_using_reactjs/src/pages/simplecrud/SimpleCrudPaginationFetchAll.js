import React, {useEffect, useState, useMemo} from 'react';

import '../../App.css';
import SimpleCrudTable from './SimpleCrudTable';

import Pagination from '../../lib/pagination/Pagination';

let PageSize = 5;

const SimpleCrudPaginationFetchAll = ({
        dataUsers, getUsersDispatch, setShowNotif, setNotifMessage
    }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return dataUsers.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, dataUsers]);

    useEffect(() => {
        getUsersDispatch({currentPage: currentPage});
    },[]);

    return (
        <>
            <h4>Note : ALL DATA IS FETCHED once from API in the beginning</h4>

            <SimpleCrudTable 
                rawData={currentTableData} 
                getUsersDispatch={getUsersDispatch} 
                setShowNotif={setShowNotif}
                setNotifMessage={setNotifMessage}
                currentPage={currentPage}
            />

            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dataUsers.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />

        </>
      );
    
}

export default SimpleCrudPaginationFetchAll;
