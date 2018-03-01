import * as React from "react"
import * as ReactDom from "react-dom";

import { Hello } from "./components/hello"
ReactDom.render(
    <Hello name="React" />,
    document.getElementById("app")
)

