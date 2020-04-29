import React from "react"
import ReactDom from "react-dom"
import Chart from "../Chart"
import { render } from '@testing-library/react'

it("Chart rendering without crashing", () => {
    const div = document.createElement("div")
    ReactDom.render(<Chart />, div)
})

it("renders chart correctly ", () => {
    const { getByTestId } = render(<Chart />)
    getByTestId("Line")
    getByTestId("Bar")
})