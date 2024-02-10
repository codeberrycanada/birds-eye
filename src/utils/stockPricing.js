const apiKey = import.meta.env.VITE_FMP_API_KEY;

function getClosestMarketOpenDay(dateString) {
    let date = new Date(dateString + 'T00:00:00Z');

    while (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
        date.setUTCDate(date.getUTCDate() + 1); // Increment the date by 1 day in UTC
    }

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed, add 1 to get the correct month
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export const fetchHistoricalStockPrice = async (symbol, startDate, endDate)  => {
    const start = getClosestMarketOpenDay(startDate);
    const end = getClosestMarketOpenDay(endDate);
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${start}&to=${end}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if(data.historical && data.historical.length > 0) {
            // const priceDetails = data.historical[0];
            // console.log(priceDetails);
        } else {
            console.log('No data found on the specified date');
        }
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}

export const fetchCurrentStockPrice = async (symbol) => {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if(data[0].price && data[0].change) {
            return {
                price: data[0].price,
                change: data[0].change,
            }
        } else {
            console.log('No data found');
        }
    } catch (error) {
        console.error('Error fetching stock price:', error);
    }
}