import React, { useState, useEffect } from 'react'


function StateWise() {

    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setdata(actualData.statewise)
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            {/* <h1>INDIA COVID-19 Deshboard</h1> */}
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h3 className="mb-3 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 DESHBOARD</h3>
                    <hr />
                </div>

                <div className="table-reponsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>STATE</th>
                                <th>CONFIRMED</th>
                                <th>RECOVERED</th>
                                <th>DEATH</th>
                                <th>ACTIVE</th>
                                <th>UPDATE</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curEle, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{curEle.state}</th>
                                            <td className="text-primary">{curEle.confirmed}</td>
                                            <td className="text-success">{curEle.recovered}</td>
                                            <td className="text-danger">{curEle.deaths}</td>
                                            <td className="text-warning">{curEle.active}</td>
                                            <td>{curEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default StateWise
