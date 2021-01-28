import React from 'react';
import { Form, Container, Button, Row } from 'react-bootstrap';
import AttendanceListComponent from './attendance-list-component';
import { FunReactProjectNavBarComponent } from '../fun-react-project-navbar/FunReactProjectNavBar';
import { FooterComponent } from '../../footer-component/footer-component';

export class CheckInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            present: false,
            // firstname: '',
            // lastname: '',
            fullname: '',
            names: []
        }
    }

    handleNameChange = (event) => {
        this.setState({
            fullname: event.target.value
        });
        console.log(this.state.fullname);
    }

    // handleFirstNameChange = (event) => {
    //     this.setState({ 
    //         firstname: event.target.value,
    //     });
    //     console.log(this.state.firstname);
    // }

    // handleLastNameChange =  (event)  => {
    //     this.setState({
    //         lastname: event.target.value,
    //         fullname: (this.state.firstname + ' ' + this.state.lastname)
    //     });

    //     // console.log(this.state.firstname + "this is firstname");
    //     // console.log(this.state.lastname + "this is lastname");
    //     // console.log(this.state.fullname + "handleLastNameChange");
    // }
    
    onSubmit = (event) => {
        event.preventDefault();
        var today = new Date();
        var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        this.setState({
            present: true,
            date: currentDate,
            fullname: this.state.fullname,
            names: [...this.state.names,  this.state.fullname]
        });
    }

    render() {
        return (
            <div>
                <FunReactProjectNavBarComponent />
                <div id="hero-check-in-background">
                    <br></br>
                    <Form onSubmit={this.onSubmit}>
                        <Container className="check-in-container">
                            <h1 className="center-title">Check-In</h1>
                            <label>Enter Full Name:</label>
                            <br></br>
                            <input value={this.state.fullname} type="text" className="check-in-input" onChange={(event) => this.handleNameChange(event)}/>
                            <br></br>
                            {/* <label>Enter Last Name:</label> */}
                            <br></br>
                            {/* <input value={this.state.lastname} type="text" className="check-in-input" onChange={(event) => this.handleLastNameChange(event)} /> */}
                            <br></br>
                            <Button variant="secondary" type="submit" className="check-in-button">Submit</Button>
                            <AttendanceListComponent  names={this.state.names} date={this.state.date} />
                        </Container>
                    </Form>
                </div>
                <FooterComponent />
            </div>
        )
    }
}