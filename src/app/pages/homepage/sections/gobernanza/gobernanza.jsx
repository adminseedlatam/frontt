"use client";

import Image from "next/image";
import Link from "next/link";
import styles3 from "./gobernanza.module.css";
import styles from "./separte.module.css";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SwiperCore, { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Images

import temporal from "../../../../assets/img/gobernanza/temporal.png"


// carrousel

SwiperCore.use([Pagination, Navigation]);

export default function HomePage() {
  const swiperRef = useRef(null);

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

          <div className="justify-center max-w-full">
            <Link href="/gobernanzas">
              <button className={styles3.button2}>
                Ver más sobre gobernanza
              </button>
            </Link>
          </div>
        </div>

        <Image className="max-w-lg md:max-w-full  md:min-w-min pl-2 lg:pt-32 xl:pt-20 md:pl-16 md:pb-40" alt="Logo" src={temporal}></Image>

      </div>

    </div>
  );
}
