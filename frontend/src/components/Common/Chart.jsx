import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement);
  
  const data = {
    labels: [''], 
    datasets: [
      {
        data: [5], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [6], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [8], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [7], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [9],
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [6], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [5],
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [3], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },{
        data: [7], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)',
      },
      {
        data: [4], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [8],
        backgroundColor: 'rgba(21, 122, 255, 0.2)', 
      },
      {
        data: [2], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)',
      },
      {
        data: [10], 
        backgroundColor: 'rgb(21, 122, 255)', 
      },
      {
        data: [4], 
        backgroundColor: 'rgba(21, 122, 255, 0.2)',
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, 
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false }, 
    },
  }
  
  
  export default function ChartBars() {
    return (
        <div className='w-1/6'>
             <Bar data={data} options={options} />
        </div>
    )
   
  }
  