import React from 'react'
import Chart from "../ChartComponent/Chart"
import "./OrderBarChart.css"

export default function OrderBarChart() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-1 row justify-content-center align-items-center">
                        <p> <span>Order_Count</span></p>
                    </div>
                    <div className="col-11">
                        <Chart type={"Bar"} title="Order Count" />
                    </div>
                </div>
                <p>Date (April-2020)</p>
            </div>
        </>
    )
}
