import React from "react"
import ReactDom from "react-dom"
import Chart from "../Chart"

it("Chart rendering without crashing", () => {
    const div = document.createElement("div")
    ReactDom.render(<Chart />, div)
})