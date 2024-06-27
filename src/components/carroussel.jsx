import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Link, useNavigate } from 'react-router-dom';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function Carroussel({ project }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/details-project/${id}`);
    };

    if (!project) {
        return 'Chargement...';
    }

    return (
        <div className='relative p-4'>
            <Swiper
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                freeMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, FreeMode]}
                className="mySwiper"
            >
                {project.map((project) => (
                    <SwiperSlide key={project.id} className="flex justify-center">
                       <Link to={`/details-project/${project.id}`}>
                       <div className='group relative shadow-lg rounded-lg cursor-pointer max-w-sm w-full overflow-hidden transition-transform transform hover:scale-105'>
                            <img
                                src={project.image ? `http://localhost:3000/${project.image}` : '/default_image.png'}
                                alt="project"
                                className='w-full h-56 object-cover rounded-t-lg'
                            />
                            <div className='bg-white p-6 flex flex-col'>
                                <h3 className='text-xl font-bold text-green-600 group-hover:text-green-800 mb-2'>{project.titre}</h3>
                                <div className='text-gray-700 mb-4'>
                                    <p>Budget réalisation : <span className='font-semibold'>{project.budget} $</span></p>
                                    <p>Totale reçue : <span className='font-semibold'>{project.totalRecu} $</span></p>
                                    <p>Temps de récolte : <span className='font-semibold'>{project.duree} mois</span></p>
                                    <p>Réalisation du projet : <span className='font-semibold'>{project.realisation}</span></p>
                                </div>
                            </div>
                        </div>
                       </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
