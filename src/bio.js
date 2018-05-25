import React, { Component } from 'react'

import "./bio.css"


/*
    Bio itself has no state since the Hannah component
    will be sending it all the data it needs as props
*/
class Bio extends Component {
    render() {
        return (
            <div class="bio">
                <p>Bio: {this.props.bio}</p>
            </div>
        )
    }
}


export default Bio