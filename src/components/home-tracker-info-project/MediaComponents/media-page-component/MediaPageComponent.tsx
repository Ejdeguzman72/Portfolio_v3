import React from 'react';
import { Helmet } from 'react-helmet';
import { MediaPhotoPageContainerComponent } from './photo-page-container-component';
import { VideoPageContainerComponent } from './video-page-container-component';
import { Row, Col } from 'react-bootstrap';
import { FireBasePhotoGalleryContainer } from './firebase-photo-gallery-container';
import { FooterComponent } from '../../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';

export class MediaPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Media</title>
                </Helmet>
                <div className="hero-media-background">
                    <Row>
                        <Col md={4}>
                            <MediaPhotoPageContainerComponent />
                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>
                            <VideoPageContainerComponent />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    {/* <Row>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>
                            < FireBasePhotoGalleryContainer />
                        </Col>
                        <Col md={4}>
                            
                        </Col>
                    </Row> */}
                </div>
                <FooterComponent />
            </div>
        )
    }
}