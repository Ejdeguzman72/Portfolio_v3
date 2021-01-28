import React from 'react';
import ContactInformationTableComponent from './ContactInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import ContactTabsComponent from '../tab-components/ContactTabsComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class ContactInfomrationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact Information</title>
                </Helmet>
                <HomeInfoTrackerNavBarComponent />
                <div id="hero-contact-information-background">
                    <h1>Contact Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <ContactTabsComponent />
                        <br></br>
                        <ContactInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}