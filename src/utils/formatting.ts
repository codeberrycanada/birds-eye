export const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const shortCurrencyFormatter: (num: number) => string = (num) => {
    const sign = num < 0 ? "-" : "";
    const absNum = Math.abs(num);

    let formattedNumber = '';

    if (absNum >= 1000000) {
        formattedNumber = `${sign}$${(absNum / 1000000).toFixed(1)}M`;
    } else if (absNum >= 1000) {
        formattedNumber = `${sign}$${(absNum / 1000).toFixed(1)}K`;
    } else {
        formattedNumber = `${sign}$${absNum.toFixed(1)}`;
    }

    return formattedNumber;
};