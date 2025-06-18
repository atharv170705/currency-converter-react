import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const[data, setData] = useState({});
    const API_URL = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch('Error fetching currency data')
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;