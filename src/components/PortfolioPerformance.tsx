import React from 'react';
import { calculatePortfolioPerformance } from '../utils/portfolioCalculations';
import { currencyFormatter } from '../utils/formatting';

interface PortfolioPerformanceProps {
    initialValue: number;
    currentValue: number;
}

const PortfolioPerformance: React.FC<PortfolioPerformanceProps> = ({ initialValue, currentValue }) => {
    const performance = calculatePortfolioPerformance(initialValue, currentValue);
    return (
        <div id="portfolioPerformance" className="flex align-center mt-2">
            <p className="text-white">{Number(performance.percentage.toFixed(2))}%</p>
            <p className="text-white ml-2">{currencyFormatter.format(performance.numerical)}</p>
        </div>
    );
}

export default PortfolioPerformance;