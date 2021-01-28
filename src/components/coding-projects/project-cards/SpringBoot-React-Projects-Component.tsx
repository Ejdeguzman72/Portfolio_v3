import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class SpringBootReactProjectsCardComponent extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>SpringBoot/React.js Projects</Card.Header>
                    <Card.Body>
                        <Card.Title>SpringBoot REST API</Card.Title>
                        <Card.Text>
                      
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                View Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link  to="/dsa-project">
                                    DSA Project
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link  to="/car-rental-service-project">
                                    Car Rental Service project
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}