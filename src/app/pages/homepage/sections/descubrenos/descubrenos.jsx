"use client";

import Image from "next/image";
import styles from "./descubrenos.module.css";
import Link from "next/link";

// Images
import CommunityCalls from "../../../../assets/img/slide-section/community-calls.png";
import EventosEspeciales from "../../../../../app/assets/img/slide-section/eventos-especiales.png";
import GovernanceCalls from "../../../../../app/assets/img/slide-section/governance-calls.png";
import EventosPresenciales from "../../../../../app/assets/img/slide-section/eventos-presenciales.png";
import mapa from "../../../../assets/img/descubrenos/mapa-ecosistema.svg";
import wonderland from "../../../../assets/img/descubrenos/wonderland.svg";
import decentraland from "../../../../assets/img/descubrenos/decentraland-dao.svg";
import kleros from "../../../../assets/img/descubrenos/kleros.svg";
import uniswap from "../../../../assets/img/descubrenos/uniswap.svg";
import connext from "../../../../assets/img/descubrenos/connext.svg";
import letgh from "../../../../assets/img/descubrenos/letsgethai.svg";
import lens from "../../../../assets/img/descubrenos/lens-protocol.svg";
import iconEcoSeed from "../../../../assets/icons/icon-planetatierra.svg";
import iconEstatuto from "../../../../assets/icons/icon-papel.svg";
import ContenidoOnline from "../../../../assets/icons/icon-contenidoOnline.svg";
import articulosMirror from "../../../../assets/icons/icon-articuloMirror.svg";
import twitterSpaces from "../../../../assets/icons/icon-TwitterSpaces.svg";
import hitosWeb3 from "../../../../assets/icons/icon-hitosweb3.svg";
import fondo from "../../../../assets/img/descubrenos/fondo-gris.svg";

// Swiper
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const eventosContainerStyle = {
  pointerEvents: "auto",
};

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

