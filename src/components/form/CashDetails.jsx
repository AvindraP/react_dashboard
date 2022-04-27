import React, {useState} from 'react'
import Form from './Form'
import {details, getDetail, isSuccess, storeDetails} from "../../services/api";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

let formElements = [
    {
        label: "Date",
        key: "date",
        error: false,
    },
    {
        label: "Daily Cheque deposit (DFCC & Com",
        key: "daily_cheque",
        error: false,
    },
    {
        label: "Daily Cash Deposit",
        key: "daily_cash",
        error: false,
    },
    {
        label: "Main Cash Deposit",
        key: "main_cash_deposit",
        error: false,
    },
    {
        label: "Main Cash Opening Balance",
        key: "cash_opening",
        error: false,
    },
    {
        label: "Up Today PD Cheque",
        key: "pd_cheque",
        error: false,
    },
    {
        label: "Opening Stock Balance",
        key: "openig_stock",
        error: false,
    },
    {
        label: "Daily Sales Value",
        key: "daily_sales",
        error: false,
    },
    {
        label: "UP Today Purchase Value",
        key: "purchase_valuve",
        error: false,
    },
    {
        label: "Closing Main Cash Balance",
        key: "closing_cash",
        error: false,
    },
    {
        label: "Closing Stock Balance",
        key: "closing_stock",
        error: false,
    },
    {
        label: "Bank Closing OD",
        key: "bank_closingod",
        error: false,
    },
]

const CashDetails = () => {
    const [loading, setLoading] = useState(false)

    const onSubmit = async (formData) => {
        setLoading(true)
        await storeDetails(formData)
        setLoading(false)
        if (isSuccess) toast.success("Added")
        else toast.error("Something went wrong")
    }

    const get = async (date) => {
        setLoading(true)
        await getDetail({date})
        setLoading(false)
        return details
    }

    return (
        <React.Fragment>
            <Form formElements={formElements} formTitle="Cash Details Form" submit={onSubmit}
                  loading={loading} edit={false} get={get} selectDate={true}/>
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

export default CashDetails