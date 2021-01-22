import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const CardTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#card-information" eventKey="first" id="tabs">Card Information</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default CardTabComponent;