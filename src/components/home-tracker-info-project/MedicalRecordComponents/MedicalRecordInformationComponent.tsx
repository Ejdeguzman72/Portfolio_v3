import React from 'react';
import MedicalRecordInformationTableComponent from './MedicalRecordInformationTableComponent';
import { Helmet } from 'react-helmet';
import MedicalRecordsUploadsTabsComponent from '../tab-components/MedicalRecordsUploadsTabComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import MedicalRecordsTabsComponent from '../tab-components/MedicalRecordsTabsComponent';
import '../../../style-sheets/homeinfotracker.scss';

export class MedicalRecordInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Medical Record Information</title>
                </Helmet>
                <div id="hero-medical-record-information-background">
                    <h1>Medical Record Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <MedicalRecordsTabsComponent />
                        <MedicalRecordsUploadsTabsComponent />
                        <br></br>
                        <MedicalRecordInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}