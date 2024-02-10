import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Holding } from '../context/types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    data: Holding[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
    const sectorCounts = data.reduce((acc: Record<string, number>, { sector }) => {
        acc[sector] = (acc[sector] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(sectorCounts),
        datasets: [
        {
            data: Object.values(sectorCounts),
            backgroundColor: [
                '#047857',
                '#0f766e',
                '#0e7490',
                '#3b82f6',
            ],
            borderColor: [
                '#09090b',
            ],
            borderWidth: 1,
            hoverOffset: 4
        }
        ]
    };

    const options = {
        plugins: {
            legend: {
                position: 'right'
            }
        },
        maintainAspectRatio: false
    }
    
    return (
        <div style={{ maxHeight: '150px', maxWidth: '300px'}}>
            <Doughnut data={chartData} options={options} />;
        </div>
    )
}

export default DoughnutChart;