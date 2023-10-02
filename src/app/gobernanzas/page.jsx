"use client";

import Image from "next/image";
import Link from "next/link";
//Imagenes
import Maker from "../assets/img/gobernanza/gob-maker.png";
import Arbitrum from "../assets/img/gobernanza/gob-arbitrum.png";
import Optimism from "../assets/img/gobernanza/gob-op.png";
import Starknet from "../assets/img/gobernanza/gob-starknet.png";
import Connext from "../assets/img/gobernanza/gob-connext.png";
import discord from "../assets/icons/discordwhite.svg";
import twitter from "../assets/icons/twitterwhite.svg";
import govday from "../assets/img/gobernanza/GOVERNANCEDAY.png";
import web from "../assets/icons/web.svg";
import governanza from "../assets/img/gobernanza/gobernanza.png";
import iconVision from "../assets/icons/icon-nuestravision.svg";
import iconGobModAbierto from "../assets/icons/icon-GobModAbierto.svg"



import styles from "./gobernanzas.module.css";
import styles3 from "./gobernanzas.module.css";

// Swiper
import { useRef } from "react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomePage() {
  const swiperRef = useRef(null);

  return (
    <div className="justify-between max-md:pt-[100px] pt-[60px] pb-[50px] min-h-screen">
      {/* ENFOQUE GOBERNANZAS */}
      <div
        className="bg-[url('../assets/img/gobernanza/gobernanza.png')] w-screen bg-cover pr-3 pt-28 justify-center items-center min-h-screen 
        "
      >
        {/* TITULO */}
        <h1 className={styles.h1}>Nuestro enfoque en gobernanzas</h1>

        {/* 2 secciones NUESTRA VISION + GOBERNANZA MODELO ABIERTO */}
        <div className="pl-16 lg:pl-48">
          <div className=" flex flex-wrap gap-4 ">
            <div className="pr-[79.75px]">
              <div className=" ">
                <div className="flex bg-[#323232] min-w-[526px] rounded-[7px] p-[16px] ">
                  <div>
                    <Image
                      width={100}
                      height={100}
                      src={iconVision} 
                      alt="logo"
                    ></Image>
                  </div>
                  <div className=" pl-[1rem] ">
                    <div className="text-white text-[20px] font-bold leading-9">
                      Nuestra visión
                    </div>

                    <h4>¿Porque participar en este fenónmeno?</h4>
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

            {/* MODAL 1 */}

            <dialog id="my_modal_1" className="modal">
              <form
                method="dialog"
                className="modal-box bg-bg-card max-w-xl lg:max-w-5xl "
              >
                <div className={styles.headerModal_nuestravision}>
                  <h1 className="pl-20 font-extrabold text-5xl">
                    Nuestra visión
                  </h1>

                  <h4 className="pl-20 font-normal text-2xl">
                    ¿Porque participar en este fenónmeno?
                  </h4>
                </div>

                <div className="px-7 lg:px-6 ">
                  <p className="lg:pt-5 text-2xl text-white">
                    Abogamos por una mirada crítica y objetiva, desde nuestro
                    rol como representantes y tenemos en cuenta el impacto que
                    pueden tener las decisiones tomadas en la comunidad de
                    Latinoamérica sobre los usuarios, desarrolladores,
                    protocolos, instituciones locales y todos aquellos que
                    tengan interés en el ecosistema Web3.
                    <br />
                    <br />
                    La participación en gobernanzas de Web3 es clave a la hora
                    de decidir el futuro de las blockchains y protocolos que
                    buscan construir una alternativa al sistema financiero
                    tradicional y la disrupción en otras áreas. A lo largo de
                    los años, nuestra región casi nunca ha sido protagonista en
                    la toma de decisiones. Pero esto está cambiando, y desde
                    SEED Latam somos parte del cambio siendo partícipes de la
                    toma de decisiones y contribuir con nuestra visión y
                    percepción.
                  </p>
                </div>

                {/* BOTONES */}

                <div className="flex justify-end ">
                  {" "}
                  {/* BOTONES DESKTOP*/}
                  <div className="flex md:justify-end">
                    {/* boton Volver DESKTOP*/}
                    <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
                      <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}> Volver </button>
                      </form>
                    </div>

                    {/* boton PLAT ACTIVAS */}
                    <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas/#PlataformasActivas">
                        <button className={styles3.button5}>
                          Ver platafomas activas
                        </button>
                      </Link>
                    </div>

                  </div>
                  {/* BOTONES RESPONSIVE */}
                  <div className="flex md:justify-end gap-2 ">
                    {/* BOTON PLAT ACTIVAS */}
                    <div className="md:hidden pl-6 pb-5 text-9xl md:w-max-90vw md:justify-end">
                      <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}> Volver </button>
                      </form>
                    </div>

                    {/* boton PLAT ACTIVAS */}
                    <div className="md:hidden text-9xl md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas/#PlataformasActivas">
                        <button className={styles3.button5}>
                          Ver platafomas activas
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
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
                      src={iconGobModAbierto}
                      alt="logo"
                    ></Image>
                  </div>

                  <div className=" pl-[1rem] ">
                    <div className="text-white text-[20px] font-bold leading-9">
                      Gobernanza modelo abierto
                    </div>

                    <h4>¿Porqué nuestro modelo de gobernanza es abierto?</h4>
                    <a
                      className="text-fuchsia-500 font-normal leading-9"
                      target="_blank"
                      rel="noopener"
                      onClick={() => window.my_modal_2.showModal()}
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL 2 */}

            <dialog id="my_modal_2" className="modal">
              <form
                method="dialog"
                className="modal-box bg-bg-card max-w-xl lg:max-w-4xl "
              >
                <div className={styles.headerModal_nuestravision}>
                  <h1 className="pl-20 font-extrabold text-5xl">
                    Gobernanza modelo abierto
                  </h1>

                  <h4 className="pl-20 font-normal text-2xl">
                    ¿Porqué nuestro modelo de gobernanza es abierto?
                  </h4>
                </div>

                <div className="px-7 lg:px-8 ">
                  <p className="lg:pt-5 text-2xl text-white">
                    Tenemos llamadas de gobernanza comunitarias y abiertas al
                    público donde invitamos a la comunidad a participar.
                    Debatimos ideas y las implicancias de la decisión. La
                    delegación votará lo que se decidió en la llamada,
                    manteniendo una gobernanza transparente e inclusiva.
                    <br />
                    <br />
                    En SEED Latam, reconocemos las diferencias en escalabilidad
                    individual y, por ello, impulsamos equipos representados por
                    &quot;El Delegado&quot; con un equipo de soporte y respaldo
                    para enriquecer el debate. Cada decisión se toma
                    considerando su impacto positivo en la región con una visión
                    multidisciplinaria que abarque al usuario final,
                    desarrolladores, eficiencia de capital, etc .
                  </p>
                </div>

                {/* BOTONES */}

                <div className="flex  justify-end ">
                  {" "}
                  {/* BOTON VOLVER */}
                  <div className="flex md:justify-end gap-2">
                    {/* boton DESKTOP*/}
                    <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
                      <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}> Volver </button>
                      </form>
                    </div>

                    {/* boton RESPONSIVE */}

                    {/* PROXIMAMENTE */}
                    <div className="hidden md:block pl-8 pb-5 text-9xl md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas/#PlataformasActivas">
                        {/*  cambiar esto desp */}
                        <button className={styles3.button5}>
                          Ver llamadas YouTube
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* BOTONES RESPONSIVE */}
                  <div className="flex md:justify-end gap-2 ">
                    {/* Boton VOLVER */}
                    <div className="md:hidden pl-6 pb-5 text-9xl md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas">
                        <button className={styles3.button4}>Volver</button>
                      </Link>
                    </div>

                    {/* BOTON LLLAMADAS YOUTUBE */}
                    <div className="md:hidden pr-4 text-9xl md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas">
                        <button className={styles3.button5}>
                          Ver llamadas YouTube
                        </button>
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

        {/* Segundo TITULO */}
        <h1 className={styles.h5}>Nuestras iniciativas: </h1>

        <div className="pl-16 xl:pl-20 pt-24 xl:flex xl:flex-wrap ">
          <Link
            href="/gobernanzas/#PlataformasActivas"
            className=" w-80 h-16 bg-fuchsia-500 rounded-md mr-12 text-justify"
          >
            <h1 className={styles.h6}>Plataformas activas </h1>
          </Link>

          <Link
            href="/gobernanzas/#GovernanceDay"
            className=" w-80 h-16 bg-fuchsia-500 rounded-md mr-12 text-justify"
          >
            <h1 className={styles.h6}>Governance Day </h1>
          </Link>

          <Link
            href="/gobernanzas/#AulaAbierta"
            className=" w-80 h-16 bg-fuchsia-500 rounded-md mr-12 text-justify"
          >
            <h1 className={styles.h6}>Aula Abierta </h1>
          </Link>
        </div>
      </div>

      {/* PLATAFORMAS ACTIVAS ACTUALMENTE- Desktop */}

      <div
        id="PlataformasActivas"
        className="px-[5vw]  xl:flex grid-cols-2 justify-normal xl:justify-between items-center xl:text-left pt-[130px] max-md:pt-[3rem] "
      >
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
                región. Comprendemos que la gobernanza es una pieza fundamental
                para impulsar esta misión y reconocemos el arduo trabajo de sus
                Delegados; quienes votación tras votación determinan cuál es la
                mejor dirección que debe tomar el Optimism Collective.
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
                StarkNet DAO tiene como misión respaldar el proyecto StarkNet,
                una red l2 en Ethereum. Esta governanza promoverá el desarrollo
                de StarkNet, la adopción de la red y la participación de la
                comunidad.
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
                Nuestra delegación en Connext DAO es nuestra participación más
                reciente. En actividad a partir septiembre de 2023, busca
                determinar mejoras para Connext.
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
      <div
        id="GovernanceDay"
        className="px-[5vw] min-h-max pr-3 xl:flex grid-cols-2 justify-normal xl:justify-between items-center pt-[130px] max-md:pt-[3rem] "
      >
        <div>
          {/* Video de youtube */}
          <div className="xl:pr-2">
            <iframe
              className="lg:left-0 aspect-video pt-6 mt-10 mx-auto h-48 sm:h-64 md:mt-0 md:h-72 lg:h-80 xl:h-96"
              src="https://www.youtube.com/embed/OjtMlpi_MjA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

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
      <div
        id="AulaAbierta"
        className="px-[5vw] justify-center xl:flex grid-cols-2 md:justify-normal xl:justify-between items-center pt-[130px] max-md:pt-[3rem] "
      >
        <div className="max-w-[482px] text-left">
          <h3 className={styles.h3}>Aula abierta </h3>
          <p className={styles.p}>
            Contenido educativo online y abierto explorando diversos temas y
            orientado a quienes quieren formarse y capacitarse en temas
            relacionados con DAOs y gobernanza con referentes y profesionales
            del ecosistema{" "}
          </p>

          {/* boton DESKTOP */}
          <div className="text-right md:pt-8 md:w-max-90vw md:flex md:justify-start">
            <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa">
              <button className={styles3.button2}>Ir a Youtube</button>
            </Link>
          </div>
        </div>

        <div>
          {/* Video de youtube */}
          <div className="xl:pr-2">
            <iframe
              className="lg:left-0 aspect-video pt-6 mt-10 mx-auto h-48 sm:h-64 md:mt-0 md:h-72 lg:h-80 xl:h-96"
              src="https://www.youtube.com/embed/4PFgOI1cNnw?si=nMXkqKNOOyat8_4e"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    /* -------------------------------------------- */
  );
}
