// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class Address extends Component {
//   render() {
//     return (


//         <h3>Planet mother fuckin earffff</h3>



//     );
//   }
// }

// export default Address;

import React, { Component } from 'react'


/*
    Bio itself has no state since the Hannah component
    will be sending it all the data it needs as props
*/
class Address extends Component {
    render() {
        return (
            <div>
                <p>Address: {this.props.Address}</p>
            </div>
        )
    }
}


export default Address
