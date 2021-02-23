import React from 'react'
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import './Signup.css'

class Signup extends React.Component {

    render() {
      return  ( 
        <React.Fragment>
            <Navbar />
            <div className="form-container">
                <FormField label="Name" typer="text" placeholder="e.g. Alex Smith"/>
                <FormField label="Email" type="email" placeholder="alexsmith@hotmail.com"/>
                <FormField label="Password" type="password" />
                <CoolButton isDanger title="Sign up!" />
            </div>
        </React.Fragment>
        )
    }
}

export default Signup