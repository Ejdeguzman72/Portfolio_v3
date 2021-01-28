import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FirebasePhotoGalleryBtn = () => {
    return (
        <div>
            <Button variant="dark" size="lg">
                <Link to="/firebase-photo-gallery">
                    Photo Gallery
                    </Link>
            </Button>
        </div>
    )
}

export default FirebasePhotoGalleryBtn;