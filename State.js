import React, { Component } from "react"; ////////import react

class Ustate extends Component {

    //need to add subscribe btn below the text and text should changed on click
    //

    constructor() {
        super()
        this.state = {                   //created state object
            message: 'welcome visitor',
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>)
    }

}

export default Ustate