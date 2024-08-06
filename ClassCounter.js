import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    //create a method called increment count

    incrementCount = () => {
        this.setState({
            count: this.state.count + 2
        })
    }


    render() {
        return (
            <div> <button onClick={this.incrementCount}>count {this.state.count}</button></div>

        )
    }
}

export default ClassCounter