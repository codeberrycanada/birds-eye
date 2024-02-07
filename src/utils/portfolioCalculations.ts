import { fetchCurrentStockPrice } from './stockPricing';
import { Holding } from '../context/types';

export const getCurrentHoldingValues = async (portfolioData: Holding[]): Promise<Holding[]> => {
    const updatedHoldingsPromises = portfolioData.map(async (holding) => {
        const currentPrice = await fetchCurrentStockPrice(holding.symbol);

        return {
            ...holding,
            currentPrice,
            currentValue: currentPrice * holding.numberOfShares,
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

export const getCurrentPortfolioValue = (portfolioData: Holding[]): number => {
    const currentValue = portfolioData.reduce((accumulator, holding) => {
        const holdingValue = holding.currentPrice ? holding.currentPrice * holding.numberOfShares : 0;
        return accumulator + holdingValue;
    }, 0);

    return currentValue;
};