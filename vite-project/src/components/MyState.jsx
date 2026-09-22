import { useState } from 'react';

export default function MyState() {

    const [counter, setCounter] = useState(10);

    function increment() {
        setCounter(counter + 10);
    }

    function decrement() {
        setCounter(counter - 10);
    }

    return (
        <div>
            <h1>{counter}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}