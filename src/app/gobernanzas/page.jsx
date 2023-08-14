"use client";

import Image from "next/image";
import Link from "next/link";
import Maker from "../assets/img/gobernanza/gob-maker.png";
import Arbitrum from "../assets/img/gobernanza/gob-arbitrum.png";
import Optimism from "../assets/img/gobernanza/gob-op.png";
import discord from "../assets/icons/discord.svg";
import twitter from "../assets/icons/twitter.svg";

import styles from "./gobernanzas.module.css";

// Swiper
import { useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div
      id="GobernanzasPage"
      className="max-md:pt-[100px] pt-[209px] px-[5vw] pb-[50px] min-h-screen"
    >
      <div className="max-w-[600px]">
        <div className="container"></div>
      </div>
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
      <div className="flex max-lg:flex-wrap justify-between pt-[130px] max-md:pt-[3rem]">
        <div className="max-w-[482px]">
          <h3 className={styles.h3}>Plataformas activas actualmente</h3>
          <p className={styles.p}>
            Las plataformas de delegados son equipos que participan activamente
            de las discusiones y votaciones de determinado protocolo,
            representando los intereses de determinada organización o comunidad
          </p>
        </div>

        <div className=" w-[485px] lg:py-[0px] md:pl-[1rem] py-[50px] max-w-[90vw]">
          <div className=" md:hidden">
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
              modules={[Navigation]}
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
              <div id="modals" className="md:max-w-[100vw] max-w">
              <dialog id="my_modal_22" className="modal">
                <form method="dialog" className="modal-box">
                  <div className={styles.headerModal_OPGov}>
                    <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                      ✕
                    </button>
                  </div>
                  <div className="px-4 ">
                    <p className="py-4 text-lg">
                      Optimism DAO, su ecosistema y la potenciación de LATAM
                      como región. Comprendemos que la gobernanza es una pieza
                      fundamental para impulsar esta misión y reconocemos el
                      arduo trabajo de sus Delegados; quienes votación tras
                      votación determinan cuál es la mejor dirección que debe
                      tomar el Optimism Collective.
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

              <dialog id="my_modal_23" className="modal">
                <form method="dialog" className="modal-box">
                  <div className={styles.headerModal_sofi}>
                    <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                      ✕
                    </button>
                  </div>
                  <div className="px-4 ">
                    <p className="py-4 text-lg">
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
                          href="https://comunidad.seedlatam.org"
                        >
                          <Image className="" alt="Logo" src={discord}></Image>
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

              <dialog id="my_modal_24" className="modal">
                <form method="dialog" className="modal-box">
                  <div className={styles.headerModal_arb}>
                    <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                      ✕
                    </button>
                  </div>
                  <div className="px-4 ">
                    <p className="py-4 text-lg">
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
                          href="https://comunidad.seedlatam.org"
                        >
                          <Image className="" alt="Logo" src={discord}></Image>
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
            </Swiper>{" "}
          </div>
          <div className="hidden md:block">
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
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
                    ></Image>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  className="cursor-pointer"
                  onClick={() => window.my_modal_23.showModal()}
                >
                  <div className="">
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
            </Swiper>

            <div id="modals" className="md:max-w-[100vw] max-w">
              <dialog id="my_modal_22" className="modal">
                <form method="dialog" className="modal-box">
                  <div className={styles.headerModal_OPGov}>
                    <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                      ✕
                    </button>
                  </div>
                  <div className="px-4 ">
                    <p className="py-4 text-lg">
                      Optimism DAO, su ecosistema y la potenciación de LATAM
                      como región. Comprendemos que la gobernanza es una pieza
                      fundamental para impulsar esta misión y reconocemos el
                      arduo trabajo de sus Delegados; quienes votación tras
                      votación determinan cuál es la mejor dirección que debe
                      tomar el Optimism Collective.
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

              <dialog id="my_modal_23" className="modal">
                <form method="dialog" className="modal-box">
                  <div className={styles.headerModal_sofi}>
                    <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                      ✕
                    </button>
                  </div>
                  <div className="px-4 ">
                    <p className="py-4 text-lg">
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
                          href="https://comunidad.seedlatam.org"
                        >
                          <Image className="" alt="Logo" src={discord}></Image>
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

              <dialog id="my_modal_24" className="modal">
                <form method="dialog" className="modal-box">
                  <div className={styles.headerModal_arb}>
                    <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                      ✕
                    </button>
                  </div>
                  <div className="px-4 ">
                    <p className="py-4 text-lg">
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
                          href="https://comunidad.seedlatam.org"
                        >
                          <Image className="" alt="Logo" src={discord}></Image>
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
        </div>
      </div>
    </div>
  );
}
