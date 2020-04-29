import React, { useState } from 'react'
import PaginateButtons from "./PaginateButtons"

function EmpTable({ state }) {
    const [pageNum, setPageNum] = useState(1)
    const { customers } = state
    function changePageNum(e) {
        setPageNum(e.target.value)
    }
    return (
        <div className="table-responsive container-fluid p-3 ">
            <h3>Customers</h3>
            <table className="table table-striped border shadow shadow-sm p-2">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Orders</td>
                    </tr>
                </thead>
                <tbody className="">
                    {customers && customers.slice(pageNum - 1, (pageNum - 1) + 10).map((customer) => {
                        return <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.orders}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <PaginateButtons total={10} changePageNum={changePageNum} />
        </div>

    )
}

export default React.memo(EmpTable)