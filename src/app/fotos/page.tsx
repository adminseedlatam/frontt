"use client";

import Image from "next/image";
import fotos from "../fotos";
import styles from "./fotos.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import foto1 from "../../../public/images/foto1.png";
import { useRef } from "react";

export default function Links() {
  return (
    /* Desktop */

    {/* <div className=" min-h-screen mx-20">
      <div className="pt-36">
        <h1 className="font-bold text-5xl">Galeria de fotos</h1>
        <p className="font-bold text-2xl pt-4">
          Algunos recuerdos de las cosas que vivimos en comunidad
        </p>
      </div>
      
      <div className="pt-20">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          loop={true}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          
          {fotos.map((foto) => (
            <div key={foto.slide}>
              <SwiperSlide>
                <a className="cursor-pointer grid-cols-2">
                  <div>
                    <h1 className="absolute top-32 font-semibold text-2xl">{foto.titulo}</h1>
                    <h2 className="absolute top-40">{foto.subtitulo}</h2>
                    <h3 className="absolute top-48 max-w-sm">{foto.parrafo}</h3>
                  </div>

                  <div className="">
                    <Image
                      width={650}
                      height={200}
                      className="xl:max-h-fit md:float-right rounded-md"
                      src={foto.img}
                      alt={""}
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>
            </div>
          ))}
          

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FiChevronLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FiChevronRight />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
     
    </div> */}
  );
}
