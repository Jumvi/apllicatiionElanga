import React, { useEffect, useRef, useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';



const dataBar = {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
  datasets: [
    {
      label: 'Investissements',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const Statistics = () => {
  
  const projets = useSelector((state)=>state.auth.projet);
  console.log(projets);

  const doughnutRef = useRef(null);
  const barRef = useRef(null);

  const dataDoughnut = {
    labels: projets.map((project) => project.titre),
    datasets: [
      {
        data: projets.map((project) => project.budget),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  useEffect(() => {
    return () => {
      // Cleanup logic here
      if (doughnutRef.current) {
        doughnutRef.current.destroy();
      }
      if (barRef.current) {
        barRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className=' flex flex-col' >
     <h2 className="text-2xl font-bold mb-6 flex flex-col items-center m-5 text-green-600">Statistiques</h2>


     <div className=' flex bg-green-100 justify-center items-center '>

      <div className="mb-6 ">
        <h3 className="text-xl mb-4">Répartition des projets</h3>
        <Doughnut
          data={dataDoughnut}
          ref={(chart) => {
            if (chart) {
              doughnutRef.current = chart.chartInstance;
            }
          }}
        />
      </div> 
      <div>
        <h3 className="text-xl mb-4">Investissements mensuels</h3>
        <Bar
          data={dataBar}
          ref={(chart) => {
            if (chart) {
              barRef.current = chart.chartInstance;
            }
          }}
        />
      </div>
     </div>
    </div>
  );
};

export default Statistics;
