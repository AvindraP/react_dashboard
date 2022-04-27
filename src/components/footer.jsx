import React, {useEffect, useState} from "react";
import Marquee from "react-fast-marquee";
import {countries, getExchangeRates, keys} from "../services/api";
import {Rate, TotalOfColumns} from "./Footer/Marquees";

const Footer = ({columnsTotal, loading}) => {
    const [rates, setRates] = useState([]);
    const [countryKeys, setKey] = useState([]);

    const checkExchangeRates = async () => {
        await getExchangeRates();
        setRates(countries);
        setKey(keys);
        localStorage.setItem("prevRates", JSON.stringify(countries));
    };

    useEffect(async () => {
        await checkExchangeRates();
        const interval = setInterval(checkExchangeRates, 20000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <footer
            className="main"
            style={{
                position: "absolute",
                top: "53rem",
                width: "100%"
            }}
        >
            <div style={{marginBottom: "20px"}}>
                <Marquee
                    gradient={false}
                    style={{
                        color: "#fff",
                        minWidth: "100%",
                        minHeight: "45px"
                    }}
                >
                    {columnsTotal.map((column, index) => (
                        <TotalOfColumns key={column.id} name={column.col1} total={column.col2}/>
                    ))}
                </Marquee>
            </div>
            <div>
                <Marquee
                    gradient={false}
                    style={{
                        color: "#fff",
                        minWidth: "100%",
                    }}
                >
                    {/*{countryKeys.map((country, index) => (*/}
                    {/*    <Marquees key={rates[country]} rate={rates[country]} country={country}/>*/}
                    {/*))}*/}

                    <Rate key={'LKR'} country={'LKR'} rate={100} up={true}/>
                    <Rate key={'INR'} country={'INR'} rate={200} up={false}/>
                    <Rate key={'USD'} country={'USD'} rate={100} up={true}/>
                    <Rate key={'AUD'} country={'AUD'} rate={200} up={false}/>
                    <Rate key={'CAD'} country={'CAD'} rate={200} up={true}/>
                    <Rate key={'CAD'} country={'CAD'} rate={200} up={false}/>
                    <Rate key={'CAD'} country={'CAD'} rate={200} up={true}/>
                    <Rate key={'CAD'} country={'CAD'} rate={200} up={false}/>
                    <Rate key={'CAD'} country={'CAD'} rate={200} up={true}/>
                </Marquee>
            </div>
        </footer>
    );
};

export default Footer;
