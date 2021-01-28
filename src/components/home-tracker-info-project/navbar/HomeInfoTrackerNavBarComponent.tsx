import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';

const HomeInfoTrackerNavBarComponent = () => {
    return (
        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/home-tracker-info-home" id="link">
                   Home </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    <NavDropdown title="Contact Information" id="link">
                        <NavDropdown.Item><Link to="/contact-information" className="dropdown-color">
                            General Contact Information
                        </Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Financial Information" id="link">
                        <NavDropdown.Item><Link to="/transaction-information" className="dropdown-color">
                            Transaction Information
                        </Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/card-information" className="dropdown-color">
                            Card Information
                        </Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/bank-information" className="dropdown-color">
                            Bank Information
                        </Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Automotive Information" id="link">
                        <NavDropdown.Item><Link to="/car-information" className="dropdown-color">
                            Car Information
                        </Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/car-record-information" className="dropdown-color">
                            Car Record Information
                        </Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/repair-shop-information" className="dropdown-color">
                            Repair Shop Information
                        </Link></NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Medical Information" id="link">
                        <NavDropdown.Item><Link to="/medical-record-information" className="dropdown-color">
                            Medical Record Information
                        </Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/doctor-office-information" className="dropdown-color">
                            Doctor Office Information
                        </Link></NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link>
                        <Link to="/fun-applications" id="link">
                       Fun Applications
                        </Link>
                    </Nav.Link> */}
                    </Nav>
                    <Form inline>
                        <Link to="/login">
                            <Button variant="outline-success" id="link">Log In</Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default HomeInfoTrackerNavBarComponent;