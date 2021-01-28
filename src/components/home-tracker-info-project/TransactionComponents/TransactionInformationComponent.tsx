import React from 'react';
import { Container } from 'react-bootstrap';
import TransactionInformationTableComponent from './TransactionInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import TransactionTabsComponent from '../tab-components/TransactionTabsComponent';
import TransactionUploadsTabsComponent from '../tab-components/TransactionUploadsTabComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class TransactionInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Transaction Information</title>
                </Helmet>
                <HomeInfoTrackerNavBarComponent />
                <div id="hero-transaction-information-background">
                    <h1>Transaction Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <TransactionTabsComponent />
                        <TransactionUploadsTabsComponent />
                        <br></br>
                        <TransactionInformationTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}