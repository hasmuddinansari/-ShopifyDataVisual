import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import OrderData from "./OrdersData"
export default function OrderCountBar() {
    const { groupedDateState } = OrderData()
    let [showChartData, setShowChart] = useState({})
    useEffect(() => {
        if (!!Object.keys(groupedDateState).length) {
            let label = Object.keys(groupedDateState)
            let chart_label = label.map(e => {
                return parseInt(e)
            })
            let showData = []
            for (let i = 0; i < label.length; i++) {
                showData.push(groupedDateState[label[i]].length)
            }
            let chart_data =
            {
                "data": {
                    "labels": chart_label,
                    "datasets": [{
                        "label": 'Order Count',
                        "data": showData,
                        "borderWidth": 2
                    }]
                },
            }
            setShowChart(chart_data.data)
            console.log("here>>>")
            console.log(chart_data)
        }

    }, [groupedDateState])

    return (
        <div className="container d-flex flex-column">
            {console.log("i am here..")}
            <div>
                <Bar
                    data={showChartData}
                    width={100}
                    height={50}
                />
            </div>

        </div>
    )


}