import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${new Date().toISOString().split('T')[0]}/v1/currencies/${currency}.json`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            setData(response[currency]);
        })
    }, [currency]);
    return data;
}

export default useCurrencyInfo;