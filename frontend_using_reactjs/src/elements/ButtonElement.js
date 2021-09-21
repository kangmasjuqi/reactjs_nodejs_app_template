import React from 'react';
import '../App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import SplitButton from 'react-bootstrap/SplitButton';

const ButtonElement = () => {

    const outlinedButtons = () => {
        return [
            'outline-primary',
            'outline-secondary',
            'outline-success',
            'outline-warning',
            'outline-danger',
            'outline-info',
            'outline-light',
            'outline-dark',
            'outline-link',
          ].map((variant, idx) => (
            <>
              <Button key={idx} variant={variant}>
              {variant}
              </Button>{' '}
            </>
          )); 
    };

    const buttons = () => {
        return [
            'primary',
            'secondary',
            'success',
            'warning',
            'danger',
            'info',
            'light',
            'dark',
            'link',
          ].map((variant, idx) => (
            <>
              <Button key={idx} variant={variant}>
              {variant}
              </Button>{' '}
            </>
        ));        
    };

    const dropdownButtons = () => {
      return (
        <>
          {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ),
          )}
        </>       
      );
    };
    
    const dropdownSplitButtons = () => {
      return (
        <>
          {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
              <SplitButton
                key={variant}
                id={`dropdown-split-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </SplitButton>
            ),
          )}
        </>        
      );
    };

    return (
      <>
        <Row>
          <Col>
            { buttons() }
          </Col>
        </Row>
        <Row>
          <Col>
            { outlinedButtons() }
          </Col>
        </Row>
        <Row>
          <Col>
            { dropdownButtons() }
          </Col>
        </Row>
        <Row>
          <Col>
            { dropdownSplitButtons() }
          </Col>
        </Row>
      </>
    );
    
}

export default ButtonElement;
