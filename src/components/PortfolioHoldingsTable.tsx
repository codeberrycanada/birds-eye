import React, { useContext, useState, useEffect } from 'react';
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { currencyFormatter, shortCurrencyFormatter } from '../utils/formatting';
import { calculatePercentageDifference } from '../utils/portfolioCalculations';
import { PortfolioContext } from '../context/PortfolioContext';
import { Holding } from '../context/types';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid';

const TABLE_HEAD = ["Symbol", "Shares", "Purchase Price", "Current Price", "Change (1d)", "Change (Total)", "Holding Value", "Sector"];

export const SortableTable: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);
    const [sortedHoldings, setSortedHoldings] = useState<Holding[]>([]);
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('ascending');

    useEffect(() => {
        setSortedHoldings(holdings);
    }, [holdings]);

    const columnToFieldMap: { [key: string]: keyof Holding | undefined } = {
        "Symbol": "symbol",
        "Shares": "numberOfShares",
        "Purchase Price": "purchasePrice",
        "Current Price": "currentPrice",
        "Change (1d)": "change",
        "Change (Total)": "totalChangePercentage",
        "Holding Value": "currentValue",
        "Sector": "sector",
    };

    const sortData = (column: string) => {
        const field = columnToFieldMap[column];
        if(!field) return;
        const sortOrder = field === sortField && sortDirection === 'ascending' ? 'descending' : 'ascending';
        setSortField(field);
        setSortDirection(sortOrder);

        const sorted = [...sortedHoldings].sort((a, b) => {
            let firstVal = a[field];
            let secondVal = b[field];

            if (typeof firstVal === 'string' && firstVal.startsWith('$')) {
                firstVal = parseFloat(firstVal.replace(/[^0-9.-]+/g, ''));
                secondVal = parseFloat(secondVal.replace(/[^0-9.-]+/g, ''));
            }

            if (typeof firstVal === 'number' && typeof secondVal === 'number') {
                return sortOrder === 'ascending' ? firstVal - secondVal : secondVal - firstVal;
            }

            if (typeof firstVal === 'string' && typeof secondVal === 'string') {
                return sortOrder === 'ascending' ? firstVal.localeCompare(secondVal) : secondVal.localeCompare(firstVal);
            }

            return 0;
        });

        setSortedHoldings(sorted);
    };

    return (
        <div className="dashboard-item-wrapper">
            <Card className="h-full w-full">
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-slate-800 py-3 px-2 cursor-pointer hover:bg-slate-900" onClick={() => sortData(head)}>
                                    <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 dark:text-almost-white">
                                        {head} <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4 dark:text-slate-600" />
                                    </Typography>
                                </th>
                            ))}
                            </tr>
                        </thead>

                        <tbody>
                            {sortedHoldings.map((holding: Holding) => {
                                const OneDayPerformanceIcon = holding.change > 0 ? ArrowUpIcon : ArrowDownIcon;
                                const oneDayPerformanceIconTextColor = OneDayPerformanceIcon === ArrowUpIcon ? 'text-green-600' : 'text-red-900';
                                const oneDayPerformanceTextColor = OneDayPerformanceIcon === ArrowUpIcon ? 'text-green-400' : 'text-red-600';

                                const TotalPerformanceIcon = holding.totalChangePercentage > 0 ? ArrowUpIcon : ArrowDownIcon;
                                const totalPerformanceIconTextColor = TotalPerformanceIcon === ArrowUpIcon ? 'text-green-600' : 'text-red-900';
                                const totalPerformanceTextColor = TotalPerformanceIcon === ArrowUpIcon ? 'text-green-400' : 'text-red-600';

                                // const totalHoldingChange = holding.currentValue - (holding.purchasePrice * holding.numberOfShares);
                                return (
                                    <tr key={holding.symbol}>
                                        <td className="py-3 px-2 dark:text-slate-200 font-bold">{holding.symbol}</td>
                                        <td className="py-3 px-2 dark:text-slate-300">{holding.numberOfShares}</td>
                                        <td className="py-3 px-2 dark:text-slate-300">${holding.purchasePrice}</td>
                                        <td className="py-3 px-2 dark:text-slate-300">${holding.currentPrice}</td>
                                        <td className="py-3 px-2">
                                            <div className={`flex items-center gap-2 ${oneDayPerformanceTextColor}`}>
                                                <OneDayPerformanceIcon className={`h-5 w-5 ${oneDayPerformanceIconTextColor}`} />
                                                {holding.change}%
                                            </div>
                                        </td>
                                        <td className="py-3 px-2">
                                            <div className={`flex items-center gap-2 ${totalPerformanceTextColor}`}>
                                                <TotalPerformanceIcon className={`h-5 w-5 ${totalPerformanceIconTextColor}`} />
                                                {holding.totalChangePercentage?.toFixed(2)}%
                                            </div>
                                        </td>
                                        <td className="py-3 px-2 dark:text-slate-300 font-bold">{currencyFormatter.format(holding.currentValue)}</td>
                                        <td className="py-3 px-2 dark:text-slate-300">{holding.sector}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default SortableTable;