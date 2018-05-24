import React, { Component } from 'react'


/*
    Bio itself has no state since the Hannah component
    will be sending it all the data it needs as props
*/
class Bio extends Component {
    render() {
        return (
            <div>
                <p>Bio: {this.props.bio}</p>
            </div>
        )
    }
}


export default Bio