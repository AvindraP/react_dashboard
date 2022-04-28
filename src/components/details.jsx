import React, {useEffect, useState} from "react";
import moment from 'moment'
import {details, getDetails,} from "../services/api";
import Table from "./index";
import FlipTable from "./flipTable";

const Details = ({columnsTotal}) => {
    const [dataa, setData] = useState([]);

    useEffect(async () => {
        await getDetails();
        setData(details);
    }, [""]);

    return (
        <div className="container-fluid ">
            <div className="row">
                <div
                    className="col"
                >
                    <div
                        className="brand-text-font-weight-bold text-lg"
                        style={{backgroundColor: "#dfe4ea", marginTop: "38px", padding: "6px 0 2px 0"}}
                    >
                        <h4 style={{color: "#485460", textAlign: "center", letterSpacing: "11px"}}>
                            MONTHLY CASH DETAIL {moment().format("MMMM YYYY").toUpperCase()}
                        </h4>
                    </div>
                    {/* Custom tabs (Charts with tabs)*/}
                    <div className="card" style={{marginTop: "22px"}}>
                        {/* /.card-header */}
                        <div className="card-body p-1">
                            <Table data={dataa} rowsPerPage={6}/>
                            <div className="tab-content p-0">
                                {/* Morris chart - Sales */}
                            </div>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <div
                    className="col"
                    style={{
                        padding: "0px",
                        display: "contents",
                        flex: "0%",
                    }}
                >
                    {/* Map card */}

                    {/* /.card-body*/}
                    <div
                        className="card-footer bg-transparent "
                        style={{padding: "0%"}}
                    >
                        <FlipTable data={columnsTotal} rowsPerPage={2}/>
                    </div>
                </div>
                {/* right col */}
            </div>
            {/* /.row (main row) */}
        </div>
    );
};

export default Details;
