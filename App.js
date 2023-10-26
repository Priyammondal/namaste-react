import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hellow World! from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("roort->", root);
// root.render(heading);

{
  /* <div id="parent">
  <div id="child">
    <h1>This is a h1 tag!</h1>
  </div>
</div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is a h1 tag!")
//   )
// );
const parent = (
  <div id="parent">
    <h1>This is a h1 tag by jsx!</h1>
  </div>
);

// root.render(parent);

console.log("parent-->", parent); // This is nothing but a object
// so, React.createElement doesn't create the element, it creates a object which contains all the properties of the element,
// ReactDom then convertes the object to actual element and place it into the DOM while rendering it.

// If we want to create a sibling element, we need to put those childs inside an array

{
  /* <div id="parent">
    <div id="child">
      <h1>This is a h1 tag!</h1>
      <h2>This is a h2 tag!</h2>
    </div>
  </div> */
}

const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "This is a h2 tag!"),
  ])
);

// root.render(parent);

// if There is a tag already present in our html code, in our #root,
// while rendering, that tag/those tags will be replaced ( not appended, html will first print it on the screen then it will be replaced ) by whatever we
// will be passing inside our render method

const Title = () => <h1>Namste React using JSX 🚀</h1>;
const NewTitle = () => <h2>Namster React New Title using JSX 🚀</h2>;

// React functional component
// This is component composition ( component inside component)
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {/* as react component at the end of the day is a normal function and we can execute any js code inside our component we can call ther functional componet as normal function*/}
      {NewTitle()}
      <h1>Namaste React functional component!</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
