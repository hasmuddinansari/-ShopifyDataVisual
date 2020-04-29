import React from 'react'
import Chart from "../ChartComponent/Chart"
import "./PriceLineChart.css"
export default function PriceLineChart() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-1 row justify-content-center align-items-center">
                    <p> Prices</p>
                </div>
                <div className="col-11">
                    <Chart type={"Line"} title="Total Order Price" />
                </div>
            </div>
            <p>Date (April-2020)</p>
        </div>
    )
}
