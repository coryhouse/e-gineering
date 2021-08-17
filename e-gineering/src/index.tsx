import { render } from "react-dom";
import { App } from "./App";

// HTML                         vs  JSX
// class                            className
// for                              htmlFor
// inline styles are strings        Inline styles are objects, Numbers = px.
render(<App />, document.getElementById("root"));
