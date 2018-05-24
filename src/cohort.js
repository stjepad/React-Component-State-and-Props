import React, { Component } from 'react'


/*
    Cohort itself has no state since the Hannah component
    will be sending it all the data it needs as props
*/
class Cohort extends Component {
    render() {
        return (
            <div>
                <p>Cohort: {this.props.Cohort}</p>
            </div>
        )
    }
}


export default Cohort