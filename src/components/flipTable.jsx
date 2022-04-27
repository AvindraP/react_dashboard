import React, {useEffect, useState} from "react";
import Table2 from "./table2";
import {useHistory} from "react-router-dom";
import {commafy} from "../useages/useages";

const FlipTable = ({data, rowsPerPage}) => {
    let history = useHistory()
    const [page, setPage] = useState(1);
    const [pgNo, setPg] = useState(0);
    const {slice, range} = Table2(data, page, rowsPerPage);

    const autoPaginate = () => {
        setPg(pgNo + 1);
        setPage(pgNo);

        // if (pgNo === range.length) setTimeout(redirectTo, 60000)
        if (pgNo === range.length) setPg(1)
    };

    useEffect(() => {
        const interval = setInterval(autoPaginate, page > 0 ? 5000 : 0);
        return () => {
            clearInterval(interval);
        };
    }, [range]);

    const redirectTo = () => {
        history.push('/')
    }

    return (
        <div>
            <table className="table">
                <tbody>
                {slice.map((el) => (
                    <tr>
                        <td key={el.id}>
                            <div className="flip-card mt-4">
                                <div className="flip-card-front">
                                    <div className="inner">
                                        <h3 style={{color: "#b3f9ff", marginTop: "0rem"}}>{el.col1}</h3>
                                    </div>
                                </div>
                                <div className="flip-card-back outer">
                                    <div className="inner">
                                        <div>
                                            {el.col1}
                                        </div>
                                        <h3 style={{color: "red"}}>{commafy(el.col2)}</h3>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlipTable;
