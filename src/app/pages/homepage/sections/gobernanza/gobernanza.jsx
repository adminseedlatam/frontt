"use client";

import Image from "next/image";
import Link from "next/link";
import styles3 from "./gobernanza.module.css";
import styles from "./separte.module.css";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SwiperCore, { Pagination, Navigation } from "swiper";

// Images
import Maker from "../../../../assets/img/gobernanza/gob-maker.png";
import Arbitrum from "../../../../../app/assets/img/gobernanza/gob-arbitrum.png";
import Optimism from "../../../../../app/assets/img/gobernanza/gob-op.png";
import discord from "../../../../assets/icons/discordwhite.svg";
import instagram from "../../../../assets/icons/instagram.svg";
import twitter from "../../../../assets/icons/twitterwhite.svg";

// Swiper

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow } from "swiper";

// carrousel

SwiperCore.use([Pagination, Navigation]);

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
    <div id="Gobernanza" className="pt-[4vw]">
      <div className={styles3.gobernanza}>
        <div className="px-[5vw] pb-[76px]">
          <h2 className={styles3.h2}>Gobernanza en web3</h2>
          <h3 className={styles3.h3}>
            Una nueva forma de entender la participación comunitaria
          </h3>
          <p className={styles3.p}>
            La gobernanza web3 es el conjunto de procesos que se utilizan para
            decidir el funcionamiento de blockchains y protocolos
            descentralizados. Estos procesos ocurren off-chain por medio de
            discusiones en foros y comunidades online y on-chain a la hora de
            votar mediante blockchain.
          </p>
          <div className="flex flex-wrap lg:justify-start md:justify-center">
            <div className="max-w-[973px]  max-lg:max-w-[90vw] py-[50px] lg:hidden">
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
                className="mySwiperGobernanzaHome lg:hidden"
              >
                <SwiperSlide>
                  <a
                    className="cursor-pointer"
                    onClick={() => window.my_modal_22.showModal()}
                  >
                    <div>
                      <Image
                        width={502}
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
                        width={502}
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
                    <div className="">
                      <Image
                        width={502}
                        height={331}
                        src={Arbitrum}
                        alt="logo"
                      ></Image>
                    </div>
                  </a>
                </SwiperSlide>
                
              </Swiper>
            </div>
          </div>

          <div className={styles3.buttonContainer}>
            <Link href="/gobernanzas">
              <button className={styles3.button2}>
                Ver más sobre gobernanza
              </button>
            </Link>
          </div>
        </div>
      </div>

                {/* MODALS */}
      <div id="modals">

        {/* OPTIMISM */}
        <dialog id="my_modal_22" className="modal">
          <form method="dialog" className="modal-box bg-bg-card">
            <div className={styles.headerModal_OPGov}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="pb-4 text-lg text-white">
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
          <form method="dialog" className="modal-box bg-bg-card ">
            <div className={styles.headerModal_sofi}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4">
              <p className="pb-4 text-lg text-white">
                Sovereign Finance AVC fue fundada en marzo de 2023 como parte
                del área de Gobernanza de SEED Latam, una comunidad educativa
                enfocada en Web3 nacida en Latam. Nuestra comunidad ha estado
                activa desde 2020 y participamos activamente en múltiples
                iniciativas de gobernanza.{" "}
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
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_24" className="modal">
          <form method="dialog" className="modal-box bg-bg-card ">
            <div className={styles.headerModal_arb}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="pb-4 text-lg text-white">
                La Arbitrum DAO se encarga de la gobernanza y el mantenimiento
                del protocolo Arbitrum, incluyendo la implementación de mejoras,
                la toma de decisiones y la asignación de recursos.
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
      </div>
    </div>
  );
}
