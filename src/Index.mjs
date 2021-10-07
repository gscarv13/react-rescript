// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Demo from "./Demo.mjs";
import * as React from "react";
import * as ReactDom from "react-dom";
import * as Caml_exceptions from "../node_modules/rescript/lib/es6/caml_exceptions.js";

var NoRoot = /* @__PURE__ */Caml_exceptions.create("Index.NoRoot");

var root = document.querySelector("#root_react_element");

if (root == null) {
  throw {
        RE_EXN_ID: NoRoot,
        Error: new Error()
      };
}

ReactDom.render(React.createElement(Demo.make, {}), root);

export {
  NoRoot ,
  
}
/* root Not a pure module */
