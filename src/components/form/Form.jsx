import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({formElements, formTitle, submit, loading, edit, get, selectDate = false}) => {
    const [formData, setFormData] = useState({})
    const [startDate, setStartDate] = useState();

    useEffect(() => {
        setDate()
    }, [""])

    const setDate = () => {
        formElements.forEach(element => {
            if (element.key === "date") handleChange(moment().format("YYYY-MM-DD"), element.key)
        })
    }

    const handleChange = (value, key) => {
        setFormData({...formData, ...{[key]: value}})
    }

    const onSubmit = async () => {
        if (isValidate()) return
        await submit(formData)
        clearAll()
    }

    const isValidate = () => {
        let response = false
        formElements.forEach((element, index) => {
            element.error = false
            handleChange("", element.key)

            if (formData[element.key] === undefined || formData[element.key] === "") {
                if (element.label !== "Date") element.error = true
                handleChange("", element.key)
                response = true
            }
        })
        return response
    }

    const clearAll = () => {
        formElements.forEach(element => {
            if (element.label !== "Date") {
                element.error = false
                formData[element.key] = ""
                handleChange(formData[element.key], element.key)
            }
        })
    }

    const getEditableData = async () => {
        const data = await get()
        if (data.length > 0) Object.keys(data[0]).forEach((d) => {
            if (d !== "date")
                if (d !== "id")
                    formData[d] = data[0][d]
            handleChange(formData[d], d)
        })
    }

    const checkDate = async (date) => {
        setStartDate(date)
        const data = await get(moment(date).format("YYYY-MM-DD"))
        if (data.length > 0) {
            Object.keys(data[0]).forEach((d) => {
                d === "date" ? formData[d] = moment(data[0][d]).format("YYYY-MM-DD") : formData[d] = data[0][d]
                handleChange(formData[d], d)
            })
        } else clearAll()
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card bg-light">
                        <div className="card-header">
                            <h5 className="card-title text-center">
                                {formTitle}
                            </h5>
                        </div>
                        <div className="card-body">
                            <form>
                                {selectDate ? <div className="row mb-2">
                                    <div className="offset-8">
                                        <DatePicker selected={startDate} onChange={(date) => checkDate(date)}
                                                    minDate={moment().toDate()} placehodlerText="select a date"/>
                                    </div>
                                </div> : ""}
                                {formElements.map((formElement) => (
                                    <div key={formElement.key}>
                                        <div className="form-row mb-2">
                                            <label className="col-4 mt-1">{formElement.label}</label>
                                            <div className="col">
                                                <input type="text" className="form-control"
                                                       value={formData[formElement.key]}
                                                       name={formElement.key}
                                                       disabled={formElement.label === "Date" ? true : false}
                                                       onChange={(e) => {
                                                           handleChange(e.target.value, formElement.key)
                                                       }}
                                                />
                                                <span
                                                    className="badge text-danger">{formElement.error ? "required" : ""}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-2">
                                    <div className="float-right">
                                        <button className="btn btn-sm btn-outline-primary" type="button"
                                                disabled={loading}
                                                onClick={onSubmit}> {loading ? "Loading..." : "Save"}
                                        </button>
                                        {edit ?
                                            <button type="button" className="btn btn-sm btn-outline-success ml-2"
                                                    disabled={loading}
                                                    onClick={getEditableData}>{loading ? "Loading..." : "Edit"}</button> :
                                            ""}
                                        <button className="btn btn-sm btn-outline-dark ml-2" type="button"
                                                onClick={clearAll}>Clear
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form