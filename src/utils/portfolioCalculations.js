import { fetchCurrentStockPrice } from '../utils/stockPricing';

export const getCurrentHoldingValues = async (portfolioData) => {
    const updatedHoldingsPromises = portfolioData.map(async (holding) => {
        const currentPrice = await fetchCurrentStockPrice(holding.symbol);

        return {
            ...holding,
            currentPrice,
            currentValue: currentPrice * holding.numberOfShares,
        }
    });

    const updatedHoldings = await Promise.all(updatedHoldingsPromises);

    return updatedHoldings;
}

export const getInitialPortfolioValue = (portfolioData) => {
    const initialValue = portfolioData.reduce((accumulator, holding) => {
        const holdingValue = holding.purchasePrice * holding.numberOfShares;
        return accumulator + holdingValue;
    }, 0);

    return initialValue;
}

export const getTotalHoldingsValue = async (portfolioData) => {
    const holdingValuesPromises = portfolioData.map(async (holding) => {
      const currentPrice = await fetchCurrentStockPrice(holding.symbol);
      return currentPrice * holding.numberOfShares;
    });
  
    const holdingValues = await Promise.all(holdingValuesPromises);
    const totalValue = holdingValues.reduce((accumulator, holdingValue) => accumulator + holdingValue, 0);
  
    return totalValue;
};