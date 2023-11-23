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
import chainlink from "../../../../assets/img/descubrenos/chainlink.svg";
import dappnode from "../../../../assets/img/descubrenos/dappnode.svg";
import ethfound from "../../../../assets/img/descubrenos/ethereumfoundation.svg";
import criptotend from "../../../../assets/img/descubrenos/criptotendencias.svg";
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
                      <h3 className={styles.title}>What is SEED Latam?</h3>
                    </div>
                  </div>

                  <div className="lg:max-w-[874px] pl-[108px] ">
                    <div className="flex">
                      <div className={styles.breadcrumbs}>SEED Latam &gt;</div>
                      <div className={styles.breadcrumbs2}>
                        What is SEED Latam?
                      </div>
                    </div>
                    <p className={styles.font}>
                      The SEED Latam ecosystem aims to promote knowledge and
                      critical thinking about Web3 through education, community,
                      and active governance participation in order to generate a
                      positive impact in the Latin American region.
                    </p>
                    <p className={styles.font2}>
                      At SEED Latam, we believe that collective and cooperative
                      knowledge is essential for forming a critically thinking
                      community. <br />
                      <br /> We build bridges between the global industry and
                      local talent; that&apos;s why we create high-quality,
                      open, and freely accessible educational content in Spanish
                      for the community. We strive to be a benchmark model for
                      inclusive and accessible education for all.
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
                        What do we do at SEED Latam?
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
                          What do we do at SEED Latam?
                        </div>
                      </div>
                      <div className="pt-5">
                        <p className={styles.font4}>
                          These are the meeting spaces we have:
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

                              <h4>We review the most important events.</h4>
                              <Link
                                className="text-fuchsia-500 font-normal leading-9"
                                target="_blank"
                                rel="noopener"
                                href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                              >
                                Learn more
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

                              <h4>Community voting</h4>
                              <Link
                                target="_blank"
                                rel="noopener"
                                className="text-fuchsia-500 font-normal leading-9"
                                href="https://youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI"
                              >
                                Learn more
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
                                In-Person Events
                              </div>

                              <h4>In various provinces of the country</h4>
                              <Link
                                target="_blank"
                                rel="noopener"
                                className="text-fuchsia-500 font-normal leading-9"
                                href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5ycJFkObjp3VAUu4dZsCWlP"
                              >
                                Learn more
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
                                Online Content
                              </div>

                              <h4>Interviews, articles, and Web3 milestones</h4>
                              <a
                                className="text-fuchsia-500 font-normal leading-9"
                                target="_blank"
                                rel="noopener"
                                onClick={() =>
                                  window.my_modal_contOnline.showModal()
                                }
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* modal ContenidoOnline */}
                        <dialog
                          id="my_modal_contOnline"
                          className="modal pt-10 sm: md: lg: xl:pt-24 2xl:pt-4"
                        >
                          <form
                            method="dialog"
                            className="modal-backdrop pt-20  "
                          >
                            <div className=" items-center max-w-6xl rounded-lg h-4/5 border-white border bg-[#222222] mx-auto w-screen">
                              <button className="text-white btn btn-sm btn-circle btn-ghost border-none  xl:pt-[10px] xl:pl-[1125px] ">
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
                                    Articles
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://mirror.xyz/seedlatam.eth"
                                  >
                                    Learn more
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
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5xNmrs0iWrSLGuiPaZIvyws"
                                  >
                                    Learn more
                                  </Link>
                                </div>

                                {/* HITOS WEB3 */}

                                <div>
                                  <Image
                                    alt="hitosweb3"
                                    src={hitosWeb3}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Web3 milestones
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://seedlatam.notion.site/SEED-Latam-Events-627a0d0646d646ef8ab58c491b3e64cf"
                                  >
                                    Learn more
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
                      <h3 className={styles.title}>What are our values?</h3>
                    </div>
                  </div>

                  <div className="max-w-[400px] xl:max-w-[874px] pl-[108px] ">
                    <div className="flex">
                      <div className={styles.breadcrumbs}>SEED Latam &gt;</div>
                      <div className={styles.breadcrumbs2}>
                        What are our values?
                      </div>
                    </div>
                    <div className="pt-[70px]">
                      <p className={styles.font3}>Sovereignty</p>
                      <p className={styles.font4}>
                        We work daily to make users aware of digital sovereignty
                        within the framework of web3.
                      </p>
                      <p className={styles.font3}>Education</p>
                      <p className={styles.font4}>
                        From our beginnings, we advocate for free and
                        interdisciplinary education.
                      </p>
                      <p className={styles.font3}>Evolution</p>
                      <p className={styles.font4}>
                        We contribute to the evolution of the Web3 ecosystem by
                        encouraging the community to actively participate in
                        different protocols and spaces.
                      </p>
                      <p className={styles.font3}>Decentralization</p>
                      <p className={styles.font4}>
                        We pursue the ideals of decentralization, which is one
                        of our core values and the main source of inspiration.
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
                        Who is part of SEED Latam?
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
                          Who is part of SEED Latam?
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
                                SEED Ecosystem
                              </div>

                              <h4>All our structure explained</h4>
                              <a
                                className="text-fuchsia-500 font-normal leading-9"
                                target="_blank"
                                rel="noopener"
                                onClick={() => window.my_modal_1.showModal()}
                              >
                                Learn more
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
                          <button className="text-white btn btn-sm btn-circle btn-ghost border-none absolute right-28 xl:right-32 2xl:right-32 top-12 xl:top-28 2xl:top-8">
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
                                Statute
                              </div>

                              <h4>All internal information about SEED Latam</h4>
                              <Link
                                target="_blank"
                                rel="noopener"
                                className="text-fuchsia-500 font-normal leading-9"
                                href="https://seedlatam.notion.site/SEED-Latam-statute-8c32073beb2147759e51b3d3e51edd7d"
                              >
                                Learn more: seedlatam.wiki
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
                        Who has already trusted us?
                      </h3>
                    </div>
                  </div>

                  {/* LOGOS TODOS */}
                  <div className="lg:max-w-[874px] pl-[108px] ">
                    <div className="flex pb-10">
                      <div className={styles.breadcrumbs}>SEED Latam &gt;</div>
                      <div className={styles.breadcrumbs2}>
                        Who has already trusted us?
                      </div>
                    </div>
                    {/* Imagenes */}
                    {/* wonderland decentraland kleros uniswap */}
                    <div className=" grid grid-cols-3 gap-6 py-5 xl:max-w-3xl">
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
                        className="pt-1"
                      ></Image>

                      <Image
                        width={222}
                        src={connext}
                        alt="logo_connext"
                        className=""
                      ></Image>
                    </div>
                    <div className="grid grid-cols-4 gap-6 py-5 xl:max-w-3xl">
                      <Image
                        width={107}
                        src={kleros}
                        alt="logo_kleros"
                        className="w-36"
                      ></Image>

                      <Image
                        width={222}
                        src={letgh}
                        alt="logo_letgh"
                        className="pt-3"
                      ></Image>

                      <Image
                        width={153}
                        src={uniswap}
                        alt="logo_uniswap"
                        className="pl-5 w-80"
                      ></Image>

                      <Image
                        width={222}
                        src={lens}
                        alt="logo_lens"
                        className="pt-3"
                      ></Image>

                      <Image
                        width={222}
                        src={chainlink}
                        alt="logo_chainlink"
                        className="pl-2 w-48"
                      ></Image>
                      <Image
                        width={222}
                        src={dappnode}
                        alt="logo_dappnode"
                        className="pl-5 w-80"
                      ></Image>

                      <Image
                        width={222}
                        src={ethfound}
                        alt="logo_ethereumfoundation"
                        className="w-56"
                      ></Image>

                      <Image
                        width={222}
                        src={criptotend}
                        alt="logo_criptotendencias"
                        className="pt-5"
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
                      <h3 className={styles.title}>What is SEED Latam?</h3>
                    </div>
                  </div>
                  <div>
                    <div className="pb-6">
                      <p className={styles.font4strong}>
                        The SEED Latam ecosystem aims to promote knowledge and
                        critical thinking about Web3 through education,
                        community, and active governance participation in order
                        to generate a positive impact in the Latin American
                        region.
                      </p>
                    </div>
                    <p className={styles.font4}>
                      At SEED Latam, we believe that collective and cooperative
                      knowledge is essential for forming a critically thinking
                      community. <br/> <br/> We build bridges between the global industry
                      and local talent; that&apos;s why we create high-quality,
                      open, and freely accessible educational content in Spanish
                      for the community. We strive to be a benchmark model for
                      inclusive and accessible education for all.
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
                          What do we do at SEED Latam?
                        </h3>
                      </div>
                    </div>
                    <div className=" xl:max-w-[620px] lg:max-w-[600px] ">
                      <div className="flex ">
                        <div className={styles.breadcrumbs}>
                          SEED Latam &gt;
                        </div>
                        <div className={styles.breadcrumbs2}>
                          What do we do at SEED Latam?
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
                                  We review the most important events.
                                </div>

                                <p className={styles.eventCTA}>Learn more</p>
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
                                    Community voting
                                  </div>

                                  <p className={styles.eventCTA}>Learn more</p>
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
                                  In-Person Events
                                </h4>
                                <div className={styles.eventDescription}>
                                  In various provinces of the country
                                </div>

                                <p className={styles.eventCTA}>Learn more</p>
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
                                  Online Content
                                </h4>
                                <div className={styles.eventDescription}>
                                  Interviews, articles, and Web3 milestones
                                </div>
                                <p className={styles.eventCTA}>Learn more</p>
                              </div>
                            </div>
                          </a>
                        </div>

                        {/* modal ContenidoOnline2 */}
                        <dialog
                          id="my_modal_contOnline2"
                          className="modal pt-10 sm: md: lg: xl:pt-24 2xl:pt-4"
                        >
                          <form
                            method="dialog"
                            className="modal-backdrop pt-20  "
                          >
                            <div className="items-center max-w-6xl rounded-lg h-fit md:h-4/5 min-w-3/4 border-white border bg-[#222222] mx-auto ">
                              <button className="text-white btn btn-sm btn-circle btn-ghost border-none pl-[540px] sm:pl-[740px] ">
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
                                    Articles
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5yMhvZMHae4HBAdaD-_Dxwp"
                                  >
                                    Learn more
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
                                    Learn more
                                  </Link>
                                </div>

                                {/* HITOS WEB3 */}

                                <div>
                                  <Image
                                    alt="hitosweb3"
                                    src={hitosWeb3}
                                  ></Image>
                                  <div className="text-white text-[20px] font-bold leading-9">
                                    Web3 milestones
                                  </div>
                                  <Link
                                    className="text-fuchsia-500 font-normal leading-9"
                                    target="_blank"
                                    rel="noopener"
                                    href="https://seedlatam.notion.site/SEED-Latam-Events-627a0d0646d646ef8ab58c491b3e64cf"
                                  >
                                    Learn more
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
                        <h3 className={styles.title}>What are our values?</h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex ">
                        <div className={styles.breadcrumbs}>
                          SEED Latam &gt;
                        </div>
                        <div className={styles.breadcrumbs2}>
                          What are our values?
                        </div>
                      </div>
                      <div className="pt-[1rem]">
                        <p className={styles.font3}>Sovereignty</p>
                        <p className={styles.font4}>
                          We work daily to make users aware of digital
                          sovereignty within the framework of web3.
                        </p>
                        <p className={styles.font3}>Education</p>
                        <p className={styles.font4}>
                          From our beginnings, we advocate for free and
                          interdisciplinary education.
                        </p>
                        <p className={styles.font3}>Evolution</p>
                        <p className={styles.font4}>
                          We contribute to the evolution of the Web3 ecosystem
                          by encouraging the community to actively participate
                          in different protocols and spaces.
                        </p>
                        <p className={styles.font3}>Decentralization</p>
                        <p className={styles.font4}>
                          We pursue the ideals of decentralization, which is one
                          of our core values and the main source of inspiration.
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
                      <div className="h-28 pt-10 sm:pt-14 flex xl:pt-80">
                        <h3 className={styles.title}>
                          Who is part of SEED Latam?
                        </h3>
                      </div>
                    </div>

                    <div className="  xl:max-w-[990px] ">
                      <div className=" flex flex-wrap gap-4 min-[1570px]:max-w-[400px] ">
                        <div className="pr-[79.75px] ">
                          
                            <div className="flex bg-[#323232] min-w-[325px] sm:min-w-[526px] rounded-[7px] p-[16px] ">
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
                                  SEED Ecosystem
                                </div>

                                <h4>All our structure explained</h4>
                                <a
                                  className="text-fuchsia-500 font-normal leading-9"
                                  target="_blank"
                                  rel="noopener"
                                  onClick={() =>
                                    window.my_modal_mapa.showModal()
                                  }
                                >
                                  Learn more
                                </a>
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
                            <button className="text-white btn btn-sm btn-circle btn-ghost border-none absolute right-32 top-12 xl:top-24 2xl:top-4">
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
                          
                          <div className=" max-w-[347px]">
                            <div className="flex bg-[#323232] min-w-[325px] sm:min-w-[526px] rounded-[7px] p-[16px]  ">
                              <div className="min-w-[100px]">
                                <Image
                                  width={100}
                                  height={100}
                                  src={iconEstatuto}
                                  alt="logo"
                                ></Image>
                              </div>
                              <div className=" pl-[1rem] ">
                                <div className="text-white text-[20px] font-bold leading-9">
                                  Statute
                                </div>

                                <h4>
                                  All internal information about SEED Latam
                                </h4>
                                <Link
                                  target="_blank"
                                  rel="noopener"
                                  className="text-fuchsia-500 font-normal leading-9"
                                  href="https://seedlatam.notion.site/SEED-Latam-statute-8c32073beb2147759e51b3d3e51edd7d"
                                >
                                  Learn more: seedlatam.wiki
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
                          Who has already trusted us?
                        </h3>
                      </div>
                    </div>

                    <div className="lg:max-w-[874px] ">
                      {/* Imagenes */}
                      <div className=" grid grid-cols-3 gap-6 py-5 xl:max-w-3xl">
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
                        className="pt-1"
                      ></Image>

                      <Image
                        width={222}
                        src={connext}
                        alt="logo_connext"
                        className=""
                      ></Image>
                    </div>
                    <div className="grid grid-cols-4 gap-6 py-5 xl:max-w-3xl">
                      <Image
                        width={107}
                        src={kleros}
                        alt="logo_kleros"
                        className="w-36"
                      ></Image>

                      <Image
                        width={222}
                        src={letgh}
                        alt="logo_letgh"
                        className="pt-3"
                      ></Image>

                      <Image
                        width={153}
                        src={uniswap}
                        alt="logo_uniswap"
                        className="pl-5 w-80"
                      ></Image>

                      <Image
                        width={222}
                        src={lens}
                        alt="logo_lens"
                        className="pt-3"
                      ></Image>

                      <Image
                        width={222}
                        src={chainlink}
                        alt="logo_chainlink"
                        className="pl-2 w-48"
                      ></Image>
                      <Image
                        width={222}
                        src={dappnode}
                        alt="logo_dappnode"
                        className="pl-5 w-80"
                      ></Image>

                      <Image
                        width={222}
                        src={ethfound}
                        alt="logo_ethereumfoundation"
                        className="w-56"
                      ></Image>

                      <Image
                        width={222}
                        src={criptotend}
                        alt="logo_criptotendencias"
                        className="pt-5"
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
