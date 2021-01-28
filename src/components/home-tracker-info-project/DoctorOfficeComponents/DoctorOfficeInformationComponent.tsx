import React from 'react';
import { Container } from 'react-bootstrap';
import DoctorInformationTableComponent from './DoctorInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import DoctorOfficeTabsComponent from '../tab-components/DoctorOfficeTabsComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';

export class DoctorOfficeInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Doctor Office Information</title>
                </Helmet>
                <div id="hero-doctor-office-information-background">
                    <h1>Doctor Office Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <DoctorOfficeTabsComponent />
                        <br></br>
                        <DoctorInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}