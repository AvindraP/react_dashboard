import React, {useEffect, useState, useRef} from "react";
import $ from 'jquery'
import Table2 from "./table2";
import moment from "moment";
import {commafy, dateFormat} from "../useages/useages";
import {useHistory} from "react-router-dom";
import FlipCardAnimation from "./FlipCardAnimation/FlipCardAnimation";

const Table = ({data, rowsPerPage}) => {
    let history = useHistory()
    const [page, setPage] = useState(1);
    const [pgNo, setPg] = useState(0);
    const [duration, setDuration] = useState(60000)
    const {slice, range} = Table2(data, page, rowsPerPage);
    let timeout_1 = useRef(null)
    let timeout_2 = useRef(null)
    let timeout_3 = useRef(null)
    let timeout_4 = useRef(null)
    let i = 0;

    const autoPaginate = () => {
        return
        setPage(0);
        setPg(pgNo + 1);
        setPage(pgNo);
        if (pgNo === range.length) setPg(1);
    };

    const redirectTo = () => {
        history.push('/')
    }

    const loopTr = () => {
        $(function () {
            const table = $("#details-table");
            table.find('tbody').html("")

            $.each(slice, function (k, v) {
                timeout_1.current = setTimeout(() => {
                    table.find('tbody').append(`<tr class="_tr ${checkSaturday(v.date) ? 'saturday' : ''}" style="display: none"><td>${dateConvert(v.date)}</td><td>${commafy(v.daily_cheque)}</td><td>${commafy(v.daily_cash)}</td><td>${commafy(v.main_cash_deposit)}</td><td>${commafy(v.daily_cash)}</td><td>${commafy(v.pd_cheque)}</td><td>${commafy(v.openig_stock)}</td><td>${commafy(v.daily_sales)}</td><td>${commafy(v.purchase_valuve)}</td><td>${commafy(v.closing_cash)}</td><td>${commafy(v.closing_stock)}</td><td>${commafy(v.bank_closingod)}</td></tr><tr class="border-tr"></tr>`)
                    table.find('._tr').addClass('tr-index-' + k)
                    table.find('.tr-index-' + k).addClass('zoom')
                    table.find('._tr').show('slow')
                    table.find('.saturday').after("<tr class='_tr bg-danger tr-index-"+(k + 1)+"'><td colspan='12'>Sunday</td></tr>")
                    table.find('.saturday').removeClass('saturday')
                }, 500 * k)
            })

            $.each(slice, function (k, v) {
                timeout_2.current = setTimeout(() => {
                    table.find('.tr-index-' + (k)).removeClass('zoom')
                }, 500 * k)
            })

            timeout_3.current = setTimeout(() => {
                $.each(slice, function (k, v) {
                    setTimeout(() => {
                        table.find('.tr-index-' + k).addClass('zoom')
                        table.find('.tr-index-' + (k - 1)).removeClass('zoom')
                        timeout_4.current = setTimeout(() => {
                            if (page === range.length) {
                                setTimeout(() => {
                                    redirectTo()
                                }, 5000)
                                return
                            }
                            // row count
                            // if (slice.length === k + 1) setPage(page + 1)
                        }, 3000)
                    }, 3000 * k)
                })
            }, 900)
        })
    }

    useEffect(() => {
        const interval = setInterval(autoPaginate, duration);
        loopTr()
        return () => {
            clearInterval(interval);
            clearTimeout(timeout_1.current)
            clearTimeout(timeout_2.current)
            clearTimeout(timeout_3.current)
            clearTimeout(timeout_4.current)
        };
    }, [range]);

    return (
        <>
            <table
                id="details-table"
                className="table text-center details-table"
                style={{backgroundColor: "#00000"}}
            >
                <thead
                    className="neonText"
                    style={{
                        zindex: "1080",
                        background: "rgb(120 119 119)",
                        columnRuleWidth: "",
                    }}
                >
                <tr>
                    <th style={{width: "150px"}}>DATE</th>
                    <th>DALIY CHEQUE DEPOSIT(DFCC & COM)</th>
                    <th>DAILY CASH DEPOSIT</th>
                    <th>MAIN CASH DEPOSIT</th>
                    <th>MAIN CASH OPENING BALANCE</th>
                    <th>UP TODAY PD CHEQUES</th>
                    <th>OPENING STOCK BALANCE</th>
                    <th>DAILY SALES VALUE</th>
                    <th>UP TODAY PURCHES VALUE</th>
                    <th>CLOSING MAIN CASH BALANCE</th>
                    <th>CLOSING STOCK BALANCE</th>
                    <th>BANK CLOSING OD</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
        </>
    );
};

const dateConvert = (date) => {
    return moment(date).format(dateFormat);
};

const checkSaturday = date => {
    const day = moment(date).format("dddd");
    if (day === "Saturday") return true
    return false
}

export default Table;
