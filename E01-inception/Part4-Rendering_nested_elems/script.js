{/*  ---------------001
<div id="parent">
    <div id="child">
        <h1 >I am h1 element</h1>
    </div>
</div> */}

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "I am h1 element")
//     )
// )


{/*  ---------------002
 <div id="parent">
    <div id="child1">
        <h1 >I am h1 element</h1>
         <h2>I am h2 element</h2>
    </div>
    <div id="child2">
        <h1 >I am h1 element</h1>
        <h2>I am h2 element</h2>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am h1 element"),
        React.createElement("h2", {}, "I am h2 element")]
    ), React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am h1 element"),
        React.createElement("h2", {}, "I am h2 element")]
    )]
)

console.log(parent); // the output is react object which translates into DOM for the browsers.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
