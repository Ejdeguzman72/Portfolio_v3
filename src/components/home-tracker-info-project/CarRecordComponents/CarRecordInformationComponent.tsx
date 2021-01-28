import React from 'react';
import CardInformationTableComponent from '../CardComponents/CardInformationTableComponent';
import CarRecordInformastionTableComponent from './CarRecordInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import CarRecordsTabsComponent from '../tab-components/CarRecordsTabComponent';
import CarRecordsUploadsTabsComponent from '../tab-components/CarRecordsUploadsTabComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class CarRecordInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Car Record Information</title>
                </Helmet>
                <HomeInfoTrackerNavBarComponent />
                <div id="hero-car-record-information-background">
                    <h1>Car Record Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <CarRecordsTabsComponent />
                        <CarRecordsUploadsTabsComponent />
                        <br></br>                   
                        <CarRecordInformastionTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}