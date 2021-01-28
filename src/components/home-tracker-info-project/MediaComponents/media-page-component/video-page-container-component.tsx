import React from 'react';
import { Container } from 'react-bootstrap';
import { MediaVideoButtonComponent } from './media-video-btn-component';

export class VideoPageContainerComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Container className="media-video-page-container-component">
                    <div className="media-video-page-container-background">
                        <MediaVideoButtonComponent />
                    </div>
                </Container>
            </div>
        )
    }
}