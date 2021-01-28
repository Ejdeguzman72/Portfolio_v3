import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../../footer-component/footer-component';
import PhotosTabComponent from '../../tab-components/PhotosTabComponent';
import { PhotoUploadPageComponent } from '../photo-upload-page-component/photo-upload-page-component';
import '../../../../style-sheets/homeinfotracker.scss';

export class PhotoPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Photos</title>
                </Helmet>
                <div className="hero-media-background">
                    <br></br>
                    <h1>Photos</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <PhotosTabComponent />
                        <PhotoUploadPageComponent />
                    </div>
                    <br></br>
                    {/* <PhotoGalleryComponent /> */}
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}