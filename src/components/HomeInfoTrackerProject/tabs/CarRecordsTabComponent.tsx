import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const CarRecordsTabsComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#card-record-information" eventKey="first" id="tabs">Card Record Information</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default CarRecordsTabsComponent;