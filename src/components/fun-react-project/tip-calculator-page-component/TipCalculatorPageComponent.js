import React from 'react';
import { Container, Row, Button,Form } from 'react-bootstrap';
import '../../../style-sheets/fun-react-projects.css';
import { FooterComponent } from '../../footer-component/footer-component';
import { FunReactProjectNavBarComponent } from '../fun-react-project-navbar/FunReactProjectNavBar';

export class TipCalculatorPageCompoennt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0.00,
            tipPercent: 0.15,
            tipAmount: 0.00,
            service: 'Satisfactory',
            total: 0.00
        }
    }

    onAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    onServiceChange = (event) => {
        this.setState({
            service: event.target.value
        });
    }

    onHandleTipPercentChange = (event) => {
        this.setState({
            tipPercent: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            tipAmount: this.state.amount * this.state.tipPercent,
            total: parseInt(this.state.amount) + parseInt(this.state.tipAmount)
        })
        console.log(`Amount: ${this.state.amount}`);
        console.log(`Tip Percent: ${this.state.tipPercent}`);
        console.log(`Tip Amount: ${this.state.tipAmount}`);
        console.log(`Service: ${this.state.service}`);
        console.log(`Total: ${this.state.total}`);
    }

    render() {
        return (
            <div>
                <FunReactProjectNavBarComponent />
                <div id="hero-tip-calculator-background">
                    <br></br>
                    <Form onSubmit={this.onSubmit}>
                        <Container className="tip-calculator-container">
                            <h1 className="center-title">Tip Calculator</h1>
                            <h3 id="tip-calculator-center-row">Bill Amount:  {this.state.amount}</h3>
                            <input type="text" onChange={(event) => this.onAmountChange(event)} placeholder="0.00"/>
                            <h3 id="tip-calculator-center-row">How was the service?</h3>
                            <select onChange={(event) => this.onServiceChange(event)}>
                                <option value="Above Satisfactory">Above Satisfactory</option>
                                <option selected value="Satisfactory">Satisfactory</option>
                                <option value="Below Satisfactory">Below Satisfactory</option>
                            </select>
                            <h3 id="tip-calculator-center-row">Choose Tip Amount:</h3>
                            <div className="form-check">
                                <label className="tip-calculator-label">
                                    <input 
                                    type="radio"
                                    name="react-tips"
                                    value={0.15}
                                    checked={this.state.tipPercent === 0.15}
                                    className="tip-calculator-radio-button"
                                    onChange={this.handleTipPercentChange}
                                    />
                                    15%
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="tip-calculator-label">
                                    <input 
                                    type="radio"
                                    name="react-tips"
                                    value={0.20}
                                    checked={this.state.tipPercent === 0.20}
                                    className="tip-calculator-radio-button"
                                    onChange={this.handleTipPercentChange}
                                    />
                                    20%
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="tip-calculator-label">
                                    <input 
                                    type="radio"
                                    name="react-tips"
                                    value={0.22}
                                    checked={this.state.tipPercent === 0.22}
                                    className="tip-calculator-radio-button"
                                    onChange={this.handleTipPercentChange}
                                    />
                                    22%
                                </label>
                            </div>
                            <br></br>
                            <Button variant="secondary" type="submit">Submit:</Button>
                            <h3 className="center-title">Tip Amount: {this.state.tipAmount} </h3>
                            <h3 className="center-title">Total Amount:  {parseInt(this.state.amount) + parseInt(this.state.tipAmount)}</h3>
                        </Container>
                    </Form>
                </div>
                <FooterComponent />
            </div>
        )
    }
}