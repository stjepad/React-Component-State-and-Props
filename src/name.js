import React, { Component } from 'react'


/*
    Name itself has no state since the Hannah component
    will be sending it all the data it needs as props
*/
class Name extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.Name}</p>
            </div>
        )
    }
}


export default Name