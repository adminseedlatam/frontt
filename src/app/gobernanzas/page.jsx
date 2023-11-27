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
import webWhite from "../assets/icons/web-white.svg";
import governanza from "../assets/img/gobernanza/gobernanza.png";
import iconVision from "../assets/icons/icon-nuestravision.svg";
import iconGobModAbierto from "../assets/icons/icon-GobModAbierto.svg";

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
        <h1 className={styles.h2}>Our focus on governance</h1>

        {/* 2 secciones NUESTRA VISION + GOBERNANZA MODELO ABIERTO */}
        <div className="pl-[5vw] ">
          <div className=" flex flex-wrap gap-4 ">
            <div className="pr-[79.75px]">
              <div className=" ">
                <div className="flex bg-[#323232] min-w-[340px] md:min-w-[526px] rounded-[7px] p-[16px] ">
                  <div className="min-w-[100px]">
                    <Image
                      width={100}
                      height={100}
                      src={iconVision}
                      alt="logo"
                    ></Image>
                  </div>
                  <div className=" pl-[1rem] ">
                    <div className="text-white text-[32px] mb-2 font-bold leading-9 tracking-tighter">
                      Our vision
                    </div>

                    <h4 className="tracking-tighter text-[16px] leading-5 mb-4">Why participate in this phenomenon?</h4>
                    <a
                      className="text-fuchsia-500 font-bold leading-4 tracking-tighter"
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

            {/* MODAL 1 */}

            <dialog id="my_modal_1" className="modal">
              <form
                method="dialog"
                className="modal-box bg-bg-card max-w-xl lg:max-w-5xl "
              >
                <div className={styles.headerModal_nuestravision}>
                  <h1 className=" pl-10 sm:pl-20 font-extrabold text-4xl sm:text-5xl">Our vision</h1>

                  <h4 className=" pl-10 sm:pl-20 pt-2 sm:pt-5 tracking-tighter sm:text-[24px] leading-8 font-normal">
                    Why participate in this phenomenon?
                  </h4>
                </div>

                <div className="px-7 lg:px-6 ">
                  <p className=" lg:pt-5 text-2xl text-white">
                    We advocate for a critical and objective perspective in our
                    role as representatives, considering the potential impact of
                    decisions made in the Latin American community on users,
                    developers, protocols, local institutions, and all those
                    interested in the Web3 ecosystem. <br />
                    <br /> Participation in Web3 governance is crucial when it
                    comes to shaping the future of blockchains and protocols
                    aimed at providing an alternative to the traditional
                    financial system and disrupting other areas. Over the years,
                    our region has rarely played a leading role in
                    decision-making. However, this is changing, and SEED Latam
                    is part of this transformation, actively participating in
                    decision-making and contributing our vision and insight
                  </p>
                </div>

                {/* BOTONES */}

                <div className="flex justify-end min-w-[400px] ">
                  {" "}
                  {/* BOTONES DESKTOP*/}
                  <div className="flex md:justify-end gap-2">
                    {/* boton Volver DESKTOP*/}
                    <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
                      <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}> Return </button>
                      </form>
                    </div>

                    {/* boton PLAT ACTIVAS */}
                    <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas/#PlataformasActivas">
                        <button className={styles3.button5}>
                          View active platforms
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* BOTONES RESPONSIVE */}
                  <div className="flex pr-5 md:justify-end gap-0 sm:gap-2 ">
                    {/* BOTON RETURN */}
                    <div className="md:hidden pl-6 pb-6 text-9xl  md:w-max-90vw md:justify-end">
                      <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}> Return </button>
                      </form>
                    </div>

                    {/* boton PLAT ACTIVAS */}
                    <div className="md:hidden pr-4 text-9xl  md:w-max-90vw md:justify-end">
                      <Link href="/gobernanzas/#PlataformasActivas">
                        <button className={styles3.button6}>
                          View active platforms
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
                <div className="flex bg-[#323232] min-w-[340px] md:min-w-[526px] rounded-lg p-[16px] ">
                  <div className="min-w-[100px]">
                    <Image
                      width={100}
                      height={100}
                      src={iconGobModAbierto}
                      alt="logo"
                    ></Image>
                  </div>

                  <div className=" pl-[1rem] ">
                    <div className="text-white text-[32px] mb-2 font-bold leading-9 tracking-tighter">
                      Open model
                    </div>

                    <h4 className="tracking-tighter text-[16px] leading-5 mb-4">Why is our governance model open?</h4>
                    <a
                      className="text-fuchsia-500 font-bold leading-4 tracking-tighter"
                      target="_blank"
                      rel="noopener"
                      onClick={() => window.my_modal_2.showModal()}
                    >
                      Learn more
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
                  <h1 className="pl-10 sm:pl-20 font-extrabold text-4xl sm:text-5xl">Open model</h1>

                  <h4 className="pl-10 sm:pl-20 pt-2 sm:pt-5 tracking-tighter sm:text-[24px] leading-8 font-normal">
                    Why is our governance model open?
                  </h4>
                </div>

                <div className="px-7 lg:px-8 ">
                  <p className="lg:pt-5 text-2xl text-white">
                    We host open and community governance calls, inviting the
                    public to participate. During these calls, we discuss ideas
                    and the implications of decisions. The delegation will vote
                    on what was decided during the call, maintaining a
                    transparent and inclusive governance process. <br />
                    <br /> At SEED Latam, we acknowledge individual scalability
                    differences and, therefore, promote teams represented by
                    &quot;The Delegate&quot; with a support and backup team to
                    enrich the discussion. Every decision is made with a
                    multidisciplinary perspective that considers its positive
                    impact on the region, encompassing the end user, developers,
                    capital efficiency, and more.
                  </p>
                </div>

                {/* BOTONES */}

                <div className="flex  justify-end min-w-[400px]">
                  {" "}
                  {/* BOTON RETURN */}
                  <div className="flex md:justify-end gap-2">
                    {/* boton DESKTOP*/}
                    <div className="hidden md:block text-9xl md:w-max-90vw md:justify-end">
                      <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}> Return </button>
                      </form>
                    </div>

                    {/* boton RESPONSIVE */}

                    {/* PROXIMAMENTE */}
                    <div className="hidden md:block pl-8 pb-5 text-9xl md:w-max-90vw md:justify-end">
                      <Link href="https://youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI&si=gPAXdJ77mwefllQ8">
                        {/* poner noopener para que se abra otra pestaña */}
                        <button className={styles3.button5}>
                          View YouTube calls
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* BOTONES RESPONSIVE */}
                  <div className="flex pr-5 md:justify-end sm:gap-2 ">
                    {/* Boton VOLVER */}
                    <div className="md:hidden pl-6 pb-5 text-9xl  md:w-max-90vw md:justify-end">
                    <form method="dialog" className="modal-backdrop">
                        <button className={styles3.button4}>Return</button>
                        </form>
                    </div>

                    {/* BOTON LLLAMADAS YOUTUBE */}
                    <div className="md:hidden pr-4 text-9xl  md:w-max-90vw md:justify-end">
                      <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5zrVMkC6DVt9frsX4bxQtGI">
                        <button className={styles3.button5}>
                          View YouTube calls
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
        <h1 className="pl-[5vw] pt-20 text-white text-[40px] mb-2 font-bold leading-9 tracking-tighter">Our initiatives: </h1>

        <div className="pl-[5vw] pt-24 flex flex-wrap  gap-4">
          <Link
            href="/gobernanzas/#PlataformasActivas"
            className=" w-80 h-16 bg-fuchsia-500 rounded-md mr-12 text-justify"
          >
            <h1 className="font-bold text-2xl leading-7 tracking-tighter justify-center items-center flex pt-4 ">Active platforms </h1>
          </Link>

          <Link
            href="/gobernanzas/#GovernanceDay"
            className=" w-80 h-16 bg-fuchsia-500 rounded-md mr-12 text-justify"
          >
            <h1 className="font-bold text-2xl leading-7 tracking-tighter justify-center items-center flex pt-4">Governance Day </h1>
          </Link>

          <Link
            href="/gobernanzas/#AulaAbierta"
            className=" w-80 h-16 bg-fuchsia-500 rounded-md mr-12 text-justify mb-20"
          >
            <h1 className="font-bold text-2xl leading-7 tracking-tighter justify-center items-center flex pt-4">Aula Abierta </h1>
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
          <h3 className={styles.h3}>Currently active platforms</h3>
          <p className={styles.p}>
            Delegate platforms are teams that actively engage in discussions and
            voting for a specific protocol, representing the interests of a
            particular organization or community
          </p>
        </div>

        {/* columna 2 */}
        {/*  slider gobernanzas DESKTOP*/}
        <div
          id="GobernanzasPage"
          className="hidden xl:block py-[50px] xl:pt-[46px]  "
        >
          <div className="md:w-[880px]  lg:pl-2 xl:pt-16">
            <Swiper
              initialSlide="2"
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
                Optimism DAO, its ecosystem, and the empowerment of LATAM as a
                region. We understand that governance is a fundamental key in
                driving this mission, and we recognize the hard work of its
                Delegates, who, vote after vote, determine the best direction
                for the Optimism Collective.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://seedlatam.notion.site/Optimism-delegation-SEED-Latam-8e01a8c1679d4b988e6330f99e8241fb"
                  >
                    <Image className="" alt="Logo" src={webWhite}></Image>
                  </Link>
                </div>
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
                Sovereign Finance AVC was founded in March 2023 as part of the
                Governance division of SEED Latam, an educational community
                focused on Web3 originating in Latam. Our community has been
                active since 2020 and actively participates in various
                governance initiatives.{" "}
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://governance-seedlatam.notion.site/Sovereign-Finance-AVC-6790b6b2fa5544cbacc8d02da5c3b5e3"
                  >
                    <Image className="" alt="Logo" src={webWhite}></Image>
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
                The Arbitrum DAO is responsible for the governance and
                maintenance of the Arbitrum protocol, including the
                implementation of improvements, decision-making, and resource
                allocation.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://seedlatam.notion.site/ARIBITRUM-942d873d6f3a47bc97323b31d2d6b944"
                  >
                    <Image className="" alt="Logo" src={webWhite}></Image>
                  </Link>
                </div>
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
                The StarkNet DAO has the mission of supporting the StarkNet
                project, an L2 network on Ethereum. This governance will promote
                the development of StarkNet, network adoption, and community
                participation.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://seedlatam.notion.site/STARKNET-6c7931c8200e493185ee0e0404898268"
                  >
                    <Image className="" alt="Logo" src={webWhite}></Image>
                  </Link>
                </div>
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
                Our delegation in Connext DAO is our most recent participation.
                Active since September 2023, it aims to determine improvements
                for Connext.
              </p>
              <div className="flex md:justify-end gap-2 ">
                <div>
                  {" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://seedlatam.notion.site/Connext-16972cf657914a76b277cbe27d205a82"
                  >
                    <Image className="" alt="Logo" src={webWhite}></Image>
                  </Link>
                </div>
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

        <div className="justify-end  max-w-[482px] text-right pt-5 md:pr-14 pr-3 md:pb-40">
          <h3 className={styles.h3}>Governance Day</h3>
          <p className={styles.p2}>
            The first in-person event focused on Web3 governance.
          </p>

          {/* boton DESKTOP*/}

          <div className="hidden md:block justify-center max-w-full">
            <Link href="/gobernanzas/govday">
              <button className={styles3.button2}>
                Learn more about Governance Day
              </button>
            </Link>
          </div>

          {/* boton RESPONSIVE */}
       
          <div className="md:hidden pb-8 pl-5 text-center ">
            <Link href="/gobernanzas/govday">
              <button className={styles3.button3}>
                Learn more about Governance Day
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
            Open and online educational content exploring various topics and
            aimed at those looking to learn and train in subjects related to
            DAOs and governance, featuring experts and professionals from the
            ecosystem.{" "}
          </p>

          {/* boton DESKTOP */}
          <div className="hidden md:block text-right md:pt-8 md:w-max-90vw md:justify-start">
            <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa">
              <button className={styles3.button2}>Go to YouTube</button>
            </Link>
          </div>

          {/* boton RESPONSIVE */}
          <div className=" text-center pt-8 md:pt-8 md:w-max-90vw  md:hidden">
            <Link href="https://www.youtube.com/playlist?list=PLhTCvqIxiz5wxW4fe0-WSIJ7qVIo0vQWa">
              <button className={styles3.button3b}>Go to YouTube</button>
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
