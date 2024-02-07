import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentHoldingValues } from '../utils/portfolioCalculations';
import initialPortfolioData from '../data/holdings';
import { Holding, PortfolioContextType } from './types';

export const PortfolioContext = createContext<PortfolioContextType>({ holdings: [] });

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [holdings, setHoldings] = useState<Holding[]>([]);

    useEffect(() => {
        const fetchHoldingsValues = async () => {
            const values = await getCurrentHoldingValues(initialPortfolioData);
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