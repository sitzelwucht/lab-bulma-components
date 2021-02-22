import React from 'react'
import '../coolbutton/CoolButton.css'


function CoolButton(props) {

    // ran out of time to create a function for all cases :(
    const getClass = () =>  {
        if (props.isPrimary) return 'is-primary button'
        else if (props.isDanger) return 'is-danger button'
        else if (props.isSuccess) return 'is-success button'
        else if (props.isInfo) return 'is-info button'
        }

    return (
        <React.Fragment>
        <div className="buttons">
            <button className={getClass()}>{props.title}</button>
        </div>
        </React.Fragment>
    )
}

export default CoolButton