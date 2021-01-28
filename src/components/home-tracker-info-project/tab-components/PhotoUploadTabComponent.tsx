import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const PhotoUploadTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#photo-uploads" eventKey="first" id="tabs">Photo Uploads</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default PhotoUploadTabComponent;