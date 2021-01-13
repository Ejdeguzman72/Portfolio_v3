import React from  'react';
import { NavBarComponent } from '../../navbar-component/navbar-component';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/about-me-assets/logo.png';
import KY  from '../../assets/about-me-assets/l1c4.jpg';
import { Link } from 'react-router-dom';
import { Helmet} from 'react-helmet';

export class AboutMeComponent extends React.Component<any,any> {

    render() {
        return (
            <div>
                <Helmet>
                    <title>About Me</title>
                </Helmet>
                <NavBarComponent />
                <div id="hero-about-me-background">
                    <br></br>
                    {/* <div id="about-me-title-overlay"> */}
                        <h1 id="about-me-title">About Me</h1>
                    {/* </div> */}
                    <hr color="white"></hr>
                    <Container className="about-me-container-box-shadow">
                        <Row>
                            <Col md={5} id="column-text-color" className="about-me-container">
                                <div id="about-me-container">
                                    My name is Edgar DeGuzman. Currently, I am a Software Developer for Infosys based
                                    in the Austin, Texas area. Before I relocated to Texas, I was born and raised
                                    in Northern New Jersey. My passion for technology always keeps me motivated
                                    to learn new things and implement them in developing my career. My aim in my career
                                    is to become a full-stack developer to be able to fully build applications or focus
                                    more database security.
                                    </div>
                                    <br></br>
                                <div id="about-me-container">
                                    In May 2019, I graduated from the University of Louisville. I dual majored in
                                    Accounting/Computer Information Systems - Information Security while leaning towards
                                    the technical aspect. Having both a financial and technological background has proven
                                    to be beneficial as it helps me understand financial needs and how to implement that
                                    in a system. Due to my background, I am very interested in the financial sector.
                                    </div>
                                    <br></br>
                                <div id="about-me-container">
                                    My technical knowledge covers backend and frontend technologies. I am experienced in Java
                                    and SQl from my time with Infosys and Conduent. In addition to my Java knowledge, I have
                                    used the Struts and Spring framework in development work. My work with SQL includes data
                                    reporting, scripting, and PL/SQL. Also, I have been trained in Javascript as well as
                                    having a strong interest in the React.js framework in developing user interfaces.
                                </div>
                            </Col>
                            <Col md={4} id="column-text-color" className="about-me-container">
                                <img src={KY} width="250" height="250" />
                                <br></br>
                                <br></br>
                                <p>I have also used AWS ec2, s3, and rds instances for deploying applications. During my time in my career 
                                    I have used Git and RTC for version control. My greatest strength is having the curiosity and willingness to learn. As technology grows, so must we!</p>
                                <p>Overall, I enjoy being a software developer because it allows me to create something of nothing, when  I  
                                    get to create applications and help benefit people.
                                </p>
                            </Col>
                            <Col md={3} id="column-text-color" className="about-me-container">
                                <h4>Contact Information</h4>
                                <br></br>
                                <div id="about-me-container">
                                    <p>
                                        Phone Number: 201-546-0750    
                                    </p>
                                    <br></br>
                                    <p>
                                        Email: ejdeguzman72@gmail.com
                                    </p>
                                    {/* <br></br>
                                    <p>Come check out my LinkedIn page!</p>
                                    <Link to="www.linkedin.com/in/edgarjdeguzman">
                                        <img height="100" width="50" src={logo} />
                                    </Link> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}