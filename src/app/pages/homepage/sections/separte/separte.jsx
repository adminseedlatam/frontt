"use client";

import Image from "next/image";
import styles from "./separte.module.css";
import Link from "next/link";

// Images

import Defilatam from "../../../../assets/img/community-section/defilatam.png";
import L2es from "../../../../../app/assets/img/community-section/l2es.png";
import Mec from "../../../../../app/assets/img/community-section/mec.png";
import Solow from "../../../../../app/assets/img/community-section/solow.png";
import ForkDAO from "../../../../../app/assets/img/community-section/forkdao.png";
import Dpp from "../../../../../app/assets/img/community-section/dpp.png";
import Opes from "../../../../../app/assets/img/community-section/opes.png";
import discord from "../../../../assets/icons/discord.svg";
import instagram from "../../../../assets/icons/instagram.svg";
import twitter from "../../../../assets/icons/twitter.svg";

// Swiper
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div>
      <div 
      id="Separte" 
      className="hidden xl:block py-[5vw]"
      >
        <div className="px-[5vw] pt-[75px]"> {/* Este agarra todo el swiper */}
          <div className=" pb-[75px]"> 
            <h3 className={styles.title}>
              DESKTOP Las comunidades y SEED Latam
            </h3>
          </div>
          {/* este es el ultimo  */}
          <div className="flex  justify-between items-center pb-[50px]">
            <div>
              <div className="max-w-[336px] pb-[24px]">
                <h4 className={styles.h3}>Comunidades Alineadas</h4>
              </div>
              <div className="max-w-[336px] w-[90vw] ">
                <p className={styles.fontAlineadas}>
                  Son aquellas que han surgido en el ámbito de SEED Latam o han
                  sido fundadas por un miembro core o hardcore
                </p>
              </div>
            </div>

            {/*  slider comunidad Desktop */}
            {/*   <div className=" max-w-[499px] w-auto w-[499px] "> */}
            <div className="w-[880px]">
              <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={"3"}
                rewind={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 20,
                  modifier: 20,
                  slideShadows: false,
                }}
                preventClicks={true}
                navigation={true}
                pagination={{
                  type: "fraction",
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiperDesktop"
              >
                {/*  <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true} 
                slidesPerView={'3'}
                loop={true} 
                allowSlideNext={true}
               rewind={true}
                 coverflowEffect={{
                  rotate: 10,
                  stretch: 0,
                  scale: 1,
                  depth: 20,
                  modifier: 1,
                  slideShadows: true, }} 

                navigation={true}
                pagination={{
                  clickable: true,
                }}
                
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="mySwiperNewSeparte"
              > */}
                <SwiperSlide onClick={() => window.my_modal_2.showModal()}>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_2.showModal()}
                  >
                    <div>
                      <Image
                        width="100%"
                        height={331}
                        src={Defilatam}
                        alt="logo"
                        onClick={() => window.my_modal_2.showModal()}
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide
                  className="cursor-pointer"
                  onClick={() => window.my_modal_4.showModal()}
                >
                  <a className="cursor-pointer">
                    <div className="cursor-pointer">
                      <Image
                        className="cursor-pointer"
                        width="100%"
                        height={331}
                        src={Opes}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="cursor-pointer z-10"
                    onClick={() => window.my_modal_3.showModal()}
                  >
                    <div className="">
                      <Image
                        width="100%"
                        height={331}
                        src={L2es}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>

              {/*     <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 20,
                  slideShadows: false,
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiperSeParteDesktop2"
              >
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_2.showModal()}
                  >
                    <div className="w-[300px]">
                      <Image
                        width={502}
                        height={331}
                        src={Descilatam}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_3.showModal()}
                  >
                    <div className="w-[302px]">
                      <Image
                        className="cursor-pointer"
                        width={502}
                        height={331}
                        src={L2es}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_4.showModal()}
                  >
                    <div className="w-[502px]">
                      <Image
                        width={502}
                        height={331}
                        src={Opes}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>    
              </Swiper> */}
            </div>
          </div>
        </div>

        {/* slider comunidad responsive */}
        {/*  <div className="  hidden md:flex  lg:justify-between  px-[5vw] ">
          <div className="lg:flex min-w-[90vw] lg:justify-between">
            <div className="  max-w-[316px] pb-[24px]">
              <h4 className={styles.h3}>Comunidades Amigas</h4>
              <div className="lg:max-w-[449px]  pb-[2rem]">
                <div className="pt-6">
                  <p className={styles.fontAmigas}>
                    Son comunidades independientes que representan una
                    colaboración valiosa para SEED Latam
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  flex-wrap gap-4  max-lg:max-w-[90vw] pb-[4.25rem] ">
              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_7.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={109.28}
                        height={93.3}
                        src={Solow}
                        alt="logo"
                      ></Image>
                    </div>
                    <div className="">
                      <h5 className="py-2 pl-2  font-bold text-[10px]">
                        Solow
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_8.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={109.28}
                        height={93.3}
                        src={Mec}
                        alt="logo"
                      ></Image>
                    </div>
                    <div>
                      <h5 className="py-2 pl-2 flex items-center font-bold text-[10px]">
                        Mujeres en Cripto
                      </h5>
                    </div>
                  </div>
                </a>
              </div>

              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_9.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={109.28}
                        height={93.3}
                        src={ForkDAO}
                        alt="logo"
                      ></Image>
                    </div>
                    <div>
                      <h5 className="py-2 pl-2 flex items-center font-bold text-[10px]">
                        Fork DAO
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_10.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={109.28}
                        height={93.3}
                        src={Dpp}
                        alt="logo"
                      ></Image>
                    </div>
                    <div>
                      <h5 className="py-2 pl-2 flex items-center font-bold text-[10px]">
                        DPP
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Responsive */}
      <div id="Separte" className="xl:hidden">
        <div className=" px-[5vw] pt-[75px]">
          <div className="pb-[28.1px]  xl:pb-[75px]">
            <h3 className={styles.title}>RESPONSIVELas comunidades y SEED Latam</h3>
          </div>
          <div className="flex  justify-between items-center xl:pb-[50px] flex-wrap">
            <div>
              <div className=" max-w-[336px] pb-[24px]">
                <h4 className={styles.h3}>Comunidades Alineadas</h4>
              </div>
              <div className="md:max-w-[60vw] lg:max-w-[336px] w-[90vw] ">
                <p className={styles.fontAlineadas}>
                  Son aquellas que han surgido en el ámbito de SEED Latam o han
                  sido fundadas por un miembro core o hardcore
                </p>
              </div>
            </div>
            <div className=" max-w-[90vw]  w-[485px] py-[50px]">
              <Swiper
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 20,
                  slideShadows: false,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiperNewSeparte"
              >
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_2.showModal()}
                  >
                    <div>
                      <Image
                        width={502}
                        height={331}
                        src={Defilatam}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_4.showModal()}
                  >
                    <div className="">
                      <Image
                        className="cursor-pointer"
                        width={502}
                        height={331}
                        src={Opes}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_3.showModal()}
                  >
                    <div className="">
                      <Image
                        width={502}
                        height={331}
                        src={L2es}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* Comunidades Amigas Desktop */}
        {/* <div className="hidden xl:flex justify-between items-center  flex-wrap ">
          <div>
            <div className="max-w-[316px] pb-[24px]">
              <h4 className={styles.h3}>Comunidades Amigas</h4>
            </div>
            <div className="lg:max-w-[449px] md:max-w-[1000px]  pb-[2rem]">
              <p className={styles.fontAmigas}>
                Son comunidades independientes que representan una colaboración
                valiosa para SEED Latam
              </p>
            </div>
          </div>
          <div className="flex  flex-wrap gap-4  max-lg:max-w-[90vw] pb-[4.25rem] ">
            <div>
              <a
                className="cursor-pointer"
                onClick={() => window.my_modal_7.showModal()}
              >
                <div className={styles.containerAmigas}>
                  <div className={styles.imageAmigas}>
                    <Image
                      width="9.125rem"
                      height={300}
                      src={Solow}
                      alt="logo"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="py-2 pl-2 flex items-center font-bold ">
                      Solow
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                className="cursor-pointer"
                onClick={() => window.my_modal_8.showModal()}
              >
                <div className={styles.containerAmigas}>
                  <div className={styles.imageAmigas}>
                    <Image
                      width="9.125rem"
                      height={300}
                      src={Mec}
                      alt="logo"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="py-2 pl-2 flex items-center font-bold text-[0.9375rem]">
                      Mujeres en Cripto
                    </h5>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a
                className="cursor-pointer"
                onClick={() => window.my_modal_9.showModal()}
              >
                <div className={styles.containerAmigas}>
                  <div className={styles.imageAmigas}>
                    <Image
                      width="9.125rem"
                      height={300}
                      src={ForkDAO}
                      alt="logo"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="py-2 pl-2 flex items-center font-bold">
                      Fork DAO
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                className="cursor-pointer"
                onClick={() => window.my_modal_10.showModal()}
              >
                <div className={styles.containerAmigas}>
                  <div className={styles.imageAmigas}>
                    <Image
                      width="9.125rem"
                      height={300}
                      src={Dpp}
                      alt="logo"
                    ></Image>
                  </div>
                  <div>
                    <h5 className="py-2 pl-2 flex items-center font-bold">
                      DPP
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> */}

        {/* Comunidades Amigas Responsive */}
        {/*  <div className=" flex xl:hidden    lg:justify-between  px-[5vw] ">
          <div className="lg:flex min-w-[90vw] lg:justify-between">
            <div>
              <div className=" max-w-[316px] ">
                <h4 className={styles.h3}>Comunidades Amigas</h4>
              </div>
              <div className="md:max-w-[60vw] lg:w-[316px] pb-[2rem]">
                <div className="pt-6">
                  <p className={styles.fontAmigas}>
                    Son comunidades independientes que representan una
                    colaboración valiosa para SEED Latam
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  flex-wrap gap-4  max-lg:max-w-[90vw] pb-[4.25rem] ">
              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_7.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={146}
                        height={168}
                        src={Solow}
                        alt="logo"
                      ></Image>
                    </div>
                    <div className="">
                      <h5 className="py-2 pl-2  font-bold text-[10px]">
                        Solow
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_8.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={146}
                        height={168}
                        src={Mec}
                        alt="logo"
                      ></Image>
                    </div>
                    <div>
                      <h5 className="py-2 pl-2 flex items-center font-bold text-[10px]">
                        Mujeres en Cripto
                      </h5>
                    </div>
                  </div>
                </a>
              </div>

              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_9.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={146}
                        height={168}
                        src={ForkDAO}
                        alt="logo"
                      ></Image>
                    </div>
                    <div>
                      <h5 className="py-2 pl-2 flex items-center font-bold text-[10px]">
                        Fork DAO
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_10.showModal()}
                >
                  <div className={styles.containerAmigas}>
                    <div className={styles.imageAmigas}>
                      <Image
                        width={146}
                        height={168}
                        src={Dpp}
                        alt="logo"
                      ></Image>
                    </div>
                    <div>
                      <h5 className="py-2 pl-2 flex items-center font-bold text-[10px]">
                        DPP
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Modals */}
      <div id="modals">
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <div className={styles.headerModal}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="py-4 text-lg">
                Es una comunidad en español que se dedica a la educación y
                adopción de usuarios en el ecosistema Web3 y cripto, bajo los
                valores de la descentralización. Su principal enfoque está en el
                ecosistema DeFi en general, incluyendo protocolos, métricas,
                tokenomics, MEV, entre otros. Para obtener más información sobre
                DeFi Latam y cómo está organizado, haga clic en el siguiente
                enlace defilatam.com.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>

                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/DeFi_Latam"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <div className={styles.headerModal_l2}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="py-4 text-lg">
                Es una comunidad en español dedicada al estudio de soluciones de
                escalabilidad en Ethereum. Su principal enfoque está relacionado
                a las L2, Optimistic Rollup, Zk rollup, Ethereum, Validiums, DA,
                entre otros.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>

                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/Layer2es"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_4" className="modal">
          <form method="dialog" className="modal-box">
            <div className={styles.headerModal_opes}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="py-4 text-lg">
                Es una comunidad enfocada en brindar información sobre el
                ecosistema Optimism. Su principal enfoque está en la
                actualización del protocolo y la traducción de documentación.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>

                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/OptimismESP"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_5" className="modal">
          <form method="dialog" className="modal-box">
            <div className={styles.headerModal_buidlers}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4">
              <p className="py-4 text-lg">
                Es una comunidad que compone el hub de desarrolladores Web3 en
                español, en la cual la descentralización, calidad y colaboración
                son parte de su identidad.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/defilatam/"
                  >
                    <Image className="" alt="Logo" src={instagram}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/SEEDLatam/"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_6" className="modal">
          <form method="dialog" className="modal-box">
            <div className={styles.headerModal_descilatam}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4">
              <p className="py-4 text-lg">
                Es una comunidad en español y portugués de educación sobre
                ciencia descentralizada. Su principal objetivo es dar a conocer
                el movimiento DeSci en Latinoamérica y apoyar proyectos de
                investigación científica.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/defilatam/"
                  >
                    <Image className="" alt="Logo" src={instagram}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/SEEDLatam/"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_7" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
              ✕
            </button>
            <div className="px-4 pt-4">
              <h3 className="font-bold text-lg">Solow</h3>
              <p className="py-4 text-lg">
                Es una comunidad orientada a los builders de Latam. Su misión es
                que aprender cripto sea gratis, fácil y divertido. Es por eso
                que hacen educación gamificada en diversos formatos y
                plataformas. Esta comunidad está abierta a cualquier persona que
                quiera unirse a nosotros para hacer un mundo mejor.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/defilatam/"
                  >
                    <Image className="" alt="Logo" src={instagram}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/SEEDLatam/"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_8" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
              ✕
            </button>
            <div className="px-4 pt-4">
              <h3 className="font-bold text-lg">Mujeres en Crypto</h3>
              <p className="py-4 text-lg">
                Es una comunidad con el objetivo de lograr equidad en el
                ecosistema web3 y dar visibilidad a las mujeres, para tener más
                líderes y referentes. Por otra parte incorpora a mujeres y
                entusiastas, que quieran adentrarse en el ecosistema y generan
                espacios de intercambio de valor, tales como encuentros
                presenciales, workshops presenciales y online, mentorías y
                grupos de lectura e inglés.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/defilatam/"
                  >
                    <Image className="" alt="Logo" src={instagram}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/SEEDLatam/"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_9" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
              ✕
            </button>
            <div className="px-4 pt-4">
              <h3 className="font-bold text-lg">Fork DAO</h3>
              <p className="py-4 text-lg">
                Es una comunidad abierta que aporta valor al ecosistema
                produciendo contenido, acompañando a los nuevos usuarios en su
                formación con las nuevas tecnologías, y generando una cultura de
                soberanía individual y cooperación colectiva.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/defilatam/"
                  >
                    <Image className="" alt="Logo" src={instagram}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/SEEDLatam/"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_10" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
              ✕
            </button>
            <div className="px-4 pt-4">
              <h3 className="font-bold text-lg">DeFi para Principiantes</h3>
              <p className="py-4 text-lg">
                Es una plataforma en español que brinda apoyo y orientación a
                aquellos que desean adentrarse en el mundo de Dai y DeFi
                (Finanzas Descentralizadas). Proporciona noticias actualizadas,
                tutoriales detallados y una amplia gama de información sobre la
                economía descentralizada. Como el canal oficial de la primera
                página en español listada en DeFi Pulse, se esfuerza por ser una
                referencia confiable para los principiantes interesados en
                aprender sobre Dai, DeFi y Ethereum. Con un enfoque en la
                educación, Defi para Principiantes tiene como objetivo ayudar a
                los usuarios a comprender los conceptos básicos, las
                características y las oportunidades que ofrece DeFi
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discord}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com/defilatam/"
                  >
                    <Image className="" alt="Logo" src={instagram}></Image>
                  </Link>
                </div>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/SEEDLatam/"
                  >
                    <Image className="" alt="Logo" src={twitter}></Image>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
