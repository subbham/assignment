import React from 'react'
import { useSelector } from 'react-redux';
const Dashboard = () => {

    const DashboardData = useSelector((state) => state.DashboardDatashow)

    return (
        <div>
            <h1>Dashboard</h1>

            <table border>
                <thead>
                    <tr>
                        <th>sr</th>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                        <th>emial</th>
                        <th>phoneNo</th>
                    </tr>
                </thead>
                <tbody>
                    {DashboardData.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneNo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
