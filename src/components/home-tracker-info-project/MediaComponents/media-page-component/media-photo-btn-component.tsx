import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class MediaPhotoButtonComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Button variant="dark" size="lg">
                    <Link to="/photos">
                        Photos
                    </Link>
                </Button>
            </div>
        )
    }
}