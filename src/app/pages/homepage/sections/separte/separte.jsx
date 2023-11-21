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
import discordwhite from "../../../../assets/icons/discordwhite.svg";
import twitterwhite from "../../../../assets/icons/twitterwhite.svg";
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
      <div id="Separte" className="hidden xl:block py-[5vw]">
        <div className="px-[5vw] pt-[75px]">
          {" "}
          {/* Este agarra todo el swiper */}
          <div className=" pb-[75px]">
            <h3 className={styles.title}>Communities and SEED Latam</h3>
          </div>
          {/* este es el ultimo  */}
          <div className="flex  justify-between items-center pb-[50px]">
            <div>
              <div className="max-w-[336px] pb-[24px]">
                <h4 className={styles.h3}>Friendly communities</h4>
              </div>
              <div className="max-w-[336px] w-[90vw] ">
                <p className={styles.fontAlineadas}>
                  These are those that have emerged within the scope of SEED
                  Latam or have been founded by a core or hardcore member.
                </p>
              </div>
            </div>

            {/*  slider comunidad Desktop */}
            {/*   <div className=" max-w-[499px] w-auto w-[499px] "> */}
            <div className="w-[880px]">
              <Swiper
                initialSlide="1"
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
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div id="Separte" className="xl:hidden">
        <div className=" px-[5vw] pt-[75px]">
          <div className="pb-[28.1px]  xl:pb-[75px]">
            <h3 className={styles.title}>Communities and SEED Latam</h3>
          </div>
          <div className="flex  justify-between items-center xl:pb-[50px] flex-wrap">
            <div>
              <div className=" max-w-[336px] pb-[24px]">
                <h4 className={styles.h3}>Friendly communities</h4>
              </div>
              <div className="md:max-w-[60vw] lg:max-w-[336px] w-[90vw] ">
                <p className={styles.fontAlineadas}>
                  These are those that have emerged within the scope of SEED
                  Latam or have been founded by a core or hardcore member
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
      </div>

      {/* Modals */}
      <div id="modals">
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box bg-bg-card">
            <div className={styles.headerModal}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none  text-white absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="py-4 text-lg  text-white">
                It is a Spanish-speaking community dedicated to educating and
                onboarding users in the Web3 and crypto ecosystem, under the
                values of decentralization. Its main focus is on the DeFi
                ecosystem as a whole, including protocols, metrics, tokenomics,
                MEV, among others. For more information about DeFi Latam and how
                it is organized, click on the following link: defilatam.com.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discordwhite}></Image>
                  </Link>
                </div>

                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/DeFi_Latam"
                  >
                    <Image className="" alt="Logo" src={twitterwhite}></Image>
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
          <form method="dialog" className="modal-box bg-bg-card">
            <div className={styles.headerModal_l2}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute text-white right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="py-4 text-lg text-white">
                It is a Spanish-speaking community dedicated to the study of
                scalability solutions on Ethereum. Its main focus is related to
                L2, Optimistic Rollup, Zk rollup, Ethereum, Validiums, DA, among
                others.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discordwhite}></Image>
                  </Link>
                </div>

                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/Layer2es"
                  >
                    <Image className="" alt="Logo" src={twitterwhite}></Image>
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
          <form method="dialog" className="modal-box bg-bg-card">
            <div className={styles.headerModal_opes}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none text-black absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4 ">
              <p className="py-4 text-lg text-white">
                It is a community focused on providing information about the
                Optimism ecosystem. Its main focus is on protocol updates and
                documentation translation.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://comunidad.seedlatam.org"
                  >
                    <Image className="" alt="Logo" src={discordwhite}></Image>
                  </Link>
                </div>

                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/OptimismESP"
                  >
                    <Image className="" alt="Logo" src={twitterwhite}></Image>
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
          <form method="dialog" className="modal-box bg-bg-card">
            <div className={styles.headerModal_buidlers}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4">
              <p className="py-4 text-lg text-white">
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
                    <Image className="" alt="Logo" src={discordwhite}></Image>
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
          <form method="dialog" className="modal-box bg-bg-card">
            <div className={styles.headerModal_descilatam}>
              <button className="btn btn-sm btn-circle btn-ghost border-none outline-none text-white absolute right-2 top-2">
                ✕
              </button>
            </div>
            <div className="px-4">
              <p className="py-4 text-lg text-white">
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
                    <Image className="" alt="Logo" src={discordwhite}></Image>
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
                    <Image className="" alt="Logo" src={twitterwhite}></Image>
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
                    <Image className="" alt="Logo" src={discordwhite}></Image>
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
                    <Image className="" alt="Logo" src={twitterwhite}></Image>
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
                    <Image className="" alt="Logo" src={discordwhite}></Image>
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
                    <Image className="" alt="Logo" src={discordwhite}></Image>
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
                    <Image className="" alt="Logo" src={discordwhite}></Image>
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
