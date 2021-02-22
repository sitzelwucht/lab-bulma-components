import React from 'react'
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'

class Signup extends React.Component {

    render() {
      return  ( 
        <React.Fragment>
            <Navbar />
            <FormField label="Name" typer="text" placeholder="e.g. Alex Smith"/>
            <FormField label="Email" type="password" placeholder="alexsmith@hotmail.com"/>
        </React.Fragment>
        )
    }
}

export default Signup