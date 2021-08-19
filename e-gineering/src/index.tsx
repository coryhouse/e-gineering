import { render } from "react-dom";
import { App } from "./App";

// HTML                         vs  JSX
// class                            className
// for                              htmlFor
// inline styles are strings        Inline styles are objects, Numbers = px.
// <!-- comments like this -->      {/* comments like this */}
// attributes are kebab-cased       props are camelCased
// options accept selected          select accepts value
render(<App />, document.getElementById("root"));
