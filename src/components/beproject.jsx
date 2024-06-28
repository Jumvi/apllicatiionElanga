import React from 'react';
import Carroussel from './carroussel';
import { useSelector } from 'react-redux';

export default function Beproject() {
  const project = useSelector((state) => state.auth.projet);

  return (
    <section className="p-10 md:p-20 bg-emerald-100">
      <div className="flex flex-col mb-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold self-center">
          Découvrez différents projets retenus pour vous
        </h2>
        <p className="text-base text-xl md:text-lg font-bold md:text-2xl">grâce au concours de notre</p>
        <p className="text-base text-xl md:text-lg font-bold md:text-2xl">Equipe d'étude</p>
      </div>
      <Carroussel project={project} />
    </section>
  );
}
