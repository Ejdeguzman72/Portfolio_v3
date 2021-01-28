import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import CarRecordsTabsComponent from '../tab-components/CarRecordsTabComponent';
import CarRecordsUploadsTabsComponent from '../tab-components/CarRecordsUploadsTabComponent';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import { CarRecordUploadComponent } from './CarRecordUploadComponent';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

const CarRecordUploadPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Car Record Upload</title>
            </Helmet>
            <HomeInfoTrackerNavBarComponent />
            <div id="hero-car-record-information-background">
                <h2>Car Record Uploads</h2>
                <hr></hr>
                <div className="tab-center">
                    <HomeTabComponent />
                    <CarRecordsTabsComponent />
                    <CarRecordsUploadsTabsComponent />
                </div>
                <div className="media-uploads-container"> 
                    <Container className="container" style={{ width: 'auto' }}>
                        <div style={{ margin: "20px" }}>
                            <h3>Card Record Files</h3>
                            <h4>Upload Files</h4>
                        </div>
                        <CarRecordUploadComponent />
                    </Container>
                </div>
            </div>
        </div >
    )
}

export default CarRecordUploadPageComponent;