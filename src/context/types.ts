export interface Holding {
    symbol: string;
    purchaseDate: string;
    purchasePrice: number;
    numberOfShares: number;
    currentPrice?: number;
    currentValue?: number;
}

export interface PortfolioContextType {
    holdings: Holding[];
}