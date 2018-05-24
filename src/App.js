import React, { Component } from 'react'
import Car from "./car"
import Bio from "./bio"
import Address from "./address"
import Cohort from './cohort';
import Name from './name';


class Hannah extends Component {
    constructor (props) {
        /*
            This is needed to properly initialize a React
            component if you define a constructor
        */
        super(props)

        // Set the initial state of the component
        this.state = {

            Name: "Dejan Stjepanović",
            occupation: "Software Engineer",
            bio: "Graduated NSS in cohort 13. Junior instructor as NSS for one year. Now kicking ass professionally.",
            Address: "Muhhhfuckin Uuuuurfffff",
            Cohort: "25"
        }
    }

    // Occupation and bio now sent to Bio as properties
    render() {
        return (
            <article>
                <Name Name={this.state.Name} bio={this.state.bio} />
                <Car occupation={this.state.occupation} bio={this.state.bio} />
                <Bio bio={this.state.occupation} bio={this.state.bio} />
                <Address Address={this.state.Address} bio={this.state.bio} />
                <Cohort Cohort={this.state.Cohort} bio={this.state.bio} />

            </article>
        )
    }
}

export default Hannah
