
import React from 'react';
import '../App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const TabElement = () => {

    return (
        <>
          <div style={{ margin: '30px 0px'}}>
            <h4>Tab with HORIZONTAL navigation</h4>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                <div>
                  becik ketitik olo kethoro, suro diro joyo diningrat lebur dening pangastuti<br />
                  ing ngarso sung tulodho, ing madyo mangun karso, tut wuri handayani<br />
                </div>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <div>
                  man lam yardho biqodhooi wa lam yashbir bi balaa-i falyathlub robban siwaaya<br />
                  annabiy shollu 'alaih sholawaatullaahi 'alaih wayanaalul barokaah kullu man sholla 'alaih
                </div>
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                <div>
                  siji loro telu astone sedeku, mirengake bu guru mangke yen didangu
                  papat nuli limo lungguhe sing toto, ojo podo sembrono mundak ora biso<br />
                </div>
              </Tab>
            </Tabs>
          </div>
          <div style={{ margin: '30px 0px'}}>
            <h4>Tab with VERTICAL navigation</h4>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      becik ketitik olo kethoro, suro diro joyo diningrat lebur dening pangastuti<br />
                      ing ngarso sung tulodho, ing madyo mangun karso, tut wuri handayani<br />
                      siji loro telu astone sedeku, mirengake bu guru mangke yen didangu
                      papat nuli limo lungguhe sing toto, ojo podo sembrono mundak ora biso<br />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      man lam yardho biqodhooi wa lam yashbir bi balaa-i falyathlub robban siwaaya<br />
                      annabiy shollu 'alaih sholawaatullaahi 'alaih wayanaalul barokaah kullu man sholla 'alaih
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </>
      );
    
}

export default TabElement;
