import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FaStore } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="#home" className="header__brand">
          <FaStore className="store-icon" />
          <span className="brand-text">amazon</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex flex-grow-1 mx-2">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 flex-grow-1"
              aria-label="Search"
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Form>

          <Nav className="ms-auto">
            <Nav.Link href="#signin" className="header__nav-link">
              <div className="header__option">
                <span className="header__optionLineOne">Hello, Sign in</span>
                <span className="header__optionLineTwo">Account & Lists</span>
              </div>
            </Nav.Link>

            <Nav.Link href="#orders" className="header__nav-link">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Nav.Link>

            <Nav.Link href="#cart" className="header__nav-link">
              <div className="header__optionBasket">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="header__basketCount">0</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;