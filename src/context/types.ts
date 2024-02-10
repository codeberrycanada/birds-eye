import React from "react";

export interface Holding {
    symbol: string;
    purchaseDate: string;
    purchasePrice: number;
    numberOfShares: number;
    currentPrice?: number;
    currentValue?: number;
    change?: number,
    sector: string;
    holdingType: string;
}

export interface PortfolioContextType {
    holdings: Holding[];
    setHoldings: React.Dispatch<React.SetStateAction<Holding[]>>;
}