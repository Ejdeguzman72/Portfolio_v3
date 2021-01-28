import React from 'react';
import { Container } from 'react-bootstrap';
import BankInformationTableComponent from './BankInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import BankTabComponent from '../tab-components/BankTabsComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class BankInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Bank Information</title>
                </Helmet>
                <HomeInfoTrackerNavBarComponent />
                <div id="hero-car-information-background">
                    <h1>Bank Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <BankTabComponent />
                        <br></br>
                        <BankInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}