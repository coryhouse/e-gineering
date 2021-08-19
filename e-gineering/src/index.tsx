import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";
import { Nav } from "./Nav";
import { FoodForm } from "./FoodForm";

// HTML                         vs  JSX
// class                            className
// for                              htmlFor
// inline styles are strings        Inline styles are objects, Numbers = px.
// <!-- comments like this -->      {/* comments like this */}
// attributes are kebab-cased       props are camelCased
// options accept selected          select accepts value
render(
  <BrowserRouter>
    <Nav />
    <Route path="/about">
      <About />
    </Route>
    <Route path="/food">
      <FoodForm />
    </Route>
    <Route path="/" exact>
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