export default function HomePage() {
  const swiperRef = useRef(null);

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <div id="Descubrenos" className="pt-[5vw]">
      {/* Desktop slider Descubrenos*/}
      <div className="hidden xl:block">
        <div className="px-[2vw]  ">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiperDescubrenosDesktop"
          >
            {/* SLIDE 1 DESKTOP */}
            <SwiperSlide key="slide1">
              <div className="px-[5vw] ">
                <div className={styles.mainContainer}>
                  <div className={styles.sectionContainer}>
                    <div className={styles.containerTitle}>
                      <h3 className={styles.title}>¿Qué es SEED Latam?</h3>
                    </div>
                  </div>

                  <div className="lg:max-w-[874px] pl-[108px] ">
                    <div className="flex">
                      <div className={styles.breadcrumbs}>SEED Latam &gt;</div>
                      <div className={styles.breadcrumbs2}>
                        ¿Qué es SEED Latam?
                      </div>
                    </div>
                    <p className={styles.font}>
                      SEED Latam es un ecosistema que tiene el objetivo de
                      promover el conocimiento y el pensamiento crítico sobre la
                      Web3 en América Latina, así como impulsar a los líderes
                      Web3 del futuro.
                    </p>
                    <p className={styles.font2}>
                      Nuestra labor se centra en dos pilares fundamentales: la
                      gobernanza y la educación. A través de la gobernanza,
                      buscamos alzar la voz de Latinoamérica, promover la
                      participación y potenciar aquellos delegados que
                      representen a la región. Mientras que en el ámbito
                      educativo, continuamos generando contenido para fomentar
                      la participación activa de más personas en el ecosistema
                      Web3. Desde el 2020 acercamos contenido de valor a los
                      miembros y fomentamos el aprendizaje colaborativo y
                      cooperativo.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 2 DESKTOP */}
            <SwiperSlide key="slide2">
              <div className="px-[5vw]">
                <div className={styles.mainContainer}>
                  <div className={styles.sectionContainer}>
                    <div className={styles.containerTitle}>
                      <h3 className={styles.title}>
                        ¿Qué hacemos en SEED Latam?
                      </h3>
                    </div>
                  </div>

                  <div className="  xl:max-w-[990px] pl-[108px] ">
                    <div className="min-[1570px]:max-w-[700px]">
                      <div className="flex">
                        <div className={styles.breadcrumbs}>
                          SEED Latam &gt;
                        </div>
                        <div className={styles.breadcrumbs2}>
                          ¿Qué hacemos en SEED Latam?
                        </div>
                      </div>
                      <div className="pt-5">
                        <p className={styles.font4}>
                          Estos son los espacios de encuentro que tenemos
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-wrap gap-4 min-[1570px]:max-w-[400px]">
                      <div className="pr-[79.75px]">
                        <div className={styles.events}>
                          <div className="flex bg-[#323232] min-w-[526px] rounded-[7px] p-[16px] ">
                            <div>
                              <Image
                                width={100}
                                height={100}
                                src={CommunityCalls}
                                alt="logo"
                              ></Image>
                            </div>
                            <div className=" pl-[1rem] ">
                              <div className="text-white text-[20px] font-bold leading-9">
                                Community Calls
                              </div>

                              <h4>Repasamos los hechos más importantes</h4>
                              <Link
                                className="text-fuchsia-500 font-normal leading-9"
                                target="_blank"
                                rel="noopener"
                                href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                              >
                                Ver más
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pr-[79.75px] ">
                        <div className={styles.events}>
                          <div className="flex bg-[#323232] min-w-[526px] rounded-lg p-[16px] ">
                            <div>
                              <Image
                                width={100}
                                height={100}
                                src={GovernanceCalls}
                                alt="logo"
                              ></Image>
                            </div>
                            <div className=" pl-[1rem] ">
                              <div className="text-white text-[20px] font-bold leading-9">
                                Governance Calls
                              </div>

                              <h4>Votación en comunidad</h4>
                              <Link
                                target="_blank"
                                rel="noopener"
                                className="text-fuchsia-500 font-normal leading-9"
                                href="https://youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI"
                              >
                                Ver más
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pr-[79.75px] ">
                        <div className={styles.events}>
                          <div className="flex bg-[#323232] min-w-[526px] rounded-lg p-[16px] ">
                            <div>
                              <Image
                                width={100}
                                height={100}
                                src={EventosPresenciales}
                                alt="logo"
                              ></Image>
                            </div>
                            <div className=" pl-[1rem] ">
                              <div className="text-white text-[20px] font-bold leading-9">
                                Eventos presenciales
                              </div>

                              <h4>En varias provincias del país</h4>
                              <Link
                                target="_blank"
                                rel="noopener"
                                className="text-fuchsia-500 font-normal leading-9"
                                href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5ycJFkObjp3VAUu4dZsCWlP"
                              >
                                Ver más
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* CONTENIDO ONLINE */}
                      <div className="pr-[79.75px]">
                        <div className={styles.events}>
                          <div className="flex bg-[#323232] min-w-[526px] rounded-lg p-[16px] ">
                            <div>
                              <Image
                                width={100}
                                height={100}
                                src={ContenidoOnline}
                                alt="logo"
                              ></Image>
                            </div>
                            <div className=" pl-[1rem] ">
                              <div className="text-white text-[20px] font-bold leading-9">
                                Contenido Online
                              </div>

                              <h4>Entrevistas, artículos e hitos de Web3</h4>
                              <a
                                className="text-fuchsia-500 font-normal leading-9"
                                target="_blank"
                                rel="noopener"
                                onClick={() =>
                                  window.my_modal_contOnline.showModal()
                                }
                              >
                                Ver más
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* modal ContenidoOnline */}
                        <dialog
                          id="my_modal_contOnline"
                          className="modal pt-10 sm: md: lg: xl:pt-24 2xl:pt-4"
                        >
                          <form method="dialog" className="modal-backdrop pt-20  ">
                            <div className="items-center max-w-6xl rounded-lg h-4/5 border-white border bg-[#222222] mx-auto w-screen">
                              <button className="text-white btn btn-sm btn-circle btn-ghost border-none  ">
                                ✕
                              </button>
                              <div className="flex flex-wrap gap-12 mx-auto pt-44 justify-center">
                                {/* ARTICULOS MIRROR */}

                                <div>
                                  <Image
                                    alt="articulosMirror"
                                    src={articulosMirror}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Contenido Online
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Ver más
                                  </Link>
                                </div>

                                {/* TWITTER SPACES */}

                                <div>
                                  <Image
                                    alt="twitterSpaces"
                                    src={twitterSpaces}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Twitter Spaces
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Ver más
                                  </Link>
                                </div>

                                {/* HITOS WEB3 */}

                                <div>
                                  <Image
                                    alt="hitosweb3"
                                    src={hitosWeb3}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Hitos Web3
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Ver más
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </form>
                        </dialog>

                        {/* ---------------Fin modal -------- */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 3 DESKTOP */}
            <SwiperSlide key="slide3">
              <div className="px-[5vw] ">
                <div className={styles.mainContainer}>
                  <div className={styles.sectionContainer}>
                    <div className={styles.containerTitle}>
                      <h3 className={styles.title}>
                        ¿Cuáles son nuestros valores?
                      </h3>
                    </div>
                  </div>

                  <div className="max-w-[400px] xl:max-w-[874px] pl-[108px] ">
                    <div className="flex">
                      <div className={styles.breadcrumbs}>SEED Latam &gt;</div>
                      <div className={styles.breadcrumbs2}>
                        ¿Cuáles son nuestros valores?
                      </div>
                    </div>
                    <div className="pt-[70px]">
                      <p className={styles.font3}>Soberanía</p>
                      <p className={styles.font4}>
                        Trabajamos a diario para que los usuarios sean
                        conscientes de la soberanía digital en el marco de la
                        web3.
                      </p>
                      <p className={styles.font3}>Educación</p>
                      <p className={styles.font4}>
                        Desde nuestros inicios abogamos por educación libre e
                        interdisciplinaria.
                      </p>
                      <p className={styles.font3}>Evolución</p>
                      <p className={styles.font4}>
                        Contribuimos a la evolución del ecosistema Web3
                        alentando a la comunidad a participar de manera activa
                        en diferentes protocolos y espacios
                      </p>
                      <p className={styles.font3}>Descentralización</p>
                      <p className={styles.font4}>
                        Perseguimos los ideales de la descentralización, siendo
                        uno de nuestros valores fundamentales y principal fuente
                        de inspiración.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 4 DESKTOP */}
            <SwiperSlide key="slide4">
              <div className="px-[5vw]">
                <div className={styles.mainContainer}>
                  <div className={styles.sectionContainer}>
                    <div className="h-28 pb-8 flex xl:pt-80">
                      <h3 className={styles.title}>
                        ¿Quienes forman parte de SEED Latam?
                      </h3>
                    </div>
                  </div>

                  <div className="  xl:max-w-[990px] pl-[108px] ">
                    <div className="min-[1570px]:max-w-[700px]">
                      <div className="flex pb-5">
                        <div className={styles.breadcrumbs}>
                          SEED Latam &gt;
                        </div>
                        <div className={styles.breadcrumbs2}>
                          ¿Quienes forman parte de SEED Latam?
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-wrap gap-4 min-[1570px]:max-w-[400px]">
                      <div className="pr-[79.75px]">
                        <div className={styles.events}>
                          <div className="flex bg-[#323232] min-w-[526px] rounded-[7px] p-[16px] ">
                            <div>
                              <Image
                                width={100}
                                height={100}
                                src={iconEcoSeed}
                                alt="logo"
                              ></Image>
                            </div>
                            <div className=" pl-[1rem] ">
                              <div className="text-white text-[20px] font-bold leading-9">
                                Ecosistema SEED
                              </div>

                              <h4>Toda nuestra estructura explicada</h4>
                              <a
                                className="text-fuchsia-500 font-normal leading-9"
                                target="_blank"
                                rel="noopener"
                                onClick={() => window.my_modal_1.showModal()}
                              >
                                Ver más
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* modal 1 */}
                      <dialog
                        id="my_modal_1"
                        className="modal pt-10 sm: md: lg: xl:pt-24 2xl:pt-4 "
                      >
                        <form
                          method="dialog"
                          className="modal-backdrop justify-end"
                        >
                          <button className="text-white btn btn-sm btn-circle btn-ghost border-none absolute right-28 top-12 xl:top-24 2xl:top-4">
                            ✕
                          </button>
                          <Image
                            className="object-contain mx-auto px-28 w-screen"
                            alt="Logo"
                            src={mapa}
                          ></Image>
                        </form>
                      </dialog>

                      {/* ---------------Fin modal -------- */}

                      <div className="pr-[79.75px] ">
                        <div className={styles.events}>
                          <div className="flex bg-[#323232] min-w-[526px] rounded-lg p-[16px] ">
                            <div>
                              <Image
                                width={100}
                                height={100}
                                src={iconEstatuto}
                                alt="logo"
                              ></Image>
                            </div>
                            <div className=" pl-[1rem] ">
                              <div className="text-white text-[20px] font-bold leading-9">
                                Estatuto
                              </div>

                              <h4>Toda la informacion interna de SEED Latam</h4>
                              <Link
                                target="_blank"
                                rel="noopener"
                                className="text-fuchsia-500 font-normal leading-9"
                                href="https://youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI"
                              >
                                Ver url: seedlatam.wiki
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 5 DESKTOP */}
            <SwiperSlide key="slide5">
              <div className="px-[5vw] ">
                <div className={styles.mainContainer}>
                  <div className={styles.sectionContainer}>
                    <div className={styles.containerTitle}>
                      <h3 className={styles.title}>
                        ¿Quienes ya confiaron en nosotros?
                      </h3>
                    </div>
                  </div>

                  <div className="lg:max-w-[874px] pl-[108px] ">
                    <div className="flex pb-10">
                      <div className={styles.breadcrumbs}>SEED Latam &gt;</div>
                      <div className={styles.breadcrumbs2}>
                        ¿Quienes ya confiaron en nosotros?
                      </div>
                    </div>
                    {/* Imagenes */}
                    {/* wonderland decentraland kleros uniswap */}
                    <div className="  ">
                      <Image
                        width={246}
                        src={wonderland}
                        alt="logo_wonderland"
                        className=""
                      ></Image>

                      <Image
                        width={222}
                        src={decentraland}
                        alt="logo_decentraland"
                        className="py-5"
                      ></Image>

                      <Image
                        width={222}
                        src={connext}
                        alt="logo_connext"
                        className="py-5"
                      ></Image>

                      <Image
                        width={107}
                        src={kleros}
                        alt="logo_kleros"
                        className="py-5"
                      ></Image>

                      <Image
                        width={222}
                        src={letgh}
                        alt="logo_letgh"
                        className="py-5"
                      ></Image>

                      <Image
                        width={153}
                        src={uniswap}
                        alt="logo_uniswap"
                        className="py-5"
                      ></Image>

                      <Image
                        width={222}
                        src={lens}
                        alt="logo_lens"
                        className="py-5"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="prev-button">
              <FiChevronLeft
                size={32}
                style={{
                  color: "#ffffff",
                  strokeWidth: 4,
                }}
              />
            </div>
            <div className="next-button">
              <FiChevronRight
                size={32}
                style={{
                  color: "#ffffff",
                  strokeWidth: 4,
                }}
              />
            </div>
          </Swiper>
        </div>
      </div>
      {/* -------------------------------- */}
      {/* Responsive slider Descubrenos*/}
      {/* -------------------------------- */}
      <div id="Descubrenos" className="xl:hidden pt-[5vw]">
        <div>
          <div className=" mt-[25px] ">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={0}
              effect="fade"
              loop={true}
              preventClicks={false}
              autoHeight={true}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiperResponsive"
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              {/* SLIDE 1 RESPONSIVE */}
              <SwiperSlide key="slide6" className={styles.mainContainer}>
                <div>
                  <div className={styles.sectionContainer}>
                    <div className={styles.containerTitle}>
                      <h3 className={styles.title}>¿Qué es SEED Latam?</h3>
                    </div>
                  </div>
                  <div>
                    <div className="pb-6">
                      <p className={styles.font4strong}>
                        SEED Latam es es un ecosistema que tiene el objetivo de
                        promover el conocimiento y el pensamiento crítico sobre
                        la Web3 en América Latina, así como impulsar a los
                        líderes Web3 del futuro.
                      </p>
                    </div>
                    <p className={styles.font4}>
                      Nuestra labor se centra en dos pilares fundamentales: la
                      gobernanza y la educación. A través de la gobernanza,
                      buscamos alzar la voz de Latinoamérica, promover la
                      participación y potenciar aquellos delegados que
                      representen a la región. Mientras que en el ámbito
                      educativo, continuamos generando contenido para fomentar
                      la participación activa de más personas en el ecosistema
                      Web3. Desde el 2020 acercamos contenido de valor a los
                      miembros y fomentamos el aprendizaje colaborativo y
                      cooperativo.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 2 RESPONSIVE */}
              <SwiperSlide key="slide7">
                <div>
                  <div className={styles.mainContainer}>
                    <div className={styles.sectionContainer}>
                      <div className={styles.containerTitle}>
                        <h3 className={styles.title}>
                          ¿Qué hacemos en SEED Latam?
                        </h3>
                      </div>
                    </div>
                    <div className=" xl:max-w-[620px] lg:max-w-[600px] ">
                      <div className="flex hidden">
                        <div className={styles.breadcrumbs}>
                          SEED Latam &gt;
                        </div>
                        <div className={styles.breadcrumbs2}>
                          ¿Qué hacemos en SEED Latam?
                        </div>
                      </div>

                      <div
                        className={styles.eventosContainer}
                        style={eventosContainerStyle}
                      >
                        <div className="pb-[10px]">
                          <Link
                            target="_blank"
                            rel="noopener"
                            href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                          >
                            <div className={styles.events}>
                              <div>
                                <Image
                                  width="5,5rem"
                                  height={100}
                                  src={CommunityCalls}
                                  alt="logo"
                                ></Image>
                              </div>
                              <div className={styles.eventTitleContainer}>
                                <h4 className={styles.eventTitle}>
                                  Community Calls
                                </h4>
                                <div className={styles.eventDescription}>
                                  Repasamos los hechos más importantes
                                </div>

                                <p className={styles.eventCTA}>Ver más</p>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div>
                          <div className="pb-[10px]">
                            <Link
                              target="_blank"
                              rel="noopener"
                              href="https://youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI"
                            >
                              <div className={styles.events}>
                                <div>
                                  <Image
                                    width="5,5rem"
                                    height={100}
                                    src={GovernanceCalls}
                                    alt="logo"
                                  ></Image>
                                </div>
                                <div className={styles.eventTitleContainer}>
                                  <h4 className={styles.eventTitle}>
                                    Governance Calls
                                  </h4>
                                  <div className={styles.eventDescription}>
                                    Votación en comunidad
                                  </div>

                                  <p className={styles.eventCTA}>Ver más</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="pb-[10px]">
                          <Link
                            target="_blank"
                            rel="noopener"
                            href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5ycJFkObjp3VAUu4dZsCWlP"
                          >
                            <div className={styles.events}>
                              <div>
                                <Image
                                  width="5,5rem"
                                  height={100}
                                  src={EventosPresenciales}
                                  alt="logo"
                                ></Image>
                              </div>
                              <div className={styles.eventTitleContainer}>
                                <h4 className={styles.eventTitle}>
                                  Eventos Presenciales
                                </h4>
                                <div className={styles.eventDescription}>
                                  En casi todo el país
                                </div>

                                <p className={styles.eventCTA}>Ver más</p>
                              </div>
                            </div>
                          </Link>
                        </div>


                        {/* CONTENIDO ONLINE */}
                        <div className="pb-[10px]">
                          <a
                            target="_blank"
                            rel="noopener"
                            onClick={() =>
                              window.my_modal_contOnline2.showModal()
                            }
                          >
                            <div className={styles.events}>
                              <div>
                                <Image
                                  width="5,5rem"
                                  height={100}
                                  src={ContenidoOnline}
                                  alt="logo"
                                ></Image>
                              </div>
                              <div className={styles.eventTitleContainer}>
                                <h4 className={styles.eventTitle}>
                                  Contenido Online
                                </h4>
                                <div className={styles.eventDescription}>
                                  Celebracion hitos web3
                                </div>
                                <p className={styles.eventCTA}>Ver más</p>
                              </div>
                            </div>
                          </a>
                        </div>

                        {/* modal ContenidoOnline2 */}
                        <dialog
                          id="my_modal_contOnline2"
                          className="modal pt-10 sm: md: lg: xl:pt-24 2xl:pt-4"
                        >
                          <form method="dialog" className="modal-backdrop pt-20  ">
                            <div className="items-center max-w-6xl rounded-lg h-fit md:h-4/5 min-w-3/4 border-white border bg-[#222222] mx-auto ">
                              <button className="text-white btn btn-sm btn-circle btn-ghost border-none  ">
                                ✕
                              </button>
                              <div className="flex flex-wrap gap-12 mx-20 md:mx-6 pt-0 md:pt-44 justify-center">
                                {/* ARTICULOS MIRROR */}

                                <div>
                                  <Image
                                    alt="articulosMirror"
                                    src={articulosMirror}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Contenido Online
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Ver más
                                  </Link>
                                </div>

                                {/* TWITTER SPACES */}

                                <div>
                                  <Image
                                    alt="twitterSpaces"
                                    src={twitterSpaces}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Twitter Spaces
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Ver más
                                  </Link>
                                </div>

                                {/* HITOS WEB3 */}

                                <div>
                                  <Image
                                    alt="hitosweb3"
                                    src={hitosWeb3}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Hitos Web3
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Ver más
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </form>
                        </dialog>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 3 RESPONSIVE */}
              <SwiperSlide key="slide8">
                <div className="">
                  <div className={styles.mainContainer}>
                    <div className={styles.sectionContainer}>
                      <div className={styles.containerTitle}>
                        <h3 className={styles.title}>
                          ¿Cuáles son nuestros valores?
                        </h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex hidden">
                        <div className={styles.breadcrumbs}>
                          SEED Latam &gt;
                        </div>
                        <div className={styles.breadcrumbs2}>
                          ¿Cuáles son nuestros valores?
                        </div>
                      </div>
                      <div className="pt-[1rem]">
                        <p className={styles.font3}>Soberanía</p>
                        <p className={styles.font4}>
                          Trabajamos a diario para que los usuarios sean
                          conscientes de la soberanía digital en el marco de la
                          web3. 
                        </p>
                        <p className={styles.font3}>Educación</p>
                        <p className={styles.font4}>
                          Desde nuestros inicios abogamos por educación libre e
                          interdisciplinaria.
                        </p>
                        <p className={styles.font3}>Evolución</p>
                        <p className={styles.font4}>
                          Contribuimos a la evolución del ecosistema Web3
                          alentando a la comunidad a participar de manera activa
                          en diferentes protocolos y espacios
                        </p>
                        <p className={styles.font3}>Descentralización</p>
                        <p className={styles.font4}>
                          Perseguimos los ideales de la descentralización,
                          siendo uno de nuestros valores fundamentales y
                          principal fuente de inspiración.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 4 RESPONSIVE */}
              <SwiperSlide key="slide9">
                <div className="">
                  <div className={styles.mainContainer}>
                    <div className={styles.sectionContainer}>
                      <div className="h-28 pt-14 flex xl:pt-80">
                        <h3 className={styles.title}>
                          ¿Quienes forman parte de SEED Latam?
                        </h3>
                      </div>
                    </div>

                    <div className="  xl:max-w-[990px] ">
                      <div className=" flex flex-wrap gap-4 min-[1570px]:max-w-[400px] ">
                        <div className="pr-[79.75px] ">
                          <div className="">
                            <div className="flex bg-[#323232] min-w-[526px] rounded-[7px] p-[16px] ">
                              <div>
                                <Image
                                  width={100}
                                  height={100}
                                  src={iconEcoSeed}
                                  alt="logo"
                                ></Image>
                              </div>
                              <div className=" pl-[1rem] ">
                                <div className="text-white text-[20px] font-bold leading-9">
                                  Ecosistema SEED
                                </div>

                                <h4>Toda nuestra estructura explicada</h4>
                                <a
                                  className="text-fuchsia-500 font-normal leading-9"
                                  target="_blank"
                                  rel="noopener"
                                  onClick={() => window.my_modal_mapa.showModal()}
                                >
                                  Ver más
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* modal 1 */}
                        <dialog
                          id="my_modal_mapa"
                          className="modal pt-10 sm: md: lg: xl:pt-24 2xl:pt-4 "
                        >
                          <form
                            method="dialog"
                            className="modal-backdrop justify-end"
                          >
                            <button className="text-white btn btn-sm btn-circle btn-ghost border-none absolute right-28 top-12 xl:top-24 2xl:top-4">
                              ✕
                            </button>
                            <Image
                              className="object-contain mx-auto px-28 w-screen"
                              alt="Logo"
                              src={mapa}
                            ></Image>
                          </form>
                        </dialog>

                        {/* ---------------Fin modal -------- */}

                        <div className="pr-[79.75px] ">
                          <div className="">
                            <div className="flex bg-[#323232] min-w-[526px] rounded-lg p-[16px] ">
                              <div>
                                <Image
                                  width={100}
                                  height={100}
                                  src={iconEstatuto}
                                  alt="logo"
                                ></Image>
                              </div>
                              <div className=" pl-[1rem] ">
                                <div className="text-white text-[20px] font-bold leading-9">
                                  Estatuto
                                </div>

                                <h4>
                                  Toda la informacion interna de SEED Latam
                                </h4>
                                <Link
                                  target="_blank"
                                  rel="noopener"
                                  className="text-fuchsia-500 font-normal leading-9"
                                  href="https://youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI"
                                >
                                  Ver url: seedlatam.wiki
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* SLIDE 5 Responsive */}
              <SwiperSlide key="slide10">
                <div className=" ">
                  <div className={styles.mainContainer}>
                    <div className={styles.sectionContainer}>
                      <div className={styles.containerTitle}>
                        <h3 className={styles.title}>
                          ¿Quienes ya confiaron en nosotros?
                        </h3>
                      </div>
                    </div>

                    <div className="lg:max-w-[874px] ">
                      {/* Imagenes */}
                      {/* wonderland decentraland kleros uniswap */}
                      <div className="  ">
                        <Image
                          width={246}
                          src={wonderland}
                          alt="logo_wonderland"
                          className=""
                        ></Image>

                        <Image
                          width={222}
                          src={decentraland}
                          alt="logo_decentraland"
                          className="py-5"
                        ></Image>

                        <Image
                          width={222}
                          src={connext}
                          alt="logo_connext"
                          className="py-5"
                        ></Image>

                        <Image
                          width={107}
                          src={kleros}
                          alt="logo_kleros"
                          className="py-5"
                        ></Image>

                        <Image
                          width={222}
                          src={letgh}
                          alt="logo_letgh"
                          className="py-5"
                        ></Image>

                        <Image
                          width={153}
                          src={uniswap}
                          alt="logo_uniswap"
                          className="py-5"
                        ></Image>

                        <Image
                          width={222}
                          src={lens}
                          alt="logo_lens"
                          className="py-5"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="prev-button">
                <FiChevronLeft
                  size={32}
                  style={{
                    color: "#ffffff",
                    strokeWidth: 4,
                  }}
                />
              </div>

              <div className="next-button">
                <FiChevronRight
                  size={32}
                  style={{
                    color: "#ffffff",
                    strokeWidth: 4,
                  }}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
