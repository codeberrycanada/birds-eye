import React, { useContext } from 'react';
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { currencyFormatter } from '../utils/formatting';
import { PortfolioContext } from '../context/PortfolioContext';
import { Holding } from '../context/types';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid';

const TABLE_HEAD = ["Symbol", "Shares", "Purchase Price", "Current Price", "Change (1d)", "Holding Gain", "Holding Value", "Sector"];

export const SortableTable: React.FC = () => {
    const { holdings } = useContext(PortfolioContext);
    return (
        <div className="dashboard-item-wrapper">
            <Card className="h-full w-full">
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-slate-800 py-3 px-2">
                                    <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 dark:text-almost-white">
                                        {head} <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4 dark:text-slate-600" />
                                    </Typography>
                                </th>
                            ))}
                            </tr>
                        </thead>

                        <tbody>
                            {holdings.map((holding: Holding) => (
                                <>
                                    {
                                        (() => {
                                            const PerformanceIcon = holding.change > 0 ? ArrowUpIcon : ArrowDownIcon;
                                            const performanceIconTextColor = PerformanceIcon === ArrowUpIcon ? 'text-green-600' : 'text-red-900';
                                            const performanceTextColor = PerformanceIcon === ArrowUpIcon ? 'text-green-400' : 'text-red-600';
                                            return (
                                                <tr key={holding.symbol}>
                                                    <td className="py-3 px-2 dark:text-slate-200 font-bold">{holding.symbol}</td>
                                                    <td className="py-3 px-2 dark:text-slate-300">{holding.numberOfShares}</td>
                                                    <td className="py-3 px-2 dark:text-slate-300">${holding.purchasePrice}</td>
                                                    <td className="py-3 px-2 dark:text-slate-300">${holding.currentPrice}</td>
                                                    <td className={`py-3 px-2 flex items-center gap-2 ${performanceTextColor}`}>
                                                        <PerformanceIcon className={`h-5 w-5 ${performanceIconTextColor}`} />
                                                        {holding.change}%
                                                    </td>
                                                    <td className="py-3 px-2 dark:text-slate-300 font-bold">demo</td>
                                                    <td className="py-3 px-2 dark:text-slate-300 font-bold">{currencyFormatter.format(holding.currentValue)}</td>
                                                    <td className="py-3 px-2 dark:text-slate-300">{holding.sector}</td>
                                                </tr>
                                            );
                                        })()
                                    }
                                </>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default SortableTable;
