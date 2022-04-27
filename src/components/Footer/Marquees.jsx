import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {commafy} from "../../useages/useages";

const Rate = ({rate, country, up}) => {
    return (
        <div style={{marginRight: "40px"}}>
            <div>
                <span style={{
                    marginTop: "1px",
                    marginRight: "4px",
                    color: "#4ead1e"
                }}>{country}</span>
                {/*<FontAwesomeIcon icon={!checkDifference(country, rate) ? faCaretDown : faCaretUp}*/}
                {/*                 color={!checkDifference(country, rate) ? 'red' : 'green'}/>*/}
                <FontAwesomeIcon color={up ? 'green' : 'red'} icon={up ? faCaretUp : faCaretDown}
                />
                <span style={{marginTop: "1px", marginLeft: "2px"}}>{rate.toFixed(2)}</span>
            </div>
        </div>
    )
}

const TotalOfColumns = ({name, total}) => {
    return (
        <div style={{marginRight: "40px"}}>
            <div>
                <span style={{
                    marginTop: "1px",
                    marginRight: "4px",
                    color: "#4ead1e"
                }}>{name}</span>
                <span style={{marginTop: "1px", marginLeft: "2px"}}>{commafy(total)}</span>
            </div>
        </div>
    )
}

const checkDifference = (key, rate) => {
    if (typeof localStorage.prevRates !== 'undefined') {
        const rates = JSON.parse(localStorage.prevRates)
        return rates[key] > rate ? false : true
    }
    return false
}

export {Rate, TotalOfColumns};