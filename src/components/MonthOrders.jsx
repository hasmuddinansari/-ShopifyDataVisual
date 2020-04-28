import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import OrderData from "./OrderCountBar/OrdersData"

export default class MonthOrders extends Component {
    constructor(props) {
        super(props)
        // console.log(OrderData())
        this.state = {
            data: {
                labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
                datasets: [{
                    label: 'Order Count',
                    data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
        }
    }

    componentDidMount() {
        const { state, loading } = OrderData
        console.log("state", state)
    }

    render() {
        return (
            <div className="container d-flex flex-column">
                <div>
                    <Bar
                        data={this.state.data}
                        width={100}
                        height={50}
                    />
                </div>

            </div>
        )
    }
}
