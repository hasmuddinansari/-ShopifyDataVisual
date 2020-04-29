import React from 'react'
import "./style.css"

export default function PaginateButtons({ total, changePageNum }) {
    let btns = []
    for (let i = 1; i <= total; i++) {
        btns.push(i)
    }
    return (
        <div className="row container-fluid justify-content-end">
            {btns && btns.map(i => {
                return <button key={i} value={i} className="btn btn-outline-dark  mr-1" onClick={(e) => changePageNum(e)}>{i}</button>
            })}
        </div>
    )
}
