
function RandomNumberGenerator() {
    const [min, setMin] = React.useState(1);
    const [max, setMax] = React.useState(10);
    const [result, setResult] = React.useState(null);

    function generateRandomNumber() {
        const minNum = Number(min);
        const maxNum = Number(max);

        if (minNum > maxNum) {
            alert("Minimum cannot be greater than maximum.");
            return;
        }

        const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

        setResult(random);
    }

    return (
        <div>
            <h2>Random Number Generator</h2>

            <input type="number" value={min} onChange={(e) => setMin(e.target.value)}/>

            <input type="number" value={max} onChange={(e) => setMax(e.target.value)}/>

            <button onClick={generateRandomNumber}>Generate</button>

            {result !== null && <p>{result}</p>}
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<RandomNumberGenerator />);