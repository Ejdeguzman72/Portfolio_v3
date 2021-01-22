import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const AboutMeTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#about-me" eventKey="first" id="tabs">About Me</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default AboutMeTabComponent;