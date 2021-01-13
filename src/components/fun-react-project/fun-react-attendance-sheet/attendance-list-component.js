import React from 'react';

export default class AttendanceListComponent extends React.Component {
    
    render() {
        return (
            <ul>
                {this.props.names.map((name) => {
                    return <li key={name} className="check-in-list-item">{ name } <h3>Time Checked In: {this.props.date}</h3></li>})}
            </ul>
        )
    }
}