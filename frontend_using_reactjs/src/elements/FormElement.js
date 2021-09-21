import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const FormElement = () => {

    return (
        <>
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
          </Form>      
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>      
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
  
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
  
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
  
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
  
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
  
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
  
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>   
          <Form>
            {['checkbox', 'radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="1" name="group1" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="2" name="group1" type={type} id={`inline-${type}-2`} />
                <Form.Check
                  inline
                  disabled
                  label="3 (disabled)"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group>
          </Form>
        </>   
      );
}

export default FormElement;
