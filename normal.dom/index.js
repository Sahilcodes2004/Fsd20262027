const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement("h2", { style: { color: "black", backgroundColor: "grey" } }, "Welcome to React");
const h1 = React.createElement('h1',{style:{color:"darkgray"}},"Abes Engineering College");
const img = React.createElement('img', { src: "https://png.pngtree.com/element_our/png/20180905/real-estate-simple-logo-design-png_87528.jpg", height: "200", width: "200" });
const div = React.createElement('div', { style: { border: "1px solid black", padding: "10px" } }, h1, h2, img);
const h21 =<h2>Hello World</h2> ; // JSX syntax
root.render(div);