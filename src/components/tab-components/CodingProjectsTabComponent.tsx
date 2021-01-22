import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const CodingProjectsTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#coding-projects" eventKey="first" id="tabs">Coding Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default CodingProjectsTabComponent;