/* eslint-disable no-unused-vars */
// StatisticChart.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const StatisticChart = () => {
  const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        data: [200, 150, 250, 200, 320, 200, 220, 200, 50, 300, 250, 300],
        borderColor: 'orange',
        borderWidth: 5,
        fill: false,
        pointBackgroundColor: 'white',
        pointRadius: 6,
        tension: 0.4,
      },
      {
        // Second line chart dataset
        type: 'line',
        label: 'Second Line Dataset',
        data: [0, 150, 0, 100, 150, 100, 150, 50, 100, 100, 150, 150], // Example data for the second line
        borderColor: '#FF6A55',
        borderWidth: 3,
        fill: false,
        pointBackgroundColor: 'white', // Customization for points
        borderDash: [5, 5], // Makes the line dashed
        pointRadius: 6,
        tension: 0.4,
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [400, 320, 420, 280, 450, 350, 450, 220, 300, 400, 350, 420],
        backgroundColor: '#0075FF',
        barThickness: 30,
      },
      {
        label: 'Remaining',
        data: [100, 180, 80, 220, 50, 150, 50, 280, 200, 100, 150, 80], // Remaining part
        backgroundColor: '#E6F2FF', // Color for the remaining part
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
          ticks: {
            stepSize: 100, // Set the gap between each tick to 100
            max: 500,
          },
          beginAtZero: true,
          stacked: true, // Enable stacking for y-axis
            grid: {
                display: true,
                borderDash: [1,1],
                color: '#E3E3E3', // Lighten grid lines
            },
        },
        x: {
            stacked: true, // Enable stacking for x-axis
            grid: {
              color: '', // Lighten x-axis grid lines
            },
            
          },
      },
    
  };

  return (
    <>
        <section className='bg-white rounded-xl p-6 mt-5 w- full'>
            <div className='flex justify-between px-1'>
                <div>
                    <h3 className='font-semibold text-xl'>Statistics</h3>
                    <p className='font-light text-[13px] mt-2'>Sales in this year</p>
                </div>
                <p className='font-light text-xs'>Detail</p>
            </div>
            <div className='h-[290px] min-w-max w-full pt-4'>
                <Bar data={data} options={options}/>
            </div>
        </section>
    </>
  );
};

export default StatisticChart;
