import React from 'react';
import { Button,Form } from 'react-bootstrap';

export default class ListComponent extends React.Component {
    render() {
        return (
            <ul>
                { this.props.groceryItems.map((groceryItem) => {
                    return <Form onSubmit={this.onHandleGroceryItemAmountChange}> 
                        <li key={groceryItem} className="grocery-list-item"> 
                        { groceryItem }
                        <input 
                        placeholder="Enter Amount: " 
                        type="text" 
                        className="grocery-list-item-input" 
                        onChange={(event) => this.props.onHandleGroceryItemAmountChange(event)}
                        /> 
                        <Button type="submit" id="grocery-item-button">Enter Amount</Button>
                        <label>Item Amount: {this.props.groceryItemAmount} </label>
                    </li>
                        </Form> 
                })}
            </ul>
        )
    }
}