export interface Holding {
    symbol: string;
    purchaseDate: string;
    purchasePrice: number;
    numberOfShares: number;
    currentPrice?: number;
    currentValue?: number;
    sector: string;
    holdingType: string;
}

export interface PortfolioContextType {
    holdings: Holding[];
}