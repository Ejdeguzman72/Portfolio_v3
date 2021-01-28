import React from 'react';
import Link from 'react-router';
import { Switch, Route } from 'react-router'; 
import '../../../style-sheets/homeinfotracker.scss';
import { NavBarComponent } from '../../navbar-component/navbar-component';
import HomeInfoTrackerNavBarComponent from '../navbar/HomeInfoTrackerNavBarComponent';

export class EntryHomeComponent extends React.Component<any, any> {
    render() {
        return (
            
            <div>
                <HomeInfoTrackerNavBarComponent />
                <div id="margin-hero">
                    <div id="hero-home">
                        <div id="hero-home-overlay">
                            <div id="home-container">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}