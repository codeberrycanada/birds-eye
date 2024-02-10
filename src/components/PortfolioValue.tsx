import React from 'react';
import { currencyFormatter } from '../utils/formatting';
interface PortfolioValueProps {
    currentValue: number;
}


const PortfolioValue: React.FC<PortfolioValueProps> = ({currentValue}) => {
    return (
        <div className="flex flex-col gap-1 mb-4 items-center">
            <p id="total-value" className="text-4xl font-extrabold text-slate dark:text-almost-white">
                {currencyFormatter.format(currentValue)}
            </p>

            <label className="text-almost-white text-xs uppercase" htmlFor="total-value">Total Value</label>
        </div>
    );
}

export default PortfolioValue;