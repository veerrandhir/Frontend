function customRender(reactElement, container) {
  // 1st params what to render , 2nd where to render
  /*  const domElement = document.createElement(reactElement.type); // we can directly pass a , p, or link tags into it but we leaves on reactElement to pass its type.
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement); // mainConatiner will render and show result so we appended all elements into it .
  */
  // more effecient code then above
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue; // we ignore this code because 1st we have manage children above and in props there is no children in react lib.
    domElement.setAttribute(prop, reactElement.props[prop]); // Dot notation (obj.prop) only works for fixed property names, but bracket notation (obj[prop]) lets us use variables to access properties dynamically.
  }
  container.appendChild(domElement);
}

const reactElement = {
  // React see each element as Tree ,jsx object . It first look on Type, 2nd Check props (properties) we can inject multiple properties into it. 3rd I has children
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
}; // we have customised out own react rule.

const mainContainer = document.querySelector("#root");
// Render id root div from html , The main containt will shown from single html page that's why it is known as single page web , At most dom has single page it just show multipal page in a single page

// Now 3rd step we  need a method to add reactElement to root form mainContainer this is known as render.

customRender(reactElement, mainContainer); // we provided two arguments what to render and where to render it . One thing we have not defined how it will work, we will create fn above .
