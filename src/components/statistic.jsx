import React, { useEffect, useRef } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';





const Statistics = () => {
  
  const projets = useSelector((state)=>state.auth.projet);

  const doughnutRef = useRef(null);
  const barRef = useRef(null);

  const dataBar = {
    labels: projets.map(p =>p.titre),
    datasets: [
      {
        label: 'Total reçu',
        backgroundColor: '#36A2EB',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: projets.map(p=>p.totalRecu),
      },
    ],
  };

  const dataDoughnut = {
    labels: projets.map((p) => p.titre),
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
      // nettoyages des graphique afin d'eviter des pertes des ressources et d'éviter des fuites de mémoires lorsque le composant est démonté
      if (doughnutRef.current) {
        doughnutRef.current.destroy();
      }
      if (barRef.current) {
        barRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className=' flex flex-col bg-green-100' >
      <h2 className="text-2xl font-bold mb-6 flex flex-col items-center m-5 text-green-600">Statistiques</h2>
     <div className=' flex  justify-center gap-10 '>
      <div className="mb-10 p-10">
        <h3 className="text-xl mb-4 text-green-600">Répartition des projets par budgets</h3>
        <Doughnut
          data={dataDoughnut}
          ref={(chart) => {
            if (chart) {
              doughnutRef.current = chart.chartInstance;
            }
          }}
        />
      </div> 
      <div className='mb-10 p-10 '>
        <h3 className="text-xl mb-4 text-green-600">Répartition projets par investissements</h3>
        <Bar
          data={dataBar}
          ref={(chart) => {
            if (chart) {
              barRef.current = chart.chartInstance; //stokages des instances du graphique dans la reférence courante
            }
          }}
        />
      </div>
     </div>
    </div>
  );
};

export default Statistics;
