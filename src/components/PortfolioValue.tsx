import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { getCurrentPortfolioValue } from '../utils/portfolioCalculations';

const PortfolioValue: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);
    const currentValue = getCurrentPortfolioValue(holdings);

    return (
        <>
            {currentValue}
        </>
    )
}

export default PortfolioValue;