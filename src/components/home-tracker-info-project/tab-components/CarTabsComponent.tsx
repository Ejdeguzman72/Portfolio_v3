import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const CarTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#cars" eventKey="first" id="tabs">Car Information</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default CarTabComponent;