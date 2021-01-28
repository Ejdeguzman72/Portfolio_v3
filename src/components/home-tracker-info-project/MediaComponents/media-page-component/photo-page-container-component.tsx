import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../style-sheets/media-page.css';
import { MediaPhotoButtonComponent } from './media-photo-btn-component';

export class MediaPhotoPageContainerComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Container className="media-photo-page-container-component">
                    <div className="media-photo-page-container-background">
                        <MediaPhotoButtonComponent />
                    </div>
                </Container>
            </div>
        )
    }
}