import React, { useEffect, useRef, useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Chart from 'chart.js/auto';

const Statistics = () => {
  const projets = useSelector((state) => state.auth.projet);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projets);

  const doughnutRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    setFilteredProjects(
      projets.filter((projet) =>
        projet.titre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, projets]);

  const dataBar = {
    labels: filteredProjects.map(p => p.titre),
    datasets: [
      {
        label: 'Total reçu',
        backgroundColor: '#36A2EB',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: filteredProjects.map(p => p.totalRecu),
      },
    ],
  };

  const dataDoughnut = {
    labels: filteredProjects.map((p) => p.titre),
    datasets: [
      {
        data: filteredProjects.map((project) => project.budget),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Effet pour détruire les graphiques à chaque changement de filteredProjects
  useEffect(() => {
    if (doughnutRef.current && doughnutRef.current.chartInstance) {
      doughnutRef.current.chartInstance.destroy();
    }
    if (barRef.current && barRef.current.chartInstance) {
      barRef.current.chartInstance.destroy();
    }
  }, [filteredProjects]);

  // Effet pour nettoyer les graphiques lors du démontage du composant
  useEffect(() => {
    return () => {
      if (doughnutRef.current && doughnutRef.current.chartInstance) {
        doughnutRef.current.chartInstance.destroy();
      }
      if (barRef.current && barRef.current.chartInstance) {
        barRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className='flex flex-col bg-green-100'>
      <h2 className="text-2xl font-bold mb-6 flex flex-col items-center m-5 text-green-600">Statistiques</h2>
      <div className="flex flex-col items-center mb-10">
        <input
          type="text"
          placeholder="Rechercher un projet"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-green-600 rounded-md"
        />
      </div>
      <div className='flex justify-center gap-10'>
        <div className="mb-10 p-10">
          <h3 className="text-xl mb-4 text-green-600">Répartition des projets par budgets</h3>
          <Doughnut
            data={dataDoughnut}
            ref={doughnutRef}
          />
        </div>
        <div className='mb-10 p-10'>
          <h3 className="text-xl mb-4 text-green-600">Répartition projets par investissements</h3>
          <Bar
            data={dataBar}
            ref={barRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
