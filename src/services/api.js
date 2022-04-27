import axios from "axios";

let countries = [];
let exchangeRateQuery;
let keys = [];
let columnKeys = [];
let details = [];
let cashFlows = [];
let detailsSum = [];
let loading = false;
let isSuccess = false;

const getCountries = async () => {
    await axios
        .get(
            `https://free.currconv.com/api/v7/countries?apiKey=${process.env.REACT_APP_RATE_API}`
        )
        .then((res) => {
            countries = res.data.results;
        });

    convertQuery();
    // setFlags()
    keys = Object.keys(countries).slice(0, 20);
};

const getExchangeRates = async () => {
    const symbols = JSON.parse(JSON.stringify(["LKR,INR,USD,AUD,CAD,PLN,MXN"]));
    await axios
        .get(
            `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_EX_RATE_API}&symbols=${symbols[0]}`
        )
        .then((res) => {
            countries = res.data.rates;
            keys = Object.keys(countries);
        });
};

const convertQuery = () => {
    let exchangeRates = [];
    Object.keys(countries).forEach((country, index) =>
        exchangeRates.push(`LKR_${countries[country].currencyId}`)
    );
    exchangeRateQuery = exchangeRates.toString();
};

const setFlags = () => {
    Object.keys(countries).forEach(
        (country, index) =>
            (countries[
                country
                ].flag = `https://countryflagsapi.com/png/${countries[country].alpha3}`)
    );
};

const getDetails = async () => {
    loading = true;
    await axios.get(`${process.env.REACT_APP_API}/details`).then((res) => {
        details = res.data;
    });
    loading = false;
};

const getDetail = async (params) => {
    await axios.get(`${process.env.REACT_APP_API}/detail`, {params}).then((res) => {
        details = res.data;
    })
}

const getCashFlow = async (params) => {
    await axios.get(`${process.env.REACT_APP_API}/cash-flow`, {params}).then((res) => {
        cashFlows = res.data
        console.log(cashFlows)
    }).catch(error => {
        console.log(error)
    })
}

const getTotalOfDetails = async () => {
    loading = true;
    await axios.get(`${process.env.REACT_APP_API}/details-sum`).then((res) => {
        detailsSum = res.data[0];
        columnKeys = Object.keys(detailsSum)

        let newArr = []
        columnKeys.forEach((d, index) => {
            newArr.push({'col1': d, 'col2': detailsSum[d], 'id': index})
        })
        detailsSum = newArr
    });
    loading = false;
};

const storeCashFlow = async (data) => {
    await axios.post(`${process.env.REACT_APP_API}/cash-flow`, data).then((res) => {
        isSuccess = true
    }).catch(error => {
        console.log(error)
        isSuccess = false
    })
}

const storeDetails = async (data) => {
    await axios.post(`${process.env.REACT_APP_API}/details`, data).then((res) => {
        isSuccess = true
    }).catch(error => {
        console.log(error)
        isSuccess = false
    })
}

const getTodayCashFlow = async (params) => {
    await axios.get(`${process.env.REACT_APP_API}/cash-flow/today`, {params}).then((res) => {
        cashFlows = res.data
        console.log(cashFlows)
    }).catch(error => {
        console.log(error)
    })
}

export {
    countries,
    keys,
    columnKeys,
    details,
    cashFlows,
    detailsSum,
    loading,
    isSuccess,
    getDetail,
    getExchangeRates,
    getCountries,
    getDetails,
    getCashFlow,
    getTotalOfDetails,
    storeCashFlow,
    storeDetails,
    getTodayCashFlow,
};
