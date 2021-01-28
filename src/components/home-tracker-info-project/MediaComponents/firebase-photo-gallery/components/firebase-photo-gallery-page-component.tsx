import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import UploadForm from './upload-fom';
import Title from './title';
import ImageGrid from './image-grid';
import { Modal } from 'react-bootstrap';

const FirebasePhotoGalleryPageComponent = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div>
            <Helmet>
                <title>
                    DeGuzmanStuffAnywhere Photo Gallery
            </title>
            </Helmet>
            <div id="white-background">
                <div>
                    <Title />
                    <UploadForm />
                    <ImageGrid setSelectedImg={setSelectedImg} />
                    { selectedImg && (
                        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FirebasePhotoGalleryPageComponent;