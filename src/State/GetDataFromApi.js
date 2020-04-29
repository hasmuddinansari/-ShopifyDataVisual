import { useState, useEffect } from "react"
import axios from "axios"

export default function GetDataFromApi() {
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState([])
    const [groupedDateState, setGroup] = useState({})

    function makeArrSum(arr) {
        if (arr.length == 0) {
            return 0
        }
        if (arr.length == 1) {
            return Number(arr[0])
        }
        else return arr.reduce((a, b) => Number(a) + Number(b))
    }

    function sortByKey(ob) {
        let sortedOb = {}
        Object.keys(ob).sort().forEach((e) => {
            sortedOb[Number(e)] =
                [makeArrSum(ob[e]),
                ob[e].length]
            // "key : [totalPrice, totalCount]"
        })
        return sortedOb
    }

    function totalPriceAndCountObj(data) {
        let ob = {}
        for (let i = 0; i < data.length; i++) {
            let date = data[i].created.split("T")[0]
            // date="2020/04/13T12:01:12">> getting >> 2020/04/13
            let key = date.slice(date.length - 2)
            //key = last 2 digit date >> 13
            if (key in ob) ob[key] =
                [...ob[key], data[i].price]
            else ob[key] = []
        }
        return ob
    }

    useEffect(() => {
        setLoading(true)
        //getting data from db.json file 
        axios.get("/db/db.json")
            .then(res => {
                setState(res.data)
                setLoading(false)
                let data = res.data.orders
                if (data) {
                    let unordered_group = totalPriceAndCountObj(data)
                    //sorting by key
                    let groupState = sortByKey(unordered_group)
                    setGroup(groupState)
                }
            })
            .catch((e) => {
                console.log("something wrent wrong !!!", e)
            })
    }, [])

    return { state, loading, groupedDateState }
}
















// const data = {
//     data: {
//         labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
//         datasets: [{
//             label: 'Order Count',
//             data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 2
//         }]
//     },
// }