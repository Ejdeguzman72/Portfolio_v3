import React from 'react';
import Bounce from './HomePageTitleComponent';
import '../../../style-sheets/fun-react-projects.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const FunReactHomePageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Fun React Projects</title>
            </Helmet>
            <div id="hero-home-background">
                <div id="hero-overlay">
                    <div className="bounce-square">
                        <Bounce>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3 className="center-title">Press Start</h3>
                        </Bounce>
                        <div className="button-row">
                            <Button variant="dark" className="start-button" size="lg">
                                <Link to="/fun-react-projects/to-do-list" className="navbar-link">
                                    START
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunReactHomePageComponent;