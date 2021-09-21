import React from 'react';
import '../App.css';

import { FaBuilding, FaPhone, FaComments, FaUser } from 'react-icons/fa';

const employeeData = [
    {
        empid : 123,
        job : 'Software Engineer',
        fullname : 'Andrey Abraham',
        about : 'Team player / Tech enthusias/ Football lover/ Gardening geek',
        address : 'Jl perjuangan no 17, kebon jeruk, jakarta selatan, 12345',
        phone : '021-1234567',
        photo : '/avatar_man1.png'
    },
    {
        empid : 456,
        job : 'DB Admin',
        fullname : 'Nicole Henry',
        about : 'A husband/ A father of 2 childs/ A gardener',
        address : 'Jl perjuangan no 17, kebon jeruk, jakarta selatan, 12345',
        phone : '021-1234567',
        photo : '/avatar_man2.jpeg'
    },
    {
        empid : 789,
        job : 'Student',
        fullname : 'Yolanda Ying',
        about : 'A nice girl/ Cooking lover/ Nature geek',
        address : 'Jl perjuangan no 17, kebon jeruk, jakarta selatan, 12345',
        phone : '021-1234567',
        photo : '/avatar_woman1.jpeg'
    },
    {
        empid : 111,
        job : 'UI/UX Designer',
        fullname : 'Robert Sanchman',
        about : 'A student/ Football lover/ Travelling folk',
        address : 'Jl perjuangan no 17, kebon jeruk, jakarta selatan, 12345',
        phone : '021-1234567',
        photo : '/avatar_man2.jpeg'
    },
    {
        empid : 222,
        job : 'Project Manager',
        fullname : 'Diana Lovel',
        about : 'A mom/ Cooking lover/ Nature geek',
        address : 'Jl perjuangan no 17, kebon jeruk, jakarta selatan, 12345',
        phone : '021-1234567',
        photo : '/avatar_woman2.jpeg'
    },
];

const EmployeeCard = ({ data }) => {

    return (
      <div key={ data.empid } className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
        <div className="card bg-light d-flex flex-fill">
            <div className="card-header text-muted border-bottom-0">
                { data.job }
            </div>
            <div className="card-body pt-0">
                <div className="row">
                    <div className="col-7">
                        <h2 className="lead"><b>{ data.fullname }</b></h2>
                        <p className="text-muted text-sm"><b>About: </b> 
                            { data.about }
                        </p>
                    </div>
                    <div className="col-5 text-center">
                        <img src={ data.photo } alt="user-avatar" 
                            className="img-circle img-fluid" />
                    </div>
                    <div className="col-12">
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                            <li className="small"><span className="fa-li">
                                <FaBuilding /></span> Address: { data.address }
                            </li>
                            <li className="small"><span className="fa-li">
                                <FaPhone /></span> Phone #: { data.phone }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="text-right">
                    <a href="#/" className="btn btn-sm bg-teal" style={{margin: '3px'}}>
                        <FaComments />
                    </a>
                    <a href="#/" className="btn btn-sm btn-primary">
                        <FaUser /> View Profile
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
};

const Employee = () => {

    return (
      <section className="content">
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
                { 
                    employeeData.map((emp, idx) => (
                        <EmployeeCard data={emp} key={emp.empid} />
                    ))
                }
            </div>
          </div>
          <div className="card-footer">
            <nav aria-label="Contacts Page Navigation">
              <ul className="pagination justify-content-center m-0">
                <li className="page-item"><a className="page-link" href="#/">1</a></li>
                <li className="page-item active"><a className="page-link" href="#/">2</a></li>
                <li className="page-item"><a className="page-link" href="#/">3</a></li>
                <li className="page-item"><a className="page-link" href="#/">4</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
    
}

export default Employee;
