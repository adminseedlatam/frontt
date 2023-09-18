"use client";

import Image from "next/image";
import Link from "next/link";
import Maker from "../assets/img/gobernanza/gob-maker.png";
import Arbitrum from "../assets/img/gobernanza/gob-arbitrum.png";
import Optimism from "../assets/img/gobernanza/gob-op.png";
import Starknet from "../assets/img/gobernanza/gob-starknet.png";
import Connext from "../assets/img/gobernanza/gob-connext.png"
import discord from "../assets/icons/discordwhite.svg";
import twitter from "../assets/icons/twitterwhite.svg";
import govday from "../assets/img/gobernanza/GOVERNANCEDAY.png";
import web from "../assets/icons/web.svg"
import everyone from "../assets/img/gobernanza/everyone.png"

import styles from "./gobernanzas.module.css";
import styles3 from "./gobernanzas.module.css";

// Swiper
import { useRef } from "react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomePage() {
  const swiperRef = useRef(null);

  return (
    <div className="justify-between max-md:pt-[100px] pt-[209px] px-[5vw] pb-[50px] min-h-screen">
      {/* ENFOQUE GOBERNANZAS */}
      <div>
        <h1 className={styles.h1}>Nuestro enfoque en gobernanzas</h1>
      </div>

      <div>
        {/* <div className="flex max-lg:flex-wrap"> */}
        <div className={styles.gobernanzas}>
          <div>
            <h4 className={styles.h4}>
              Las voces de nuestra región presente en las gobernanzas web3
            </h4>
          </div>
          <div>
            <p className={styles.small}>
              Las plataformas de delegados de SEED Latam buscan que más personas
              de Latinoamérica se involucren de forma activa en las gobernanzas
              web3 para tener como región voz y voto en el futuro de blockchains
              y protocolos.
            </p>
          </div>
        </div>
      </div>

      {/* PLATAFORMAS ACTIVAS ACTUALMENTE- Desktop */}

      <div className="xl:flex grid-cols-2 justify-normal xl:justify-between items-center xl:text-left pt-[130px] max-md:pt-[3rem] ">
        {/* columna 1 */}
        <div className="max-w-[482px]">
          <h3 className={styles.h3}>Plataformas activas actualmente</h3>
          <p className={styles.p}>
            Las plataformas de delegados son equipos que participan activamente
            de las discusiones y votaciones de determinado protocolo,
            representando los intereses de determinada organización o comunidad
          </p>
        </div>

        {/* columna 2 */}
        {/*  slider gobernanzas DESKTOP*/}
        <div
          id="GobernanzasPage"
          className="hidden xl:block py-[50px] xl:pt-[46px] px-16"
        >
          <div className="md:w-[880px]  xl:pt-16">
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
              className="mySwiperGobernanzasPage"
            >
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_22.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Optimism}
                      alt="logo"
                      onClick={() => window.my_modal_22.showModal()}
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_23.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Maker}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>

              {/* arbitrum */}
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_24.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Arbitrum}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>

              {/* starknet */}
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_25.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Starknet}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>
              {/* connext */}
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_26.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Connext}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>



            </Swiper>{" "}
          </div>
        </div>

        {/* columna 2 */}
        {/* -----------------------Responsive ------------------------ */}

        <div id="GobernanzasPageRes" className="xl:hidden pb-[50px] ">
          <div className=" w-[350px]  pt-16">
            <Swiper
              effect={"coverflow"}
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={"1"}
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
              className="mySwiperGobernanzasPage"
            >
              <SwiperSlide >
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_22.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Optimism}
                      alt="logo"
                      onClick={() => window.my_modal_22.showModal()}
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_23.showModal()}
                >
                  <div>
                    <Image
                      className="cursor-pointer"
                      width="100%"
                      height={331}
                      src={Maker}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>

              <SwiperSlide onClick={() => window.my_modal_24.showModal()}>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_24.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Arbitrum}
                      alt="logo"
                      onClick={() => window.my_modal_24.showModal()}
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>

              {/* starknet */}
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_25.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Starknet}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>
              {/* connext */}
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_26.showModal()}
                >
                  <div>
                    <Image
                      width="100%"
                      height={331}
                      src={Connext}
                      alt="logo"
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>





            </Swiper>{" "}


            
          </div>

        </div>

        {/* MODALS */}

        {/* optimism */}
        <dialog id="my_modal_22" className="modal">
              <form method="dialog" className="modal-box bg-bg-card">
                <div className={styles.headerModal_OPGov}>
                  <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2 ">
                    ✕
                  </button>
                </div>
                <div className="px-4 ">
                  <p className="py-4 text-lg text-white">
                    Optimism DAO, su ecosistema y la potenciación de LATAM como
                    región. Comprendemos que la gobernanza es una pieza
                    fundamental para impulsar esta misión y reconocemos el arduo
                    trabajo de sus Delegados; quienes votación tras votación
                    determinan cuál es la mejor dirección que debe tomar el
                    Optimism Collective.
                  </p>
                  <div className="flex md:justify-end gap-2 ">
                    <div>
                      {" "}
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://tr.ee/j8u08Dhqyt"
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

            {/* sovereign finance AVC */}
            <dialog id="my_modal_23" className="modal">
              <form method="dialog" className="modal-box bg-bg-card">
                <div className={styles.headerModal_sofi}>
                  <button className="btn btn-sm btn-circle text-white btn-ghost border-none outline-none absolute right-2 top-2">
                    ✕
                  </button>
                </div>
                <div className="px-4 ">
                  <p className="py-4 text-lg text-white">
                    Sovereign Finance AVC fue fundada en marzo de 2023 como
                    parte del área de Gobernanza de SEED Latam, una comunidad
                    educativa enfocada en Web3 nacida en Latam. Nuestra
                    comunidad ha estado activa desde 2020 y participamos
                    activamente en múltiples iniciativas de gobernanza.{" "}
                  </p>
                  <div className="flex md:justify-end gap-2 ">
                    <div>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://governance-seedlatam.notion.site/Sovereign-Finance-AVC-6790b6b2fa5544cbacc8d02da5c3b5e3"
                      >
                        <Image className="" alt="Logo" src={web}></Image>
                      </Link>
                    </div>
                    {/* <div>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/SEEDLatam/"
                      >
                        <Image className="" alt="Logo" src={twitter}></Image>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            {/* modal arbitrum */}
            <dialog id="my_modal_24" className="modal">
              <form method="dialog" className="modal-box bg-bg-card">
                <div className={styles.headerModal_arb}>
                  <button className="btn btn-sm btn-circle btn-ghost text-white border-none outline-none absolute right-2 top-2">
                    ✕
                  </button>
                </div>
                <div className="px-4 ">
                  <p className="py-4 text-lg text-white">
                    La Arbitrum DAO se encarga de la gobernanza y el
                    mantenimiento del protocolo Arbitrum, incluyendo la
                    implementación de mejoras, la toma de decisiones y la
                    asignación de recursos.
                  </p>
                  <div className="flex md:justify-end gap-2 ">
                    <div>
                      {" "}
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://discord.gg/6Vn5panv"
                      >
                        <Image className="" alt="Logo" src={discord}></Image>
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/arbitrum_esp"
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

              {/* modal starknet */}
            <dialog id="my_modal_25" className="modal">
              <form method="dialog" className="modal-box bg-bg-card">
                <div className={styles.headerModal_starknet}>
                  <button className="btn btn-sm btn-circle btn-ghost text-white border-none outline-none absolute right-2 top-2">
                    ✕
                  </button>
                </div>
                <div className="px-4 ">
                  <p className="py-4 text-lg text-white">
                  StarkNet  DAO tiene como misión respaldar el proyecto StarkNet, 
                  una red l2 en Ethereum. 
                  Esta governanza promoverá el desarrollo de StarkNet, 
                  la adopción de la red y la participación de la comunidad.
                  </p>
                  <div className="flex md:justify-end gap-2 ">
                    <div>
                      {" "}
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://discord.gg/6Vn5panv"
                      >
                        <Image className="" alt="Logo" src={discord}></Image>
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/StarknetEs"
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

            {/* modal connext */}
            <dialog id="my_modal_26" className="modal">
              <form method="dialog" className="modal-box bg-bg-card">
                <div className={styles.headerModal_connext}>
                  <button className="btn btn-sm btn-circle btn-ghost text-white border-none outline-none absolute right-2 top-2">
                    ✕
                  </button>
                </div>
                <div className="px-4 ">
                  <p className="py-4 text-lg text-white">
                  Nuestra delegación en Connext DAO es nuestra participación más reciente. 
                  En actividad a partir septiembre de 2023, busca determinar mejoras para Connext.
                  </p>
                  <div className="flex md:justify-end gap-2 ">
                    <div>
                      {" "}
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://t.co/Wp8w4BBfIg"
                      >
                        <Image className="" alt="Logo" src={discord}></Image>
                      </Link>
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/ConnextEspanol"
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

      {/* imagen everyone y titullo gov day */}
      <div className="bg-[url('../assets/img/gobernanza/fondo-gov-day.png')] min-h-max pr-3 xl:flex grid-cols-2 justify-normal xl:justify-between items-center pt-[130px] max-md:pt-[3rem] ">
        
        <Image className="md:min-w-min pl-3 pb-3 md:pl-16 md:pb-40" alt="Logo" src={everyone}></Image>

        <div className="max-w-[482px] text-right pt-5 md:pr-20 pr-3 md:pb-40">
          <h3 className={styles.h3}>Governance Day</h3>
          <p className={styles.p2}>
            El primer evento presencial enfocado en las gobernanzas en web3.
          </p>

          {/* boton DESKTOP*/}
          {/* put <Link href="/gobernanzas/govday"> </Link> to redirect */}
          {/* PROXIMAMENTE */}
          <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
          <Link href="/gobernanzas/govday">
              <button className={styles3.button2}>
                Ver más sobre Governance Day
              </button>
            </Link>
          </div>
          
          {/* boton RESPONSIVE */}
          {/* put <Link href="/gobernanzas/govday"> </Link> to redirect */}
          {/* PROXIMAMENTE */}
          <div className="md:hidden pl-8 pb-5 text-9xl md:w-max-90vw md:justify-end">
            
          <Link href="/gobernanzas/govday">
              <button className={styles3.button3}>
                Ver más sobre Governance Day
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* escuela de gov */}
      <div className="justify-center xl:flex grid-cols-2 md:justify-normal xl:justify-between items-center pt-[130px] max-md:pt-[3rem] ">
        <div className="max-w-[482px] text-left">
          <h3 className={styles.h3}>Escuela de gobernanza</h3>
          <p className={styles.p}>Proximamente :)</p>

          {/* boton DESKTOP */}
          <div className="text-right md:pt-8 md:w-max-90vw md:flex md:justify-start">
            <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa">
              <button className={styles3.button2}>
                Click acá para inscribirte
              </button>
            </Link>
          </div>



          
        </div>

        <Image className="pt-5" alt="Logo" src={govday}></Image>
      </div>

    </div>

    /* -------------------------------------------- */
  );
}
