import React from 'react';
import { currencyFormatter } from '../utils/formatting';
interface PortfolioValueProps {
    currentValue: number;
}

const PortfolioValue: React.FC<PortfolioValueProps> = ({currentValue}) => {
    return (
        <div id="portfolioValue">
            <p id="total-value" className="text-4xl text-white">
                {currencyFormatter.format(currentValue)}
            </p>

            <label className="text-almost-white" htmlFor="total-value">Total Holdings Value</label>
        </div>
    );
}

export default PortfolioValue;