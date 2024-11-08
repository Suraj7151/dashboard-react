/* eslint-disable no-unused-vars */
// SalesChart.js
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import ellipse from '../assets/Ellipse 1188.png';
import condominium from '../assets/CondomiumEllipse.png';
import villa from '../assets/VillaEllipse.png';
import residential from '../assets/ResidentialEllipse.png';
import office from '../assets/OfficeEllipse.png';
import commercial from '../assets/CommercialEllipse.png';
// Register the necessary components for the polar area chart
ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

const SalesChart = () => {
    const data = {
        labels: ['Apartment', 'Condominium', 'Villa', 'Office', 'Residential', 'Commercial'],
        datasets: [
          {
            label: 'Sales in this year',
            data: [500, 200, 300, 400, 200, 100], // Example data values
            backgroundColor: [
              '#FF5C5C', // Red for Apartment
              '#0051FF', // Blue for Condominium
              '#FFC107', // Yellow for Villa
              '#78C2FF', // Light blue for Office
              '#FF7A00', // Orange for Residential
              '#B0B0B0', // Gray for Commercial
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              stepSize: 100,
              max: 500,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 20,
              usePointStyle: true,
              padding: 10,
              font: {
                family: 'Poppins', // Apply your desired font
                size: 10, // Adjust text size
            }

            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
      };
    
      return (
        <section className="h-[650px] flex flex-col justify-between bg-white rounded-xl p-4 my-5 -mx-2 w-[350px]">
          <div className="flex justify-between items-center">
            <div>
              <h3 className='font-semibold text-xl'>Sales</h3>
              <p className='font-light text-xs pt-3'>Sales in this year</p>
            </div>
            <p className="font-light text-xs">Detail</p>
          </div>
          <div className=" min-h-[400px] h-[400px] w-[340px] pr-4">
            <PolarArea data={data} options={options}/>
          </div>
          <div className='flex justify-center items-center space-x-8 pb-8 w-[313px] h-[105px]'>
            <ul className='font-medium text-xs flex flex-col space-y-3'>
                <li className='flex space-x-2'> 
                    <img src={ellipse} alt="" />
                    <p>Apartment</p>
                </li>
                <li className='flex space-x-2'>
                    <img src={condominium} alt="" />
                    <p>Condominium</p>
                </li>
                <li className='flex space-x-2'>
                    <img src={villa} alt="" />
                    <p>Villa</p>
                </li>
            </ul>
            <ul className='font-medium text-xs flex flex-col space-y-3'>
                <li className='flex space-x-2'>
                    <img src={office} alt="" />
                    <p>Office</p>
                </li>
                <li className='flex space-x-2'>
                    <img src={residential} alt="" />
                    <p>Residential</p>
                </li>
                <li className='flex space-x-2'>
                    <img src={commercial} alt="" />
                    <p>Commercial</p>
                </li>
            </ul>
          </div>
        </section>
      );
};

export default SalesChart;
