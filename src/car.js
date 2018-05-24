// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class Car extends Component {
//   render() {
//     return (


//         <h3>trek 360</h3>



//     );
//   }
// }

// export default Car;

import React, { Component } from 'react'


/*
    Bio itself has no state since the Hannah component
    will be sending it all the data it needs as props
*/
class Car extends Component {
    render() {
        return (
            <div>
                <p>Occupation: {this.props.occupation}</p>
            </div>
        )
    }
}


export default Car