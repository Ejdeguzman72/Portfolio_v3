import React from 'react';
import { Nav, Form, Navbar, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';


export class FunReactProjectNavBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Fun React Applications</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/fun-react-projects/to-do-list">
                                <Link to="/fun-react-projects/to-do-list" className="navbar-link">
                                    To Do List
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="/fun-react-projects/tip-calculator">
                                <Link to="/fun-react-projects/tip-calculator" className="navbar-link">
                                    Tip Calculator
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/fun-react-pokedex" className="navbar-link">
                                    Pokedex
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/fun-react-tic-tac-toe" className="navbar-link">
                                    TicTacToe Game
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/fun-react-attendance-sheet" className="navbar-link">
                                    Attendance Sheet
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/fun-react-grocery-list" className="navbar-link">
                                    Grocery List
                                </Link>
                            </Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </HashRouter>
        )
    }
}