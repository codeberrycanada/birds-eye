import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentHoldingValues } from '../utils/portfolioCalculations';
import initialPortfolioData from '../data/holdings';
import { Holding, PortfolioContextType } from './types';
import placeholderData from '../data/holdings-dev';

export const PortfolioContext = createContext<PortfolioContextType>({ holdings: [] });

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [holdings, setHoldings] = useState<Holding[]>([]);

    useEffect(() => {
        const fetchHoldingsValues = async () => {
            // const values = await getCurrentHoldingValues(initialPortfolioData);
            const values = placeholderData;
            setHoldings(values);
        };

        fetchHoldingsValues();
    }, []);

    return (
        <PortfolioContext.Provider value={{ holdings }}>
            {children}
        </PortfolioContext.Provider>
    );
};