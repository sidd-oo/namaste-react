
const parent = React.createElement("div", { id: "red-color" },
    React.createElement("h2", {}, "I am h2 element")
)

console.log(parent); // the output is react object which translates into DOM for the browsers.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
