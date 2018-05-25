import React, { Component } from 'react'
import Car from "./car"
import Bio from "./bio"
import Address from "./address"
import Cohort from './cohort';
import Name from './name';


class Dejan extends Component {
    state = {

            Name: "",
            occupation: "",
            bio: "",
            Address: "",
            Cohort: ""
        }

        componentDidMount() {
            fetch("http://localhost:8088/people/1")
            .then(response => response.json())
            .then(Dejan => this.setState(Dejan))
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

export default Dejan
