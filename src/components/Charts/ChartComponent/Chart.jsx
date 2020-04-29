import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import GetDataFromApi from "../../../State/GetDataFromApi"

export default function Chart({ type, title }) {
    const { groupedDateState } = GetDataFromApi()
    let [showChartData, setShowChart] = useState({})

    function chartData(label) {
        let showData = []
        for (let i = 0; i < label.length; i++) {
            let stateLable = groupedDateState[label[i]]

            // stateLable = [total amount, count of orders]
            if (type == "Line") {
                showData.push(stateLable[0])
            }
            // bar need length of orders
            else {
                showData.push(stateLable[1])
            }
        }
        return showData
    }


    useEffect(() => {
        if (!!Object.keys(groupedDateState).length) {
            let label = Object.keys(groupedDateState)
            let chart_label = label.map(e => {
                return parseInt(e)
            })
            let showData = chartData(label)
            let chart_data =
            {
                "data": {
                    "labels": chart_label,
                    "datasets": [{
                        "label": title,
                        "data": showData,
                        "borderWidth": 2,
                        "fill": false,
                        borderColor: "blue",

                    }],
                },

            }
            setShowChart(chart_data.data)
        }

    }, [groupedDateState])

    if (type === "Bar")
        return (<Bar
            data-testId="Bar"
            data={showChartData}
            width={100}
            height={50}
        />
        )
    return <Line
        data-testId="Line"
        data={showChartData}
        width={100}
        height={50}
    />
}