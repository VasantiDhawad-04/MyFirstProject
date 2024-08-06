import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(2) //array destructuring menthod in es6 // 2id default value which will be shown on the browser

    return (
        <div><button onClick={() => setCount(count + 1)}>set{count}</button></div>
    )
}

export default HookCounter