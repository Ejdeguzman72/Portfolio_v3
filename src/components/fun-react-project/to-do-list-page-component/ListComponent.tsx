import React from 'react';

export default class extends React.Component<any,any> {
    render() {
        return (
            <ul>
                {this.props.items.map((item: any,i: any) => {
                    return <li onClick={(event)  => { this.props.removeItem(i)}} key={item} className="to-do-list-item">{item}</li>
                })}
            </ul>
        )
    }
}