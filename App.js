

const heading1=React.createElement("h1",{id:"title"},"hello everyone1");
const heading2=React.createElement("h1",{id:"title"},"hello everyone2");
const div=React.createElement("div",{id:"container"},[heading1,heading2]);
    console.log(React);
    //assingning to root
    const root=ReactDOM.createRoot(document.getElementById("root"));
    console.log(ReactDOM);

    // passingelement in root
    root.render(div);