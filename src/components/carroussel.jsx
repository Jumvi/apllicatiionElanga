import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import axios from 'axios';

export default function Carroussel() {
    const [projects, setProjects] = useState([]);

    const apiUrl = 'http://localhost:3000/projects';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='relative p-4 bg-gray-100'>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                freeMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className="flex justify-center">
                        <figure className='flex flex-col group relative shadow-lg rounded-lg cursor-pointer bg-white w-full max-w-sm'>
                            <img src={project.image} alt="project" className='w-full h-48 object-cover rounded-t-lg' />
                            <figcaption className='flex flex-col p-6'>
                                <div className='grid grid-cols-1 gap-2 border-black border-b pb-2'>
                                    <span className='font-semibold'>{project.titre}</span>
                                    <span className='font-semibold'>
                                        Budget réalisation : <span>{project.budget} $</span>
                                    </span>
                                </div>
                                <p className='border-b border-black py-2 text-justify line-clamp-10'>
                                    {project.description}
                                </p>
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
