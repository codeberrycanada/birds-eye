import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

const PortfolioHoldingsTable: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);

    console.log(holdings);

    return (
        <>
            {holdings.map((holding) => (
                <div key={holding.symbol}>
                    <p>Symbol: {holding.symbol}</p>
                    <p>Current Price: {holding.currentPrice}</p>
                    <p>Current Value: {holding.currentValue}</p>
                    {/* Render other holding details as needed */}
                </div>
            ))}
        </>
    )
}

export default PortfolioHoldingsTable;