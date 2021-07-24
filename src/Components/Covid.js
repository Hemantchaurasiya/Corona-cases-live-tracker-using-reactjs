import React, { useEffect ,useState} from 'react'

const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();

    }, []);


    return (
        <>
            <div className="card container">
                <div className="card-header">
                    <h1 className="d-flex justify-content-center">LIVE</h1>
                </div>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center">COVID-19 CORONA VIRUS TRACKER</h5>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-sm m-3">

                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">COUNTRY</h5>
                                <h5 className="card-title d-flex justify-content-center text-danger">INDIA</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm m-3">

                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">RECOVERED</h5>
                                <h5 className="card-title d-flex justify-content-center text-danger">{data.recovered}</h5>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-sm m-3">

                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">CONFIRMED</h5>
                                <h5 className="card-title d-flex justify-content-center text-danger">{data.confirmed}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-sm m-3">

                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">DEATH</h5>
                                <h5 className="card-title d-flex justify-content-center text-danger">{data.deaths}</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm m-3">

                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">ACTIVE</h5>
                                <h5 className="card-title d-flex justify-content-center text-danger">{data.active}</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm m-3">

                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">UPDATE</h5>
                                <h5 className="card-title d-flex justify-content-center text-danger">{data.lastupdatedtime}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Covid;