import { fetchCurrentStockPrice } from './stockPricing';
import { Holding } from '../context/types';

export const getCurrentHoldingValues = async (portfolioData: Holding[]): Promise<Holding[]> => {
    const updatedHoldingsPromises = portfolioData.map(async (holding) => {
        const currentPriceAndChange = await fetchCurrentStockPrice(holding.symbol);
        const currentPrice = currentPriceAndChange.price;
        const change = currentPriceAndChange.change;

        return {
            ...holding,
            change,
            currentPrice,
            currentValue: currentPrice * holding.numberOfShares,
            totalChangePercentage: holding.purchasePrice > 0 ? calculatePercentageDifference(holding.purchasePrice, currentPrice) : 0,
        };
    });

    const updatedHoldings = await Promise.all(updatedHoldingsPromises);

    return updatedHoldings;
};

export const getInitialPortfolioValue = (portfolioData: Holding[]): number => {
    const initialValue = portfolioData.reduce((accumulator, holding) => {
        const holdingValue = holding.purchasePrice ? holding.purchasePrice * holding.numberOfShares : 0;
        return accumulator + holdingValue;
    }, 0);

    return initialValue;
};

export const getPreviousDayPortfolioChange = (portfolioData: Holding[]): number => {
    const PreviousDayChange = portfolioData.reduce((accumulator, holding) => {
        const changePercentage = holding.change ? holding.change / 100 : null;
        if(changePercentage) {
            const holdingValue = holding.currentValue ? holding.currentValue * changePercentage : 0;
            return accumulator + holdingValue;
        } return 0;
    }, 0);

    return PreviousDayChange;
};

export const getCurrentPortfolioValue = (portfolioData: Holding[]): number => {
    const currentValue = portfolioData.reduce((accumulator, holding) => {
        const holdingValue = holding.currentPrice ? holding.currentPrice * holding.numberOfShares : 0;
        return accumulator + holdingValue;
    }, 0);

    return currentValue;
};

export function calculatePercentageDifference(x: number, y: number): number {
    if (x === 0) {
        // throw new Error("Initial value x cannot be zero when calculating percentage difference.");
        console.log("Initial value x cannot be zero when calculating percentage difference.");
        return 0;
    }

    const difference = y - x;
    const percentageDifference = (difference / x) * 100;
    return percentageDifference;
}

export const calculatePortfolioPerformance = (initialValue : number, currentValue : number): object => {
    const percentagePerformance = calculatePercentageDifference(initialValue, currentValue);
    const numericalPerformance = currentValue - initialValue;

    return {
        percentage: percentagePerformance,
        numerical: numericalPerformance,
    }
}