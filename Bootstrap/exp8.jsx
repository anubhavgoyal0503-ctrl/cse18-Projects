const { useState } = React;

function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="container">

            <h1>React Counter Application</h1>

            <h2 className="counter">{count}</h2>

            <div className="buttons">

                <button
                    onClick={increment}
                    className="button">
                    Increment (+)
                </button>

                <button
                    onClick={decrement}
                    className="button">
                    Decrement (-)
                </button>

                <button
                    onClick={reset}
                    className="button">
                    Reset
                </button>

            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);