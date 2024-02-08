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
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)',
            'rgba(201, 203, 207, 0.3)',
            'rgba(255, 159, 64, 0.3)',
            ],
            borderColor: [
                'transparent',
            ],
            borderWidth: 1,
            hoverOffset: 4
        }
        ]
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        maintainAspectRatio: false
    }
    
    return (
        <div style={{ maxHeight: '250px', maxWidth: '250px'}}>
            <Doughnut data={chartData} options={options} />;
        </div>
    )
}

export default DoughnutChart;