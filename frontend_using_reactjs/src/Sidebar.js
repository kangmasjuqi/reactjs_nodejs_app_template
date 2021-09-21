import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Sidebar() {
  return (
      <div className="sidebar">
        <Accordion defaultActiveKey="2">
          <Card className="custom-card">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              UI/UX ELEMENTS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card>
                <ul className="sidebar-menu">
                  <li key="accordion">
                    <Link to="/accordion">Accordion</Link>
                  </li>
                  <li key="alert">
                    <Link to="/alert">Alert</Link>
                  </li>
                  <li key="badge">
                    <Link to="/badge">Badge</Link>
                  </li>
                  <li key="breadcrumb">
                    <Link to="/breadcrumb">Breadcrumb</Link>
                  </li>
                  <li key="button">
                    <Link to="/button">Button</Link>
                  </li>
                  <li key="carddeck">
                    <Link to="/carddeck">CardDeck</Link>
                  </li>
                  <li key="card">
                    <Link to="/card">Card</Link>
                  </li>
                  <li key="form">
                    <Link to="/form">Form</Link>
                  </li>
                  <li key="formwithvalidation">
                    <Link to="/formwithvalidation">Form w/ Val</Link>
                  </li>
                  <li key="jumbotron">
                    <Link to="/jumbotron">Jumbotron</Link>
                  </li>
                  <li key="modal">
                    <Link to="/modal">Modal</Link>
                  </li>
                  <li key="navbar">
                    <Link to="/navbar">Navbar</Link>
                  </li>
                  <li key="pagination">
                    <Link to="/pagination">Pagination</Link>
                  </li>
                  <li key="progress">
                    <Link to="/progress">Progress</Link>
                  </li>
                  <li key="shadow">
                    <Link to="/shadow">Shadow</Link>
                  </li>
                  <li key="spinner">
                    <Link to="/spinner">Spinner</Link>
                  </li>
                  <li key="tab">
                    <Link to="/tab">Tab</Link>
                  </li>
                  <li key="table">
                    <Link to="/table">Table</Link>
                  </li>
                  <li key="toast">
                    <Link to="/toast">Toast</Link>
                  </li>
                </ul>                  
              </Card>
            </Accordion.Collapse>
          </Card>
          <Card className="custom-card">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              STATS/ CHARTS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card>
                <ul className="sidebar-menu">
                    <li key="simplebar">
                      <Link to="/simplebar">SIMPLE BAR</Link>
                    </li>
                    <li key="stackedbar">
                      <Link to="/stackedbar">STACKED BAR</Link>
                    </li>
                    <li key="composedchart">
                      <Link to="/composedchart">COMPOSED CHART</Link>
                    </li>
                    <li key="simpleline">
                      <Link to="/simpleline">SIMPLE LINE</Link>
                    </li>
                    <li key="simpleradar">
                      <Link to="/simpleradar">SIMPLE RADAR</Link>
                    </li>
                    <li key="simplepie">
                      <Link to="/simplepie">SIMPLE PIE</Link>
                    </li>
                    <li key="pietwolevel">
                      <Link to="/pietwolevel">PIE TWO LEVEL</Link>
                    </li>
                </ul>
              </Card>
            </Accordion.Collapse>
          </Card>
          <Card className="custom-card">
            <Accordion.Toggle as={Card.Header} eventKey="2">
              PAGE SAMPLES
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card>
                <ul className="sidebar-menu">
                    <li key="login">
                      <Link to="/login">Login</Link>
                    </li>
                    <li key="invoice">
                      <Link to="/invoice">Invoice</Link>
                    </li>
                    <li key="ecommerce">
                      <Link to="/ecommerce">E-Commerce</Link>
                    </li>
                    <li key="employee">
                      <Link to="/employee">Employee</Link>
                    </li>
                    <li key="contact">
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li key="uploader">
                      <Link to="/uploader">Uploader</Link>
                    </li>
                </ul>
              </Card>
            </Accordion.Collapse>
          </Card>
          <Card className="custom-card">
            <Accordion.Toggle as={Card.Header} eventKey="3">
              CRUD SAMPLES
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card>
                <ul className="sidebar-menu">
                    <li key="simplecrud">
                      <Link to="/simplecrud">SIMPLE CRUD</Link>
                    </li>
                    <li key="wizardcrud">
                      <Link to="/wizardcrud">WIZARD CRUD</Link>
                    </li>
                </ul>
              </Card>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
  );
}

export default Sidebar;
