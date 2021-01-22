import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const BankTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#home" eventKey="first" id="tabs">Bank Information</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default BankTabComponent;