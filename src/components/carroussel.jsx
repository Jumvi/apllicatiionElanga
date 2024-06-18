import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

export default function Carroussel({project}) {
  
    if(!project){
        return ('Chargement....')
    }

    return (
        <div className='relative p-4 '>
            <Swiper
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 2
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 2
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 2
                    }
                }}
                freeMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {project.map((project) => (
                    <SwiperSlide key={project.id} className="flex justify-center">
                        <figure className='flex flex-col group relative shadow-lg rounded-lg cursor-pointer  w-full max-w-sm'>
                            <img 
                                src={project.image ? `http://localhost:3000/${project.image}` : '/default_image.png'} 
                                alt="project" 
                                className='w-full h-56 object-cover rounded-t-lg' 
                            />
                            <figcaption className='flex flex-col p-6 overflow-hidden'>
                                <div className='grid grid-cols-1 gap-2 border-black border-b pb-2'>
                                    <span className='font-semibold'>{project.titre}</span>
                                    <span className='font-semibold'>
                                        Budget réalisation : <span>{project.budget} $</span>
                                    </span>
                                </div>
                                {/* <p className={`border-b border-black py-2 text-justify ${expanded[project.id] ? '' : 'line-clamp-10'}`}>
                                    {project.description.split('').length < 10}
                                </p> */}
                                {/* {project.description.split(' ').length <10 && (
                                    <button 
                                        className="text-blue-500 mt-2" 
                                        onClick={() => toggleReadMore(project.id)}
                                    >
                                        {expanded[project.id] ? 'Lire moins' : 'Lire plus'}
                                    </button>
                                )} */}
                                <div className='flex flex-col mt-2 space-y-2'>
                                    <p className='font-semibold'>
                                        Totale reçue : <span>{project.totalRecu} $</span>
                                    </p>
                                    <p className='font-semibold'>
                                        Temps de récolte : <span>{project.duree} mois</span>
                                    </p>
                                    <p className='font-semibold'>
                                        Réalisation du projet : <span>{project.realisation}</span>
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
