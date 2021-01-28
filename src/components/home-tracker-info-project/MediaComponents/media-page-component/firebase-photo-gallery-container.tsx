import React from 'react';
import { Container } from 'react-bootstrap';
import FirebasePhotoGalleryBtn from './FirebasePhotoGalleryBUttonComponent';
import { MediaVideoButtonComponent } from './media-video-btn-component';

export class FireBasePhotoGalleryContainer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Container className="media-photo-gallery-page-container-component">
                    <FirebasePhotoGalleryBtn />
                    <div className="media-photo-gallery-page-container-background">
                        
                    </div>
                </Container>
            </div>
        )
    }
}