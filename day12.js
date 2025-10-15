const heading = React.createElement("h1",{id:'heading'},"Hello! React Learners(React)");
console.log(heading);

const root = ReactDOM.createRoot (document.getElementById("root1"));
root.render(heading);

<div id ="outer">
    <div id ="inner">
        <p id="para">It is a paragraph</p>
        <h1 id="heading">It is a heading</h1>
        <span id ="message">Hello React Learners</span>
    </div>
</div>


//  const heading = React.createElement("h1",{id:"heading"},"Hello! React Learners(React)");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const div = React.createElement("div",{id: "outer"},
//     [React.createElement("div",{id: "inner"},
//         [React.createElement("p",{id:"para"},"I am paragraph"),
//         React.createElement("h1",{id: "heading"}, "I'm heading"),
//         React.createElement("span",{id:"message"},"Hello react learners")
//         ]
//     )]
// )

// const div = React.createElement("div",{id: "outer"},
//     [React.createElement("div",{id: "inner"},
//         [React.createElement("p",{id:"para"},"I am paragraph"),
//         React.createElement("h1",{id: "heading"}, "I'm heading"),
//         React.createElement("span",{id:"message"},"Hello react learners")
//         ]
//     )]
// )