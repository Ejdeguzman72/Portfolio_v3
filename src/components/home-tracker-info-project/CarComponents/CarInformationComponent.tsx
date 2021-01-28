import React from 'react';
import CarInformastionTableComponent from './CarInformationTableComponent';
import { Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import CarTabsComponent from '../tab-components/CarTabsComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import '../../../style-sheets/homeinfotracker.scss';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class CarInformationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Car Information</title>
                </Helmet>
                <HomeInfoTrackerNavBarComponent />
                <div id="hero-car-information-background">
                    <h1>Car Information</h1>
                    <hr></hr>
                    <div className="tab-center">
                        <HomeTabComponent />
                        <CarTabsComponent />
                        <br></br>
                        <CarInformastionTableComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}