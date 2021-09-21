import React from 'react';
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Row className="text-center">
            <Col sm={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Sidebar />
            </Col>
            <Col sm={9}>
              <div className="content-wrapper">
                <Navbar />
                {
                  routes.map(
                    (r) => <Route 
                            key={r.title} exact={r.exact} 
                            path={r.path} component={r.component} 
                          /> 
                  )
                }
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col sm={12}>
              <Footer />
            </Col>
          </Row>
        </div>
      </Router>
    </Provider>
  );
}

export default hot(App);
