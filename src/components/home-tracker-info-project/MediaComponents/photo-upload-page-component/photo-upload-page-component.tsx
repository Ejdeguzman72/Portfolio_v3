import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import PhotoUploadComponent from '../../File-Upload-Components/PhotoUploadComponent';
import PhotosTabComponent from '../../tab-components/PhotosTabComponent';
import '../../../../style-sheets/homeinfotracker.scss';

export class PhotoUploadPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
            <Helmet>
                <title>Photo Uploads</title>
            </Helmet>
            <div className="hero-media-background">
                <h2>Photo Uploads</h2>
                <hr></hr>
                <div className="tab-center">
                    <PhotosTabComponent />
                    <PhotoUploadPageComponent />
                </div>
                <div className="media-uploads-container">
                    <Container className="container" style={{ width: 'auto' }}>
                        <div style={{ margin: "20px" }}>
                            <h3>Car Record Files</h3>
                            <h4>Upload Files</h4>
                        </div>
                    </Container>
                    <PhotoUploadComponent />
                </div>
                <br></br>
            </div>
            <FooterComponent />
        </div>
        )
    }
}