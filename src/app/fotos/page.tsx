"use client";

import Link from "next/link";
import styles from "./fotos.module.css";
import Image from "next/image";
import discord from "../assets/icons/discordwhite.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/twitterwhite.svg";
import mirror from "../assets/icons/mirror.svg";
import telegram from "../assets/icons/telegram.svg";
import fotos from "../fotos";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import foto1 from "../../../public/images/foto1.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

export default function Links() {
  return (
    /* Desktop */
    <div id="Fotos" className=" min-h-screen mx-20">
      <div className="pt-36">
        <h1 className="font-bold text-5xl">Galeria de fotos</h1>
        <p className="font-bold text-2xl pt-4">
          Algunos recuerdos de las cosas que vivimos en comunidad
        </p>
      </div>
      {/* CARRUSEL */}
      <div className="pt-20">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiperDesktop"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          {/* FOTOS */}

          {/* MAPEA LAS FOTOS */}
         {fotos.map((foto) => (
            <div key={foto.slide}>
              <SwiperSlide>
                <a className="cursor-pointer grid-cols-2">
                  <div>
                    <h1 className="text-xl">{foto.titulo}</h1>
                    <h2 className="">{foto.subtitulo}</h2>
                    <h3 className="">{foto.parrafo}</h3>
                  </div>

                  <div>
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
         
           
          <div className="prev-button">
            <FiChevronLeft
              size={50}
              style={{
                top: 100,
                color: "#a11111",
                strokeWidth: 4,
              }}
            />
          </div>

          <div className="next-button">
            <FiChevronRight
              size={50}
              style={{
                color: "#a11111",
                strokeWidth: 4,
              }}
            />
          </div>
          
        </Swiper>
      </div>
      {/* FIN CARRUSEL */}
    </div>
  );
}
