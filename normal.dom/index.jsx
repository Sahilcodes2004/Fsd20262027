const root = ReactDOM.createRoot(document.getElementById("root"));
const h1 = <h2>Hello World</h2>;
const h2 = <h2>Hey, I am learning College</h2>;
const div = <div>{h1}{h2}</div>;

const wrapper = (
    <div style={{ border: "1px solid black", padding: "10px" }}>
        {div}
        <h2>Hey, Using JSX</h2>
    </div>
);

root.render(wrapper);