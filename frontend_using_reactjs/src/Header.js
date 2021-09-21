import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-2">
            <div className="logo-container">
              <img src="" alt="logo" title="logo" />
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8">
            <h1>
              Marjuqi RND - Application Template
            </h1>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2" style={{textAlign: 'right'}}>
              <DropdownButton
                as={ButtonGroup}
                key="warning"
                id='dropdown-variants-warning'
                variant='warning'
                title='User'
                style={{ position: 'absolute', bottom: 0, right: 0 }}
              >
                <Dropdown.Item eventKey="1" tag={Link} href="/preferences">
                  Preferences
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" tag={Link} href="/change-password">
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Logout</Dropdown.Item>
              </DropdownButton>

          </div>
        </div>
      </header>
  );
}

export default Header;
