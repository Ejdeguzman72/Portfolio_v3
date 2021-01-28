import React from 'react';
import CardInformationTableComponent from './CardInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import CardTabsComponent from '../tab-components/CardTabsComponent';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class CardInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Card Information</title>
                </Helmet>
                <HomeInfoTrackerNavBarComponent />
                <div id="hero-contact-information-background">
                    <h1>Card Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <CardTabsComponent />
                        <br></br>
                        <CardInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}