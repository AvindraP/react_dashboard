import React, {useState} from 'react'
import Form from './Form'
import {cashFlows, getTodayCashFlow, isSuccess, storeCashFlow} from "../../services/api";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import moment from "moment";

let formElements = [
    {
        label: "Date",
        key: "date",
        error: false,
    },
    {
        label: "Bank OD",
        key: "bank_od",
        error: false,
    },
    {
        label: "DFCC Cheque",
        key: "dfcc_cheque",
        error: false,

    },
    {
        label: "In Hand Cheque",
        key: "in_hand_cheque",
        error: false,
    },
    {
        label: "Cash Deposit",
        key: "cash_deposit",
        error: false,
    },
    {
        label: "Total Deposit",
        key: "total_deposit",
        error: false,
    },
    {
        label: "OD After Deposit",
        key: "od_after_deposit",
        error: false,
    },
    {
        label: "JAT Cheques",
        key: "jat_cheques",
        error: false,
    },
    {
        label: "Final OD",
        key: "final_od",
        error: false,
    }
]

const CashFlowForecast = () => {
    const [loading, setLoading] = useState(false)

    const onSubmit = async (formData) => {
        setLoading(true)
        await storeCashFlow(formData)
        setLoading(false)
        if (isSuccess) toast.success("Added")
        else toast.error("Something went wrong")
    }


    const get = async () => {
        setLoading(true)
        await getTodayCashFlow({"date": moment().format("YYYY-MM-DD")})
        setLoading(false)
        return cashFlows
    }

    return (
        <React.Fragment>
            <Form formElements={formElements} formTitle="Cash Flow Forecast Form" submit={onSubmit}
                  loading={loading} edit={true} get={get}
            />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </React.Fragment>
    )
}

export default CashFlowForecast