import React from "react"; ////////import react

const Understandingprops = props => {           //PROPS IS JUST AN OBJECT THAT CONTAINS THERE VALUES AND ATTRIBUTES WHIHC HAVE BEEN PASSED INTO THE PARENT COMPONENT
                                                //props are immutable
    console.log(props)
    return(<div>
        <h1>helloi {props.name} also know as {props.heroname}</h1> 
        {props.children}
    </div>)    
}

export default Understandingprops