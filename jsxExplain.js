import React from "react"; ////////import react

const Hello = () => {              //functional comp function name hello         PROPS IS JUST AN OBJECT THAT CONTAINS THERE VALUES AND ATTRIBUTES WHIHC HAVE BEEN PASSED INTO THE PARENT COMPONENT
    return (<div className='test'>
        <h1>helloi this is jsx</h1>                
    </div>
    )

    // return React.createElement('div', {
    //     id : "hello",
    //     className: 'dummyclass'
    // },
    //  React.createElement('h1', null, 'Hello this withour jsx'))
}

export default Hello