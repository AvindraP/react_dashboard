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
                top: "48.4rem",
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

                    <Rate key={'INR'} country={'INR'} rate={0.50} up={false}/>
                    <Rate key={'USD'} country={'USD'} rate={20} up={false}/>
                    <Rate key={'AUD'} country={'AUD'} rate={15} up={true}/>
                    <Rate key={'SAR'} country={'SAR'} rate={2.50} up={false}/>
                    <Rate key={'GBP'} country={'GBP'} rate={5.45} up={false}/>
                    <Rate key={'JPY'} country={'JPY'} rate={0.10} up={true}/>
                    <Rate key={'CHF'} country={'CHF'} rate={20} up={false}/>
                    <Rate key={'CZK'} country={'CZK'} rate={1.50} up={true}/>
                    <Rate key={'CUC'} country={'CUC'} rate={12} up={false}/>
                    <Rate key={'HRK'} country={'HRK'} rate={11} up={false}/>
                    <Rate key={'CUP'} country={'CUP'} rate={7.32} up={true}/>
                    <Rate key={'CYP'} country={'CYP'} rate={4} up={false}/>
                    <Rate key={'CZK'} country={'CZK'} rate={0.91} up={true}/>
                    <Rate key={'DOP'} country={'DOP'} rate={8.1} up={false}/>
                    <Rate key={'DJF'} country={'DJF'} rate={3.43} up={true}/>
                    <Rate key={'XCD'} country={'XCD'} rate={0.1} up={true}/>
                    <Rate key={'ISK'} country={'ISK'} rate={2.4} up={false}/>
                    <Rate key={'IRR'} country={'IRR'} rate={0.90} up={true}/>
                </Marquee>
            </div>
        </footer>
    );
};

export default Footer;
