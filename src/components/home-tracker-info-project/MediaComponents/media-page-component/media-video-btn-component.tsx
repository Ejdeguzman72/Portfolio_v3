import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class MediaVideoButtonComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Button variant="dark" size="lg">
                    <Link to="/videos">
                        Videos
                    </Link>
                </Button>
            </div>
        )
    }
}