import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Row, Col, } from 'react-bootstrap';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import logo from '../../assets/about-me-assets/logo.png';
import { GitHubIconComponent } from './github-icon-component';
import { LinkedInIconComponent } from './linkedin-icon-component';

export class NavBarComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="nav-bar-link">
                                <Link to="/home" id="nav-bar-link">
                                    Home
                            </Link>
                            </Nav.Link>
                            <Nav.Link id="nav-bar-link">
                                <Link to="/about-me" id="nav-bar-link">
                                    About Me
                            </Link>
                            </Nav.Link>
                            <Nav.Link id="nav-bar-link">
                                <Link to="/coding-projects" id="nav-bar-link">
                                    Coding Projects
                            </Link>
                            </Nav.Link>
                            <Nav.Link id="nav-bar-link">
                                <Link to="/resume" id="nav-bar-link">
                                    Resume
                            </Link>
                            </Nav.Link>
                            {/* <Nav.Link id="nav-bar-link">
                            <GitHubIconComponent expand="lg" />
                        </Nav.Link>
                        <Nav.Link id="nav-bar-link">
                            <LinkedInIconComponent />
                        </Nav.Link> */}
                        </Nav>
                        <Form inline>
                            <Button variant="outline-info" id="navbar-button">
                                <a href="http://project-dsa-bucket.s3.us-east-2.amazonaws.com/index.html#/" >
                                    EJ-Application
                            </a>
                            </Button>
                            <Button variant="outline-info" id="navbar-button">
                                <Link to="/fun-react-projects">Fun React Projects</Link>
                            </Button>
                            <Link to="contact-me" id="navbar-button">
                                <Button variant="outline-info" >Contact Me</Button  >
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}