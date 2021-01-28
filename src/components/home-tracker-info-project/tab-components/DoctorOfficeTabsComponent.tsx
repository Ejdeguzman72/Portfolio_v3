import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const DoctorOfficeTabsComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#doctor-office-information" eventKey="first" id="tabs">Doctor Office Information</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default DoctorOfficeTabsComponent;