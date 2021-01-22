import React from 'react';
import  Pic  from "../../assets/pic.png";
import { AboutMeButtonComponent } from './about-me-button-component';
import { HomeButtonComponent } from './home-button-component';
import { CodingProjectsButtonComponent } from './coding-projects-button-component';
import { ResumeButtonComponent } from './resume-button-component';
import { Button } from 'react-bootstrap';
import {  Helmet } from 'react-helmet';
import HomeTabComponent from '../tab-components/HomeTabComponent';
import AboutMeTabComponent from '../tab-components/AboutMeTabComponent';
import ResumeTabComponent from '../tab-components/ResumeTabComponent';
import CodingProjectsTabComponent from '../tab-components/CodingProjectsTabComponent';

export class HomeComponent extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Edgar Joseph Briones DeGuzman</title>
                </Helmet>
                <div className="split left">
                    <div className="centered">
                    <img src={Pic} alt="Pic" />
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        <div className="form-row">
                            <HomeTabComponent />
                        </div>
                        <br></br>
                        <div className="form-row">
                            <AboutMeTabComponent/>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <CodingProjectsTabComponent />
                        </div>
                        <br></br>
                        <div className="form-row">
                            <ResumeTabComponent />
                        </div>
                        {/* <div className="form-row">
                        <div className="blink"><span>blinking text</span></div>
                        </div> */}
                    </div>
                </div>
            </div>
                    )
                }
}
