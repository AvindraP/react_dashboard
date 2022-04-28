import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import {cashFlows, getCashFlow} from "../services/api";
import moment from "moment";
import {commafy, dateFormat} from "../useages/useages";

const Home = () => {
    const [data, setData] = useState([])
    let history = useHistory()

    useEffect(async () => {
        await getCashFlow({
            "from": moment().subtract(1, "days").format(dateFormat),
            "to": moment().subtract(0, "days").format(dateFormat)
        })
        setData(cashFlows)
        setTimeout(redirectTo, 30000)
    }, [""]);

    const redirectTo = () => {
        history.replace({pathname: "/details", key: Math.random()})
    }

    const dateConvert = (date) => {
        return moment(date).format(dateFormat);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div
                        className="brand-text-font-weight-bold text-lg mb-1"
                        style={{backgroundColor: "#dfe4ea", marginTop: "38px", padding: "6px 0 2px 0"}}
                    >
                        <h4 style={{color: "#485460", textAlign: "center", letterSpacing: "11px"}}>
                            Cash Flow Forecast.
                        </h4>
                    </div>
                    <div>
                        <table className="table">
                            <tbody>
                            <tr className="_tr">
                                <th></th>
                                <td className="bg-danger">{data.length > 0 ? dateConvert(data[0].date) : ""}</td>
                                <td className="bg-danger">{data.length > 1 ? dateConvert(data[1].date) : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <th>Bank OD</th>
                                <td>{data.length > 0 ? `(${commafy(data[0].bank_od)})` : ""}</td>
                                <td>{data.length > 1 ? `(${commafy(data[1].bank_od)})` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <td>DFCC Cheques</td>
                                <td>{data.length > 0 ? `${commafy(data[0].dfcc_cheque)}` : ""}</td>
                                <td>{data.length > 1 ? `${commafy(data[1].dfcc_cheque)}` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <td>In hand cheque</td>
                                <td>{data.length > 0 ? `${commafy(data[0].in_hand_cheque)}` : ""}</td>
                                <td>{data.length > 1 ? `${commafy(data[1].in_hand_cheque)}` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <td>Cash Deposit</td>
                                <td>{data.length > 0 ? `${commafy(data[0].cash_deposit)}` : ""}</td>
                                <td>{data.length > 1 ? `${commafy(data[1].cash_deposit)}` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <th>Total Deposit</th>
                                <td>{data.length > 0 ? `${commafy(data[0].total_deposit)}` : ""}</td>
                                <td>{data.length > 1 ? `${commafy(data[1].total_deposit)}` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <th>OD After Deposit</th>
                                <td>{data.length > 0 ? `(${commafy(data[0].od_after_deposit)})` : ""}</td>
                                <td>{data.length > 1 ? `(${commafy(data[1].od_after_deposit)})` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <td>JAT Cheques</td>
                                <td>{data.length > 0 ? `${commafy(data[0].jat_cheques)}` : ""}</td>
                                <td>{data.length > 1 ? `${commafy(data[1].jat_cheques)}` : ""}</td>
                            </tr>
                            <tr className="_tr">
                                <th>Final OD</th>
                                <td className="bg-warning">{data.length > 0 ? `(${commafy(data[0].final_od)})` : ""}</td>
                                <td className="bg-warning">{data.length > 1 ? `(${commafy(data[1].final_od)})` : ""}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home