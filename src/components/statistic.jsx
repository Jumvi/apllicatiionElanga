import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';


const Statistics = () => {
  const projets = useSelector((state) => state.auth.projet);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projets);

  const dataBar = useMemo(() => filteredProjects.map((p) => ({ name: p.titre, value: p.totalRecu })), [filteredProjects]);

  const dataDoughnut = useMemo(() => filteredProjects.map((p) => ({ name: p.titre, value: p.budget })), [filteredProjects]);


  useEffect(() => {
    setFilteredProjects(
      projets.filter((projet) =>
        projet.titre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, projets]);


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
        <div>
        <div className='flex justify-center gap-10'>
        <div className="mb-10 p-10 ">
          <h3 className="text-xl mb-4 text-green-600">Répartition des projets par budgets</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={dataDoughnut}
              dataKey="value"
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label={(entry) => `${entry.name}: ${entry.value}`}
            >
              {dataDoughnut.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill || '#8884d8'} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className='mb-10 p-10'>
          <h3 className="text-xl mb-4 text-green-600">Répartition projets par investissements</h3>
          <BarChart width={600} height={300} data={dataBar}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#3366cc" />
            <Tooltip />
          </BarChart>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
